TaskForce.Views.IndexView = Backbone.CompositeView.extend({
  //expects submission of: template, collection, index_model, user_model,
  //heading, template_options
  //assumes that each individual template item will have id data

  tagName: 'section',
  className: 'container',

  initialize: function (options) {
    this.index_model = options.index_model;
    this.user_model = options.user_model;
    this.heading = options.heading;
    this.template = options.template;
    this.template_options = options.template_options || {};
    this.listenTo(this.collection, 'add remove set', this.render)
  },

  render: function () {
    if (!this.collection.isEmpty()) {
      this.$el.empty();
      this.$el.append(this.heading)
      this.collection.each(function (model) {
        content = this.template( this.mergeObjects(
          this.template_options, { model: model } ));
        this.$el.append(content);
      }.bind(this))
    }
    return this;
  },

  updateModel: function (event) {
    event.preventDefault();
    var id = $(event.currentTarget).data('id');
    if (id !== this.index_model.get('id')) {
      this.index_model.set(this.collection.get(id).attributes);
    } else {
      this.index_model.trigger('change');
    }
  },

  mergeObjects: function (obj1, obj2) {
    //mutates obj2
   for (var attrName in obj1) {
     obj2[attrName] = obj1[attrName];
   }
   return obj2;
  }
});
