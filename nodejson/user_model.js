const { text } = require('express');
const {readFileSync} = require('fs');

let loadUser = () => JSON.parse(readFileSync('users.json'));

module.exports = {loadUser};
