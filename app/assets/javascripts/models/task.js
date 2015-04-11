"use strict";

TaskForce.Models.Task = Backbone.Model.extend({
  urlRoot: '/api/tasks',

  userMarkedComplete: function () {
    return (this.complete === "user" || this.complete === "both")
  },

  taskerMarkedComplete: function () {
    return (this.complete === "tasker" || this.complete === "both")
  }

});
