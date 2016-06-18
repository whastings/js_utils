/* eslint no-use-before-define:0 */
import { flatten } from './array_utils';

interface Mappable {
  map(fn: Function);
}

export function always(val: any) {
  return function() {
    return val;
  };
}

export function compose(...funcs: Function[]) {
  return pipe(...funcs.reverse());
}

export function curry2(func: Function) {
  return function(a) {
    return function(b) {
      return func(a, b);
    };
  };
}

export function curry3(func: Function) {
  return function(a) {
    return function(b) {
      return function(c) {
        return func(a, b, c);
      };
    };
  };
}

export function curryN(func: Function, arity: number = func.length) {
  function curried(prevArgs: any[], ...args) {
    let newArgs = prevArgs.concat(args);

    if (newArgs.length >= arity) {
      return func.apply(null, newArgs);
    }

    return curried.bind(null, newArgs);
  }

  return curried.bind(null, []);
}

export var filter = curryN(function filter(func, container) {
  return container.filter(func);
});

export var flatMap = curryN(function flatMap(func, container) {
  return flatten(map(func, container), 1);
});

export function identity(val: any) {
  return val;
}

export var map = curryN(function map(func: Function, container: Mappable) {
  return container.map(func);
});

export function pipe(...funcs: Function[]) {
  return function(arg) {
    return funcs.reduce((result, func) => func(result), arg);
  };
}

export var prop = curryN(function(propName: string, object: Object) {
  return object[propName];
});

export var reduce = curryN(function reduce(func, initVal, container) {
  return container.reduce(func, initVal);
});
