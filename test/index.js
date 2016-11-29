const test = require('tap').test
const concat = require('concat-stream')
const has = require('has')
const Fake = require('..')

test('default should be type user', (t) => {
  const fake = Fake(10)
  const cs = concat((o) => {
    const users = JSON.parse(o.toString())
    users.forEach((u) => {
      t.equal(has(u, 'name'), true)
      t.equal(has(u, 'email'), true)
      t.equal(has(u, 'address'), true)
    })
    t.end()
  })

  fake.pipe(cs)
})

test('is a type user', (t) => {
  const fake = Fake(10, 'user')
  const cs = concat((o) => {
    const users = JSON.parse(o.toString())
    users.forEach((u) => {
      t.equal(has(u, 'name'), true)
      t.equal(has(u, 'email'), true)
      t.equal(has(u, 'address'), true)
    })
    t.end()
  })

  fake.pipe(cs)
})

test('is a type product', (t) => {
  const fake = Fake(10, 'product')
  const cs = concat((o) => {
    const users = JSON.parse(o.toString())
    users.forEach((u) => {
      t.equal(has(u, 'name'), true)
      t.equal(has(u, 'price'), true)
      t.equal(has(u, 'product'), true)
    })
    t.end()
  })

  fake.pipe(cs)
})
