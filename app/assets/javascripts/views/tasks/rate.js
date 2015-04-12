"use strict"

TaskForce.Views.TaskRating = Backbone.CompositeView.extend({

  events: {
    'click button.upvote' : 'upvote',
    'click button.downvote' : 'downvote',
    'click button.confirm-delete' : 'confirmDownvote',
  },

  template: JST['tasks/rate'],

  initialize: function () {
    this.listenTo(this.model, 'change set', this.render)
    this.downvoteFlag = 0;
    this.confirmationText = "";
  },

  render: function () {
    debugger
    if (!this.model.isNew()) {
      $('#task-rate').modal('hide');
      var content = this.template( {task: this.model, offset: this.downvoteFlag,
        confirmationText: this.confirmationText });
      this.$el.html(content);
      $('#task-rate').modal('show');
    }
    this.downvoteFlag = 0;
    return this;
  },

  upvote: function () {
    this.confirmationText = "We're glad you were satisfied with " +
      this.taskerFirstName() + "'s performance!"
    this.model.save( { rating: 1 }, {
      patch: true,
      wait: true,
      success: function () {
      }.bind(this)
    });
  },

  downvote: function () {
    this.downvoteFlag = -1;
    this.model.trigger('set');
  },

  confirmDownvote: function () {
    var tasker = new TaskForce.Models.User( {id: this.model.get('tasker_id'), alive: false })
    debugger
    this.confirmationText = this.taskerFirstName() + " has failed for " +
    "the last time."
    tasker.save({ alive: false }, {
      patch: true,
      success: function () {
        debugger
        this.model.save( {rating: -1}, { patch: true, wait: true })
      }.bind(this)
    })
  },

  taskerFirstName: function () {
    return this.model.get('tasker_name').split(' ')[0];
  }
});
