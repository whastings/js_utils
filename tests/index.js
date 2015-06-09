var bulk = require('bulk-require');

var test = process.argv[2];

if (test) {
  require(test);
} else {
  bulk(__dirname, ['**/*.js']);
}
