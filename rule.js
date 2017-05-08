(function() {

  const alwaysThrows = function() {
    throw new Error('OH NOES');
  };

  const iterate = function(n) {
    console.log(n);
    return n + 1;
  };

  Promise
  .resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(null, console.log);

})()