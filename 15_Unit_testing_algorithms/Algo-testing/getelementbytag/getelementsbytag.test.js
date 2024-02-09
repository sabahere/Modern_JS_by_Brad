const getElementsByTag = require("./getelementsbytag");

describe("Get Elements by Tag", () => {
  it("should be a function", () => {
    expect(typeof getElementsByTag).toEqual("function");
  });

  it("should return an array", () => {
    expect(Array.isArray(getElementsByTag())).toEqual(true);
  });

  it("should return an empty array if no root is passed in", () => {
    expect(getElementsByTag()).toEqual([]);
  });

  it("should return only root element if no tag name passed in", () => {
    const root = document.createElement("div");
    expect(getElementsByTag(root)).toEqual([root]);
  });
  it("should return the correct elements", () => {
    const root = document.createElement("div");

    //Adding some child element to the root
    const p1 = document.createElement("p");
    const ul = document.createElement("ul");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    root.appendChild(p1);
    ul.appendChild(p3);
    root.appendChild(ul);
    root.appendChild(p2);

    const result = getElementsByTag(root, "p");
    expect(result).toEqual([p1, p2, p3]);
  });
});
