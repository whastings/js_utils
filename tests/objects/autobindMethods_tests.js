import { autobindMethods } from '../../lib/objects';
import test from 'tape';

test('autobindMethods()', function(t) {
  t.test('it binds methods by name to an instance', function(st) {
    st.plan(4);
    class Foobar {
      foo() {
        return this;
      }

      bar() {
        return this;
      }

      baz() {
        return this;
      }
    }

    autobindMethods(Foobar, 'foo', 'bar');
    let instance = new Foobar();
    let { foo, bar, baz } = instance;

    st.equal(foo(), instance);
    st.equal(bar(), instance);
    st.equal(bar(), instance);
    st.equal(baz(), undefined);
  });
});
