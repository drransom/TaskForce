"use strict"

TaskForce.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    this.$rootEl = $('#main');
  },

  routes: {
    'tasks/new' : 'taskNew'
  }
});
