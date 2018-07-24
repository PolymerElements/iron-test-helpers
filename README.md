[![Published on NPM](https://img.shields.io/npm/v/@polymer/iron-test-helpers.svg)](https://www.npmjs.com/package/@polymer/iron-test-helpers)
[![Build status](https://travis-ci.org/PolymerElements/iron-test-helpers.svg?branch=master)](https://travis-ci.org/PolymerElements/iron-test-helpers)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/iron-test-helpers)

## iron-test-helpers

A set of utility classes to make testing easier. For more details on the methods
available, please check the documentation of `mock-interactions.js` and
`test-helpers.js`

See: [Documentation](https://www.webcomponents.org/element/@polymer/iron-test-helpers).

## Usage

### Mock Interactions

This is a set of methods to simulate mouse or keyboard interaction with an
element.

```javascript
import {pressSpace, tap} from '@polymer/iron-test-helpers/mock-interactions.js';

test('can be triggered with space', function(done) {
  button.addEventListener('keydown', function() {
    done();
  });
  pressSpace(button);
});

test('can be clicked', function(done) {
  button.addEventListener('click', function() {
    done();
  });
  tap(button);
});
```

### Note on globals

Note that in version 3.x, importing `mock-interactions.js` and `test-helpers.js`
will also set the `window.MockInteractions` and `window.TestHelpers` globals,
respectively (and importing `iron-test-helpers.js` will set both). This is done
only for backwards compatibility, and will be removed in the next major version.
All users should migrate away from globals and onto direct ES module imports.

## Contributing
If you want to send a PR to this element, here are
the instructions for running the tests and demo locally:

### Installation
```sh
git clone https://github.com/PolymerElements/iron-test-helpers
cd iron-test-helpers
npm install
npm install -g polymer-cli
```

### Running the tests
```sh
polymer test --npm
```
