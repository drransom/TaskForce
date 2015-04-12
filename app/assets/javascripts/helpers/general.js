TaskForce.Helpers = {

  guarantee: "100% satisfaction is guaranteed for all Taskers.",

  createTaskersFromTasks: function(tasks, taskers) {
    tasks.each(function(task) {
      var taskerId = task.get('tasker_id');
      if (taskerId && !(taskers.find(taskerId))) {
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
  }
}
