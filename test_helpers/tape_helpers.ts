export function afterTest(func) {
  return function(test) {
    return function(t) {
      test(t);
      func();
    };
  };
}

export function beforeTest(func) {
  return function(test) {
    return function(t) {
      func();
      test(t);
    };
  };
}

export function beforeAndAfterTest(beforeFunc, afterFunc) {
  return function(test) {
    return function(t) {
      beforeFunc();
      test(t);
      afterFunc();
    };
  };
}
