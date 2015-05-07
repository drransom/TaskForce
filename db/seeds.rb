
luke = User.create({
  name: 'Luke S.',
  email: "luke@starwars.com",
  location: "Tatooine",
  vehicle: "Starship",
  description: "Corteous and professional. I used to bullseye two-meter womp rats in my T-16 back home.",
  num_completed: 54,
  price: 38,
  profile_url: "http://elliot-c-reed-taskforce.s3.amazonaws.com/luke_profile-web.jpg",
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
  profile_url: "http://elliot-c-reed-taskforce.s3.amazonaws.com/leia_profile-web.jpg",
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
  profile_url: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/darthvader_profile-web.jpg',
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
  profile_url: "http://elliot-c-reed-taskforce.s3.amazonaws.com/hansolo_profile-web.jpg",
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
  profile_url: "http://elliot-c-reed-taskforce.s3.amazonaws.com/obiwan_profile-web.jpg",
  tasker: true,
  password: 'password',
  })

yoda = User.create({
  email: "yoda@starwars.com",
  name: "Yoda",
  location: "Coruscant",
  vehicle: "Starship",
  description: "Let me help you with all your heavy lifting needs!",
  num_completed: Random.rand(100) + 1,
  price: 25,
  profile_url: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/yoda_profile-web.jpg',
  tasker: true,
  password: 'password'
  })

gmt = User.create({
  email: "gmt@starwars.com",
  name: "Wilhuff T.",
  location: "Hoth",
  vehicle: "Battle Station",
  description: "Fear will keep the local systems in line. Fear of my battle station.",
  num_completed: Random.rand(100) + 1,
  price: 58,
  profile_url: "http://elliot-c-reed-taskforce.s3.amazonaws.com/gmt_profile-web.jpg",
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
  profile_url: "http://elliot-c-reed-taskforce.s3.amazonaws.com/palpatine_profile-web.jpg",
  tasker: true,
  password: 'password'
  })

c3PO = User.create({
  email: "c3PO@starwars.com",
  name: "C-3PO",
  location: "Tatooine",
  vehicle: "none",
  description: "I am fluent in over six million forms of communication.",
  num_completed: Random.rand(100) + 1,
  price: 15,
  profile_url: "http://elliot-c-reed-taskforce.s3.amazonaws.com/c3po_profile-web.jpg",
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
  profile_url: "http://elliot-c-reed-taskforce.s3.amazonaws.com/r2d2_profile-web.jpg",
  tasker: true,
  password: 'password'
  })

admiral_ackbar = User.create({
  email: "admiralackbar@starwars.com",
  name: "Glal A.",
  location: "Endor",
  vehicle: "Starship",
  description: "Enemies setting a trap for you? I've got your back!",
  num_completed: Random.rand(100) + 1,
  price: Random.rand(100) + 100,
  profile_url: "http://elliot-c-reed-taskforce.s3.amazonaws.com/ackbar_profile-web.jpg",
  tasker: true,
  password: 'password',
  })

lando = User.create ({
  email: "lando@starwars.com",
  name: "Lando C.",
  location: "Hoth",
  vehicle: "Starship",
  description: "I can handle all your long-term storage needs while you're moving.",
  num_completed: Random.rand(500) + 1,
  price: Random.rand(100) + 10,
  profile_url: "http://elliot-c-reed-taskforce.s3.amazonaws.com/lando_profile-web.jpg",
  tasker: true,
  password: 'password'
  })

boba_fett = User.create ({
  email: "bobafett@starwars.com",
  name: "Boba F.",
  location: "Coruscant",
  vehicle: "Starship",
  description: "I can disintegrate with the best of them.",
  num_completed: Random.rand(100) + 1,
  price: Random.rand(5000) + 3,
  profile_url: "http://elliot-c-reed-taskforce.s3.amazonaws.com/bobafett_profile-web.jpg",
  tasker: true,
  password: 'password'
  })
#nontaskers

stormtrooper = User.create({
  email: "stormtrooper@starwars.com",
  name: "Anthony S.",
  location: "Hoth",
  vehicle: "Starship",
  profile_url: 'http://elliot-c-reed-taskforce.s3.amazonaws.com/stormtrooper_profile-web.jpg',
  tasker: false,
  password: 'password'
  })

