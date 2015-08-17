import { filter } from '../../lib/functional';
import test from 'tape';
import testCurriedMethod from './testCurriedMethod.js';

test('filter()', function(t) {
  var args = [function() {}];

  testCurriedMethod(t, filter, 'filter', args);
});
