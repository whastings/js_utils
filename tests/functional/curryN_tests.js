'use strict';

import { curryN } from '../../lib/functional';
import test from 'tape';

test('curryN()', function(t) {
  t.test('it curries a function\'s arguments', function(st) {
    var curriedFunc;
    st.plan(1);

    function func(a, b, c, d) {
      st.same([a, b, c, d], [1, 2, 3, 4]);
    }

    curriedFunc = curryN(func);
    curriedFunc(1)(2)(3)(4);
  });

  t.test('it accepts an optional arity argument', function(st) {
    var curriedFunc;
    st.plan(1);

    function func(a, b, c, d, e) { // eslint-disable-line
      st.same([a, b, c], [1, 2, 3]);
    }

    curriedFunc = curryN(func, 3);
    curriedFunc(1)(2)(3);
  });

  t.test('two calls to same curried func will not affect each other', function(st) {
    var result,
        firstCurried;
    st.plan(2);

    function func(a, b, c, d) {
      result = [a, b, c, d];
    }

    firstCurried = curryN(func)(1)(2);

    firstCurried(3)(4);
    st.same(result, [1, 2, 3, 4]);

    firstCurried(5)(6);
    st.same(result, [1, 2, 5, 6]);
  });
});
