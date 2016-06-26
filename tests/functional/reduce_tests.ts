import { reduce } from '../../lib/functional';
import { test } from 'tape';
import testCurriedMethod from './testCurriedMethod';

test('reduce()', function(t) {
  let args = [function() {}, 0];

  testCurriedMethod(t, reduce, 'reduce', args);
});
