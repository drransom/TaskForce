"use strict";

TaskForce.Views.TaskIndex = Backbone.CompositeView.extend({

  initialize: function (options) {
    this.$el.append('<section class="container task-area"></section>');

    this.tasks = new TaskForce.Collections.Tasks();
    this.taskers = new TaskForce.Collections.Users();
    this.indexTasker = new TaskForce.Models.User();

    this.tasks.fetch({
      success: function () {
        TaskForce.Helpers.createTaskersFromTasks(this.tasks, this.taskers)
        this.createMiniTaskSubviews();
        this.render();
      }.bind(this)
    });
  },

  render: function () {
    this.$el.find('.task-area').empty();
    this.attachSubviews();
    this.prependHeading();
    this.$el.find('[data-toggle="tooltip"]').tooltip()
    return this;
  },

  createMiniTaskSubviews: function () {
    var tasker, tasker, subview, i;
    i = 0;
    this.tasks.each( function(task) {
      tasker = this.taskers.get(task.get('tasker_id'))
      subview = new TaskForce.Views.MiniTask({
        task: task,
        tasker: tasker,
        indexTasker: this.indexTasker,
        offset: (i % 3 !== 0)
      })
      this.addSubview('.task-area', subview)
      i += 1
    }.bind(this))
  },

  prependHeading: function () {
    if (this.tasks.findWhere({description: "Create a chain reaction"})) {
      this.$el.find('.task-area').prepend("<h3 class='task-heading'>" +
        "My Tasks</h3><h4 class='task-heading'>We've created some sample "+
        "tasks for you, or click \"New Task\" to create a new task.</h4>")
    } else {
      this.$el.find('.task-area').prepend("<h3 class='task-heading'>" +
        "My Tasks</h3>")
    }
  }
});
