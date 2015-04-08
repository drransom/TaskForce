"use strict";

TaskForce.Views.NewTask = Backbone.View.extend({
  template: JST['new_task'],

  initialize: function () {
    this.tasks = new TaskForce.Collections.Tasks();
    this.users = new TaskForce.Collections.Users();
    //TODO
    // this.currentStep = 0;
    // this.numCompleted = 0;
    // this.editingStep = nil
    // this.numQuestions = 5
  },

  events: {
    // 'click button.btn-advance-step': 'advanceStep', TODO
    'submit': 'submit'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var tasks, model, content, users;
    users = this.users;
    tasks = this.tasks;
    model = this.model;
    content = $('form').serializeJSON();
    this.users.fetch({
      data: content,
      success: function (model, response) {
        debugger
        model = new TaskForce.Models.Task(content)
        users.add(response.taskers, { merge: true })
        //new subview to display users
      }
    })
    //
    // this.model.set(content);
    // this.model.save({}, {
    //   success: function() {
    //     collection.add(model);
    //     console.log('successful save');
    //     Backbone.history.navigate('', {trigger: true})
    //   },
    //   error: function (model, response) {
    //     console.log("save error")
    //   }
    // })
  }
  //TODO
  // advanceStep: function (event) {
  //   event.preventDefault();
  //   if (this.currentStep >= this.numCompleted) {
  //     this.currentStep += 1;
  //     this.numCompleted += 1;
  //   }
  // }
});
