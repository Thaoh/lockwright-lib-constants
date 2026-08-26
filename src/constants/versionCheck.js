export const GITHUB_LATEST_RELEASE_URLS = {
  MOBILE:
    'https://api.github.com/repos/Thaoh/lockwright-app-mobile/releases/latest'
}

export const VERSION_CHECK_CONFIG = {
  USER_AGENT: 'Lockwright',
  FETCH_TIMEOUT_MS: 10000,
  GRACE_PERIOD_DAYS: 7,
  CACHE_TTL_HOURS: 24,
  CACHE_KEY: 'lockwright.versionCheck.cache'
}
