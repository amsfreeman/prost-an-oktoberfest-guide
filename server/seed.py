# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app, db

# Add models imports here
from models import User, Tent

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Clearing database...")
        User.query.delete()
        Tent.query.delete()

        print("Starting seed...")

        print("Seeding users...")
        #Seed Users
        u1 = User(username = 'amsfreeman', email= 'amy@mail.com', age= 30, password_hash='munich')
        u2 = User(username = 'jesspapa', email='jess@mail.com', age = 35, password_hash='berlin')
        u3 = User(username = 'bowski', email='jon@mail.com', age= 37, password_hash='cologne')
        u4 = User(username = 'markc', email='mark@mail.com', age=30, password_hash='stuttgart')
        u5 = User(username = 'niamh', email='niamh@mail.com', age=33, password_hash='dresden')
        u6 = User(username = 'katharina', email='katharina@mail.com', age=40, password_hash='ulm')
        u7 = User(username = 'mkhobrecht', email='mk@mail.com', age=28, password_hash='leipzig')

        users = [u1, u2, u3, u4, u5 ,u6, u7]
        db.session.add_all(users)
        db.session.commit()

        print("Seeding tents...")
        t1 = Tent(name = 'Armbrustschützenzelt', capacity = '7460', first_year = '1895', beer_sold = 'Paulaner', image="https://www.armbrustschuetzenzelt.de/wp-content/uploads/2017/03/DSC_3621.jpg", details = "Our tents name has a lengthy history extending back to 1895, when the guild of crossbowmen “Winzerer Fähndl” constructed the first tent on the “Wiesn” in order to host shooters and visitors and to conduct championships.")

        tents = [t1]
        db.session.add_all(tents)
        db.session.commit()

        print("Done seeding!")