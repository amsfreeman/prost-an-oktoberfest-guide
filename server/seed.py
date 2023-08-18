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
        u7 = User(username = 'mkhobrecht', email='mk@mail.com', age = 28, password_hash='leipzig')
        u8 = User(username = 'katzbird', email='marc@mail.com', age = 25, password_hash='vienna')

        users = [u1, u2, u3, u4, u5, u6, u7, u8]
        db.session.add_all(users)
        db.session.commit()

        print("Seeding tents...")
        t1 = Tent(name = "Armbrustschützenzelt", capacity = "7460", first_year = "1895", beer_sold = "Paulaner", image="https://www.armbrustschuetzenzelt.de/wp-content/uploads/2017/03/DSC_3621.jpg", details = "The crossbowmen's tent is usually quieter and a tad bit more traditional than other tents, offering above-average food and very newbie-friendly reservation offers.")
        t2 = Tent(name = "Augustiner-Festhalle", capacity= "8566", first_year= "1903", beer_sold = "Augustiner", image="https://oktoberfest-guide.com/site/assets/files/2014/augustinerzelt-fassade-blauer-himmel.1920x0.webp", details="Munich's oldest brewery has the by far most traditional tent with wooden barrels, traditional music. Many regulars who worship it like a cult.")
        t3 = Tent(name = "Bräurosl", capacity = "8250", first_year = "1901", beer_sold = "Hacker-Pschorr", image = 'https://oktoberfest-guide.com/site/assets/files/3161/braeurosl-fassade.1920x0.webp', details = "The Pschorr brewery's tent has a difficult reset behind it and still has to figure out what it is.")
        t4 = Tent(name = "Fischer-Vroni", capacity = "3872", first_year = "1904", beer_sold = "Augustiner", image = 'https://www.oktoberfest.de/site/assets/files/2107/fischer_vroni_fassade_sebastian_lehner-06828.-landscape.jpg', details = 'One of the smallest of the large tents offers fish on a stick and beer from wooden barrels. The crowd is a little older; Popular gay second Monday.')
        t5 = Tent(name = "Käfer Wiesnschänke", capacity = "3264", first_year = "1972", beer_sold = "Paulaner", image = "https://oktoberfest-guide.com/site/assets/files/2163/kafer-wiesn-strassenverkauf.1920x0.webp", details = "The Käfer hut is the Oktoberfest sanctuary for those who consider themselves high-society. Walk-ins only accepted in the nice beer garden that is open late.")
        t6 = Tent(name = "Hacker-Festzelt", capacity = "9378", first_year = "1989", beer_sold = "Hacker-Pschorr", image = "https://www.wiesnwirte.de/global/bilder/hacker-festzelt/hacker-festzelt.jpg?m=1543244914", details = 'The "heaven of Bavarians" is one of the most popular tents. The very young crowd fills the central aisle already at noon. The Hacker tent has a very good menu.')
        t7 = Tent(name = "Hofbräu-Festzelt", capacity = "10040", first_year = "1952", beer_sold = "Staatliches Hofbräuhaus", image = "https://oktoberfest-guide.com/site/assets/files/2162/hofbrauzelt-fassade-frontal.1920x0.jpg", details = "Hofbräuhaus' tent is that popular with Anglo-Saxons that even is the only one with a standing room. The tent is more enjoyable than many locals think.")
        t8 = Tent(name = "Löwenbräu-Festzelt", capacity = "8478", first_year = "1910", beer_sold = "Löwenbräu", image = "https://www.oktoberfest.de/site/assets/files/1477/loewenbraeu_fassade_sebastian_lehner-06928.jpg", details = "The Löwenbräu tent is extraordinarily popular with international tourists and limits itself almost exclusively to English-speaking pub music at night.")
        t9 = Tent(name = "Marstall-Festzelt", capacity = "4368", first_year = "2014", beer_sold = "Spaten", image = "https://oktoberfest-guide.com/site/assets/files/2165/marstall-festzelt-fassade-seitlich.1920x0.webp", details = "A quiet tent for champaign tourists with a strange menu and an unfriendly attitude towards walk-ins. Mostly older German tourists in twinkling dresses.")
        t10 = Tent(name = "Ochsenbraterei", capacity = "7550", first_year = "1881", beer_sold = "Spaten", image = "https://www.oktoberfest.de/site/assets/files/2242/ochsenbraterei_fassade_sebastian_lehner-06841.-landscape.jpg", details = "Thanks to the famous oxen and traditional music, in the afternoon, the tent of the Spaten brewery is one of the most popular. The contemporary evenings are rather slow.")
        t11 = Tent(name = "Schottenhamel-Festhalle", capacity = "9030", first_year = "1867", beer_sold = "Spaten", image = "https://tischreservierung-oktoberfest.de/wp-content/uploads/2017/01/DSC_0425_Schottenhamel_au%C3%9Fen-2-1208x800.jpg", details = "Around the stage, you'll find the youngest crowd of the Oktoberfest. The band is known for its limited evening repertoire between charts and Mallorca-style music.")
        t12 = Tent(name = "Schützenfestzelt", capacity = "6500", first_year = "1926", beer_sold = "Löwenbräu", image = "https://oktoberfest-guide.com/site/assets/files/2110/schutzenfestzelt-fassde-seitlich-bavaria-totale.1920x0.jpg", details = "The Shooters' Tent is very popular with Munich's jeunesse dorée. Very lively atmosphere in the central aisle, a quieter champaign crowd in the stalls around and at the balcony.")
        t13 = Tent(name = "Weinzelt", capacity = "2535", first_year = "1984", beer_sold = "None, Wine instead of Oktoberfest Beer", image = "https://www.oktoberfest.de/site/assets/files/1471/kufflers_weinzelt_fassade_sebastian_lehner-07421.-landscape.jpg", details = "No Oktoberfest beer, weißbier only before 9 pm. Pricy menu for a champagne crowd. No unreserved tables inside but some standing room around the bars.")
        t14 = Tent(name = "Winzerer Fähndl (Paulaner Festzelt)", capacity = "8398", first_year = "1895", beer_sold = "Paulaner", image = "https://paulanerfestzelt.de/wp-content/uploads/2019/11/paulaner-fest-tent.jpg", details = "Paulaner's brewery tent is very quiet in the afternoon but mutates into Munich's largest Schlager club in the evening with unusual stage fog and lights.")


        tents = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14]
        db.session.add_all(tents)
        db.session.commit()

        print("Done seeding!")