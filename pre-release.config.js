// npx semantic-release --extends=./pre-release.config.js

// const baseReleaseConfig = require('./release.config.js');

module.exports = {
  // ...baseReleaseConfig,
  prepare: [
    [ "@semantic-release/exec", { prepareCmd: "./bump.sh ${nextRelease.version}" } ]
  ],
  skipTag: true,
  verifyConditions: [],
  verifyRelease: [],
  generateNotes: [],
  publish: [],
  success: [],
  fail: []
};
