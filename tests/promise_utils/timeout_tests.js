'use strict';

import { beforeAndAfterTest } from '../../test_helpers/tape_helpers.js';
import sinon from 'sinon';
import { timeout } from '../../lib/promise_utils';
import test from 'tape';

require('native-promise-only');

test('timeout()', function(t) {
  var clock,
      sandbox;

  var wrapper = beforeAndAfterTest(
     function() {
       sandbox = sinon.sandbox.create();
       clock = sandbox.useFakeTimers();
     },
     function() {
       sandbox.restore();
     }
  );

  t.test('it resolves a promise after a given amount of time', wrapper(function(st) {
    var resolveSpy = sandbox.spy(),
        promise = timeout(1000);
    st.plan(2);

    promise.then(resolveSpy);

    clock.tick(999);
    st.ok(!resolveSpy.called, 'Does not resolve before time.');

    clock.tick(1);
    st.ok(!resolveSpy.calledOnce, 'Does resolve after time.');
  }));
});
