const palindrome = require("./palindrome");

describe("Palidrome", () => {
  it("should be a function", () => {
    expect(typeof palindrome).toEqual("function");
  });

  it("should return a boolean", () => {
    expect(typeof palindrome("hello")).toEqual("boolean");
  });

  it("should return true if is a palindrome", () => {
    expect(palindrome("wow")).toBeTruthy();
    expect(palindrome("rotator")).toBeTruthy();
    expect(palindrome("kayak")).toBeTruthy();
  });

  it("should return false if is a palindrome", () => {
    expect(palindrome("brad")).toBeFalsy();
    expect(palindrome("media")).toBeFalsy();
    expect(palindrome("video")).toBeFalsy();
  });

  it("should return false if includesspaces", () => {
    expect(palindrome("me no know")).toBeFalsy();
    expect(palindrome("how you")).toBeFalsy();
    expect(palindrome("youre so mean")).toBeFalsy();
  });
});
