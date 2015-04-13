"use strict"

TaskForce.Views.MiniTask = Backbone.View.extend({

  initialize: function (options) {
    this.task = options.task;
    this.tasker = options.tasker;
    this.listenTo(this.task, 'set change', this.render);
    this.listenTo(this.tasker, 'set change', this.render);
  },

  template: JST['tasks/mini_task'],
  rateTemplate: JST['tasks/rate'],

  events: {
    'click button.mark-complete' : 'markComplete',
    'click button.rate-tasker' : 'rateTasker',
    'click a.tasker-profile' : 'showTasker',
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
    var rating = new TaskForce.Views.TaskRating( {
      templateOptions: { tasker: this.tasker, task: this.task },
      tasker: this.tasker,
      task: this.task,
      template: this.rateTemplate,
    })
    rating.render();
  },

  showTasker: function () {
    $('#main').prepend('<section class="tasker-detail"></section>');
    var taskerDetails = new TaskForce.Views.TaskerDetail( { model: this.tasker, task: this.task });
    taskerDetails.setElement('.tasker-detail')
    taskerDetails.render();
  }
});
