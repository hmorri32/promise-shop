require('es6-promise');


(function() {
  let good = Promise.resolve('sweet as, m8');

  let bad = Promise.reject(new Error('not sweet.'));

  bad.catch(function(error) {
    return console.error(error.message);
  });

})()

