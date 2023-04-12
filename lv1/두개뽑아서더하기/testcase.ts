import type { TestCases } from 'types/io'

type Input = number[];

const testCases: TestCases<Input, number[]> = [
  {
    input: [2,1,3,4,1],
    output: [2,3,4,5,6,7]
  },
  {
    input: [5,0,2,7],
    output: [2,5,7,9,12]
  },
];

export default testCases