<p align="center">
  <img src="docs/logo.svg" alt="Lockwright" width="128"/>
</p>

# lockwright-lib-constants

Shared constants for Lockwright apps and libraries.

Site: [lockwright.dexterity.works](https://lockwright.dexterity.works)

Community fork of PearPass (Apache 2.0). Not affiliated with or endorsed by Tether Data or the Pears project. This GitHub repo stays a fork of `tetherto/pearpass-lib-constants` on purpose. Do not open pull requests against Tether.

PearPass upstream paused active development. This fork continues that work.

## Features

One module of constants used across the Lockwright package repos.

## Install

```bash
npm install git+https://github.com/Thaoh/lockwright-lib-constants.git
```

Imports stay `@tetherto/pearpass-lib-constants`. That npm name is not this fork if you install it from the npm registry.

## Testing

```bash
npm run lint
```

## Available Constants

### Time (`time`)

| Constant | Value | Description |
|----------|-------|-------------|
| `MS_PER_SECOND` | `1000` | Milliseconds in one second |
| `SECONDS_PER_MINUTE` | `60` | Seconds in one minute |
| `MS_PER_MINUTE` | `60000` | Milliseconds in one minute |
| `MINUTES_PER_HOUR` | `60` | Minutes in one hour |
| `MS_PER_HOUR` | `3600000` | Milliseconds in one hour |
| `HOURS_PER_DAY` | `24` | Hours in one day |
| `MS_PER_DAY` | `86400000` | Milliseconds in one day |
| `DAYS_PER_WEEK` | `7` | Days in one week |
| `MS_PER_WEEK` | `604800000` | Milliseconds in one week |

### Auto-lock (`autoLock`)

| Constant | Description |
|----------|---------------|
| `AUTO_LOCK_TIMEOUT_OPTIONS` | Object with keys `SECONDS_30`, `MINUTES_1`, `MINUTES_5`, `MINUTES_15`, `MINUTES_30`, `HOURS_1`, `HOURS_4`, `NEVER` — each has `label` (string) and `value` (ms or `null` for never) |
| `DEFAULT_AUTO_LOCK_TIMEOUT` | Default timeout value (30 seconds in ms) |

### Passphrase (`passPhrase`)

| Constant | Description |
|----------|-------------|
| `PASSPHRASE_WORD_COUNTS` | Object with keys `STANDARD_12` (12), `STANDARD_24` (24), `WITH_RANDOM_12` (13), `WITH_RANDOM_24` (25) |
| `VALID_WORD_COUNTS` | Array of accepted word-count values |
| `DEFAULT_SELECTED_TYPE` | Default word count (12) |
| `PASSPHRASE_TYPE_OPTIONS` | Array of `{ label, value }` objects for UI selectors |

### Blind Peers (`blindPeers`)

| Constant | Value | Description |
|----------|-------|-------------|
| `BLIND_PEERS_LIMIT` | `5` | Maximum number of blind peers per vault |
| `BLIND_PEER_TYPE` | `{ DEFAULT, PERSONAL }` | Peer type identifiers |
| `BLIND_PEER_FORM_NAME` | `'blindPeer'` | Form field name for a single blind peer |
| `BLIND_PEERS_FORM_NAME` | `'blindPeers'` | Form field name for the blind peers list |

### Feature Flags (`flags`)

| Constant | Default | Description |
|----------|---------|-------------|
| `PROTECTED_VAULT_ENABLED` | `false` | Protected vault feature toggle |
| `AUTO_LOCK_ENABLED` | `true` | Auto-lock feature toggle |
| `BE_AUTO_LOCK_ENABLED` | `true` | Backend auto-lock feature toggle |
| `SAVE_CREDENTIALS_AFTER_LOGIN_ENABLED` | `false` | Save-after-login feature toggle |
| `DELETE_VAULT_ENABLED` | `false` | Vault deletion feature toggle |
| `AUTHENTICATOR_ENABLED` | `true` | Authenticator (2FA) feature toggle |
| `DESIGN_VERSION` | `1` | Base design version |
| `MOBILE_DESIGN_VERSION` | `2` | Mobile app design version |
| `DESKTOP_DESIGN_VERSION` | `2` | Desktop app design version |
| `EXTENSION_DESIGN_VERSION` | `2` | Browser extension design version |
| `UNSUPPORTED` | `false` | Platform unsupported flag |
| `DESKTOP_2FA_IMPORTS_ENABLED` | `false` | 2FA import on desktop toggle |
| `MOBILE_2FA_IMPORTS_ENABLED` | `false` | 2FA import on mobile toggle |

### PearPass Links (`pearpassLinks`)

| Constant | Description |
|----------|-------------|
| `PEARPASS_WEBSITE` | PearPass website URL |
| `PRIVACY_POLICY` | Privacy policy URL |
| `TERMS_OF_USE` | Terms of use URL |
| `APP_STORE_URL` | iOS App Store URL |
| `PLAY_STORE_URL` | Google Play Store URL |
| `BLIND_PEERS_LEARN_MORE` | Blind-peer documentation URL |

### Native Messaging (`nativeMessaging`)

| Constant | Description |
|----------|-------------|
| `MANIFEST_NAME` | Native messaging host manifest name (`works.dexterity.lockwright`) |
| `CHROMIUM_EXTENSION_ID` | Chromium browser extension ID |
| `FIREFOX_EXTENSION_ID` | Firefox extension ID (`lockwright@dexterity.works`) |
| `FIREFOX_NIGHTLY_EXTENSION_ID` | Firefox Nightly extension ID (`lockwright-nightly@dexterity.works`) |
| `IPC_SOCKET_DIR_NAME` | IPC socket directory name (`.pearpass`) |
| `NATIVE_MESSAGING_BRIDGE_PEAR_LINK_PRODUCTION` | Production Pear app link |
| `NATIVE_MESSAGING_BRIDGE_PEAR_LINK_STAGING` | Staging Pear app link |

### Version Check (`versionCheck`)

| Constant | Description |
|----------|-------------|
| `GITHUB_LATEST_RELEASE_URLS` | Object with `MOBILE` key pointing to the GitHub releases API URL |
| `VERSION_CHECK_CONFIG` | Object with `USER_AGENT`, `FETCH_TIMEOUT_MS` (10s), `GRACE_PERIOD_DAYS` (7), `CACHE_TTL_HOURS` (24), `CACHE_KEY` |

### Miscellaneous

| Constant | Value | Description |
|----------|-------|-------------|
| `DATE_FORMAT` | `'DD.MM.YYYY'` | Standard date display format |
| `CLIPBOARD_CLEAR_TIMEOUT` | `30000` | Milliseconds before clipboard is cleared (30s) |
| `MAX_FILE_SIZE_MB` | `6` | Maximum attachment file size in MB |
| `MAX_FILE_SIZE_BYTES` | `6291456` | Maximum attachment file size in bytes |
| `MAX_IMPORT_RECORDS` | `10000` | Maximum records allowed in a single import |
| `LANGUAGES` | `[{ name: 'English', value: 'en' }]` | Supported UI languages |

## Usage Examples

```javascript
import {
  MS_PER_DAY,
  AUTO_LOCK_TIMEOUT_OPTIONS,
  AUTHENTICATOR_ENABLED,
  CLIPBOARD_CLEAR_TIMEOUT
} from '@tetherto/pearpass-lib-constants';

// Time arithmetic
function isOlderThanADay(timestamp) {
  return Date.now() - timestamp > MS_PER_DAY;
}

// Auto-lock selector options
const lockOptions = Object.values(AUTO_LOCK_TIMEOUT_OPTIONS);

// Feature gate
if (AUTHENTICATOR_ENABLED) {
  // show 2FA UI
}

// Clipboard clearing
setTimeout(() => clearClipboard(), CLIPBOARD_CLEAR_TIMEOUT);
```

## Dependencies

No production dependencies.

## Related Projects

- [lockwright-app-mobile](https://github.com/Thaoh/lockwright-app-mobile)
- [lockwright-app-browser-extension](https://github.com/Thaoh/lockwright-app-browser-extension)
- [lockwright-app-desktop](https://github.com/Thaoh/lockwright-app-desktop)

## Contributing

Open issues and pull requests on this repo (`Thaoh/lockwright-lib-constants`). Do not open PRs against `tetherto/pearpass-lib-constants`. See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

Apache License 2.0. See `LICENSE.md` and `NOTICE.md`.
