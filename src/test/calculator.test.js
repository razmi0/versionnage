import {
  sum,
  multiplication,
  division,
  modulo,
  substract,
  isEven,
  isOdd,
  isFactorOf,
  fibonnaci,
} from "../calculator.js";
import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

describe("Calculator function correctly", () => {
  it("SUM            : adds 1 + 2 to equal 3", () => strictEqual(sum(1, 2), 3));
  it("MULTIPLICATION : multiplies 2 * 3 === 6", () => strictEqual(multiplication(2, 3), 6));
  it("DIVISION       : divides 10 / 2 === 5", () => strictEqual(division(10, 2), 5));
  it("MODULO         : modulos 10 % 3 === 1", () => strictEqual(modulo(10, 3), 1));
  it("SUBSTRACTION   : substracts 10 - 3 === 7", () => strictEqual(substract(10, 3), 7));
  it("ODD            : checks if 3 is odd", () => strictEqual(isOdd(3), true));
  it("EVEN           : checks if 4 is even", () => strictEqual(isEven(4), true));
  it("FACTOR OF      : checks if 3 is a factor of 6", () => strictEqual(isFactorOf(3, 6), true));
  it("FIBONACCI      : returns 5th fibonnaci number", () => strictEqual(fibonnaci(5), 5));
});


// Luc est passer par ici c'est le plus fort