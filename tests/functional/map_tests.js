import { map } from '../../lib/functional';
import test from 'tape';
import testCurriedMethod from './testCurriedMethod.js';

test('map()', function(t) {
  var args = [function() {}];

  testCurriedMethod(t, map, 'map', args);
});
