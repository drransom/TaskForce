TaskForce.Views.Modal = Backbone.View.extend({
  initialize: function (options) {
    this.template = options.template;
    this.templateOptions = (function () {
      return options.templateOptions ? options.templateOptions : {};
    }.bind(this))();
    if (this.continueInitializing) {
      this.continueInitializing(options);
    }
  },

  events: {
    'click' : 'closeBackdrop'
  },

  render: function () {
    $('body').prepend('<section class="taskforce-modal"></section>')
    this.setElement('.taskforce-modal');
    var content = this.template(this.templateOptions);
    this.$el.html(content);
    return this;
  },

  closeBackdrop: function() {
    if (!($(event.target).hasClass('modal-noclose'))) {
      this.remove();
    }
  }
});
