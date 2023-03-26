const { resolve } = require("path")

module.exports = {
	preset: "ts-jest/presets/js-with-ts",
	transform: {
		"^.+\\.(t|j)sx?$": ["@swc/jest"]
	},
	moduleNameMapper: {
		"^@/(.*)$": resolve(__dirname, "src/$1"),
	},
}