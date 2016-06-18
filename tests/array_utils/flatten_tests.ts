import { flatten } from '../../lib/array_utils';
import { test } from 'tape';

const TEST_ARRAY = [1, 2, [3, 4, [5, 6, [7], 8], 9, 10], 11, [12, [13, 14]]];

test('flatten()', function(t) {
  t.test('it flattens a multi-dimensional array', function(st) {
    st.plan(1);
    st.deepEqual(
      flatten(TEST_ARRAY),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    );
  });

  t.test('it stops recursing at level when it is specified', function(st) {
    st.plan(1);
    st.deepEqual(
      flatten(TEST_ARRAY, 2),
      [1, 2, 3, 4, 5, 6, [7], 8, 9, 10, 11, 12, 13, 14]
    );
  });
});