admiral_ozzel = User.create ({
  email: "ozzel@starwars.com",
  name: "Kendall O.",
  password: "password",
  profile_url: "http://elliot-c-reed-taskforce.s3.amazonaws.com/ozzel_profile-web.jpg",
  tasker: false
  })

wampa = User.create(
  email: "wampa@starwars.com",
  name: "Wampa",
  password: "password",
  profile_url: "http://elliot-c-reed-taskforce.s3.amazonaws.com/wampa_profile-web.jpg",
  tasker: false
  )

guest = User.create({
  email: "guest@starwars.com",
  name: "Guest",
  tasker: false,
  password: 'password'
  })

#comments on Luke
Comment.create({
  commentable_id: luke.id,
  commentable_type: "User",
  comment_author: yoda,
  body: "He may seem too young to begin the training, but he did an " +
        "excellent job."
  })


Comment.create({
  commentable_id: luke.id,
  commentable_type: "User",
  comment_author: stormtrooper,
  body: "Luke was far better than I could have imagined. Highly recommended!"
  })

Comment.create({
  commentable_id: luke.id,
  commentable_type: "User",
  comment_author: wampa,
  body: "It seemed like Luke was having trouble at first, but he really pulled through."
})

#comments on leia
Comment.create({
  commentable_id: leia.id,
  commentable_type: "User",
  comment_author: stormtrooper,
  body: "Leia is far more precise with a blaster than I could ever hope to " +
        "be. Highly recommended and I will definitely hire her again."
  })

Comment.create({
  commentable_id: leia.id,
  commentable_type: "User",
  comment_author: gmt,
  body: "Her determination and resilience were extremely impressive."
})

#comments on Darth Vader

Comment.create({
  commentable_id: darth_vader.id,
  commentable_type: "User",
  comment_author: admiral_ozzel,
  body: "Efficient and decisive."
})

Comment.create({
  commentable_id: darth_vader.id,
  commentable_type: "User",
  comment_author: leia,
  body: "Darth really knows what he is doing and really sees through people" +
    " who try to pull a fast one on him."
})

#comments on Palpatine
c3 = Comment.create({
  commentable_id: palpatine.id,
  commentable_type: "User",
  comment_author: obi_wan,
  body: "Darth seemed to foresee my needs before I even knew what they " +
        "were. Well done!"
  })

Comment.create({
  commentable_id: palpatine.id,
  commentable_type: "User",
  comment_author: r2D2,
  body: "Very methodocial and had everything planned from the get-go."
})

#comments on R2D2
Comment.create({
  commentable_id: r2D2.id,
  commentable_type: "User",
  comment_author: darth_vader,
  body: "R2 was great. I would definitely hire him again. He took " +
        "charge and got the job done in half the time I had estimated."
  })

Comment.create({
  commentable_id: r2D2.id,
  commentable_type: "User",
  comment_author: luke,
  body: "This droid is hard-working and will serve you well."
})

#comments on C3PO

Comment.create({
  commentable_id: c3PO.id,
  commentable_type: "User",
  comment_author: admiral_ozzel,
  body: "c3PO was great! Excellent communication throughout the entire process " +
    "and was a pleasure to talk to. Highly recommended!"
})

#comments on admiral ackbar

Comment.create({
  commentable_id: admiral_ackbar.id,
  commentable_type: "User",
  comment_author: lando,
  body: "My needs for this project changed very rapidly. Glal came up with " +
   "a new plan on the spot."
})

#comments on lando



#comments on boba fett

Comment.create({
  commentable_id: boba_fett.id,
  commentable_type: "User",
  comment_author: darth_vader,
  body: "I had a job that my company's staff couldn't handle, and Boba got " +
    "it done in no time. Five stars!"
})

Comment.create({
  commentable_id: boba_fett.id,
  commentable_type: "User",
  comment_author: c3PO,
  body: "So easy to work with, detail-oriented, and just an all-around " +
    "positive person."
})


t1 = Task.create({
  owner_id: User.last.id,
  title: "Destroy Death Star",
  description: "Create a chain reaction to destroy the Death Star.",
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

#comments on boba fett
