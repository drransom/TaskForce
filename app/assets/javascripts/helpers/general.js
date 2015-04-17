TaskForce.Helpers = {

  guarantee: "100% satisfaction is guaranteed for all Taskers.",

  createTaskersFromTasks: function(tasks, taskers) {
    tasks.each(function(task) {
      var taskerId = task.get('tasker_id');
      if (taskerId && !(taskers.get(taskerId))) {
        var tasker = new TaskForce.Models.User({
          id: task.get('tasker_id'),
          name: task.get('tasker_name'),
          profile_url: task.get('tasker_profile_url'),
          description: task.get('tasker_description'),
          alive: task.get('tasker_alive'),
          location: task.get('tasker_location'),
          vehicle: task.get('tasker_vehicle'),
          price: task.get('tasker_price')
        })
        taskers.add(tasker)
      }
    })
    return taskers
  },

  taskerRating: function (tasker) {
    var rating;
    if (tasker.get('alive')) {
      rating = "<a class='a-rating rating-tasks' " +
      "href='javascript:void(0)' data-toggle='tooltip' data-placement='left' " +
      "data-delay='100' + title='" + this.guarantee +
      "'>100% Positive</a>";
    } else {
      rating = "No longer with us";
    }
    return rating
  },

  constructCommentsFromUser: function (user, collection) {
    var attributes, id;
    _(user.get('comments')).each( function (comment) {
      attributes = {}
      var existingComment = collection.find(id);
      _(comment).each(function (value, attribute) {
        attributes[attribute] = value;
      })
      if (existingComment) {
        existingComment.set(attributes)
      } else {
        collection.add(new TaskForce.Models.Comment(attributes))
      }
    })
  },

  hireButton: function (user) {
    return "<button type='button' class='modal-noclose btn btn-default " +
      "btn-large btn-std-color select-me'>" +
      "Hire Me! <span class='lighter-text'>$" + user.get('price') +
      "/hr</button>"
  },

  profilePic: {
    "Endor": "http://img4.wikia.nocookie.net/__cb20130731183030/starwars/images/1/1f/Endor.jpg",
    "Hoth": "http://img2.wikia.nocookie.net/__cb20071019040631/starwars/images/d/d1/Hoth.jpg",
    "Tatooine": "http://img2.wikia.nocookie.net/__cb20131019121937/starwars/images/b/b0/Tatooine_TPM.png",
    "Coruscant": "http://img4.wikia.nocookie.net/__cb20100115192302/starwars/images/1/17/Coruscant-AoTCW.jpg",
    "Battle Station": 'http://img2.wikia.nocookie.net/__cb20130221005853/starwars/images/thumb/9/9d/DSI_hdapproach.png/400px-DSI_hdapproach.png',
    "Starship": 'http://img2.wikia.nocookie.net/__cb20070507224007/starwars/images/thumb/d/dc/Melfal.jpg/400px-Melfal.jpg',
    "no vehicle": 'https://starwarsanon.files.wordpress.com/2014/02/going-to-jabbas-palace.gif'
  }
}
