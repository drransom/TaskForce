"use strict";

TaskForce.Views.NewTask = Backbone.CompositeView.extend({

  initialize: function () {
    this.$el.append('<section class="form-area"></section>');
    this.$el.append('<section class="tasker-area"></section>');
    this.$el.append('<section class="tasker-detail"></section>');

    this.task = new TaskForce.Models.Task();
    this.taskers = new TaskForce.Collections.Users();
    this.tasker = new TaskForce.Models.User();

    this.taskForm = new TaskForce.Views.NewTaskForm( { task: this.task, taskers: this.taskers, tasker: this.tasker } );
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

});

TaskForce.Views.NewTaskForm = Backbone.CompositeView.extend({
  template: JST['new_task'],

  initialize: function (options) {
    this.task = options.task;
    this.taskers = options.taskers;
    this.tasker = options.tasker
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

TaskForce.Views.TaskerDisplay = Backbone.CompositeView.extend({

  template: JST['mini_profile'],

  tagName: 'section',
  className: 'container',

  events: {
    'click button.select-me' : 'submit',
    'click a.tasker-profile' : 'updateModel'
  },

  initialize: function (options) {
    this.task = options.task;
    this.taskers = options.taskers;
    this.tasker = options.tasker;
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

  updateModel: function (event) {
    event.preventDefault();
    var id = $(event.currentTarget).data('id');
    if (id !== this.tasker.get('id')) {
      this.tasker.set(this.taskers.get(id).attributes);
    } else {
      this.tasker.trigger('change');
    }
  }
});
