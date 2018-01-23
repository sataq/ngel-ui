"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
module.exports = fs.readFileSync(`${__dirname}/layout.html`, {
    encoding: 'utf8',
});
