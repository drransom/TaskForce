"use strict";

TaskForce.Views.TaskIndex = Backbone.CompositeView.extend({

  initialize: function (options) {
    this.$el.append('<section class="task-area"></section>');
    this.$el.append('<section class="task-detail"></section>');

    this.user = options.user;

    this.collection = new TaskForce.Collections.Tasks();

    this.collection.fetch({
      data: { user_id: this.user.get('id') }
    })

    this.model = new TaskForce.Collections.Task();

    var displayOptions = {
      indexModel: this.model,
      heading: "<h2>Tasks Index</h2>",
      template: JST['task_index'],
    }

    this.taskDisplay = new TaskForce.Views.TaskDisplay( displayOptions );
    //this.taskDetails = new TaskForce.Views.TaskDetail( { task: this.task, user: this.user})

    this.addSubview('.model-area', this.taskDisplay);
    //this.addSubview('.model-detail', this.taskDetails);
  },

  render: function () {
    this.attachSubviews();
    return this;
  },

});//
// TaskForce.Views.NewTaskForm = Backbone.CompositeView.extend({
//   template: JST['tasks_display'],
//
//   initialize: function (options) {
//     this.task = options.task;
//     this.collection = options.collection;
//     this.user = options.user
//
//     this.listenTo(this.collection, 'sync add remove', this.render)
//   },
//
//   render: function () {
//
//     var content = this.template();
//     this.$el.html(content);
//     return this;
//   },
//
//   submit: function (event) {
//     event.preventDefault();
//     var content = $('form').serializeJSON();
//     var model = this.model;
//     this.task.set(content);
//
//     this.collection.fetch({
//       data: content,
//       success: function () {
//         model.unset('id');
//         $('.btn-submit').attr("value", "Change Task"); // trigger detail reset and mark model new
//       },
//       error: function () {
//           alert("no collection available that fit those criteria sorry");
//       }
//     });
//   },
// });
//
// TaskForce.Views.TaskerDisplay = Backbone.CompositeView.extend({
//
//   template: JST['mini_profile'],
//
//   tagName: 'section',
//   className: 'container',
//
//   events: {
//     'click button.select-me' : 'submit',
//     'click a.model-profile' : 'updateModel'
//   },
//
//   initialize: function (options) {
//     this.task = options.task;
//     this.collection = options.collection;
//     this.model = options.model;
//     this.listenTo(this.collection, 'add remove', this.render)
//   },
//
//   render: function () {
//     var $el, content, template;
//     if (!this.collection.isEmpty()) {
//       $el = this.$el;
//       content;
//       template = this.template;
//       this.$el.empty();
//       this.$el.append("<h2>Model</h2>")
//       this.collection.each(function (model) {
//         content = template( { task: this.task } );
//         $el.append(content);
//       })
//     }
//     return this;
//   },
//
//   submit: function (event) {
//     event.preventDefault();
//     var id = $(event.currentTarget).data('id');
//     this.task.set( { tasker_id: id });
//     this.task.save ({}, {
//       success: function () {
//         alert("successfully created task");
//         Backbone.history.navigate('', {trigger: true});
//       },
//       error: function () {
//         alert("something went wrong")
//       }
//     })
//   },
//
//   updateModel: function (event) {
//     event.preventDefault();
//     var id = $(event.currentTarget).data('id');
//     if (id !== this.model.get('id')) {
//       this.model.set(this.collection.get(id).attributes);
//     } else {
//       this.model.trigger('change');
//     }
//   }
// });
