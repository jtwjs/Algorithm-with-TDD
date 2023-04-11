import solution from './solution';
import testCases from './testcase';

const context = describe;

describe('solution', () => {
  const generateInput = (arr:number[], divisor: number) => ({arr, divisor});

  context('with given an array of duplicate numbers', () => {
    it('throw an error', () => {
      const { arr, divisor } = generateInput([5,5,7], 1);

      expect(() => solution(arr, divisor)).toThrow('array can not have duplicate numbers');
    })
  })

  context('with given an empty array', () => {
    it('throw an error', () => {
      const { arr, divisor } = generateInput([], 1);

      expect(() => solution(arr, divisor)).toThrow('array length can not be lower then 1');
    })
  })

  context('With no divisible number', () => {
    it('return [-1]', () => {
      const { arr, divisor } = generateInput([5,6,7], 9);

      expect(solution(arr, divisor)).toEqual([-1]);
    });
  })

  context('With divisible number', () => {
    it('returns divisible number in ascending order', () => {
      const { arr, divisor } = generateInput([10,5,15], 5);

      expect(solution(arr, divisor)).toEqual([5, 10, 15]);
    })
  })

  context('With given a test case', () => {
    it('all will pass', () => {
      testCases.forEach((item) => {
        expect(solution(...item.input)).toEqual(item.output);
      })
    })
  })
});
