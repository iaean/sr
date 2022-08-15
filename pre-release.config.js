// npx semantic-release -e ./pre-release.config.js

const baseReleaseConfig = require('./release.config.js');

module.exports = {
  ...baseReleaseConfig,
  skipTag: true,
  plugins: [
    "@semantic-release/commit-analyzer",
    [ "@semantic-release/exec", { prepareCmd: "bump.sh ${nextRelease.version}" } ]
  ]
};
