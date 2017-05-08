(function() {

  let firstPromise = first();

  let secondPromise = firstPromise.then(function(value) {
    return second(value);
  });

  secondPromise.then(console.log);
})()