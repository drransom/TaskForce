"use strict";

TaskForce.Views.TaskIndex = Backbone.CompositeView.extend({

  initialize: function (options) {
    this.$el.append('<section class="task-area"></section>');
    this.$el.append('<section class="task-detail"></section>');

    this.collection = new TaskForce.Collections.Tasks();

    this.collection.fetch();

    this.model = new TaskForce.Models.Task();

    var displayOptions = {
      collection: this.collection,
      indexModel: this.model,
      heading: "<h2 class='tasks-header'>Your tasks</h2>",
      template: JST['mini_task'],
    }

    this.taskDisplay = new TaskForce.Views.TaskDisplay( displayOptions );
    //this.taskDetails = new TaskForce.Views.TaskDetail( { task: this.task, user: this.user})

    this.addSubview('.model-area', this.taskDisplay);
    //this.addSubview('.model-detail', this.taskDetails);
  },

  render: function () {
    this.attachSubviews();
    return this;
  },

});

TaskForce.Views.TaskDisplay = TaskForce.Views.IndexView.extend({
  //no body needed here yet
});
