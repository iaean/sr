// npx semantic-release --extends=./pre-release.config.js

const baseReleaseConfig = require('./release.config.js');

module.exports = {
  ...baseReleaseConfig,
  skipTag: true,
  plugins: [
    "@semantic-release/commit-analyzer", "./release-scripts/application-info",
    [ "@semantic-release/exec", { prepareCmd: "bump.sh ${nextRelease.version}" } ]
  ]
};
