/**
 * In-app version string: semver plus the first 6 hex of that app repo's commit.
 * Git tags stay X.Y.Z. Superproject artifacts use the superproject sha.
 */
export function formatDisplayVersion(version, gitSha) {
  if (typeof version !== 'string' || version.length === 0) {
    return ''
  }

  return `${version}-${normalizeSha6(gitSha)}`
}

export function normalizeSha6(gitSha) {
  if (typeof gitSha !== 'string') {
    return 'unknown'
  }

  const hex = gitSha
    .trim()
    .toLowerCase()
    .replace(/[^0-9a-f]/g, '')
  if (hex.length < 6) {
    return 'unknown'
  }

  return hex.slice(0, 6)
}
