import { range } from '../../lib/misc';
import { test } from 'tape';

test('range()', function(t) {
  t.test('it creates a range from 0 to n with one argument', function(st) {
    st.plan(2);
    let values = range(4);
    st.deepEqual(values, [0, 1, 2, 3, 4]);

    values = range(9);
    st.deepEqual(values, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  t.test('it creates a range from m to n with two arguments', function(st) {
    st.plan(2);
    let values = range(2, 6);
    st.deepEqual(values, [2, 3, 4, 5, 6]);

    values = range(3, 8);
    st.deepEqual(values, [3, 4, 5, 6, 7, 8]);
  });

  t.test('it creates a descending range when end is less than start', function(st) {
    st.plan(2);
    let values = range(-4);
    st.deepEqual(values, [0, -1, -2, -3, -4]);

    values = range(-3, -7);
    st.deepEqual(values, [-3, -4, -5, -6, -7]);
  });
});
