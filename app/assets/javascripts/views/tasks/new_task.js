"use strict";

TaskForce.Views.NewTask = Backbone.CompositeView.extend({

  initialize: function () {
    this.$el.append('<section class="form-area container-fluid"></section>');
    this.$el.append('<section class="tasker-area container-fluid" id="tasker-area"></section>');
    this.$el.append('<section class="tasker-detail"></section>');

    this.task = new TaskForce.Models.Task();
    this.taskers = new TaskForce.Collections.Users();
    this.tasker = new TaskForce.Models.User();
    var viewsOptions = {
      collection: this.taskers,
      indexModel: this.tasker,
      heading: "<div class='row'><h2 class='col-md-12'>Hire a Tasker to Create Your Task</h2></div>",
      templateOptions: { submitButton: true }
    }

    this.taskForm = new TaskForce.Views.NewTaskForm( { task: this.task, taskers: this.taskers, tasker: this.tasker } );
    this.MiniProfile = new TaskForce.Views.MiniProfile( viewsOptions );
    this.MiniProfile.setTask(this.task);

    this.addSubview('.form-area', this.taskForm);
    this.addSubview('.tasker-area', this.MiniProfile);
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

  template: JST['tasks/new_task'],

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
    $('.error-messages').addClass("hidden")

    this.taskers.fetch({
      data: content,
      success: function () {
        tasker.unset('id');
        $('.btn-submit').attr("value", "Change Task");
        $('.tasker-area').addClass('margin-bottom')
        $('html, body').animate({
          scrollTop: $('#tasker-area').position().top
        }); // trigger detail reset and mark model new
      },
      error: function () {
        $('.error-messages').removeClass("hidden")
      }
    });
  },
});
