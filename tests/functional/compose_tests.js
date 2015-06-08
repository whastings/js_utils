'use strict';

import { compose } from '../../lib/functional';
import test from 'tape';

test('compose()', function(t) {
  t.test('it runs each function from right to left, passing result along', function(st) {
    st.plan(1);

    function one(string) {
      return string + 'A';
    }

    function two(string) {
      return string + 'B';
    }

    function three(string) {
      return string + 'C';
    }

    st.equal(compose(one, two, three)('D'), 'DCBA');
  });
});
