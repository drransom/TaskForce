"use strict"

TaskForce.Views.TaskDetail = Backbone.View.extend({

  initialize: function (options) {
    this.task = options.task;
    this.tasker = options.tasker;
    this.indexTasker = options.indexTasker;
    this.offset = options.offset || false
    this.listenTo(this.task, 'set change', this.render);
    this.listenTo(this.tasker, 'set change', this.render);
  },

  template: JST['tasks/task_detail'],
  rateTemplate: JST['tasks/rate'],

  events: {
    'click button.mark-complete' : 'markComplete',
    'click button.rate-tasker' : 'rateTasker',
    'click a.tasker-profile' : 'showTasker',
    'click button.tasker-rated' : 'reRateTasker'
  },

  render: function () {
    var content = this.template({ model: this.task, tasker: this.tasker, offset: this.offset });
    this.$el.html(content);
    this.$el.find('[data-toggle="tooltip"]').tooltip()
    return this;
  },

  markComplete: function (event) {
    this.task.save( {user_completed: true}, {wait: true} );
  },

  rateTasker: function () {
    var rating = new TaskForce.Views.TaskRating( {
      templateOptions: { tasker: this.tasker, task: this.task },
      tasker: this.tasker,
      task: this.task,
      template: this.rateTemplate,
    })
    rating.render();
  },

  showTasker: function (event) {
    event.preventDefault();
    var detail = new TaskForce.Views.TaskerProfile({task: this.task, model: this.tasker})
    detail.render();
  },

  reRateTasker: function () {
    if (this.task.get('rating') < 0) {
      this.task.save( {rating: 1}, {wait: true} );
    } else if (this.tasker.get('alive')) {
      var rating = new TaskForce.Views.TaskRating( {
        templateOptions: { tasker: this.tasker, task: this.task },
        tasker: this.tasker,
        task: this.task,
        template: this.rateTemplate,
      })
      rating.downvote();
    } else {
      this.task.save({rating: -1}, {wait: true})
    }
  },
});
