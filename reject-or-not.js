(function() {
  'use strict';

  let promise = new Promise(function(fulfill, reject) {
    fulfill('I FIRED');
    return reject(new Error('I DID NOT FIRE'));
  });

  let rejected = function(error) {
    return console.log(error.message);
  };

  promise.then(console.log, rejected);

})()