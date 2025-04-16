import type { Config } from "jest";

export default {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  testEnvironment: "node",
  testRegex: ".test.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  verbose: true,
  bail: 1,
} satisfies Config;
