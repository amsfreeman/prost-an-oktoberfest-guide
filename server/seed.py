# Standard library imports
from random import randint, choice as rc
from datetime import date

# Local imports
from app import app, db

# Add models imports here
from models import User, Tent, Visit


if __name__ == '__main__':
    with app.app_context():
        print("Clearing database...")
        User.query.delete()
        Tent.query.delete()
        Visit.query.delete()

        print("Starting seed...")

        print("Seeding users...")
        #Seed Users
        u1 = User(username = 'amsfreeman', email= 'amy@mail.com', age= 30, password_hash='munich')
        u2 = User(username = 'jesspapa', email='jess@mail.com', age = 35, password_hash='berlin')
        u3 = User(username = 'bowski', email='jon@mail.com', age= 37, password_hash='cologne')
        u4 = User(username = 'markc', email='mark@mail.com', age=30, password_hash='stuttgart')
        u5 = User(username = 'niamh', email='niamh@mail.com', age=33, password_hash='dresden')
        u6 = User(username = 'mkhobrecht', email='mk@mail.com', age = 28, password_hash='leipzig')
        u7 = User(username = 'katzbird', email='marc@mail.com', age = 25, password_hash='vienna')

        users = [u1, u2, u3, u4, u5, u6, u7]
        db.session.add_all(users)
        db.session.commit()

        print("Seeding tents...")
        t1 = Tent(name = "Armbrustschützenzelt", capacity = "7460", first_year = "1895", beer_sold = "Paulaner", image = "./static/assets/images/tent1.jpg", details = "The crossbowmen's tent is usually quieter and a tad bit more traditional than other tents, offering above-average food and very newbie-friendly reservation offers.")
        t2 = Tent(name = "Augustiner-Festhalle", capacity= "8566", first_year= "1903", beer_sold = "Augustiner", image = "./static/assets/images/tent2.jpg", details="Munich's oldest brewery has the by far most traditional tent with wooden barrels, traditional music. Many regulars who worship it like a cult.")
        t3 = Tent(name = "Bräurosl", capacity = "8250", first_year = "1901", beer_sold = "Hacker-Pschorr", image = "./static/assets/images/tent3.jpg", details = "The Pschorr brewery's tent has a difficult reset behind it and still has to figure out what it is.")
        t4 = Tent(name = "Fischer-Vroni", capacity = "3872", first_year = "1904", beer_sold = "Augustiner", image = "./static/assets/images/tent4.jpg", details = 'One of the smallest of the large tents offers fish on a stick and beer from wooden barrels. The crowd is a little older; Popular gay second Monday.')
        t5 = Tent(name = "Hacker-Festzelt", capacity = "9378", first_year = "1989", beer_sold = "Hacker-Pschorr", image = "./static/assets/images/tent5.jpg", details = 'The "heaven of Bavarians" is one of the most popular tents. The very young crowd fills the central aisle already at noon. The Hacker tent has a very good menu.')
        t6 = Tent(name = "Hofbräu-Festzelt", capacity = "10040", first_year = "1952", beer_sold = "Staatliches Hofbräuhaus", image = "./static/assets/images/tent6.jpg", details = "Hofbräuhaus' tent is that popular with Anglo-Saxons that even is the only one with a standing room. The tent is more enjoyable than many locals think.")
        t7 = Tent(name = "Käfer Wiesnschänke", capacity = "3264", first_year = "1972", beer_sold = "Paulaner", image = "./static/assets/images/tent7.jpg", details = "The Käfer hut is the Oktoberfest sanctuary for those who consider themselves high-society. Walk-ins only accepted in the nice beer garden that is open late.")
        t8 = Tent(name = "Löwenbräu-Festzelt", capacity = "8478", first_year = "1910", beer_sold = "Löwenbräu", image = "./static/assets/images/tent8.jpg", details = "The Löwenbräu tent is extraordinarily popular with international tourists and limits itself almost exclusively to English-speaking pub music at night.")
        t9 = Tent(name = "Marstall-Festzelt", capacity = "4368", first_year = "2014", beer_sold = "Spaten", image = "./static/assets/images/tent9.jpg", details = "A quiet tent for champaign tourists with a strange menu and an unfriendly attitude towards walk-ins. Mostly older German tourists in twinkling dresses.")
        t10 = Tent(name = "Ochsenbraterei", capacity = "7550", first_year = "1881", beer_sold = "Spaten", image = "./static/assets/images/tent10.jpg", details = "Thanks to the famous oxen and traditional music, in the afternoon, the tent of the Spaten brewery is one of the most popular. The contemporary evenings are rather slow.")
        t11 = Tent(name = "Schottenhamel-Festhalle", capacity = "9030", first_year = "1867", beer_sold = "Spaten", image = "./static/assets/images/tent11.jpg", details = "Around the stage, you'll find the youngest crowd of the Oktoberfest. The band is known for its limited evening repertoire between charts and Mallorca-style music.")
        t12 = Tent(name = "Schützenfestzelt", capacity = "6500", first_year = "1926", beer_sold = "Löwenbräu", image = "./static/assets/images/tent12.jpg", details = "The Shooters' Tent is very popular with Munich's jeunesse dorée. Very lively atmosphere in the central aisle, a quieter champaign crowd in the stalls around and at the balcony.")
        t13 = Tent(name = "Weinzelt", capacity = "2535", first_year = "1984", beer_sold = "None, Wine instead of Oktoberfest Beer", image = "./static/assets/images/tent13.jpg", details = "No Oktoberfest beer, weißbier only before 9 pm. Pricy menu for a champagne crowd. No unreserved tables inside but some standing room around the bars.")
        t14 = Tent(name = "Winzerer Fähndl (Paulaner Festzelt)", capacity = "8398", first_year = "1895", beer_sold = "Paulaner", image = "./static/assets/images/tent14.jpg", details = "Paulaner's brewery tent is very quiet in the afternoon but mutates into Munich's largest Schlager club in the evening with unusual stage fog and lights.")

        tents = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14]
        db.session.add_all(tents)
        db.session.commit()

        print("Seeding visits...")

        v1 = Visit(visit_rating = 3, date = date(2017,9,17), user_id = 1, tent_id = 4)
        v2 = Visit(visit_rating = 4, date = date(2018,9,20), user_id = 2, tent_id = 3)
        v3 = Visit(visit_rating = 5, date = date(2017,9,21), user_id = 3, tent_id = 10)
        v4 = Visit(visit_rating = 4, date = date(2017,10,2), user_id = 4, tent_id = 12)
        v5 = Visit(visit_rating = 3, date = date(2017,10,3), user_id = 5, tent_id = 1)
        v6 = Visit(visit_rating = 2, date = date(2018,10,3), user_id = 6, tent_id = 7)
        v7 = Visit(visit_rating = 1, date = date(2019,10,1), user_id = 7, tent_id = 11)
        v8 = Visit(visit_rating = 3, date = date(2019,9,20), user_id = 1, tent_id = 5)
        v9 = Visit(visit_rating = 4, date = date(2017,9,20), user_id = 2, tent_id = 2)
        v10 = Visit(visit_rating = 5, date = date(2022,10,2), user_id = 3, tent_id = 6)
        v11 = Visit(visit_rating = 3, date = date(2022,9,18), user_id = 4, tent_id = 14)
        v12 = Visit(visit_rating = 4, date = date(2022,9,25), user_id = 5, tent_id = 9)
        v13 = Visit(visit_rating = 1, date = date(2022,9,27), user_id = 6, tent_id = 8)
        v14 = Visit(visit_rating = 4, date = date(2017,9,30), user_id = 7, tent_id = 13)
        v15 = Visit(visit_rating = 5, date = date(2018,10,3), user_id = 1, tent_id = 4)
        v16 = Visit(visit_rating = 3, date = date(2019,10,2), user_id = 2, tent_id = 4)
        v17 = Visit(visit_rating = 4, date = date(2018,9,24), user_id = 3, tent_id = 10)
        v18 = Visit(visit_rating = 3, date = date(2017,9,20), user_id = 4, tent_id = 12)
        v19 = Visit(visit_rating = 2, date = date(2017,9,21), user_id = 5, tent_id = 1)
        v20 = Visit(visit_rating = 1, date = date(2017,9,24), user_id = 6, tent_id = 7)
        v21 = Visit(visit_rating = 5, date = date(2017,9,28), user_id = 7, tent_id = 11)

        visits = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21]
        db.session.add_all(visits)
        db.session.commit()

        print("Done seeding!")