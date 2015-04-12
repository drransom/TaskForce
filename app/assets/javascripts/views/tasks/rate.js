"use strict"

TaskForce.Views.TaskRating = Backbone.CompositeView.extend({

  events: {
    'click button.upvote' : 'upvote',
    'click button.downvote' : 'downvote',
    'click button.confirm-downvote' : 'confirmDownvote',
  },

  template: JST['tasks/rate'],

  initialize: function () {
    this.listenTo(this.model, 'change set', this.render)
  },

  render: function () {
    if (!this.model.isNew()) {
      var content = this.template( {task: this.model});
      this.$el.html(content);
      $('#task-rate').modal('show');
    }
    return this;
  },

});
