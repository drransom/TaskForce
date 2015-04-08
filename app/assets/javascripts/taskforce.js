"use strict";

window.TaskForce = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    new TaskForce.Routers.Router();
    Backbone.history.start();
  }
};
