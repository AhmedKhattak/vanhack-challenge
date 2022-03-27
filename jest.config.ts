/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const nextJest = require("next/jest");
import type { Config } from "@jest/types";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config.InitialOptions = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "^(.*)\\.js$": "$1",
  },
  testEnvironment: "jest-environment-node",
  transformIgnorePatterns: [
    "node_modules/(?!aggregate-error|clean-stack|escape-string-regexp|indent-string|p-map)",
  ],
  preset: "ts-jest",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
