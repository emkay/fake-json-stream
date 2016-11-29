const fs = require('fs')
const fake = require('..')(1000000) // gen a million products
const ws = fs.createWriteStream('./data.json')

fake.pipe(ws)
// will be about 500mb so watch out.
