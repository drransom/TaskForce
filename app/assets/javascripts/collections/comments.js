"use strict"

TaskForce.Collections.Comments = Backbone.Collection.extend({
  url: 'api/comments',

  model: TaskForce.Models.Comment
})
