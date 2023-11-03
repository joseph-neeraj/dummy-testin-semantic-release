module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        "assets": [
          { "path": "dist/index.js", "label": "minified_distribution" },
        ]
      }
    ],
    "@semantic-release/changelog",
    [
      // this plugin will update the version in the package.json file
      "@semantic-release/npm",
      {
        "npmPublish": false // do not publish to the npm registry
      }
    ],
    ["@semantic-release/git", {
      "assets": ["package.json", "CHANGELOG.md"],
      "message": "chore(release): ${nextRelease.version} [skip ci]"
    }]
  ],
  dryRun: false
}