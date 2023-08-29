from flask import request, make_response, session
from flask_restful import Resource
from datetime import datetime
import ipdb

from config import app, db, api

from models import User, Tent, Visit

class Users(Resource):
    def post(self):
        data = request.get_json()
        try:
            user = User(
                username = data['username'],
                email = data['email'],
                age = int(data['age']),
                password_hash = data['password'], 
            )
        except ValueError as v_error:
            response = make_response({'errors': [str(v_error)]}, 422)
            return response

        db.session.add(user)
        db.session.commit()

        session['user.id'] = user.id

        response = make_response(user.to_dict(), 201)
        return response
api.add_resource(Users, '/users')

class TentById(Resource):
    def get(self, id):
        tent = Tent.query.filter_by(id=id).first()

        if tent:
            tent_dict = tent.to_dict()
            response = make_response(tent_dict, 200)
            return response
        else:
            response = make_response({'Error': 'Oktoberfest Tent not found.'}, 404)
            return response

api.add_resource(TentById, '/oktoberfest_tents/<int:id>')

class Visits(Resource):
    
    def post(self):
        data = request.get_json()
        try:
            date_string = data['date'],
            formatted_date = datetime.strptime(date_string[0], '%Y-%m-%d').date()
            new_visit = Visit(
                visit_rating = data['visit_rating'],
                date = formatted_date,
                user_id = data['user_id'],
                tent_id = data['tent_id'],
            )
        except ValueError as v_error:
            response = make_response({'Errors': [str(v_error)]}, 400)
            return response
        db.session.add(new_visit)
        db.session.commit()

        new_visit_dict = new_visit.to_dict()
        response = make_response(new_visit_dict, 201)
        return response
    
api.add_resource(Visits, '/oktoberfest_visits')

class VisitById(Resource):
    def patch(self, id):
        visit_by_id = Visit.query.filter_by(id=id).first()

        if not Visit:
            response = make_response({"Error": "Visit not found"}, 404)
            return response
        
        data = request.get_json()

        for attr, data[attr] in data.items():
            try: 
                if attr == 'date':
                    date_string = data['date'],
                    formatted_date = datetime.strptime(date_string[0], '%Y-%m-%d').date()
                    setattr(visit_by_id, attr, formatted_date)
                elif hasattr(visit_by_id, attr):
                    setattr(visit_by_id, attr, data[attr])
            except ValueError as v_error:
                response = make_response({'Error': [str(v_error)]}, 400)
        
        db.session.commit()

        visit_by_id_dict = visit_by_id.to_dict()

        response = make_response(visit_by_id_dict, 202)
        return response

    def delete(self, id):
        visit_to_delete = Visit.query.filter_by(id=id).first()

        if not Visit:
            response = make_response({"Error": "Visit not found"}, 404)
            return response
        
        db.session.delete(visit_to_delete)
        db.session.commit()

        response = make_response({}, 204)
        return response

api.add_resource(VisitById, '/oktoberfest_visits/<int:id>')

@app.route('/tents_and_visits')
def tents_and_visits():
    tents = [t.to_dict() for t in Tent.query.all()]
    visits = [v.to_dict() for v in Visit.query.all()]

    response = make_response({'tents': tents, 'visits': visits}, 200)
    return response


#LOGIN the User
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    try:
        user = User.query.filter_by(username=data['username']).first()
        if user.authenticate(data['password']):
            session['user.id'] = user.id
            response = make_response(user.to_dict(), 200)
            return response
        else:
            response = make_response({"errors": ["Password incorrect, please try again."]}, 422)
            return response
    except:
        response = make_response({"errors": ["Username incorrect, please try again."]}, 422)
        return response

#KEEP the User logged in
@app.route('/authorized', methods=["GET"])
def authorize():
    try:
        user = User.query.filter_by(id=session.get('user.id')).first()
        response = make_response(user.to_dict(), 200)
        return response
    except:
        response = make_response({}, 401)
        return response
    
#LOGOUT the User
@app.route('/logout', methods=["DELETE"])
def logout():
    session['user.id'] = None
    response = make_response('', 204)
    return response

if __name__ == '__main__':
    app.run(port=5555, debug=True)