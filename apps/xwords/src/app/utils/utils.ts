export interface ICoordinates {
  x: number;
  y: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function create2dArray(x: number, y: number) {
  const arr = new Array(y); // create an empty array of length n
  for (let i = 0; i < y; i++) {
    arr[i] = new Array(x).fill('none'); // make each element an array
  }
  return arr;
}
