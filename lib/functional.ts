/* eslint no-use-before-define:0 */
import { flatten } from './array_utils';

interface Filterable {
  filter(fn: Function);
}

interface Mappable {
  map(fn: Function);
}

interface Reduceable {
  reduce(fn: Function, initVal: any);
}

export function always(val: any): Function {
  return function() {
    return val;
  };
}

export function compose(...funcs: Function[]): Function {
  return pipe(...funcs.reverse());
}

export function curry2(func: Function): Function {
  return function(a: any) {
    return function(b: any) {
      return func(a, b);
    };
  };
}

export function curry3(func: Function): Function {
  return function(a: any) {
    return function(b: any) {
      return function(c: any) {
        return func(a, b, c);
      };
    };
  };
}

export function curryN(func: Function, arity: number = func.length): Function {
  function curried(prevArgs: any[], ...args: any[]) {
    let newArgs = prevArgs.concat(args);

    if (newArgs.length >= arity) {
      return func.apply(null, newArgs);
    }

    return curried.bind(null, newArgs);
  }

  return curried.bind(null, []);
}

export var filter = curryN(function filter(func: Function, container: Filterable) {
  return container.filter(func);
});

export var flatMap = curryN(function flatMap(func: Function, container: Mappable) {
  return flatten(map(func, container), 1);
});

export function identity(val: any) {
  return val;
}

export var map = curryN(function map<T>(func: Function, container: Mappable) {
  return container.map(func);
});

export function pipe(...funcs: Function[]) {
  return function(arg) {
    return funcs.reduce((result, func) => func(result), arg);
  };
}

export var prop = curryN(function prop(propName: string, object: Object): any {
  return object[propName];
});

export var reduce = curryN(function reduce(func: Function, initVal: any, container: Reduceable) {
  return container.reduce(func, initVal);
});
