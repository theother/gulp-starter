(function() {
  var Backbone, plugin, _;

  _ = require('underscore');

  Backbone = require('backbone');

  Backbone.$ = require('jquery');

  plugin = require('plugin');

  module.exports = Backbone.View.extend({
    template: require('./template'),
    initialize: function() {
      var underscoreTest;
      underscoreTest = _.last([0, 1, 2, 'hi mom!']);
      return this.render();
    },
    render: function() {
      this.$el.html(this.template({
        title: 'Gulp All !',
        description: 'Starter Gulp + Browserify project equipped to handle the following:',
        tools: ['Browserify-shim---1', 'Browserify / Watchify', 'CoffeeScript', 'Compass', 'SASS', 'Handlebars', 'Image optimization', 'LiveReload', 'Non common-js jquery plugin', 'Npm backbone', 'Npm jquery', 'Underscore (included with Backbone)']
      }));
      return plugin();
    }
  });

}).call(this);
