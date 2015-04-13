"use strict"

TaskForce.Views.MiniTask = Backbone.View.extend({

  initialize: function (options) {
    this.task = options.task;
    this.tasker = options.tasker;
    this.listenTo(this.task, 'set change', this.render);
    this.listenTo(this.tasker, 'set change', this.render);
  },

  template: JST['tasks/mini_task'],
  rateTemplate: JST['modal_test'],

  events: {
    'click button.mark-complete' : 'markComplete',
    'click button.rate-tasker' : 'rateTasker',
  },

  render: function () {
    var content = this.template({ model: this.task, tasker: this.tasker });
    this.$el.html(content);
    return this;
  },

  markComplete: function (event) {
    this.task.save( {user_completed: true}, {wait: true} );
  },

  rateTasker: function () {
    debugger
    var rating = new TaskForce.Views.TaskRating( {
      displayOptions: { tasker: this.tasker, task: this.task },
      tasker: this.tasker,
      task: this.task,
      template: this.rateTemplate,
    })
    rating.render();
  }
});
