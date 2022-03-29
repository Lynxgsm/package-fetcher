const fs = require("fs");
const { resolve } = require("path");
const { execSync } = require("child_process");
const { PACKAGEFILE, PACKAGEDIR } = require("../constants/path");

// Utilisation de pnpm pour permettre la réutilisation des packages
// N'oubliez pas d'installer pnpm si vous voulez tester
// npm i -g pnpm

module.exports = {
  createDirectory(name) {
    const _path = resolve(PACKAGEDIR, name);
    if (!fs.existsSync(_path)) {
      try {
        fs.mkdirSync(_path);
      } catch (error) {
        console.error(error);
      }
    }
  },
  initPackage() {
    if (!fs.existsSync(PACKAGEFILE)) {
      execSync(
        "pnpm init -y",
        { cwd: resolve(__dirname, "packages", "react-dom") },
        function (err, stdout, stderr) {
          if (err) throw err;
        }
      );
    }
  },
  fetchPackage(name) {
    if (fs.existsSync(_path)) {
      try {
        execSync(
          `pnpm i --save ${name}`,
          { cwd: resolve(__dirname, "packages", "react-dom") },
          function (err, stdout, stderr) {
            if (err) throw err;
          }
        );
      } catch (error) {
        console.error(error);
      }
    }
  },
};
