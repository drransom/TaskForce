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
  location: "Tatooine",
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
  location: "Endor",
  vehicle: "Starship",
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
  vehicle: "Starship",
  profile_url: 'http://img2.wikia.nocookie.net/__cb20111205022230/starwars/images/0/0d/Storm-CHRON.jpg',
  tasker: false,
  password: 'password'
  })

gmt = User.create({
  email: "gmt@starwars.com",
  name: "Wilhuff T.",
  location: "Hoth",
  vehicle: "Battle Station",
  description: "Fear will keep the local systems in line. Fear of this battle station.",
  num_completed: Random.rand(100) + 1,
  price: 58,
  profile_url: "http://img1.wikia.nocookie.net/__cb20100620213033/starwars/images/thumb/c/c1/Tarkininfobox.jpg/400px-Tarkininfobox.jpg",
  tasker: true,
  password: 'password'
  })

palpatine = User.create({
  email: "palpatine@starwars.com",
  name: "Darth S.",
  location: "Endor",
  vehicle: "Battle Station",
  description: "I'm looking forward to completing your training. In time you will call me master.",
  num_completed: Random.rand(100) + 1,
  price: 1000,
  profile_url: "http://img1.wikia.nocookie.net/__cb20130620100935/starwars/images/thumb/d/d8/Emperor_Sidious.png/400px-Emperor_Sidious.png",
  tasker: true,
  password: 'password'
  })

c3P0 = User.create({
  email: "c3PO@starwars.com",
  name: "C-3PO",
  location: "Tatooine",
  vehicle: "none",
  description: "I am fluent in over six million forms of communication.",
  num_completed: Random.rand(100) + 1,
  price: 15,
  profile_url: "http://img2.wikia.nocookie.net/__cb20131005124036/starwars/images/thumb/5/51/C-3PO_EP3.png/400px-C-3PO_EP3.png",
  tasker: true,
  password: 'password'
  })

r2D2 = User.create({
  email: "r2d2@starwars.com",
  name: "R2-D2",
  location: "Endor",
  vehicle: "Starship",
  description: "I am the most competent being in the galaxy.",
  num_completed: Random.rand(100) + 1,
  price: 72,
  profile_url: "http://img2.wikia.nocookie.net/__cb20090524204255/starwars/images/1/1a/R2d2.jpg",
  tasker: true,
  password: 'password'
  })

guest = User.create({
  email: "guest@starwars.com",
  name: "Guest",
  tasker: false,
  password: 'password'
  })

#comments on Luke
c1 = Comment.create({
  commentable_id: luke.id,
  commentable_type: "User",
  comment_author: yoda,
  body: "He may seem too young to begin the training, but he did an " +
        "excellent job."
  })

c2 = Comment.create({
  commentable_id: leia.id,
  commentable_type: "User",
  comment_author: stormtrooper,
  body: "Leia is far more precise with a blaster than I could ever hope to " +
        "be. Highly recommended and I will definitely hire her again."
  })

  c3 = Comment.create({
    commentable_id: palpatine.id,
    commentable_type: "User",
    comment_author: obi_wan,
    body: "Darth seemed to foresee my needs before I even knew what they " +
          "were. Well done!"
    })

  c4 = Comment.create({
    commentable_id: r2D2.id,
    commentable_type: "User",
    comment_author: darth_vader,
    body: "R2 was great. I would definitely hire him again. He took " +
          "charge and got the job done in half the time I had estimated."
    })


t1 = Task.create({
  owner_id: User.last.id,
  title: "Destroy Death Star",
  description: "Create a chain reaction",
  location: "Endor",
  vehicle: "Starship",
  category: "military",
  tasker_id: 1,
  price: User.find(1).price,
  time_slot: Random.rand(4),
  task_date: Date.today - 1
  })

t2 = Task.create({
 owner_id: User.last.id,
 title: "Move X-wing",
 description: "My X-wing is in a swamp and needs to be removed.",
 location: "Dagobah",
 vehicle: "none",
 category: "moving",
 tasker_id: 5,
 price: User.find(5).price,
 task_date: Date.today() - 3,
 time_slot: Random.rand(4)
 })
