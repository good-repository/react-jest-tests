module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  coverageDirectory: "<rootDir>/coverage",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
