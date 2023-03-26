module.exports = {
	preset: "jest-playwright-preset",
	testMatch: ["<rootDir>/tests/e2e/**/*.e2e.{ts,js}"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	transform: {
		"^.+\\.(t|j)sx?$": ["@swc/jest"]
	},
	testTimeout: 30000,
}