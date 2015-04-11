"use strict"

TaskForce.Views.TaskRating = Backbone.CompositeView.extend({

  events: {
    'click button.upvote' : 'upvote',
    'click button.downvote' : 'downvote'
  },

  template: JST['task_rating'],

  initialize: function (options) {
    this.$el.append('#')
    this.task = options.task;
    this.listenTo(this.model, 'change set', this.render)
    this.ratingStatus = "started"
  },

  render: function () {
    var content = this.template( {task: this.model});
    this.$el.html(content);
    if (!this.model.isNew()) {
      $('#taskerDetail').modal('show');
    }
    return this;
  },

  upvote: function (event) {
    event.preventDefault();
    this.model.rated = true;
  },

  submit: function (event) {
    event.preventDefault();
    this.task.set( { tasker_id: this.model.get('id') });
    this.task.save ({}, {
      success: function () {
        alert("successfully created task");
        Backbone.history.navigate('', {trigger: true});
      },
      error: function () {
        alert("something went wrong")
      }
    })
  },
});
