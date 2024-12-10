import { sum, multiplication, division, modulo } from "../calculator.js";
import { describe, it } from "node:test";

describe("Correct sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    if (sum(1, 2) !== 3) {
      throw new Error("1 + 2 did not equal 3");
    }
  });
});

describe("Correct multiplication", () => {
  it("multiplies 2 * 3 === 6", () => {
    if (multiplication(2, 3) !== 6) {
      throw new Error("2 * 3 did not equal 6");
    }
  });
});

describe("Correct division", () => {
  it("divides 10 / 2 === 5", () => {
    if (division(10, 2) !== 5) {
      throw new Error("10 / 2 did not equal 5");
    }
  });
});

describe("Correct modulo", () => {
  it("modulos 10 % 3 === 1", () => {
    if (modulo(10, 3) !== 1) {
      throw new Error("10 % 3 did not equal 1");
    }
  });
});
