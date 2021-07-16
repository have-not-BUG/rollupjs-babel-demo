'use strict';

var answer = require('the-answer');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var answer__default = /*#__PURE__*/_interopDefaultLegacy(answer);

var version = "1.0.0";

// import foo from './generateUUID.js';

function main () {
    console.log('version:'+version);
    console.log('the answer is ' + answer__default['default']);
}

module.exports = main;
