// factorial.test.js

import { factorial } from "../src/factorial";

// // Summary:
// // The `factorial` function calculates the factorial of a non-negative integer `n`.
// // It returns the product of all positive integers less than or equal to `n`.
// // If `n` is 0 or 1, the function returns 1 (base case).
// // If `n` is a negative integer or not an integer, it throws an Error with the message "n must be positive integer".

// // Test case 1: Basic case
// test('factorial(0) should return 1', () => {
//   expect(factorial(0)).toBe(1);
// });

// // Test case 2: Base case
// test('factorial(1) should return 1', () => {
//   expect(factorial(1)).toBe(1);
// });

// // Test case 3: Positive integer
// test('factorial(5) should return 120', () => {
//   expect(factorial(5)).toBe(120);
// });

// // Test case 4: Negative input
// test('factorial(-3) should throw an error', () => {
//   expect(() => factorial(-3)).toThrowError('n must be positive integer');
// });

// // Test case 5: Non-integer input
// test('factorial(3.5) should throw an error', () => {
//   expect(() => factorial(3.5)).toThrowError('n must be positive integer');
// });

// // Test case 6: Large input
// test('factorial(10) should return 3628800', () => {
//   expect(factorial(10)).toBe(3628800);
// });

// test('factorial returns 1 for 0 and 1', () => {
//   expect(factorial(0)).toBe(1);
//   expect(factorial(1)).toBe(1);
// });

// test('factorial calculates factorial for positive integers', () => {
//   expect(factorial(3)).toBe(6);
//   expect(factorial(5)).toBe(120);
//   expect(factorial(7)).toBe(5040);
// });

// test('factorial throws an error for non-integers', () => {
//   expect(() => factorial(2.5)).toThrow('n must be positive integer');
//   expect(() => factorial('5')).toThrow('n must be positive integer');
//   expect(() => factorial(true)).toThrow('n must be positive integer');
// });

// test('factorial throws an error for negative numbers', () => {
//   expect(() => factorial(-1)).toThrow('n must be positive integer');
//   expect(() => factorial(-5)).toThrow('n must be positive integer');
// });

describe("Test factorial function", () => {
  // ค่า input เป็น 0 ผลลัพธ์คือ 1
  it("should return 1 for factorial 0", () => {
    expect(factorial(0)).toBe(1);
  });

  // ค่า input เป็น 1 ผลลัพธ์คือ 1
  it("should return 1 for factorial 1", () => {
    expect(factorial(1)).toBe(1);
  });

  // ได้ผลลัพธ์ที่ถูกต้องเมื่อใส่ค่าเป็นเลขจำนวนเต็มบวก
  it("should return 120 for factorial 5", () => {
    expect(factorial(5)).toBe(120);
  });

  // ได้ผลลัพธ์ที่ถูกต้องเมื่อใส่ค่าเป็นเลขจำนวนเต็มบวกขนาดใหญ่
  it("should return 2432902008176640000 for factorial 20", () => {
    expect(factorial(20)).toBe(2432902008176640000);
  });

  // ได้ error เมื่อใส่ค่าเป็นเลขติดลบ
  it("should throw an error when input is a negative value", () => {
    expect(() => factorial(-3)).toThrow("n must be positive integer");
  });

  // ได้ error เมื่อใส่ค่าเป็นเลขทศนิยม
  it("should throw an error when input is a decimal value", () => {
    expect(() => factorial(3.5)).toThrow("n must be positive integer");
  });

  // ได้ error เมื่อใส่ค่าเป็นข้อความ
  it("should throw an error when input is a string value", () => {
    expect(() => factorial("5")).toThrow("n must be positive integer");
  });

  // ได้ error เมื่อใส่ค่าเป็น boolan
  it("should throw an error when input is a boolean value", () => {
    expect(() => factorial(true)).toThrow("n must be positive integer");
  });
});
