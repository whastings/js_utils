export function rand(min: number, max: number): number {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

export function range(start: number, end?: number): number[] {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  let step = (end < start) ? -1 : 1,
      stop = end + step,
      values = new Array(Math.abs(end - start) + 1);
  for (let i = start, j = 0; i !== stop; i += step, j++) {
    values[j] = i;
  }
  return values;
}

export function repeat(numTimes: number, fn: Function): void {
  for (let i = 1; i <= numTimes; i++) {
    fn(i);
  }
}
