const fizzBuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzBuzz).toEqual("function");
  });

  it("should return the number if not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(13)).toEqual(13);
    expect(fizzBuzz(17)).toEqual(17);
  });

  it("should return Fizz if not divisible by 3 ", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
    expect(fizzBuzz(9)).toEqual("Fizz");
    expect(fizzBuzz(27)).toEqual("Fizz");
  });
  it("should return Buzz if not divisible by 5", () => {
    expect(fizzBuzz(5)).toEqual("Buzz");
    expect(fizzBuzz(20)).toEqual("Buzz");
    expect(fizzBuzz(25)).toEqual("Buzz");
  });
  it("should return FizzBuzz if not divisible by 3 & 5", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
    expect(fizzBuzz(45)).toEqual("FizzBuzz");
    expect(fizzBuzz(90)).toEqual("FizzBuzz");
  });
});
