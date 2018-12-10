const path = require('path');

// process.mainModule refers to the module that started the app
// gives a path to the file responsible to the file that starts the app
module.exports = path.dirname(process.mainModule.filename);