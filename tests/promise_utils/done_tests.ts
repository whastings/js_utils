import { done } from '../../lib/promise_utils';
import { test } from 'tape';

// TODO: Figure out how to get TS to recognize this as Node environment.
declare var process: any;

test('done()', function(t) {
  var promise;

  t.test('it throws an unhandled rejection', function(st) {
    st.plan(2);

    promise = new Promise(function(resolve, reject) {
      reject('Foo');
    });

    done(
      promise
        .then(() => 'Bar')
    );

    process.on('uncaughtException', function(error) {
      st.ok(error instanceof Error);
      st.equal(error.message, 'Foo');
      process.removeAllListeners('uncaughtException');
    });
  });

  t.test('it throws an unhandled exception from a resolve callback', function(st) {
    st.plan(1);

    promise = new Promise(function(resolve) {
      resolve('');
    });

    promise = promise.then(function() {
      throw new Error('Foo');
    });

    done(promise);

    process.on('uncaughtException', function(error) {
      st.equal(error.message, 'Foo');
      process.removeAllListeners('uncaughtException');
    });
  });

  t.test('it throws an unhandled exception from a reject callback', function(st) {
    st.plan(1);

    promise = new Promise(function(resolve, reject) {
      reject('');
    });

    promise = promise.then(null, function() {
      throw new Error('Foo');
    });

    done(promise);

    process.on('uncaughtException', function(error) {
      st.equal(error.message, 'Foo');
      process.removeAllListeners('uncaughtException');
    });
  });

  t.test('it attaches onResolve callback to promise if provided', function(st) {
    st.plan(1);

    promise = new Promise(function(resolve) {
      resolve('Foo');
    });

    done(promise, function(result) {
      st.equal(result, 'Foo');
    });
  });

  t.test('it attaches onReject callback to promise if provided', function(st) {
    st.plan(1);

    promise = new Promise(function(resolve, reject) {
      reject('Foo');
    });

    done(promise, null, function(reason) {
      st.equal(reason, 'Foo');
    });
  });
});
