
const chai = require("chai");
global.expect = chai.expect;
const fs = require("fs");
require("jsdom-global")();

const path = require("path");
const babel = require("@babel/core");

// Load and inject HTML into the DOM
const html = fs.readFileSync(
  path.resolve(__dirname, "..", "index.html"),
  "utf-8"
);
document.documentElement.innerHTML = html;

// Transpile and inject JavaScript code
const babelResult = babel.transformFileSync(
  path.resolve(__dirname, "..", "index.js"),
  {
    presets: ["@babel/preset-env"],
  }
);

eval(babelResult.code); // Executes the transpiled JS code in the DOM context
