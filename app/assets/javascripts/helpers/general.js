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
  }
}
