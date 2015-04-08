"use strict";

TaskForce.Collections.Users = Backbone.Collection.extend({
  url: '/users',
  model: TaskForce.Models.User
});
