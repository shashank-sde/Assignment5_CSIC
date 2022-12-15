const { text } = require('express');
const {readFileSync} = require('fs');

let userid = () => JSON.parse(readFileSync('users.json'));

module.exports = {userid};
