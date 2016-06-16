var sharedModules = require('./shared-modules.js');
var dataaccess    = sharedModules.getModule('dataaccess');
var communication    = sharedModules.getModule('communication');

console.log(sharedModules);
console.log(dataaccess.message('Jaffar Ramay'));
console.log(communication.message('Muhammad Jaffar Ramay'));
