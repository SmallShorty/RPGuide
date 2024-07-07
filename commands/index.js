const fs = require('fs');
const path = require('path');

module.exports = fs.readdirSync(path.join(__dirname))
    .filter((file) => file.endsWith('.js'))
    .map((file) => require(path.join(__dirname, file)))
    .filter((command) => typeof command === 'function');