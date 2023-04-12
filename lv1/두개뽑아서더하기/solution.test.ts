import solution from './solution';
import testCases from './testcase';

const context = describe;

describe('두개 뽑아서 더하기', () => {
  context('with length of array arg is less then 2', () => {
    it('return arg as is ', () => {
      const numbers =  [1];

      const result = solution(numbers);

      expect(result).toEqual([1]);
    })
  })

  context('with given an array of integers of length at least 2', () => {
    it('returns the sum of two different numbers in ascending order', () => {
      const numbers =  [1, 9, 25, 3];

      const result = solution(numbers);

      expect(result).toEqual([4, 10, 12, 26, 28, 34]);
    })
  })

  context('With given a test case', () => {
    it('all will pass', () => {
      testCases.forEach((item) => {
        expect(solution(item.input)).toEqual(item.output);
      })
    })
  })
})