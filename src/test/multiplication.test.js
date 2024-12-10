im;
import { multiplication } from "../multiplication.js";
import { describe, it } from "node:test";

describe("Correct multiplication", () => {
  it("multiplies 2 * 3 === 6", () => {
    if (multiplication(2, 3) !== 6) {
      throw new Error("2 * 3 did not equal 6");
    }
  });
});

describe("Incorrect multiplication", () => {
  it("multiplies 2 * 3 !== 5", () => {
    if (multiplication(2, 3) !== 5) {
      throw new Error("2 * 3 did not equal 5");
    }
  });
});
