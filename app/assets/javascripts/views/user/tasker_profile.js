"use strict"

TaskForce.Views.TaskerProfile = TaskForce.Views.Modal.extend({

  continueInitializing: function (options) {
    if ($('section.taskforce-modal').length === 0) {
      $('body').prepend('<section class="taskforce-modal"></section>');
      this.setElement('.taskforce-modal');
    }
    this.task = options.task
    this.$el.append('<section class="tasker-detail"></section>');
    this.$el.append('<section class="tasker-comments"></section>');
    this.submitButton = options.submitButton || false;
    this.comments = new TaskForce.Collections.Comments();
    this.taskerDetail = new TaskForce.Views.TaskerDetail({
      model: this.model,
      task: this.task,
      submitButton: this.submitButton,
      parent: this });
    this.taskerComments = new TaskForce.Views.TaskerComments( {
      model: this.model,
      collection: this.comments } );

    this.addSubview('.tasker-detail', this.taskerDetail);
    this.addSubview('.tasker-comments', this.TaskerComments);
  },

  render: function () {
    this.attachSubviews();
    return this;
  }
});

TaskForce.Views.TaskerDetail = Backbone.CompositeView.extend({

  events: {
    'click button.select-me' : 'submit'
  },

  template: JST['tasker_detail'],

  initialize: function (options) {
    this.task = options.task;
    this.parent = options.parent;
    this.submitButton = options.submitButton;
  },

  render: function () {
    var content = this.template( { user: this.model, submitButton: this.submitButton });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    this.task.set( { tasker_id: this.model.get('id') });
    this.task.save ({}, {
      success: function () {
        this.parent.remove();
        Backbone.history.navigate('', {trigger: true})
      }.bind(this),
      error: function () {
        alert("something went wrong")
      }
    })
  },
});

// TaskForce.Views.TaskerComments = Backbone.View.extend({
//
//   template: {},
//
//   tagName: 'section',
//   className: 'container',
//
//   render: function () {
//     return this;
//   }
// });
