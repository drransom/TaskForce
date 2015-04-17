"use strict";

TaskForce.Collections.Users = Backbone.Collection.extend({
  url: '/users',
  model: TaskForce.Models.User,

  comparator: function(user1, user2) {
    if (user1.get('alive') === user2.get('alive')) {
      return 0;
    } else if (user1.get('alive')) {
      return 1;
    } else {
      return 0;
    }
  }
});
