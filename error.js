
(function() {
'use strict'

  const parsePromised = function(json) {
    return new Promise(function(fulfill, reject) {
      var e, error;
      try {
        return fulfill(JSON.parse(json));
      } catch (error) {
        e = error;
        return reject(e);
      }
    });
  };

  parsePromised(process.argv[2])
  .then(null, console.log)

})()