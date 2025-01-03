export const sum = (a, b) => a + b;
export const multiplication = (a, b) => a * b;
export const division = (a, b) => a / b;

export const modulo = (a, b) => a % b;

export const substract = (a, b) => a - b;

export const isOdd = (a) => a % 2 === 1;

export const isEven = (a) => a % 2 === 0;

export const isFactorOf = (a, b) => b % a === 0;

export const fibonnaci = (n) => {
  if (n <= 1) return n;
  return fibonnaci(n - 1) + fibonnaci(n - 2);
};
