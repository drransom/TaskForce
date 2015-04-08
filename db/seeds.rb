# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



emails = ["luke", "leia", "darthvader"].map { |email| email + "@starwars.com" }
locations = ["Tatooine", "Tatooine", "Coruscant"]
starships = ["Starship", "Starship", "Battle Station"]
descriptions = ["The First New Jedi", "The Real Hero", "Evil Incarnate"]

emails.length.times do |i|
  email = emails[i]
  location = locations[i]
  vehicle = starships[i]
  description = descriptions[i]
  user = User.create(email: email,
                     password: "password",
                     tasker: true,
                     location: location,
                     vehicle: vehicle,
                     description: description)
end

t1 = Task.create(owner_id: 1, title: "Destroy Death Star",
              description: "Create a chain reaction", location: "Death Star",
              vehicle: "Starship", completed: "neither")
