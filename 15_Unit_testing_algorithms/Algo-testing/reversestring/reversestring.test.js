const reverseString = require("./reversestring");

describe("Reverse String", () => {
  it("should be a function", () => {
    expect(typeof reverseString).toEqual("function");
  });

  it("should return a string", () => {
    expect(typeof reverseString("hello")).toEqual("string");
  });
  it("should be a function", () => {
    expect(reverseString("hello")).toEqual("olleh");
    expect(reverseString("world")).toEqual("dlrow");
    expect(reverseString("wow")).toEqual("wow");
    expect(reverseString("hello world")).toEqual("dlrow olleh");
  });
});
