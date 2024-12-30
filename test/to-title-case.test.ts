import { toTitleCase } from "../src/to-title-case";

// Unit Test for toTitleCase
// describe('toTitleCase', () => {

//   it('given a single word in lowercase, when calling toTitleCase, then it should return the word with the first letter capitalized', () => {
//     // given
//     const input = "hello";
//     // when
//     const result = toTitleCase(input);
//     // then
//     expect(result).toBe("Hello");
//   });

//   it('given a single word in uppercase, when calling toTitleCase, then it should return the word with the first letter capitalized', () => {
//     // given
//     const input = "WORLD";
//     // when
//     const result = toTitleCase(input);
//     // then
//     expect(result).toBe("World");
//   });

//   it('given a phrase with multiple words in lowercase, when calling toTitleCase, then it should return each word with the first letter capitalized', () => {
//     // given
//     const input = "hello world from javascript";
//     // when
//     const result = toTitleCase(input);
//     // then
//     expect(result).toBe("Hello World From Javascript");
//   });

//   it('given a phrase with a mix of uppercase and lowercase words, when calling toTitleCase, then it should return each word with the first letter capitalized', () => {
//     // given
//     const input = "tHis Is A TeSt";
//     // when
//     const result = toTitleCase(input);
//     // then
//     expect(result).toBe("This Is A Test");
//   });

//   it('given an empty string, when calling toTitleCase, then it should return an empty string', () => {
//     // given
//     const input = "";
//     // when
//     const result = toTitleCase(input);
//     // then
//     expect(result).toBe("");
//   });

// });

// // Test 1: Check if the function converts a single word string to title case
// describe('toTitleCase', () => {
//   describe('when given a single word', () => {
//     test('it should return the word with the first letter capitalized', () => {
//       // Given
//       const input = 'hello';

//       // When
//       const result = toTitleCase(input);

//       // Then
//       expect(result).toBe('Hello');
//     });
//   });

//   // Test 2: Check if the function converts a multi-word string to title case
//   describe('when given a multi-word string', () => {
//     test('it should capitalize the first letter of each word', () => {
//       // Given
//       const input = 'hello world';

//       // When
//       const result = toTitleCase(input);

//       // Then
//       expect(result).toBe('Hello World');
//     });
//   });

//   // Test 3: Check if the function handles strings with hyphen
//   describe('when given a string with hyphen', () => {
//     test('it should capitalize the first letter of each word', () => {
//       // Given
//       const input = 'hello-world';

//       // When
//       const result = toTitleCase(input);

//       // Then
//       expect(result).toBe('Hello-World');
//     });
//   });

//   // Test 4: Check if the function handles an empty string
//   describe('when given an empty string', () => {
//     test('it should return an empty string', () => {
//       // Given
//       const input = '';

//       // When
//       const result = toTitleCase(input);

//       // Then
//       expect(result).toBe('');
//     });
//   });

//   // Test 5: Check if the function handles a string with leading spaces
//   describe('when given a string with leading spaces', () => {
//     test('it should capitalize the first letter of the first word', () => {
//       // Given
//       const input = '   hello world';

//       // When
//       const result = toTitleCase(input);

//       // Then
//       expect(result).toBe('Hello World');
//     });
//   });

//   // Test 6: Check if the function handles a string with trailing spaces
//   describe('when given a string with trailing spaces', () => {
//     test('it should capitalize the first letter of each word', () => {
//       // Given
//       const input = 'hello world   ';

//       // When
//       const result = toTitleCase(input);

//       // Then
//       expect(result).toBe('Hello World');
//     });
//   });

//   // Test 7: Check if the function handles a string with uppercase letters
//   describe('when given a string with uppercase letters', () => {
//     test('it should convert all letters to lowercase and then capitalize the first letter of each word', () => {
//       // Given
//       const input = 'HELLO WORLD';

//       // When
//       const result = toTitleCase(input);

//       // Then
//       expect(result).toBe('Hello World');
//     });
//   });

//   // Test 8: Check if the function handles a string with special characters
//   describe('when given a string with special characters', () => {
//     test('it should capitalize the first letter of each word and ignore special characters', () => {
//       // Given
//       const input = 'hello@#$%^&*() world';

//       // When
//       const result = toTitleCase(input);

//       // Then
//       expect(result).toBe('Hello World');
//     });
//   });
// });

// already correct
// The test case should cover passing null and undefined.
// The test case should cover special chars passing numbers, and strings with numbers.

describe("toTitleCase", () => {
  // ทดสอบค่า null
  it("should handle null", () => {
    // given เป็นค่า null
    const input = null;

    // when เรียก toTitleCase
    // then มี error เกิดขึ้น
    expect(() => toTitleCase(input)).toThrow("null");
  });

  // ทดสอบข้อความที่มีคำเดียวที่เป็นพิมพ์ใหญ่ทั้งหมด
  it("should handle undefined", () => {
    // given เป็นค่า undefined
    const input = undefined;

    // when เรียก toTitleCase
    // then มี error เกิดขึ้น
    expect(() => toTitleCase(input)).toThrow("undefined");
  });

  // ทดสอบข้อความที่มีคำเดียวที่เป็นพิมพ์เล็กทั้งหมด
  it("single word in lowercase should return the word with the first letter capitalized", () => {
    // given คำที่ตัวอักษรแรกไม่ใช่ตัวใหญ่
    const input = "hello";

    // when เรียก toTitleCase
    const result = toTitleCase(input);

    // then ตัวอักษรแรกถูกแปลงเป็นตัวใหญ่
    expect(result).toBe("Hello");
  });

  // ทดสอบข้อความที่มีคำเดียวที่เป็นพิมพ์ใหญ่ทั้งหมด
  it("given a single word in uppercase, should return the word with the first letter capitalized", () => {
    // given คำที่ตัวอักษรแรกเป็นตัวใหญ่
    const input = "WORLD";
    // when
    const result = toTitleCase(input);
    // then
    expect(result).toBe("World");
  });

  // ประโยคยาวที่มีหลายคำและเป็นตัวพิมพ์เล็กทั้งหมด
  it("should return each word with the first letter capitalized when a phrase with multiple words in lowercase is given", () => {
    // given ข้อความที่เป็นพิมพ์เล็กทั้งหมดทุกคำ
    const input = "hello world from javascript.";

    // when เรียก toTitleCase
    const result = toTitleCase(input);

    // then ตัวอักษรแรกในทุกคำจะถูกแปลงเป็นพิมพ์ใหญ่
    expect(result).toBe("Hello World From Javascript.");
  });

  // ประโยคยาวที่มีหลายคำที่เป็น title case แล้ว
  it("should return each word with the first letter capitalized when a phrase with title case is given", () => {
    // given ข้อความที่เป็น title case แล้ว
    const input = "Hello World From Javascript.";

    // when เรียก toTitleCase
    const result = toTitleCase(input);

    // then ตัวอักษรแรกในทุกคำจะถูกแปลงเป็นพิมพ์ใหญ่
    expect(result).toBe("Hello World From Javascript.");
  });

  // ประโยคยาวที่มีอักขระพิเศษ
  it("should return each word with the first letter capitalized when a phrase with special characters and number is given", () => {
    // given ข้อความที่มีอักขระพิเศษและตัวเลข
    const input = "hello@# $%^&*() 123 world.";

    // when เรียก toTitleCase
    const result = toTitleCase(input);

    // then ตัวอักษรแรกในทุกคำจะถูกแปลงเป็นพิมพ์ใหญ่ โดยที่อักขระพิเศษไม่เปลี่ยนแปลง
    expect(result).toBe("Hello@# $%^&*() 123 World.");
  });
});
