// Based on: https://github.com/andreypopp/autobind-decorator
export function autobindMethods(constructor, ...methodNames) {
  let { prototype } = constructor;

  methodNames.forEach((methodName) => {
    let method = prototype[methodName];
    Object.defineProperty(prototype, methodName, {
      configurable: true,
      get() {
        if (this.hasOwnProperty(methodName)) {
          return method;
        }

        let boundMethod = method.bind(this);
        Object.defineProperty(this, methodName, {
          value: boundMethod,
          configurable: true,
          writable: true
        });

        return boundMethod;
      }
    });
  });
}
