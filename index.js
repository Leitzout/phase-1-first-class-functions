const { spy } = require("chai");

function receivesAFunction (callback) {
    return callback(spy);
}
receivesAFunction (function(){return callback});

function returnsANamedFunction() {
    return function namedFunction() {};
  }

function returnsAnAnonymousFunction() {
    return function () {
        console.log('I am anonymous.')
    }
}

