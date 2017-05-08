


(function() {
  'use strict';
  var rejected, promise;

  let promise = new Promise(function(fulfill, reject) {
    return setTimeout(function() {
      return reject(new Error('REJECTED!'));
    }, 300);
  });

  let rejected = function(error) {
    return console.log(error.message);
  };

  promise.then(console.log, rejected);

})()

