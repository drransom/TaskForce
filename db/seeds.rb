# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create(email: "luke@starwars.com", password: "password")
u2 = User.create(email: "leia@starwars.com", password: "password")
u3 = User.create(email: "darthvader@starwars.com", password: "password")

t1 = Task.create(owner_id: 1, title: "Destroy Death Star",
              description: "Create a chain reaction", location: "Death Star",
              vehicle: "x-wing", completed: "neither")
