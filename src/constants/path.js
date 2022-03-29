const { resolve } = require("path");

export const PACKAGEDIR = resolve(__dirname, "../..", "packages");
export const PACKAGEFILE = resolve(
  __dirname,
  "../..",
  "packages",
  "package.json"
);
