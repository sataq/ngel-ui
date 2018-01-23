import fs = require('fs');
module.exports = fs.readFileSync(`${__dirname}/layout.html`, {
  encoding: 'utf8',
});
