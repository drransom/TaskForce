TaskForce.Views.IndexView = Backbone.CompositeView.extend({
  //expects submission of: template, collection, indexModel, user_model,
  //heading, templateOptions
  //assumes that each individual template item will have id data

  tagName: 'section',
  className: 'container',

  initialize: function (options) {
    this.indexModel = options.indexModel;
    this.heading = options.heading;
    this.templateOptions = options.templateOptions || {};
    this.listenTo(this.collection, 'sync', this.render)
  },

  render: function () {
    if (!this.collection.isEmpty()) {
      this.$el.empty();
      this.$el.append(this.heading)
      this.collection.each(function (model) {
        var content = this.template( this.mergeObjects(
          this.templateOptions, { model: model } ));
        this.$el.append(content);
      }.bind(this))
    }
    this.$el.find('[data-toggle="tooltip"]').tooltip();
    return this;
  },

  updateModel: function (event) {
    event.preventDefault();
    var id = $(event.currentTarget).data('id');
    if (id !== this.indexModel.get('id')) {
      this.indexModel.set(this.collection.get(id).attributes);
    } else {
      this.indexModel.trigger('change');
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
