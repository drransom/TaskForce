TaskForce.Views.Modal = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.template = options.template;
    this.templateOptions = (function () {
      return options.templateOptions ? options.templateOptions : {};
    }.bind(this))();
    this.new = true;

    if (this.continueInitializing) {
      this.continueInitializing(options);
    }
  },

  events: {
    'click' : 'closeBackdrop'
  },

  render: function (content) {
    content = content || this.template(this.templateOptions)
    var modal = $('body').find('.taskforce-modal');
    if (this.new) {
      modal = this.addModalSection()
      this.fadeInAll(modal, content);
    } else {
      this.modalWindowFadeOut();
      this.fadeInContent(modal, content);
    }
    this.new = false;
    return this;
  },

  closeBackdrop: function() {
    if (!($(event.target).hasClass('modal-noclose'))) {
      this.$el.fadeOut(400, function () {
        this.remove();
      }.bind(this))
    }
  },

  addModalSection: function () {
    var modal = $('<section class="taskforce-modal taskforce-modal-initial"></section>');
    $('body').prepend(modal);
    this.setElement('.taskforce-modal');
    return modal
  },

  modalWindowFadeOut: function () {
    var modalWindow = $('.taskforce-modal-window')
    modalWindow.fadeOut(400, function () {
      modalWindow.remove();
    }.bind(this))
  },

  fadeInContent: function (modal, content) {
    modal.append(content);
    $(content).fadeIn(400);
  },

  fadeInAll: function (modal, content) {
    modal.append(content);
    modal.fadeTo(400, 1, function () {
      modal.removeClass('taskforce-modal-initial');
      modal.addClass('taskforce-modal-final');
    })
  }
});
