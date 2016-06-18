interface PromiseCallback {
  (value: any): any;
}

export function done(promise: Promise<any>, onResolve?: PromiseCallback, onReject?: PromiseCallback): void {
  promise = (onResolve || onReject) ? promise.then(onResolve, onReject) : promise;

  promise.then(null, function(rejection: any) {
    rejection = (rejection instanceof Error) ? rejection : new Error(rejection);
    setTimeout(function() {
      throw rejection;
    }, 1);
  });
}

export function timeout(time: number): Promise<void> {
  return new Promise<void>(function(resolve) {
    setTimeout(resolve, time);
  });
}
