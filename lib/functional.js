'use strict';

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

export function pipe() {

}

export function compose() {

}
