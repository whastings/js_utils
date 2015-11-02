export function flatten(array, levels = Infinity, initArray = []) {
  return array.reduce((flatArray, value) => {
    if (Array.isArray(value) && levels > 0) {
      return flatten(value, levels - 1, flatArray);
    }
    flatArray.push(value);
    return flatArray;
  }, initArray);
}
