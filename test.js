const { exec } = require("child_process");
const { resolve } = require("path");
exec(
  "yarn init -y && yarn add react-dom",
  { cwd: resolve(__dirname, "packages", "react-dom") },
  function (err, stdout, stderr) {
    if (err) throw err;
    console.log(stdout);
  }
);
