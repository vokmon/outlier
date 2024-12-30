// Test case for getCurrentDate function using Vitest

import { getCurrentDate } from "../src/get-current-date"; // Replace with actual path

// // Test getCurrentDate with locale en-GB and monthFormat short
// test('should format current date in short month format (en-GB)', () => {
//   const expectedDate = '29 Dec 2024'; // Example date format for current date
//   expect(getCurrentDate('en-GB', 'short')).toBe(expectedDate);
// });

// // Test getCurrentDate with locale en-GB and monthFormat 2-digit
// test('should format current date in 2-digit month format (en-GB)', () => {
//   const expectedDate = '29/12/2024'; // Example date format for current date
//   expect(getCurrentDate('en-GB', '2-digit')).toBe(expectedDate);
// });

// // Test getCurrentDate with default monthFormat (short)
// test('should format current date with default month format (en-GB)', () => {
//   const expectedDate = '29 Dec 2024'; // Example date format for current date
//   expect(getCurrentDate('en-GB')).toBe(expectedDate);
// });

// test('should format the current date in short month format (en-GB)', () => {
//   const expectedDate = new Intl.DateTimeFormat('en-GB', {
//     day: '2-digit',
//     month: 'short',
//     year: 'numeric',
//   }).format(new Date());
//   const result = getCurrentDate('en-GB');
//   expect(result).toBe(expectedDate);
// });

// // Test getCurrentDate with locale 'en-GB' and monthFormat '2-digit'
// test('should format the current date in 2-digit month format (en-GB)', () => {
//   const expectedDate = new Intl.DateTimeFormat('en-GB', {
//     day: '2-digit',
//     month: '2-digit',
//     year: 'numeric',
//   }).format(new Date());
//   const result = getCurrentDate('en-GB', '2-digit');
//   expect(result).toBe(expectedDate);
// });

describe("Test getCurrentDate", () => {

  // ทดสอบ format ที่เป็น 'short'
  it("should format the current date in short month format (en-GB)", () => {
    const expectedDate = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date());
    const result = getCurrentDate("en-GB");
    expect(result).toBe(expectedDate);
  });

  //ทดสอบ format ที่เป็น '2-digit'
  it("should format the current date in 2-digit month format (en-GB)", () => {
    const expectedDate = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date());
    const result = getCurrentDate("en-GB", "2-digit");
    expect(result).toBe(expectedDate);
  });

  // ใส่ format ผิด
  it("should throw error when monthFormat is invalid", () => {
    expect(() => getCurrentDate("en-GB", "invalid")).toThrow("Value invalid out of range for Intl.DateTimeFormat options property month");
  });

  // ค่า locale เป็น null
  it("should throw error when locale is null", () => {
    expect(() => getCurrentDate(null)).toThrow('Cannot convert undefined or null to object');
  });

  // ค่า locale เป็นค่าว่าง ""
  it("should throw error when locale is an empty string", () => {
    expect(() => getCurrentDate("")).toThrow("Incorrect locale information provided");
  });
});
