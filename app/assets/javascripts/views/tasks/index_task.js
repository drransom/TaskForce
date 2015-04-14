"use strict";

TaskForce.Views.TaskIndex = Backbone.CompositeView.extend({

  initialize: function (options) {
    $('body').prepend('<section class="tasker-profile-modal"></section>')
    this.$el.append('<section class="task-area container"></section>');

    this.tasks = new TaskForce.Collections.Tasks();
    this.taskers = new TaskForce.Collections.Users();
    this.indexTasker = new TaskForce.Models.User();
    this.taskerProfile = new TaskForce.Views.TaskerDetail({
      model: this.indexTasker,
      task: {},
      submit: false,
      el: $('.tasker-profile-modal')
    })

    this.addSubview('.tasker-profile-modal', this.taskerProfile)

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
