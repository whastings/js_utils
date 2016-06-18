import { map } from '../../lib/functional';
import { test } from 'tape';
import testCurriedMethod from './testCurriedMethod';

test('map()', function(t) {
  let args = [function() {}];

  testCurriedMethod(t, map, 'map', args);
});
