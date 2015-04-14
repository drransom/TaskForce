TaskForce.Views.Modal = Backbone.CompositeView.extend({
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
    var modal = $('<section class="taskforce-modal taskforce-modal-initial"></section>')
    $('body').prepend(modal);
    this.setElement(modal);
    var content = this.template(this.templateOptions);
    this.$el.html(content);
    modal.fadeTo(400, 0.5, function () {
      modal.removeClass('taskforce-modal-initial');
      modal.addClass('taskforce-modal-final');
    })
    return this;
  },

  closeBackdrop: function() {
    if (!($(event.target).hasClass('modal-noclose'))) {
      this.$el.fadeOut(400, function () {
        this.remove();
      }.bind(this))
    }
  }
});
