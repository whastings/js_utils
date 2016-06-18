var bulk = require('bulk-require'),
    tapSpec = require('tap-spec'),
    test = require('tape');

var testName = process.argv[2];

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

require('ts-node/register');

if (testName) {
  require('./' + testName + '_tests');
} else {
  bulk(__dirname, ['**/*_tests.ts']);
}
