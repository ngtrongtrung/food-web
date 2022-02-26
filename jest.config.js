export default {
	preset: "jest-preset-angular",
	roots: ["<rootDir>/src/"],
	testMatch: ["**/+(*.)+(spec).+(ts)"],
	setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
	collectCoverage: true,
	coverageReporters: ["html"],
	coverageDirectory: "coverage/my-app",
	moduleFileExtensions: ["ts", "html", "js", "json", "mjs"]
};
