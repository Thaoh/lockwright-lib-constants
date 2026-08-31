import assert from 'node:assert/strict'
import test from 'node:test'

import {
  APP_STORE_URL,
  FEEDBACK_URL,
  PEARPASS_WEBSITE,
  PLAY_STORE_URL,
  PRIVACY_POLICY,
  TERMS_OF_USE
} from './pearpassLinks.js'

const SITE = 'https://lockwright.dexterity.works'

test('product links are Lockwright, not PearPass listings', () => {
  assert.equal(PEARPASS_WEBSITE, SITE)
  assert.equal(TERMS_OF_USE, `${SITE}/terms/`)
  assert.equal(PRIVACY_POLICY, `${SITE}/privacy/`)
  assert.doesNotMatch(TERMS_OF_USE, /application-terms/)
  assert.doesNotMatch(PRIVACY_POLICY, /application-privacy/)
  assert.equal(FEEDBACK_URL, `${SITE}/contact/`)
  assert.equal(APP_STORE_URL, SITE)
  assert.equal(PLAY_STORE_URL, SITE)
  assert.doesNotMatch(PEARPASS_WEBSITE, /pears\.com/)
  assert.doesNotMatch(FEEDBACK_URL, /pears\.com|slack\.com|google\.com/)
  assert.doesNotMatch(APP_STORE_URL, /pearpass/i)
  assert.doesNotMatch(PLAY_STORE_URL, /com\.pears\.pass/)
})
