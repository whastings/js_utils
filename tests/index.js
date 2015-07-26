var bulk = require('bulk-require'),
    tapSpec = require('tap-spec'),
    test = require('tape');

var testName = process.argv[2];

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

if (testName) {
  require(testName);
} else {
  bulk(__dirname, ['**/*.js']);
}
