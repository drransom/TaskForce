"use strict"

TaskForce.Views.TaskRating = Backbone.CompositeView.extend({

  events: {
    'click button.upvote' : 'upvote',
    'click button.downvote' : 'downvote',
    'click button.confirm-delete' : 'confirmDownvote',
  },

  template: JST['tasks/rate'],

  initialize: function (options) {
    this.taskers = options.taskers;
    this.listenTo(this.model, 'change set', this.render)
    this.voteFlag = "";
    this.confirmationText = "";
  },

  render: function () {
    if (!this.model.isNew()) {
      $('#task-rate').modal('hide');
      var content = this.template( {task: this.model, flag: this.voteFlag,
        confirmationText: this.confirmationText });
      this.$el.html(content);
      $('#task-rate').modal('show');
      this.voteFlag = "";
    }
    return this;
  },

  upvote: function () {
    this.confirmationText = "We're glad you were satisfied with " +
      this.taskerFirstName() + "'s performance!"
    this.voteFlag = "upvote"
    this.model.save( { rating: 1 }, {
      patch: true,
      wait: true,
      success: function () {
      }.bind(this)
    });
  },

  downvote: function () {
    this.voteFlag = "downvote";
    this.model.trigger('set');
  },

  confirmDownvote: function () {
    var tasker = this.taskers.get( {id: this.model.get('tasker_id') } )
    this.confirmationText = this.taskerFirstName() + " has failed for " +
    "the last time."
    this.voteFlag = "dead"
    tasker.save( { alive: false }, {
      patch: true,
      wait: true,
      success: function () {
        this.model.save({ rating: -1 }, { patch: true, wait: true })
      }.bind(this)
    })
  },

  taskerFirstName: function () {
    return this.model.get('tasker_name').split(' ')[0];
  }
});
