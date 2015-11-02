import { flatMap } from '../../lib/functional';
import test from 'tape';

test('flatMap()', function(t) {
  t.test('it flattens the result of a map by one level', function(st) {
    st.plan(1);
    let array = [1, [2], 3, [4, [5]]];
    st.deepEqual(
      flatMap((val) => [0, val, 0], array),
      [0, 1, 0, 0, [2], 0, 0, 3, 0, 0, [4, [5]], 0]
    );
  });
});
