"use strict";

TaskForce.Collections.Tasks = Backbone.Collection.extend({
  url: 'api/tasks',

  model: TaskForce.Models.Task
});
