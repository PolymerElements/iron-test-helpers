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

### Running the demo locally
```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```