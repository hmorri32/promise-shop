require('es6-promise');


const promise = new Promise(function (fulfill, reject) {
	'use strict';
	return setTimeout(function() {
		return fulfill('FULFILLED!')
	}, 300)
});

promise.then(console.log('FULFILLED!'))


