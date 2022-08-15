// npx semantic-release --extends=./pre-release.config.js

// const baseReleaseConfig = require('./release.config.js');

module.exports = {
  // ...baseReleaseConfig,
  plugins: [
    "@semantic-release/commit-analyzer",
    [ "@semantic-release/exec", { prepareCmd: "./bump.sh ${nextRelease.version}" } ]
  ],
  skipTag: true,
  verifyConditions: false,
  publish: false,
  success: false,
  fail: false,
  npmPublish: false
};
