(function(global) {

  global.forceXIfStamp = function(node) {
    var templates = Polymer.dom(node.root).querySelectorAll('template[is=x-if]');
    for (var tmpl, i = 0; tmpl = templates[i]; i++) {
      tmpl.flushDebouncer('render');
    }
    // force distribution
    Polymer.dom.flush();
    // force lifecycle callback to fire on polyfill
    window.CustomElements && window.CustomElements.takeRecords();
  }

})(this);
