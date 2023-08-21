from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property, hybrid_method
from sqlalchemy.orm import validates


from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    age = db.Column(db.String)

    _password_hash = db.Column(db.String)

    serialize_rules = ('-_password_hash', '-visits.user')

    @property 
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, new_password_string):
        byte_object = new_password_string.encode('utf-8')
        encrypted_hash_object = bcrypt.generate_password_hash(byte_object)
        hash_object_as_string = encrypted_hash_object.decode('utf-8')
        self._password_hash = hash_object_as_string
    
    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))
    
    visits = db.relationship('Visit', back_populates='user', cascade = 'all, delete-orphan')
    tents = association_proxy('visits', 'tent')

class Tent(db.Model, SerializerMixin):
    __tablename__ = 'tents'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    capacity = db.Column(db.Integer)
    first_year = db.Column(db.Integer)
    beer_sold = db.Column(db.Integer)
    image = db.Column(db.String)
    details = db.Column(db.String)

    visits = db.relationship('Visit', back_populates='tent', cascade = 'all, delete-orphan')
    users = association_proxy('visits', 'user')

    serialize_rules = ('-visits.tent',)

class Visit(db.Model, SerializerMixin):
    __tablename__ = 'visits'

    id = db.Column(db.Integer, primary_key=True)
    visit_rating = db.Column(db.Integer)
    date = db.Column(db.Date)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    visit_id = db.Column(db.Integer, db.ForeignKey('visits.id'))

    user = db.relationship('User', back_populates= 'visits')
    tent = db.relationship('Tent', back_populates='visits')

    serialize_rules = ("-user.visits", "-tent.visits")


