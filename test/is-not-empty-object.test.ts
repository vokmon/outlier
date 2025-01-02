import { describe, it, expect } from "vitest";
import { isNotEmptyObject } from "../src/check-object-empty"; // แทนที่ด้วยชื่อไฟล์โมดูลจริง

// describe("isNotEmptyObject function", () => {
//   // Test case: Input is null
//   it("should return false when input is null", () => {
//     expect(isNotEmptyObject(null)).toBe(false);
//   });

//   // Test case: Input is undefined
//   it("should return false when input is undefined", () => {
//     expect(isNotEmptyObject(undefined)).toBe(false);
//   });

//   // Test case: Input is an empty object
//   it("should return false when input is an empty object", () => {
//     expect(isNotEmptyObject({})).toBe(false);
//   });

//   // Test case: Input is a non-empty object
//   it("should return true when input is a non-empty object", () => {
//     expect(isNotEmptyObject({ key: "value" })).toBe(true);
//   });

//   // Test case: Input is a non-object type (e.g., number)
//   it("should throw an error when input is a number", () => {
//     expect(() => isNotEmptyObject(123)).toThrow(
//       "Invalid input: Input must be an object."
//     );
//   });

//   // Test case: Input is a non-object type (e.g., string)
//   it("should throw an error when input is a string", () => {
//     expect(() => isNotEmptyObject("string")).toThrow(
//       "Invalid input: Input must be an object."
//     );
//   });

//   // Test case: Input is an array (which is an object in JavaScript)
//   it("should return true when input is a non-empty array", () => {
//     expect(isNotEmptyObject([1, 2, 3])).toBe(true);
//   });

//   // Test case: Input is an empty array
//   it("should return false when input is an empty array", () => {
//     expect(isNotEmptyObject([])).toBe(false);
//   });
// });

// describe("isNotEmptyObject", () => {
//   // Test case for null input
//   it("should return false for null input", () => {
//     expect(isNotEmptyObject(null)).toBe(false);
//   });

//   // Test case for undefined input
//   it("should return false for undefined input", () => {
//     expect(isNotEmptyObject(undefined)).toBe(false);
//   });

//   // Test case for non-object input (e.g. number)
//   it("should throw an error for non-object input (e.g. number)", () => {
//     expect(() => isNotEmptyObject(42)).toThrow(
//       "Invalid input: Input must be an object."
//     );
//   });

//   // Test case for non-object input (e.g. string)
//   it("should throw an error for non-object input (e.g. string)", () => {
//     expect(() => isNotEmptyObject("string")).toThrow(
//       "Invalid input: Input must be an object."
//     );
//   });

//   // Test case for empty object
//   it("should return false for an empty object", () => {
//     expect(isNotEmptyObject({})).toBe(false);
//   });

//   // Test case for non-empty object
//   it("should return true for a non-empty object", () => {
//     expect(isNotEmptyObject({ key: "value" })).toBe(true);
//   });

//   // Test case for object with multiple keys
//   it("should return true for an object with multiple keys", () => {
//     expect(isNotEmptyObject({ a: 1, b: 2, c: 3 })).toBe(true);
//   });

//   // Test case for object with nested object
//   it("should return true for an object with nested object", () => {
//     expect(isNotEmptyObject({ nested: { key: "value" } })).toBe(true);
//   });
// });

describe("isNotEmptyObject", () => {
  // ใส่ค่า null
  it("should return false for null input", () => {
    expect(isNotEmptyObject(null)).toBe(false);
  });

  // ใส่ค่า undefined
  it("should return false for undefined input", () => {
    expect(isNotEmptyObject(undefined)).toBe(false);
  });

  // ทดสอบเมื่อไหร่ค่าเป็นตัวเลข
  it("should throw an error for non-object input (e.g. number)", () => {
    expect(() => isNotEmptyObject(42)).toThrow(
      "Invalid input: Input must be an object."
    );
  });

  // เมื่อใส่ค่าเป็นข้อความ
  it("should throw an error for non-object input (e.g. string)", () => {
    expect(() => isNotEmptyObject("string")).toThrow(
      "Invalid input: Input must be an object."
    );
  });

  // เมื่อใส่ค่าเป็นข้อมูลประเภท boolean
  it("should throw an error for boolean input", () => {
    expect(() => isNotEmptyObject(true)).toThrow(
      "Invalid input: Input must be an object."
    );
  });

  // function ใน javascript
  it("should throw an error when input is a function", () => {
    expect(() => isNotEmptyObject(function t() {})).toThrow(
      "Invalid input: Input must be an object."
    );
  });

  // ใส่ค่าเป็น object ที่ไม่มี key ใดๆ
  it("should return false for an empty object", () => {
    expect(isNotEmptyObject({})).toBe(false);
  });

  // ใส่ค่า object ที่มี key 1 ตัว
  it("should return true for a non-empty object", () => {
    expect(isNotEmptyObject({ key: "value" })).toBe(true);
  });

  // ใส่ค่า object ที่มี key หลายตัว
  it("should return true for an object with multiple keys", () => {
    expect(isNotEmptyObject({ a: 1, b: 2, c: 3 })).toBe(true);
  });

  // ใส่ค่า object ที่ซ้อนกันหลายชั้น
  it("should return true for an object with nested object", () => {
    expect(isNotEmptyObject({ nested: { key: "value" } })).toBe(true);
  });

  // array ใน javascript ถือว่าเป็น object
  it("should return true when input is a non-empty array", () => {
    expect(isNotEmptyObject([1, 2, 3])).toBe(true);
  });
});
