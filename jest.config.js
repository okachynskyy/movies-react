module.exports = {
  setupTestFrameworkScriptFile: './setup-jest.js',
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
};
