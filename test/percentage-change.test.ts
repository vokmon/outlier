import { percentageChange } from "../src/percentage-change";

// describe("percentageChange", () => {
//   // Positive increase
//   test("should return 100% for positive increase", () => {
//     expect(percentageChange(10, 20)).toBe(100);
//   });

//   // Positive decrease
//   test("should return -100% for positive decrease", () => {
//     expect(percentageChange(20, 10)).toBe(-100);
//   });

//   // No change
//   test("should return 0% for no change", () => {
//     expect(percentageChange(10, 10)).toBe(0);
//   });

//   // Double the value
//   test("should return 100% for doubling the value", () => {
//     expect(percentageChange(10, 20)).toBe(100);
//   });

//   // Half the value
//   test("should return -50% for halving the value", () => {
//     expect(percentageChange(20, 10)).toBe(-50);
//   });
// });

// test("should calculate the correct percentage change for positive numbers", () => {
//   expect(percentageChange(10, 20)).toBe(100);
// });

// test("should calculate the correct percentage change for negative numbers", () => {
//   expect(percentageChange(-10, -20)).toBe(100);
// });

// test("should calculate the correct percentage change for zero old value", () => {
//   expect(percentageChange(0, 20)).toBe(Infinity);
// });

// test("should calculate the correct percentage change for zero new value", () => {
//   expect(percentageChange(10, 0)).toBe(-100);
// });

// test("should calculate the correct percentage change for same values", () => {
//   expect(percentageChange(10, 10)).toBe(0);
// });

// test("should handle null values by throwing an error", () => {
//   expect(() => percentageChange(null, 10)).toThrow(/The arguments oldValue and newValue cannot be null./);
//   expect(() => percentageChange(10, null)).toThrow(/The arguments oldValue and newValue cannot be null./);
// });

// test("should handle non-number values by throwing an error", () => {
//   expect(() => percentageChange("10", 20)).toThrow(/Invalid input: both arguments must be numbers./);
//   expect(() => percentageChange(10, "20")).toThrow(/Invalid input: both arguments must be numbers./);
//   expect(() => percentageChange("10", "20")).toThrow(/Invalid input: both arguments must be numbers./);
//   expect(() => percentageChange("10", {})).toThrow(/Invalid input: both arguments must be numbers./);
//   expect(() => percentageChange([], 20)).toThrow(/Invalid input: both arguments must be numbers./);
// });

describe("percentageChange", () => {
  test("should return 100% for positive increase", () => {
    expect(percentageChange(10, 20)).toBe(100);
  });

  test("should return -50% for positive decrease", () => {
    expect(percentageChange(20, 10)).toBe(-50);
  });

  test("should return 0% for no change", () => {
    expect(percentageChange(10, 10)).toBe(0);
  });

  test("should return correct value for decimal values", () => {
    expect(percentageChange(56.55, 47.40)).toBe(-16.180371352785144);
  });

  test("should return -100% change for dobouling decrease with negative numbers", () => {
    expect(percentageChange(-10, -20)).toBe(-100);
  });

  test("should calculate the correct percentage change for zero new value", () => {
    expect(percentageChange(10, 0)).toBe(-100);
  });

  test("should return Infinity for zero old value", () => {
    expect(percentageChange(0, 20)).toBe(Infinity);
  });

  test("should throw an error when old value is null", () => {
    expect(() => percentageChange(null, 10)).toThrow(
      /The arguments oldValue and newValue cannot be null./
    );
  });

  test("should throw an error when new value is null", () => {
    expect(() => percentageChange(10, null)).toThrow(
      /The arguments oldValue and newValue cannot be null./
    );
  });
});
