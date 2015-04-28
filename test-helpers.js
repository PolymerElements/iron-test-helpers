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

  global.fireEvent = function(type, props, node) {
    var event = new CustomEvent(type, {
      bubbles: true,
      cancelable: true
    });
    for (p in props) {
      event[p] = props[p];
    }
    node.dispatchEvent(event);
  }

})(this);
