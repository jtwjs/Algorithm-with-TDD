import type { TestCases } from 'types/io'

type Input = [number[], number];

const testCases: TestCases<Input, number[]> = [
  {
    input: [[5, 9, 7, 10], 5],
    output: [5,10]
  },
  {
    input: [[2, 36, 1, 3], 1],
    output: [1,2,3,36]
  },
  {
    input: [[3, 2, 6], 10],
    output: [-1]
  }
];

export default testCases