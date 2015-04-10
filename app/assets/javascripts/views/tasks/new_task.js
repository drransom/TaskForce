"use strict";

TaskForce.Views.NewTask = Backbone.CompositeView.extend({

  initialize: function () {
    this.$el.append('<section class="form-area"></section>');
    this.$el.append('<section class="tasker-area"></section>');
    this.$el.append('<section class="tasker-detail"></section>');

    this.task = new TaskForce.Models.Task();
    this.taskers = new TaskForce.Collections.Users();
    this.tasker = new TaskForce.Models.User();

    var viewsOptions = {
      collection: this.taskers,

      indexModel: this.tasker,
      heading: "<h2>Taskers</h2>",
      template: JST['mini_profile'],
      templateOptions: { pick_me: true },
    }

    this.taskForm = new TaskForce.Views.NewTaskForm( { task: this.task, taskers: this.taskers, tasker: this.tasker } );
    this.taskerDisplay = new TaskForce.Views.TaskerDisplay( viewsOptions );
    this.taskerDisplay.setTask(this.task);
    this.taskerDetails = new TaskForce.Views.TaskerDetail( { model: this.tasker, task: this.task })

    this.addSubview('.form-area', this.taskForm);
    this.addSubview('.tasker-area', this.taskerDisplay);
    this.addSubview('.tasker-detail', this.taskerDetails);
  },

  render: function () {
    this.attachSubviews();
    return this;
  },

});

TaskForce.Views.NewTaskForm = Backbone.CompositeView.extend({


  initialize: function (options) {
    this.task = options.task;
    this.taskers = options.taskers;
    this.tasker = options.tasker
  },

  template: JST['new_task'],

  events: {
    'submit': 'submit',
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var content = $('form').serializeJSON();
    var tasker = this.tasker;
    this.task.set(content);

    this.taskers.fetch({
      data: content,
      success: function () {
        tasker.unset('id');
        $('.btn-submit').attr("value", "Change Task"); // trigger detail reset and mark model new
      },
      error: function () {
          alert("no taskers available that fit those criteria sorry");
      }
    });
  },
});

TaskForce.Views.TaskerDisplay = TaskForce.Views.IndexView.extend({

  tagName: 'section',
  className: 'container',

  events: {
    'click button.select-me' : 'submit',
    'click a.tasker-profile' : 'updateModel'
  },

  setTask: function (task) {
    this.task = task;
  },


  submit: function (event) {
    event.preventDefault();
    var id = $(event.currentTarget).data('id');
    this.task.set( { tasker_id: id });
    this.task.save ({}, {
      success: function () {
        alert("successfully created task");
        Backbone.history.navigate('', {trigger: true});
      },
      error: function () {
        alert("something went wrong")
      }
    })
  },
});
