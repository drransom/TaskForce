"use strict"

TaskForce.Views.MiniTask = Backbone.View.extend({

  initialize: function (options) {
    this.task = options.task;
    this.tasker = options.tasker;
    this.listenTo(this.task, 'set change', this.render);
    this.listenTo(this.tasker, 'set change', this.render);
  },

  template: JST['tasks/mini-task'],
  rateTemplate: JST['modal_test'],

  events: {
    'click button .mark-complete' : 'markComplete',
    'click button .rate-tasker' : 'rateTasker',
  },

  render: function () {
    var content = this.template({ task: this.task, tasker: this.tasker });
    this.$el.html(content);
    return this;
  },

  markComplete: function (event) {
    var id = $(event.currentTarget).data('id');
    var model = this.collection.get(id)
    model.save( {user_completed: true}, {wait: true} );
  },
});
