import { describe, it, expect } from "vitest";
import { calculateCircleArea } from "../src/calculate-circle";

// describe("calculateCircleArea", () => {
//   // Test case for a valid radius
//   it("should return the correct area for a valid radius", () => {
//     const radius = 5;
//     const expectedArea = (Math.PI * Math.pow(radius, 2)).toFixed(2);
//     expect(calculateCircleArea(radius)).toBe(expectedArea);
//   });

//   // Test case for radius of 1
//   it("should return the correct area for radius of 1", () => {
//     const radius = 1;
//     const expectedArea = (Math.PI * Math.pow(radius, 2)).toFixed(2);
//     expect(calculateCircleArea(radius)).toBe(expectedArea);
//   });

//   // Test case for radius just above 0
//   it("should return a small area for a radius just above 0", () => {
//     const radius = 0.1;
//     const expectedArea = (Math.PI * Math.pow(radius, 2)).toFixed(2);
//     expect(calculateCircleArea(radius)).toBe(expectedArea);
//   });

//   // Test case for negative radius
//   it("should throw an error for a negative radius", () => {
//     const radius = -5;
//     expect(() => calculateCircleArea(radius)).toThrow(
//       "Radius must be a positive number."
//     );
//   });

//   // Test case for zero radius
//   it("should throw an error for a zero radius", () => {
//     const radius = 0;
//     expect(() => calculateCircleArea(radius)).toThrow(
//       "Radius must be a positive number."
//     );
//   });
// });

// describe("test case", () => {
//   test("Should calculate circle area properly", () => {
//     expect(calculateCircleArea(5)).toBe("78.54");
//   });
//   test("should throw an error when radius is less than or equal to 0", () => {
//     expect(() => calculateCircleArea(0)).toThrow(
//       "Radius must be a positive number."
//     );
//   });
//   test("should return a decimal number to two places", () => {
//     expect(calculateCircleArea(2)).toBe("12.57");
//   });
// });

describe("calculateCircleArea", () => {
  // ใส่ค่ารัศมีเป็นจำนวนเต็มบวก
  it("should return the correct area for a valid radius", () => {
    const radius = 5;
    const expectedArea = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    expect(calculateCircleArea(radius)).toBe(expectedArea);
  });

  // ใส่ค่ารัศมีเป็นเลขทศนิยมบวก
  it("should return the correct area for a valid decimal radius", () => {
    const radius = 5.56;
    const expectedArea = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    expect(calculateCircleArea(radius)).toBe(expectedArea);
  });

  // รัศมีเป็น 1
  it("should return the correct area for radius of 1", () => {
    const radius = 1;
    const expectedArea = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    expect(calculateCircleArea(radius)).toBe(expectedArea);
  });

  // กรณีเป็นทศนิยมระหว่าง 0 ถึง 1
  it("should return a small area for a radius just above 0", () => {
    const radius = 0.1;
    const expectedArea = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    expect(calculateCircleArea(radius)).toBe(expectedArea);
  });

  // ได้ error เมื่อใส่ค่าติดลบ
  it("should throw an error for a negative radius", () => {
    const radius = -5;
    expect(() => calculateCircleArea(radius)).toThrow(
      "Radius must be a positive number."
    );
  });

  // ได้ error เมื่อใส่ค่าเป็น 0
  it("should throw an error for a zero radius", () => {
    const radius = 0;
    expect(() => calculateCircleArea(radius)).toThrow(
      "Radius must be a positive number."
    );
  });


  // ได้ error เมื่อค่าที่ได้รับเป็น null
  it("should throw an error for null", () => {
    const radius = null;
    expect(() => calculateCircleArea(radius)).toThrow(
      "Radius must be a positive number."
    );
  });

});
