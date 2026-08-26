import assert from 'node:assert/strict'
import test from 'node:test'

import {
  GITHUB_LATEST_RELEASE_URLS,
  VERSION_CHECK_CONFIG
} from './versionCheck.js'

test('version check talks to Lockwright mobile, not Tether PearPass', () => {
  assert.equal(
    GITHUB_LATEST_RELEASE_URLS.MOBILE,
    'https://api.github.com/repos/Thaoh/lockwright-app-mobile/releases/latest'
  )
  assert.equal(VERSION_CHECK_CONFIG.USER_AGENT, 'Lockwright')
  assert.equal(VERSION_CHECK_CONFIG.CACHE_KEY, 'lockwright.versionCheck.cache')
  assert.doesNotMatch(GITHUB_LATEST_RELEASE_URLS.MOBILE, /tetherto\/pearpass/)
  assert.doesNotMatch(VERSION_CHECK_CONFIG.USER_AGENT, /PearPass/)
})
