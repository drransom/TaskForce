TaskForce.Views.Modal = Backbone.View.extend({
  initialize: function (options) {
    this.template = options.template;
    this.templateOptions = (function () {
      return this.templateOptions ? this.templateOptions : {};
    }.bind(this))();
  },

  events: {
    'click' : 'closeBackdrop'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  closeBackdrop: function() {
    if (!($(event.target).hasClass('taskforce-modal-window'))) {
      this.remove();
    }
  }
});
