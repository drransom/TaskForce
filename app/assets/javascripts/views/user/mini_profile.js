TaskForce.Views.MiniProfile = TaskForce.Views.IndexView.extend({
  template: JST['users/mini_profile'],

  tagName: 'section',
  className: 'col-md-8 col-md-offset-2 tasker-mini-profiles',

  events: {
    'click button.select-me' : 'submit',
    'click a.tasker-profile' : 'showTaskerDetail'
  },

  setTask: function (task) {
    this.task = task;
  },

  submit: function (event) {
    event.preventDefault();
    var id = $(event.currentTarget).data('id');
    this.task.set( { tasker_id: id });
    this.task.save ({}, {
      success: function () {
        Backbone.history.navigate('', {trigger: true});
      },
      error: function () {
        alert("something went wrong")
      }
    })
  },

  showTaskerDetail: function (event) {
    event.preventDefault();
    var id = $(event.currentTarget).data('id');
    var tasker = this.collection.get(id);
    var detail = new TaskForce.Views.TaskerProfile({task: this.task, model: tasker, submitButton: true})
    detail.render();
  }
});
