/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

(function(scope) {
  'use strict';

  var HAS_NEW_MOUSE = (function() {
    var has = false;
    try {
      has = Boolean(new MouseEvent('x'));
    } catch (_) {}
    return has;
  })();

  function Fake() {
  }

  Fake.prototype = {
    middleOfNode: function(node) {
      var bcr = node.getBoundingClientRect();
      return {
        y: bcr.top + (bcr.height / 2),
        x: bcr.left + (bcr.width / 2)
      };
    },
    topLeftOfNode: function(node) {
      var bcr = node.getBoundingClientRect();
      return {
        y: bcr.top,
        x: bcr.left
      };
    },
    makeEvent: function(type, xy, node) {
      var props = {
        bubbles: true,
        cancelable: true,
        clientX: xy.x,
        clientY: xy.y
      };
      var e;
      var mousetype = type === 'tap' ? 'click' : 'mouse' + type;
      if (HAS_NEW_MOUSE) {
        e = new MouseEvent(mousetype, props);
      } else {
        e = document.createEvent('MouseEvent');
        e.initMouseEvent(mousetype, props.bubbles, props.cancelable, null, null, 0, 0,
          props.clientX, props.clientY, false, false, false, false, 0, null);
      }
      node.dispatchEvent(e);
    },
    down: function(node, xy) {
      xy = xy || this.middleOfNode(node);
      this.makeEvent('down', xy, node);
    },
    move: function(node, fromXY, toXY, steps) {
      steps = steps || 5;
      var dx = Math.round((fromXY.x - toXY.x) / steps);
      var dy = Math.round((fromXY.y - toXY.y) / steps);
      var xy = {
        x: fromXY.x,
        y: fromXY.y
      };
      for (var i = steps; i > 0; i--) {
        this.makeEvent('move', xy, node);
        xy.x += dx;
        xy.y += dy;
      }
      this.makeEvent('move', {
        x: toXY.x,
        y: toXY.y
      }, node);
    },
    up: function(node, xy) {
      xy = xy || this.middleOfNode(node);
      this.makeEvent('up', xy, node);
    },
    tap: function(node) {
      var xy = this.middleOfNode(node);
      this.down(node, xy);
      this.up(node, xy);
      this.makeEvent('tap', xy, node);
    }
  };

  scope.Fake = Fake;
})(window);
