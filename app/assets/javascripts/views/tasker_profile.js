"use strict"

TaskForce.Views.TaskerProfile = Backbone.CompositeView.extend({

  initialize: function () {
    this.$el.append('<section class="tasker-detail"></section>');
    this.$el.append('<section class="tasker-comments"></section>');

    this.taskerDetail = new TaskForce.Views.TaskerDetail( {model: this.model });
    // this.taskerComments = new TaskForce.Views.TaskerComments( {model: this.model } );

    this.addSubview('.tasker-detail', this.taskerDetail);
    // this.addSubview('.tasker-comments', this.TaskerComments);
  },

  render: function () {
    this.attachSubviews();
    return this;
  }
});

TaskForce.Views.TaskerDetail = Backbone.CompositeView.extend({

  template: JST['tasker_detail'],

  initialize: function () {
    this.listenTo(this.model, 'change', this.render)
  },

  render: function () {
    if (!this.model.isNew()) {
      var content = this.template( {user: this.model});
      this.$el.html(content);
    }
    return this;
  },
});

// TaskForce.Views.TaskerComments = Backbone.View.extend({
//
//   template: {},
//
//   tagName: 'section',
//   className: 'container',
//
//   render: function () {
//     return this;
//   }
// });
