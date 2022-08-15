module.exports = {
  ci: false,
  branches: [
    "['+([0-9])?(.{+([0-9]),x}).x",
    "master",
    "next",
    "next-major",
    { name: "beta",
      prerelease: true },
    { name: "alpha",
      prerelease: true }
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [ "@semantic-release/npm", { npmPublish: false } ],
    [ "@semantic-release/exec", { prepareCmd: "bump.sh ${nextRelease.version}" } ],
    [ "@semantic-release/git", {
        assets: [
          "VERSION",
          "Dockerfile",
          "CHANGELOG.md",
          "package.json" ],
        message: "Bumped new version ${nextRelease.version} [skip ci]" }
    ],
    "@semantic-release/github"
  ]
};
