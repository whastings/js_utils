import { filter } from '../../lib/functional';
import { test } from 'tape';
import testCurriedMethod from './testCurriedMethod';

test('filter()', function(t) {
  let args = [function() {}];

  testCurriedMethod(t, filter, 'filter', args);
});
