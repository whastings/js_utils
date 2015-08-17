import { reduce } from '../../lib/functional';
import test from 'tape';
import testCurriedMethod from './testCurriedMethod.js';

test('reduce()', function(t) {
  var args = [function() {}, 0];

  testCurriedMethod(t, reduce, 'reduce', args);
});
