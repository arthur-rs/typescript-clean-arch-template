
/**
 * @type {import("ts-jest").JestConfigWithTsJest} 
 */
module.exports = {
	preset: "jest-playwright-preset",
	testMatch: ["<rootDir>/tests/**/*.e2e.{ts,js}"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
	},
	transform: {
		"^.+\\.(t|j)sx?$": ["@swc/jest"]
	},
	testTimeout: 30000,
	collectCoverage: false
}