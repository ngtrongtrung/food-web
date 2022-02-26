export default {
	preset: "jest-preset-angular",
	roots: ["<rootDir>/src/"],
	testMatch: ["**/+(*.)+(spec).+(ts)"],
	setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
	moduleFileExtensions: ["ts", "html", "js", "json", "mjs"],
	collectCoverage: true,
	coverageReporters: ["html"],
	coverageDirectory: "coverage/my-app"
};
