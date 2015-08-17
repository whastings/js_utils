'use strict';

var root = (typeof global === 'undefined') ? window : global;

export function done(promise, onResolve, onReject) {
  promise = (onResolve || onReject) ? promise.then(onResolve, onReject) : promise;

  promise.then(null, function(rejection) {
    rejection = (rejection instanceof Error) ? rejection : new Error(rejection);
    setTimeout(function() {
      throw rejection;
    }, 0);
  });
}

export function timeout(time) {
  return new Promise(function(resolve) {
    root.setTimeout(resolve, time);
  });
}
