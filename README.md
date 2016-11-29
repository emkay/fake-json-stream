# fake-json-stream
Streaming fake json data

## Install

`npm i fake-json-stream`

## Use

```javascript
const Fake = require('fake-json-stream')
const rs = Fake(1000)
rs.pipe(process.stdout)
```

Since `fake-json-stream` returns a [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable) you can also pipe to a write stream.

```javascript
const fs = require('fs')
const Fake = require('fake-json-stream')
const rs = Fake(1000000) // creates a million products!
const ws = fs.createWriteStream('./data.json')
rs.pipe(ws)
```

This is great for creating a ton of sample json without the process crashing because you aren't keeping the entire thing in memory, but just each readable chunk.
