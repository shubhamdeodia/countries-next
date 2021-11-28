const ignores = ["/node_modules/", "/__test__/", "__mocks__"];

const jestConfig = {
  collectCoverage: false,
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!<rootDir>/node_modules/"],
  coverageDirectory: "<rootDir>/test/coverage/report",
  coveragePathIgnorePatterns: [...ignores],
  coverageReporters: ["html"],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 30,
      lines: 40,
      statements: 40,
    },
  },
  moduleDirectories: ["node_modules", "./src"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    ".(css|less|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/*.test.ts", "<rootDir>/src/**/*.test.tsx"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
};

module.exports = jestConfig;
