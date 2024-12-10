import { sum, multiplication, division, modulo, substract, isEven, isOdd, isFactorOf } from "../calculator.js";
import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

describe("Calculator function correctly", () => {
  // SUM
  // --
  it("SUM            : adds 1 + 2 to equal 3", () => strictEqual(sum(1, 2), 3));
  // MULTIPLICATION
  // --
  it("MULTIPLICATION : multiplies 2 * 3 === 6", () => strictEqual(multiplication(2, 3), 6));
  // DIVISION
  // --
  it("DIVISION       : divides 10 / 2 === 5", () => strictEqual(division(10, 2), 5));
  // MODULO
  // --
  it("MODULO         : modulos 10 % 3 === 1", () => strictEqual(modulo(10, 3), 1));
  // SUBSTRACTION
  // --
  it("SUBSTRACTION   : substracts 10 - 3 === 7", () => strictEqual(substract(10, 3), 7));
  // ODD
  // --
  it("ODD            : checks if 3 is odd", () => strictEqual(isOdd(3), true));
  // EVEN
  // --
  it("EVEN           : checks if 4 is even", () => strictEqual(isEven(4), true));
  // FACTOR OF
  // --
  it("FACTOR OF      : checks if 3 is a factor of 6", () => strictEqual(isFactorOf(3, 6), true));
});
