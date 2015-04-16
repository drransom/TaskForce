"use strict"

TaskForce.Views.TaskerProfile = TaskForce.Views.Modal.extend({

  continueInitializing: function (options) {
    if ($('section.taskforce-modal').length === 0) {
      $('body').prepend('<section class="taskforce-modal"></section>');
      this.setElement('.taskforce-modal');
    }
    this.task = options.task;
    this.submitButton = options.submitButton || false;
    // this.taskerComments = new TaskForce.Views.TaskerComments( {
    //   collection: this.comments,
    //   templateOptions: {comments: this.comments}
    //   } );
    //
    // this.model.fetch({success: function (response) {
    //   TaskForce.Helpers.constructCommentsFromUser(this.model, this.comments)
    //   this.comments.trigger('sync')
    // }.bind(this)})
    this.template = JST['tasker_detail'];
  },


  events: {
    'click' : 'closeBackdrop',
    'click button.select-me' : 'submit'
  },

  submit: function (event) {
    event.preventDefault();
    this.task.set( { tasker_id: this.model.get('id') });
    this.task.save ({}, {
      success: function () {
        Backbone.history.navigate('', {trigger: true})
      }.bind(this),
      error: function () {
        alert("something went wrong")
      }
    })
  },

  render: function () {
    var content = this.template( { user: this.model, submitButton: this.submitButton });
    this.$el.html(content);
    return this;
  }
});
//
// TaskForce.Views.TaskerDetail = Backbone.CompositeView.extend({
//
//   events: {
//     'click button.select-me' : 'submit'
//   },
//
//
//   initialize: function (options) {
//     this.task = options.task;
//     this.submitButton = options.submitButton;
//   },
//
//   render: function () {
//     var content = this.template( { user: this.model, submitButton: this.submitButton });
//     this.$el.html(content);
//     return this;
//   },
//
// });
