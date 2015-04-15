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
          alive: task.get('tasker_alive')
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

  planetProfilePic: {
    "Endor": "http://img4.wikia.nocookie.net/__cb20130731183030/starwars/images/1/1f/Endor.jpg",
    "Hoth": "http://img2.wikia.nocookie.net/__cb20071019040631/starwars/images/d/d1/Hoth.jpg",
    "Tatooine": "http://img2.wikia.nocookie.net/__cb20131019121937/starwars/images/b/b0/Tatooine_TPM.png",
    "Coruscant": "http://img4.wikia.nocookie.net/__cb20100115192302/starwars/images/1/17/Coruscant-AoTCW.jpg"
  }
}
