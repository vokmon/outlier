export function factorial(n: number): number {
  if (!Number.isInteger(n) || n < 0) throw new Error("n must be positive integer");
  return n === 0 ? 1 : n * factorial(n - 1);
}
