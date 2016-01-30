export function rand(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

export function range(...args) {
  let start,
      end;

  if (args.length === 1) {
    start = 0;
    end = args[0];
  } else {
    start = args[0];
    end = args[1];
  }

  let step = (end < start) ? -1 : 1,
      stop = end + step,
      values = new Array(Math.abs(end - start) + 1);
  for (let i = start, j = 0; i !== stop; i += step, j++) {
    values[j] = i;
  }
  return values;
}

export function repeat(numTimes, fn) {
  for (let i = 1; i <= numTimes; i++) {
    fn(i);
  }
}
