"use strict"

TaskForce.Views.TaskRating = TaskForce.Views.Modal.extend({

  continueInitializing: function (options) {
    this.task = options.task;
    this.tasker = options.tasker
    this.voteFlag = "";
    this.confirmationText = "";
    this.addEvents();
  },

  addEvents: function () {
    this.events['click button.upvote'] = 'upvote';
    this.events['click button.downvote'] = 'downvote';
    this.events['click button.confirm-delete'] = 'confirmDelete'
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
