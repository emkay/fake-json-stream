const Readable = require('readable-stream').Readable
const util = require('util')
const types = require('./data-types')

module.exports = Fake
util.inherits(Fake, Readable)

function Fake (n, type) {
  type = type || 'user'
  if (!(this instanceof Fake)) return new Fake(n, type)
  this.gen = types[type]
  this.count = 0
  this.num = n
  Readable.call(this)
}

Fake.prototype._read = function _read () {
  if (this.count === 0) this.push('[')
  if (this.count === this.num) {
    this.push(']')
    this.push(null)
    return
  }
  this.push(JSON.stringify(this.gen()))
  if (this.count < this.num - 1) this.push(',')
  this.count += 1
}
