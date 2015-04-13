"use strict"

TaskForce.Views.TaskerProfile = TaskForce.Views.Modal.extend({

  continueInitializing: function (options) {
    this.task = options.task
    this.$el.append('<section class="tasker-detail"></section>');
    this.$el.append('<section class="tasker-comments"></section>');

    this.taskerDetail = new TaskForce.Views.TaskerDetail( {model: this.model,
                                                           task: this.task});
    // this.taskerComments = new TaskForce.Views.TaskerComments( {model: this.model } );

    this.addSubview('.tasker-detail', this.taskerDetail);
    // this.addSubview('.tasker-comments', this.TaskerComments);
  },

  render: function () {
    if ($('section.taskforce-modal').length === 0) {
      $('body').prepend('<section class="taskforce-modal"></section>');
      this.setElement('.taskforce-modal');
    }
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
  },

  render: function () {
    var content = this.template( {user: this.model});
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    this.task.set( { tasker_id: this.model.get('id') });
    this.task.save ({}, {
      success: function () {
        this.remove();;
        Backbone.history.navigate('', {trigger: true})
      },
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
