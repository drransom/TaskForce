"use strict";

TaskForce.Views.NewTask = Backbone.View.extend({
  template: JST['new_task'],

  initialize: function () {
    //TODO
    // this.currentStep = 0;
    // this.numCompleted = 0;
    // this.editingStep = nil
    // this.numQuestions = 5
  },

  events: {
    // 'click button.btn-advance-step': 'advanceStep', TODO
    'form input': 'submit'
  },

  render: function () {
    debugger
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  submit: function () {
    var collection, model, content;
    collection = this.collection;
    model = this.model;
    content = $('.form').serializeJSON();
    this.model.set(content);
    this.model.save({}, {
      success: function() {
        collection.add(model);
        console.log('successful save');
        // Backbone.history.navigate('', {trigger: true})
      }
    })
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
