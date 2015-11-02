import { flatten } from './array_utils';

export function compose(...funcs) {
  return pipe(...funcs.reverse());
}

export function curry2(func) {
  return function(a) {
    return function(b) {
      return func(a, b);
    };
  };
}

export function curry3(func) {
  return function(a) {
    return function(b) {
      return function(c) {
        return func(a, b, c);
      };
    };
  };
}

export function curryN(func, arity = func.length) {
  function curried(prevArgs, ...args) {
    var newArgs = prevArgs.concat(args);
    if (newArgs.length >= arity) {
      return func.apply(null, newArgs);
    }
    return curried.bind(null, newArgs);
  }

  return curried.bind(null, []);
}

var filter = curryN(function filter(func, container) {
  return container.filter(func);
});
export { filter };

var flatMap = curryN(function flatMap(func, container) {
  return flatten(map(func, container), 1);
});
export { flatMap };

var map = curryN(function map(func, container) {
  return container.map(func);
});
export { map };

export function pipe(...funcs) {
  return function(arg) {
    return funcs.reduce((result, func) => func(result), arg);
  };
}

var reduce = curryN(function reduce(func, initVal, container) {
  return container.reduce(func, initVal);
});
export { reduce };
