var signal = require('shoutout');
var curry  = require('curry');

module.exports = curry(function eventSignal(emitter, event) {
	var sig = signal();
	emitter.on(event, sig);
	return sig;
});