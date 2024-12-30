import { describe, it, expect } from "vitest";
import { uniqueObject } from "../src/unique";

// describe("uniqueObject function tests", () => {
//   it("should return null as is when the input is null", () => {
//     expect(uniqueObject(null)).toBeNull();
//   });

//   it("should return undefined as is when the input is undefined", () => {
//     expect(uniqueObject(undefined)).toBeUndefined();
//   });

//   it("should return empty array as is for an empty array input", () => {
//     expect(uniqueObject([])).toEqual([]);
//   });

//   it("should return the same array when input has non-repeated objects", () => {
//     const input = [{ a: 1 }, { b: 2 }, "string", (a) => a, 42, { b: 3 }];
//     expect(uniqueObject(input)).toEqual(input);
//   });

//   it("should return array with unique objects when input has repeated objects", () => {
//     const input = [
//       { a: 1 },
//       { a: 1 },
//       { b: 2 },
//       { b: 2 },
//       { b: 2 },
//       "test",
//       "test",
//     ];
//     const expected = [{ a: 1 }, { b: 2 }, "test"];
//     expect(uniqueObject(input)).toEqual(expected);
//   });

//   it("should consider JSON.stringify to maintain uniqueness based on stringified object and order", () => {
//     const input = [
//       { a: 1, b: 2 },
//       { b: 2, a: 1 },
//     ];
//     expect(uniqueObject(input)).toHaveLength(2);
//   });
// });




// Test case 1: กรณีที่ input เป็น null
describe('uniqueObject', () => {
  it('should return null if input is null', () => {
    const input = null;
    const result = uniqueObject(input);
    expect(result).toBe(null);
  });

  // Test case 2: กรณีที่ input เป็น undefined
  it('should return undefined if input is undefined', () => {
    const input = undefined;
    const result = uniqueObject(input);
    expect(result).toBe(undefined);
  });

  // Test case 3: กรณีที่ input เป็น array ว่าง
  it('should return an empty array if input is an empty array', () => {
    const input = [];
    const result = uniqueObject(input);
    expect(result).toEqual([]);
  });

  // Test case 4: กรณีที่ input เป็น array ของ objects ที่ไม่ซ้ำกัน
  it('should return the same array if all objects are unique', () => {
    const input = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const result = uniqueObject(input);
    expect(result).toEqual(input);
  });

  // Test case 5: กรณีที่มี objects ที่ซ้ำกันใน array
  it('should return an array with unique objects', () => {
    const input = [{ a: 1 }, { b: 2 }, { a: 1 }];
    const expected = [{ a: 1 }, { b: 2 }];
    const result = uniqueObject(input);
    expect(result).toEqual(expected);
  });

  // Test case 6: กรณีที่มี values ที่ไม่ใช่ object
  it('should correctly handle non-object values', () => {
    const input = [{ a: 1 }, "string", { a: 1 }, 42, 42, null, null];
    const expected = [{ a: 1 }, "string", 42, null];
    const result = uniqueObject(input);
    expect(result).toEqual(expected);
  });

  // Test case 7: กรณีที่ objects มี key-value ที่เหมือนกันแต่ลำดับต่างกัน
  it('should consider objects with same keys but different order as unique', () => {
    const input = [{ a: 1, b: 2 }, { b: 2, a: 1 }];
    const expected = [{ a: 1, b: 2 }, { b: 2, a: 1 }];
    const result = uniqueObject(input);
    expect(result).toEqual(expected);
  });
});