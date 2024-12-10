import { sum } from "../sum.js";
import { describe, it } from "node:test";

describe("Correct sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    if (sum(1, 2) !== 3) {
      throw new Error("1 + 2 did not equal 3");
    }
  });
});

describe("Incorrect sum", () => {
  it("adds 1 + 2 to equal 4", () => {
    if (sum(1, 2) !== 4) {
      throw new Error("1 + 2 did not equal 4");
    }
  });
});
