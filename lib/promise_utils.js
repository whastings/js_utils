'use strict';

export function done(promise, onResolve, onReject) {
  promise = (onResolve || onReject) ? promise.then(onResolve, onReject) : promise;

  promise.then(null, function(rejection) {
    rejection = (rejection instanceof Error) ? rejection : new Error(rejection);
    setTimeout(function() {
      throw rejection;
    }, 0);
  });
}
