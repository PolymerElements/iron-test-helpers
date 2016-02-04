# iron-test-helpers

A set of utility classes to make testing easier. For more details on the methods
available, please check the documentation of `mock-interactions.js` and
`test-helpers.js`

## Mock Interactions

This is a set of methods to simulate mouse or keyboard interaction with an element. Include `mock-interactions.js` and then use them like so:

```javascript
test('can be triggered with space', function(done) {
  button.addEventListener('keydown', function() {
    done();
  });
  MockInteractions.pressSpace(button);
});

test('can be clicked', function(done) {
  button.addEventListener('click', function() {
    done();
  });
  MockInteractions.tap(button);
});
```

## Mocha Addons

The Iron Mocha Addons are helpers that enable easier application of certain
testing strategies for your elements. The addons automatically reverse their
effects after each test.

The following addons are implemented:

### `stub`

The `stub` addon allows the tester to partially replace the implementation of an
element with some custom implementation. Usage example:

```javascript
beforeEach(function() {
  stub('x-foo', {
    attached: function() {
      // Custom implementation of the `attached` method of element `x-foo`..
    },
    otherMethod: function() {
      // More custom implementation..
    }
    // etc..
  });
});
```

### `replace`

The `replace` addon allows the tester to replace all usages of one element with
another element within all Polymer elements created within the time span of the
test. Usage example:

```javascript
beforeEach(function() {
  replace('x-foo').with('x-fake-foo');
});
```

All annotations and attributes will be set on the placement element the way
they were set for the original element.


