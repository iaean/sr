// npx semantic-release -e pre-release.config.js
module.exports = {
  skipTag: true,
  plugins: [
    "@semantic-release/commit-analyzer",
    [ "@semantic-release/exec", { prepareCmd: "bump.sh ${nextRelease.version}" } ]
  ]
};
