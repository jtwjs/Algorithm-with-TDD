export interface TestCase<I, O> {
  input: I,
  output: O,
}

export type TestCases<I, O> = Array<TestCase<I, O>>.