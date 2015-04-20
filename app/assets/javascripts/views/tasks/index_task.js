"use strict";

TaskForce.Views.TaskIndex = Backbone.CompositeView.extend({

  initialize: function (options) {
    this.$el.append('<section class="container task-area"></section>');

    this.tasks = new TaskForce.Collections.Tasks();
    this.taskers = new TaskForce.Collections.Users();
    this.indexTasker = new TaskForce.Models.User();

    this.tasks.fetch({
      success: function () {
        TaskForce.Helpers.createTaskersFromTasks(this.tasks, this.taskers)
        this.createMiniTaskSubviews();
        this.render();
      }.bind(this)
    });
  },

  render: function () {
    this.attachSubviews();
    this.prependHeading();
    this.$el.find('[data-toggle="tooltip"]').tooltip()
    return this;
  },

  createMiniTaskSubviews: function () {
    var tasker, tasker, subview, i;
    i = 0;
    this.tasks.each( function(task) {
      tasker = this.taskers.get(task.get('tasker_id'))
      subview = new TaskForce.Views.MiniTask({
        task: task,
        tasker: tasker,
        indexTasker: this.indexTasker,
        offset: (i % 3 !== 0)
      })
      this.addSubview('.task-area', subview)
      i += 1
    }.bind(this))
  },

  prependHeading: function () {
    var subheading, content;
    if (this.$el.find('.task-heading-area').length === 0) {
      var subheading = "We\'ve created some sample "+
      "tasks for you, or click \"New Task\" to create a new task. " +
      "Let\'s get started!";
      content = JST['tasks/task_index']({subheading: subheading});
      this.$el.prepend(content)
    }
  }
});
