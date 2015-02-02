global.pkg = require('../package.json');
global.Q = require('q');
require('../lib/cli/init')(process.argv);
