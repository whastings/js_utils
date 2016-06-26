import * as sinon from 'sinon';

export default function testCurriedMethod(t, func, method, args) {
  t.test(`it calls ${method} on the passed object with the given arguments`, function(st) {
    var object = {[method]: sinon.spy()};
    st.plan(2);

    func(...args, object);

    st.ok(object[method].calledOnce, `${method} is called once`);
    st.ok(object[method].calledWith(...args), `passes args to ${method}`);
  });

  t.test(`it returns the result of ${method}`, function(st) {
    var object = {
      [method]: function() {
        return 'foo';
      }
    };
    st.plan(1);

    st.equal(func(...args, object), 'foo');
  });

  t.test('it is curried', function(st) {
    var curriedFunc = func(...args),
        object = {[method]: sinon.spy()};
    st.plan(1);

    curriedFunc(object);

    st.ok(object[method].calledWith(...args), 'passes args when curried');
  });
}
