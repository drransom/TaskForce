# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



emails = ["luke", "leia", "darthvader"].map { |email| email + "@starwars.com" }
locations = ["Tattoine", "Tattoine", "Coruscant"]
starships = ["Starship", "Starship", "Battle Station"]

emails.length.times do |i|
  email = emails[i]
  location = locations[i]
  starships = starships[i]
  user = User.create(email: email,
                     password: "password",
                     tasker: true,
                     location: location)
end

t1 = Task.create(owner_id: 1, title: "Destroy Death Star",
              description: "Create a chain reaction", location: "Death Star",
              vehicle: "Starship", completed: "neither")
