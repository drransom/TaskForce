"use strict"

TaskForce.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    this.$rootEl = $('#main');
  },

  routes: {
  '' : 'home',
  'about' : 'about',
  'tasks/new' : 'taskNew'
  },

  home: function() {
    var view = new TaskForce.Views.TaskIndex();
    this._swapView(view);
  },

  about: function() {
    var view = new TaskForce.Views.About();
    this._swapView(view);
  },

  taskNew: function() {
    var task = new TaskForce.Models.Task();
    var view = new TaskForce.Views.NewTask({ model: task });
    this._swapView(view);
  },

  _swapView: function(view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.$el)
    view.render();
  }
});
