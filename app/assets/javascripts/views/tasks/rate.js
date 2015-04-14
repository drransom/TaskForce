"use strict"

TaskForce.Views.TaskRating = TaskForce.Views.Modal.extend({

  continueInitializing: function (options) {
    this.task = options.task;
    this.tasker = options.tasker
    this.voteFlag = "";
    this.confirmationText = "";
    this.addEvents();
    this.listenTo(this.task, 'change set', this.render);
    this.listenTo(this.tasker, 'change set', this.render);
  },

  addEvents: function () {
    this.events['click button.upvote'] = 'upvote';
    this.events['click button.downvote'] = 'downvote';
    this.events['click button.confirm-delete'] = 'confirmDelete'
  },

  render: function () {
    var content = this.template({
                                 task: this.task,
                                 tasker: this.tasker,
                                 flag: this.voteFlag,
                                 confirmationText: this.confirmationText
                                 });
    var protoRender = TaskForce.Views.Modal.prototype.render;
    protoRender.call(this, content);
  },

  upvote: function () {
    this.confirmationText = "We're glad you were satisfied with " +
      this.taskerFirstName() + "'s performance!"
    this.voteFlag = "upvote"
    this.task.save( { rating: 1 }, {
      patch: true,
      wait: true,
      success: function () {
      }.bind(this)
    });
  },

  downvote: function () {
    if (this.tasker.get('alive')) {
      this.voteFlag = "downvote";
      this.task.trigger('set');
    } else {
      this.confirmationText = "We are sorry you were disappointed with " +
        this.taskerFirstName() + "'s performance. They have been removed.";
        this.voteFlag = "confirmation";
      this.task.save({ rating: -1 }, { patch: true, wait: true });
    }
  },

  confirmDelete: function () {
    this.confirmationText = this.taskerFirstName() + " has failed for " +
    "the last time."
    this.voteFlag = "dead"
    this.tasker.save( { alive: false }, {
      patch: true,
      wait: true,
      success: function () {
        this.task.save({ rating: -1 }, { patch: true, wait: true })
      }.bind(this)
    })
  },

  taskerFirstName: function () {
    return this.tasker.get('name').split(' ')[0];
  },


});
