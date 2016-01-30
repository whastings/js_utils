export function rand(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

export function repeat(numTimes, fn) {
  for (let i = 1; i <= numTimes; i++) {
    fn(i);
  }
}
