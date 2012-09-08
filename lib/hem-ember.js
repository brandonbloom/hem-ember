(function() {
  var fs = require('fs');
  require('ember/handlebars');

  compiler = function(path) {
      var content = fs.readFileSync(path, 'utf8');
      var template = Ember.Handlebars.precompile(content);
      return "module.exports = (function(context, options) {" +
        "options = options || {};" +
        "return " + template + ".call(Ember.Handlebars.Utils, Ember.Handlebars, " +
        "  context, options.helpers, options.partials, options.data);" +
      "})"
  };

  module.exports = {
    compiler: compiler
  };
}).call(this);
