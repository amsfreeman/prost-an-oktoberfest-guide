from flask import request, make_response, session
from flask_restful import Resource
import ipdb

from config import app, db, api

from models import User

class Users(Resource):
    def post(self):
        data = request.get_json()

        try:
            user = User(
                username = data['username'],
                email = data['email'],
                age = data['age'],
                password_hash = data['password'], 
            )
        except ValueError as e:
            response = make_response({'errors': 'MUNICH'}, 400)
            return response

        db.session.add(user)
        db.session.commit()

        session['user.id'] = user.id

        response = make_response(user.to_dict(), 201)
        return response

api.add_resource(Users, '/users')

#LOGIN the User
@app.route('/login', methods=["POST"])
def login():
    data = request.get_json()

    try:
        user = User.query.filter_by(username=data['username']).first()
        if user.authenticate(data['password']):
            session['user.id'] = user.id
            response = make_response(user.to_dict(), 200)
            return response
        else:
            response = make_response({"errors": "Password incorrect"}, 401)
            return response
    except:
        response = make_response({"errors": "Username incorrect"}, 401)
        return response

#KEEP the User logged in
@app.route('/authorized', methods=["GET"])
def authorize():
    try:
        user = User.query.filter_by(id=session.get('user.id')).first()
        response = make_response(user.to_dict(), 200)
        return response
    except:
        response = make_response({"Error": "User not found."}, 404)
        return response
    
#LOGOUT the User
@app.route('/logout', methods=["DELETE"])
def logout():
    session['user.id']=None
    response = make_response({}, 204)
    return response

if __name__ == '__main__':
    app.run(port=5555, debug=True)