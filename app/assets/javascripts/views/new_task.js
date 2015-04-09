"use strict";

TaskForce.Views.NewTask = Backbone.CompositeView.extend({

  initialize: function () {
    this.$el.append('<section class="form-area"></section>');
    this.$el.append('<section class="tasker-area"></section>');
    this.$el.append('<section class="tasker-profile"></section>')
    this.task = new TaskForce.Models.Task();
    this.taskers = new TaskForce.Collections.Users();

    var displayOptions = { task: this.task, taskers: this.taskers };

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

TaskForce.Views.NewTaskForm = Backbone.CompositeView.extend({
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
    area = this.$el;
    this.task.set(content);

    taskers.fetch({
      data: content,
      error: function () {
          alert("no taskers available that fit those criteria sorry");
      }
    })
  }
});

TaskForce.Views.TaskerDisplay = Backbone.CompositeView.extend({

  template: JST['mini_profile'],

  tagName: 'section',
  className: 'container',

  events: {
    'click button.select-me' : 'submit',
    'click a.tasker-profile' : 'showTasker'
  },

  initialize: function (options) {
    this.task = options.task;
    this.taskers = options.taskers;
    this.listenTo(this.taskers, 'add remove', this.render)
  },

  render: function () {
    this.removeSubviews();
    var $el = this.$el;
    var content;
    var template = this.template;
    this.$el.empty();
    this.taskers.each(function (tasker) {
      content = template( {user: tasker, pick_me: true} );
      $el.append(content);
    })
    return this;
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

  showTasker: function (event) {
    event.preventDefault();
    var id = $(event.currentTarget).data('id');
    var tasker = this.taskers.get(id);
    var taskView = new TaskForce.Views.TaskerProfile({ model: tasker });
    this.addSubview('.tasker-profile', taskView);
    this.$el.append(taskView.render().$el);
  },

  removeSubviews: function() {}
});
