"use strict";

TaskForce.Views.NewTask = Backbone.CompositeView.extend({

  initialize: function () {
    this.$el.append('<div class="form-area"></div>')
    this.$el.append('<div class="tasker-area"></div>')
    this.task = new TaskForce.Models.Task();
    this.taskers = new TaskForce.Collections.Users();

    var displayOptions = { task: this.task, taskers: this.taskers }

    this.taskForm = new TaskForce.Views.NewTaskForm( displayOptions);
    this.taskerDisplay = new TaskForce.Views.TaskerDisplay( displayOptions );

    this.addSubview('.form-area', this.taskForm);
    this.addSubview('.tasker-area', this.taskerDisplay);

  },

  render: function () {
    this.attachSubviews();
    return this;
  }
});

TaskForce.Views.NewTaskForm = Backbone.View.extend({
  template: JST['new_task'],

  initialize: function (options) {
    this.task = options.task;
    this.taskers = options.taskers;
  },

  events: {
    'submit': 'submit'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var tasks, model, content, taskers, area;
    taskers = this.taskers;
    tasks = this.tasks;
    content = $('form').serializeJSON();
    var area = this.$el;

    taskers.fetch({
      data: content,
      success: function (model, response) {
        model = new TaskForce.Models.Task(content);
        taskers.add(response.taskers, { merge: true });
      },
      error: function () {
      }
    })
  }
});

TaskForce.Views.TaskerDisplay = Backbone.View.extend({

  initialize: function (options) {
    this.task = options.task;
    this.taskers = options.taskers;
  },

  render: function () {
    return this;
  }
});
