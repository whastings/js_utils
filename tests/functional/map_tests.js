import { map } from '../../lib/functional';
import sinon from 'sinon';
import test from 'tape';

test('map()', function(t) {
  t.test('it calls map on the passed container with the given function', function(st) {
    var container = {map: sinon.spy()},
        mapFn = function() {};
    st.plan(2);

    map(mapFn, container);

    st.ok(container.map.calledOnce);
    st.ok(container.map.calledWith(mapFn));
  });

  t.test('it returns the result of container.map()', function(st) {
    var container = {
      map: function() {
        return 'foo';
      }
    };
    st.plan(1);

    st.equal(map(function() {}, container), 'foo');
  });

  // is curried
  t.test('it is curried', function(st) {
    var double = map(num => num * 2);
    st.plan(1);

    st.same(double([1, 2, 3]), [2, 4, 6]);
  });
});
