const { resolve } = require("path")

/**
 * @type {import("ts-jest").JestConfigWithTsJest} 
 */
module.exports = {
	preset: "ts-jest/presets/js-with-ts",
	transform: {
		"^.+\\.(t|j)sx?$": ["@swc/jest"]
	},
	moduleNameMapper: {
		"^@/(.*)$": resolve(__dirname, "$1"),
	},
	testMatch: ["<rootDir>/**/*.{spec,test}.{ts,js}"],
	rootDir: "src",
	coverageDirectory: "../coverage",
}