<h1 align="center">
event-signals<br>
<a href="https://travis-ci.org/quarterto/event-signals"><img src="https://travis-ci.org/quarterto/event-signals.svg?branch=master"></a>
</h1>

Turn EventEmitters into [signals](/robotlolita/shoutout).

```javascript
var eventSignal = require('event-signals');
var emitter = new process.EventEmitter;

var signal = eventSignal(emitter, 'foo');
signal.add(console.log);

emitter.emit('foo', 'bar', 'baz'); // logs "bar baz"
```

## Licence

MIT