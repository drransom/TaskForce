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
  description: "Corteous and professional. I used to bullseye two-meter womp rats in my T-16 back home.",
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
  description: "I do diplomatic missions and undiplomatic ones as well",
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
  description: "With our combined strength, we can end this destructive conflict and bring order to the galaxy.",
  num_completed: Random.rand(100) +1,
  price: 45,
  profile_url: 'http://img2.wikia.nocookie.net/__cb20130621191704/starwars/images/thumb/7/76/Vader%27s_revelation.png/1000px-Vader%27s_revelation.png',
  tasker: true,
  password: 'password'
  })

han_solo = User.create({
  name: "Han S.",
  email: "hansolo@starwars.com",
  location: "Coruscant",
  vehicle: "Starship",
  description: "I have the fastest ship in the galaxy. I can make the Kessel Run in less than twelve parsecs.",
  num_completed: Random.rand(100) + 1,
  price: 250,
  profile_url: "http://www.starwars7news.com/wp-content/uploads/2014/05/star-wars-harrison-ford-is-han-solo1.jpg",
  tasker: true,
  password: 'password'
  })

obi_wan = User.create({
  name: "Ben K.",
  email: "obiwan@starwars.com",
  location: "Tattoine",
  vehicle: "none",
  description: "If you want someone more powerful than you can possibly imagine, I'm your man.",
  num_completed: Random.rand(100) + 1,
  price: 50,
  profile_url: "http://img3.wikia.nocookie.net/__cb20111115052816/starwars/images/4/4e/ObiWanHS-SWE.jpg",
  tasker: true,
  password: 'password',
  })

yoda = User.create({
  email: "yoda@starwars.com",
  name: "Yoda",
  location: "Coruscant",
  vehicle: "none",
  description: "I do. I do not do not. There is no try.",
  num_completed: Random.rand(100) + 1,
  price: 25,
  profile_url: 'http://www.empireonline.com/images/features/100greatestcharacters/photos/25.jpg',
  tasker: true,
  password: 'password'
  })

stormtrooper = User.create({
  email: "stormtrooper@starwars.com",
  name: "Anthony S.",
  location: "Hoth",
  vehicle: "none",
  profile_url: 'http://img2.wikia.nocookie.net/__cb20111205022230/starwars/images/0/0d/Storm-CHRON.jpg',
  tasker: false,
  password: 'password'
  })

guest = User.create({
  email: "guest@starwars.com",
  name: "Guest",
  tasker: false,
  password: 'password'
  })


t1 = Task.create({
  owner_id: User.last.id,
  title: "Destroy Death Star",
  description: "Create a chain reaction",
  location: "Death Star",
  vehicle: "Starship",
  category: "military",
  tasker_id: 1,
  price: User.find(1).price
  })

t2 = Task.create({
 owner_id: User.last.id,
 title: "Move X-wing",
 description: "My X-wing is in a swamp and needs to be removed.",
 location: "Dagobah",
 vehicle: "none",
 category: "moving",
 tasker_id: 5,
 price: User.find(5).price
 })
