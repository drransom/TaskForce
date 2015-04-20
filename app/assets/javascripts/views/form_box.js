TaskForce.Views.FormSection = Backbone.View.extend({
  initialize: function (options) {
    this.template = options.template;
    if (options) {
      this.last = options.last;
      this.modelToReset = options.modelToReset;
    }
  },

  events: {
    'submit' : 'submit'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  submit: function () {
    event.preventDefault();
    var content = $('form').serializeJSON();
    var model = this.model;
    var modelToReset = this.modelToReset;
    model.set(content);
    if (this.last) {
      this.collection.fetch({
        data: model.attributes,
        success: function () {
          // trigger detail reset and mark model new
          if (modelToReset) {
            modelToReset.unset('id');
          }
          $('.btn-submit').attr("value", "Change Task");
        },
        error: function () {
          $('.error-messages').addClass("visible").removeClass("hidden");
        }
      });
    }
  }
});
