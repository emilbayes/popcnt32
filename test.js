const test = require('tape')
const popcnt32 = require('.')

test('basic', function (assert) {
  assert.ok(popcnt32(0b1) === 1)
  assert.ok(popcnt32(0b01) === 1)
  assert.ok(popcnt32(0b11) === 2)
  assert.ok(popcnt32(0b11111111111111111111111111111111) === 32)
  assert.ok(popcnt32(0b111111111111111111111111111111111) === 32)
  assert.ok(popcnt32(0b10000000000000000000000000000000) === 1)
  assert.ok(popcnt32(0b1000000000000000000000000000000001) === 1)

  assert.ok(popcnt32(-0b11111111111111111111111111111111) === 1)
  assert.ok(popcnt32(-0b1) === 32) // negate
  assert.ok(popcnt32(-1) === 32) // negative
  assert.end()
})
