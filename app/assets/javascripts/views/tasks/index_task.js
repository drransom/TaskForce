"use strict";

TaskForce.Views.TaskIndex = Backbone.CompositeView.extend({

  initialize: function (options) {
    this.$el.append('<section class="task-area"></section>');
    this.$el.append('<section class="task-detail"></section>');

    this.tasks = new TaskForce.Collections.Tasks();
    this.taskers = new TaskForce.Collections.Users();

    this.tasks.fetch({
      success: function () {
        TaskForce.Helpers.createTaskersFromTasks(this.tasks, this.taskers)
        this.createMiniTaskSubviews();
        this.listenTo(this.taskers, 'change', this.render)
      }.bind(this)
    });

    this.taskDisplay = new TaskForce.Views.TaskDisplay( displayOptions );
    //this.taskDetails = new TaskForce.Views.TaskDetail( { task: this.task, user: this.user})
    this.taskRating = new TaskForce.Views.TaskRating( {
      tasks: this.tasks,
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
    'click button.rate-tasker' : 'updateModel',
    'click button.mark-complete' : 'markComplete'
  },

  markComplete: function (event) {
    var id = $(event.currentTarget).data('id');
    var model = this.tasks.get(id)
    model.save( {user_completed: true}, {wait: true} );
  },
});
