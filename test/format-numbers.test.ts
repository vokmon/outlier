import { formatNumber } from "../src/format-number";

// // Introduction: These unit tests verify that the formatNumber function correctly formats numbers
// // using the specified format of ##,###.## and handles edge cases correctly.

// // Test suite for the formatNumber function
// describe("formatNumber function", () => {
//   test("correctly formats a simple integer", () => {
//     // Test that a simple integer is formatted with two decimal places.
//     expect(formatNumber(1234)).toBe("1,234.00");
//   });

//   test("correctly formats a number with decimals", () => {
//     // Test rounding of a number with more than two decimal places.
//     expect(formatNumber(1234.567)).toBe("1,234.57");
//   });

//   test("correctly formats a small number with decimals", () => {
//     // Test that a small number with decimals is formatted correctly.
//     expect(formatNumber(23.4)).toBe("23.40");
//   });

//   test("correctly rounds a number with two decimals", () => {
//     // Test that a number with exactly two decimals is not altered in terms of decimal places.
//     expect(formatNumber(5678.34)).toBe("5,678.34");
//   });

//   test("correctly handles a number with no integer part", () => {
//     // Test that a number less than 1 is formatted with a leading zero.
//     expect(formatNumber(0.5678)).toBe("0.57");
//   });

//   test("handles negative numbers correctly", () => {
//     // Test that a negative number is formatted with brackets and appropriately rounded.
//     expect(formatNumber(-1234.567)).toBe("-1,234.57");
//   });

//   test("returns NaN for non-numeric input", () => {
//     // Test that a non-numeric input returns 'NaN'.
//     expect(formatNumber("abc")).toBe("NaN");
//   });

//   test("correctly formats large numbers", () => {
//     // Test that a large number is divided into groups of three digits.
//     expect(formatNumber(1234567890.12)).toBe("1,234,567,890.12");
//   });

//   test("handles zero as input", () => {
//     // Test that zero is correctly formatted.
//     expect(formatNumber(0)).toBe("0.00");
//   });

//   test("returns NaN for null input", () => {
//     // Test that a null input returns 'NaN'.
//     expect(formatNumber(null)).toBe("NaN");
//   });

//   test("returns NaN for undefined input", () => {
//     // Test that an undefined input returns 'NaN'.
//     expect(formatNumber(undefined)).toBe("NaN");
//   });
// });



// import { formatNumber } from './yourModule'; // แทนที่ './yourModule' ด้วยตำแหน่งไฟล์ที่แท้จริงของคุณ

// describe('formatNumber', () => {

//   // ทดสอบการจัดรูปแบบตัวเลขปกติ
//   test('formats a regular number correctly', () => {
//     expect(formatNumber(1234.567)).toBe('1,234.57');
//   });

//   // ทดสอบการจัดรูปแบบของ zero
//   test('formats zero correctly', () => {
//     expect(formatNumber(0)).toBe('0.00');
//   });

//   // ทดสอบการจัดรูปแบบของตัวเลขที่ไม่มีทศนิยม
//   test('formats an integer correctly', () => {
//     expect(formatNumber(9876)).toBe('9,876.00');
//   });

//   // ทดสอบการจัดรูปแบบตัวเลขที่มีทศนิยมไม่ถึงสองตำแหน่ง
//   test('formats a number with less than two decimal places', () => {
//     expect(formatNumber(1234.5)).toBe('1,234.50');
//   });

//   // ทดสอบการจัดรูปแบบตัวเลขที่มีทศนิยมมากกว่าสองตำแหน่ง
//   test('formats a number with more than two decimal places', () => {
//     expect(formatNumber(1234.5678)).toBe('1,234.57');
//   });

//   // ทดสอบการจัดรูปแบบตัวเลขที่ให้มีค่าเป็นลบ
//   test('formats a negative number correctly', () => {
//     expect(formatNumber(-1234.567)).toBe('-1,234.57');
//   });

//   // ทดสอบการจัดรูปแบบค่า null
//   test('formats null as NaN', () => {
//     expect(formatNumber(null)).toBe('NaN');
//   });

//   // ทดสอบการจัดรูปแบบค่า undefined
//   test('formats undefined as NaN', () => {
//     expect(formatNumber(undefined)).toBe('NaN');
//   });

//   // ทดสอบการจัดรูปแบบค่าที่เป็น string
//   test('formats a string as NaN', () => {
//     expect(formatNumber("hello")).toBe('NaN');
//   });

//   // ทดสอบการจัดรูปแบบค่าที่เป็น boolean
//   test('formats a boolean as NaN', () => {
//     expect(formatNumber(true)).toBe('NaN');
//     expect(formatNumber(false)).toBe('NaN');
//   });
  
// });


describe('formatNumber', () => {

  // ทดสอบการจัดรูปแบบตัวเลขปกติ
  it('formats a regular number correctly', () => {
    expect(formatNumber(1234.567)).toBe('1,234.57');
  });

  // ทดสอบการจัดรูปแบบของ zero
  it('formats zero correctly', () => {
    expect(formatNumber(0)).toBe('0.00');
  });

  // ทดสอบการจัดรูปแบบของตัวเลขที่ไม่มีทศนิยม
  it('formats an integer correctly', () => {
    expect(formatNumber(9876)).toBe('9,876.00');
  });

  // ทดสอบการจัดรูปแบบตัวเลขที่มีทศนิยมไม่ถึงสองตำแหน่ง
  it('formats a number with less than two decimal places', () => {
    expect(formatNumber(1234.5)).toBe('1,234.50');
  });

  // ทดสอบการจัดรูปแบบตัวเลขที่มีทศนิยมมากกว่าสองตำแหน่ง
  it('formats a number with more than two decimal places', () => {
    expect(formatNumber(1234.5678)).toBe('1,234.57');
  });

  // ทดสอบการจัดรูปแบบตัวเลขที่ให้มีค่าเป็นลบ
  it('formats a negative number correctly', () => {
    expect(formatNumber(-1234.567)).toBe('-1,234.57');
  });

  // ทดสอบการจัดรูปแบบค่า null
  it('formats null as 0.00', () => {
    expect(formatNumber(null)).toBe('0.00');
  });

  // ทดสอบการจัดรูปแบบค่า undefined
  it('formats undefined as NaN', () => {
    expect(formatNumber(undefined)).toBe('NaN');
  });

  // ทดสอบการจัดรูปแบบค่าที่เป็น string
  it('formats a string as NaN', () => {
    expect(formatNumber("hello")).toBe('NaN');
  });

  // ทดสอบการจัดรูปแบบค่าที่เป็น boolean ที่เป็น true
  it('formats a boolean as 1.00', () => {
    expect(formatNumber(true)).toBe('1.00');
  });

  // ทดสอบการจัดรูปแบบค่าที่เป็น boolean ที่เป็น false
  it('formats a boolean as 0.00', () => {
    expect(formatNumber(false)).toBe('0.00');
  });
  
  // ทดสอบการจัดรูปแบบค่าตัวเลขที่มีค่ามาก
  it('formats a large number', () => {
    expect(formatNumber(1234567890.12)).toBe('1,234,567,890.12');
  });

  // ทดสอบการจัดรูปแบบค่าตัวเลขที่เป็น string
  it('formats a string of number', () => {
    expect(formatNumber('567890.12')).toBe('567,890.12');
  });

  // ทดสอบการจัดรูปแบบค่าตัวเลขที่เป็น string ที่ format แล้ว
  it('formats a string of formatted number', () => {
    expect(formatNumber('567,890.12')).toBe('NaN');
  });
});
