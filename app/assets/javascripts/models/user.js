"use strict";

TaskForce.Models.User = Backbone.Model.extend({
  urlRoot: '/users',

  parse: function (response) {
    Backbone.Model.prototype.parse.call(this, response);
    var comments = new TaskForce.Collections.Comments();
    response.comments = TaskForce.Helpers.constructCommentsfromResponse(response, comments);
    return response;
  },

  // set: function (key, val, options) {
  //   var returnVal = Backbone.Model.prototype.set.call(this, key, val, options);
  //   if (key === 'comments') {
  //
  //   }
  //   return returnVal;
  // }
});
