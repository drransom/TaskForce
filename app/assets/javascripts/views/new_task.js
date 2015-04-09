"use strict";

TaskForce.Views.NewTask = Backbone.CompositeView.extend({

  events: {
    'click a.tasker-profile' : 'showTasker'
  },

  initialize: function () {
    this.$el.append('<section class="form-area"></section>');
    this.$el.append('<section class="tasker-area"></section>');
    this.$el.append('<section class="tasker-detail"></section>');

    this.task = new TaskForce.Models.Task();
    this.taskers = new TaskForce.Collections.Users();
    this.tasker = new TaskForce.Models.User();

    var displayOptions = { task: this.task, taskers: this.taskers };

    this.taskForm = new TaskForce.Views.NewTaskForm( { task: this.task, taskers: this.taskers } );
    this.taskerDisplay = new TaskForce.Views.TaskerDisplay( { task: this.task, taskers: this.taskers, tasker: this.tasker} );
    this.taskerDetails = new TaskForce.Views.TaskerDetail( { model: this.tasker })

    this.addSubview('.form-area', this.taskForm);
    this.addSubview('.tasker-area', this.taskerDisplay);
    this.addSubview('.tasker-detail', this.taskerDetails);
  },

  render: function () {
    this.attachSubviews();
    return this;
  },

  showTasker: function (event) {
    this.removeTasker();
    event.preventDefault();
    var id = $(event.currentTarget).data('id');
    var tasker = this.taskers.get(id);
    var taskView = new TaskForce.Views.TaskerProfile({ model: tasker });
    this.addSubview('.tasker-profile', taskView);
    this.$el.append(taskView.render().$el);
  },

  removeTasker: function() {
    var subview = this.findSubview('.tasker-profile');
    if (subview) {
      this.removeSubview('.tasker-profile', subview)
    }
  }

});

TaskForce.Views.NewTaskForm = Backbone.CompositeView.extend({
  template: JST['new_task'],

  initialize: function (options) {
    this.task = options.task;
    this.taskers = options.taskers;
  },

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
    var tasks, model, content, taskers, area, form;
    form = this;
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
    });
  },
});

TaskForce.Views.TaskerDisplay = Backbone.CompositeView.extend({

  template: JST['mini_profile'],

  tagName: 'section',
  className: 'container',

  events: {
    'click button.select-me' : 'submit',
  },

  initialize: function (options) {
    this.task = options.task;
    this.taskers = options.taskers;
    this.listenTo(this.taskers, 'add remove', this.render)
  },

  render: function () {
    var $el, content, template;
    if (!this.taskers.isEmpty()) {
      $el = this.$el;
      content;
      template = this.template;
      this.$el.empty();
      this.taskers.each(function (tasker) {
        content = template( {user: tasker, pick_me: true} );
        $el.append(content);
      })
    }
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

});
