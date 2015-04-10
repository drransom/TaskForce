# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



luke = User.create({
        name: 'Luke S.',
        email: "luke@starwars.com",
        location: "Tatooine",
        vehicle: "Starship",
        description: "The First New Jedi",
        num_completed: 54,
        price: 38,
        profile_url: "http://img3.wikia.nocookie.net/__cb20091030151422/starwars/images/d/d9/Luke-rotjpromo.jpg",
        tasker: true,
        password: 'password'
        })

leia = User.create({
        name: 'Leia O.',
        email: "leia@starwars.com",
        location: 'Tatooine',
        vehicle: "Starship",
        description: "The Real Hero",
        num_completed: Random.rand(100)+1,
        price: 50,
        profile_url: "http://img1.wikia.nocookie.net/__cb20080506155343/starwars/images/8/89/Leia_endorpromo02.jpg",
        tasker: true,
        password: 'password'
        })

darth_vader = User.create({
        name: "Darth V.",
        email: "darthvader@starwars.com",
        location: "Coruscant",
        vehicle: "Battle Station",
        description: "Evil Incarnate",
        num_completed: Random.rand(100) +1,
        price: 45,
        profile_url: 'http://img2.wikia.nocookie.net/__cb20130621191704/starwars/images/thumb/7/76/Vader%27s_revelation.png/1000px-Vader%27s_revelation.png',
        tasker: true,
        password: 'password'
        })

guest = User.create({
        email: "guest@starwars.com",
        name: "Guest",
        tasker: false,
        password: 'password'
        })

yoda = User.create({
        email: "yoda@starwars.com",
        name: "Yoda",
        location: "Dagobah",
        vehicle: "none",
        description: "A wise master",
        num_completed: Random.rand(100) + 1,
        price: 25,
        profile_url: 'http://www.empireonline.com/images/features/100greatestcharacters/photos/25.jpg'
        tasker: true,
        password: 'password'
  })

emails = ["luke", "leia", "darthvader"].map { |email| email + "@starwars.com" }
locations = ["Tatooine", "Tatooine", "Coruscant"]
starships = ["Starship", "Starship", "Battle Station"]
descriptions = ["The First New Jedi", "The Real Hero", "Evil Incarnate"]

t1 = Task.create(owner_id: 4, title: "Destroy Death Star",
              description: "Create a chain reaction", location: "Death Star",
              vehicle: "Starship", completed: "neither"
              category: "military", tasker_id: 1
              )

t2 = Task.create(owner_id: 4, title: "Move X-wing", description:
                 "My X-wing is in a swamp and needs to be removed."
                 location: "Dagobah", vehicle: "none", completed: "neither",
                 category: "move", tasker_id: 5)
