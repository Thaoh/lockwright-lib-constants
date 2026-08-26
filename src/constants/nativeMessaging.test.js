import assert from 'node:assert/strict'
import test from 'node:test'

import {
  FIREFOX_EXTENSION_ID,
  FIREFOX_NIGHTLY_EXTENSION_ID,
  MANIFEST_NAME
} from './nativeMessaging.js'

test('native messaging ids are Lockwright, not PearPass', () => {
  assert.equal(MANIFEST_NAME, 'works.dexterity.lockwright')
  assert.equal(FIREFOX_EXTENSION_ID, 'lockwright@dexterity.works')
  assert.equal(
    FIREFOX_NIGHTLY_EXTENSION_ID,
    'lockwright-nightly@dexterity.works'
  )
  assert.doesNotMatch(MANIFEST_NAME, /pears\.pass/)
  assert.doesNotMatch(FIREFOX_EXTENSION_ID, /pears\.com/)
})
