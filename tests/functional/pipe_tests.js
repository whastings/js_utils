'use strict';

import { pipe } from '../../lib/functional';
import test from 'tape';

test('pipe()', function(t) {
  t.test('it runs each function from left to right, passing result along', function(st) {
    st.plan(1);

    function one(string) {
      return string + 'B';
    }

    function two(string) {
      return string + 'C';
    }

    function three(string) {
      return string + 'D';
    }

    st.equal(pipe(one, two, three)('A'), 'ABCD');
  });
});
