import assert from 'node:assert/strict'
import test from 'node:test'

import { formatDisplayVersion } from './displayVersion.js'

test('display version is X.Y.Z plus first 6 hex of that app git sha', () => {
  assert.equal(formatDisplayVersion('0.0.1', 'abcdef1234'), '0.0.1-abcdef')
})

test('display version lowercases and strips non-hex from the sha', () => {
  assert.equal(formatDisplayVersion('0.0.1', 'ABCDEFdeadbeef'), '0.0.1-abcdef')
})

test('display version uses unknown when the sha is missing or short', () => {
  assert.equal(formatDisplayVersion('0.0.1', ''), '0.0.1-unknown')
  assert.equal(formatDisplayVersion('0.0.1', 'abc'), '0.0.1-unknown')
  assert.equal(formatDisplayVersion('0.0.1', null), '0.0.1-unknown')
})

test('display version is empty when the semver is missing', () => {
  assert.equal(formatDisplayVersion('', 'abcdef'), '')
  assert.equal(formatDisplayVersion(null, 'abcdef'), '')
})
