import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

import { CLIPBOARD_CLEAR_TIMEOUT } from './clipboard.js'

const here = path.dirname(fileURLToPath(import.meta.url))

test('CLIPBOARD_CLEAR_TIMEOUT is the extension copy-hook delay', () => {
  assert.equal(CLIPBOARD_CLEAR_TIMEOUT, 30000)
  const index = readFileSync(path.join(here, '../index.js'), 'utf8')
  assert.match(index, /CLIPBOARD_CLEAR_TIMEOUT/)
})
