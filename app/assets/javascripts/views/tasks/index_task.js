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
    this.attachSubviews();
    return this;
  },

  createMiniTaskSubviews: function () {
    var tasker, tasker, subview;
    this.tasks.each( function(task) {
      tasker = this.taskers.get(task.get('tasker_id'))
      subview = new TaskForce.Views.MiniTask({
        task: task,
        tasker: tasker,
        indexTasker: this.indexTasker
      })
      this.addSubview('.task-area', subview)
    }.bind(this))
  }
});
