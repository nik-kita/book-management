import { sum } from "./main";

describe("should work", () => {
  it("sum function", () => {
    const actual = sum(2, 2);
    const expected = 4;

    expect(actual).toBe(expected);
  });
});
