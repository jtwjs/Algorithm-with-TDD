export default function solution(arr: number[], divisor: number): number[]{
  if (arr.length === 0) {
    throw new Error('array length can not be lower then 1');
  }

  if(hasDuplicate(arr)) {
    throw new Error('array can not have duplicate numbers');
  }

  const filtredArr = filterDivide(arr, divisor);

  return filtredArr.length ? quickSort(filtredArr) : [-1];
}

const hasDuplicate = (arr: number[]): boolean => new Set(arr).size !== arr.length;

const filterDivide = (arr: number[], divisor: number) => arr.filter(item => item % divisor === 0);

const quickSort = ([p, ...rest]: number[]): number[] => p == null 
  ? []
  : [
    ...quickSort(rest.filter(item => item <= p)),
    p,
    ...quickSort(rest.filter(item => item > p)),
  ]