export default function solution(numbers: number[]): number[] {
  if (numbers.length < 2) return numbers;
  const cases = recursive(numbers);

  return quickSort(cases);
}

const recursive = ([p, ...rest]: number[]): number[] => {
  if (!rest.length) return [];
  const ret = rest.map((v) => v + p);

  return [...ret, ...recursive(rest)];
}

const quickSort = ([p, ...rest]: number[]): number[] => p == null 
  ? []
  : [
    ...quickSort(rest.filter(item => item < p)),
    p,
    ...quickSort(rest.filter(item => item > p)),
  ]