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



if __name__ == '__main__':
    app.run(port=5555, debug=True)