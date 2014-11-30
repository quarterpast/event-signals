var expect = require('karma-sinon-expect').expect;
var eventSignal = require('./');

describe('event-signal', function() {
	it('should signal events', function() {
		var emitter = new process.EventEmitter();
		var sig = eventSignal(emitter, 'foo');
		var spy = expect.sinon.spy();
		sig.add(spy);
		emitter.emit('foo', 'bar', 'baz');

		expect(spy).to.be.calledWith('bar', 'baz');
	});

	it('should be curried', function() {
		var emitter = new process.EventEmitter();
		var sig = eventSignal(emitter)('foo');
		var spy = expect.sinon.spy();
		sig.add(spy);
		emitter.emit('foo', 'bar', 'baz');

		expect(spy).to.be.calledWith('bar', 'baz');
	});
});