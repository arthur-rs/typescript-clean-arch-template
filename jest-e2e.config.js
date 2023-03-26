const { pathsToModuleNameMapper } = require("ts-jest/utils")
const { compilerOptions } = require("./tsconfig.build.json")

module.exports = {
	preset: "jest-playwright-preset",
	testMatch: ["<rootDir>/tests/e2e/**/*.e2e.{ts,js}"],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
	transform: {
		"^.+\\.(t|j)sx?$": ["@swc/jest"]
	},
	testTimeout: 30000,
}