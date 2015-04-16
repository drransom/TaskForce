"use strict";

TaskForce.Models.User = Backbone.Model.extend({
  urlRoot: '/users',

  parse: function (response) {
    var attributes = {};
    _(response.user).each(function (value, attribute) {
      attributes[attribute] = value
    });
    return attributes
  }
});
