"use strict";

TaskForce.Views.TaskIndex = Backbone.CompositeView.extend({

  initialize: function (options) {
    this.$el.append('<section class="task-area"></section>');
    this.$el.append('<section class="task-detail"></section>');
    this.$el.append('<section class="rating-modal"></section>')

    this.collection = new TaskForce.Collections.Tasks();
    this.taskers = new TaskForce.Collections.Users();

    this.collection.fetch({
      success: function () {
        TaskForce.Helpers.createTaskersFromTasks(this.collection, this.taskers)
        this.listenTo(this.taskers, 'change', this.render)
      }.bind(this)
    });

    this.model = new TaskForce.Models.Task();
    this.tasker = new TaskForce.Models.User();

    var displayOptions = {
      collection: this.collection,
      indexModel: this.model,
      heading: '<h2 class="tasks-header">Your tasks</h2>We\'ve created some sample tasks for you, click "New Task" to create a new one!<br>',
      template: JST['tasks/mini_task'],
    }

    this.taskDisplay = new TaskForce.Views.TaskDisplay( displayOptions );
    //this.taskDetails = new TaskForce.Views.TaskDetail( { task: this.task, user: this.user})
    this.taskRating = new TaskForce.Views.TaskRating( {
      collection: this.collection,
      model: this.model,
      taskers: this.taskers }
    )

    this.addSubview('.task-area', this.taskDisplay);
    //this.addSubview('.model-detail', this.taskDetails);
    this.addSubview('.rating-modal', this.taskRating);
  },

  render: function () {
    this.attachSubviews();
    return this;
  },

});

TaskForce.Views.TaskDisplay = TaskForce.Views.IndexView.extend({
  //no body needed here yet

  events: {
    'click button.rate-tasker' : 'addModal',
    'click button.mark-complete' : 'markComplete'
  },

  markComplete: function (event) {
    var id = $(event.currentTarget).data('id');
    var model = this.collection.get(id)
    model.save( {user_completed: true}, {wait: true} );
  },

  addModal: function(event) {
    var modal = new TaskForce.Views.Modal({template: JST['modal_test']});
    $('body').prepend('<section class="taskforce-modal"></section>');
    var $modalEl = $('.taskforce-modal')
    modal.setElement($modalEl);
    modal.render();
  }

});
