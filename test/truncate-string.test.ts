import { truncateString } from "../src/truncate-string";

// test('should return an empty string if str is null', () => {
//   expect(truncateString(null)).toBe('');
// });

// test('should return the original string if length is 0', () => {
//   expect(truncateString('Hello, world!', 0)).toBe('Hello, world!');
// });

// test('should return the original string if str length is less than or equal to length', () => {
//   expect(truncateString('Short', 10)).toBe('Short');
//   expect(truncateString('Hello', 5)).toBe('Hello');
// });

// test('should truncate string if length is greater than 0 and str length is greater than length', () => {
//   expect(truncateString('Hello, world!', 5)).toBe('Hello...');
//   expect(truncateString('JavaScript', 10)).toBe('JavaScript');
// });

// test('should handle long strings', () => {
//   const longString = 'This is a long string to test truncateString function.';
//   // expect(truncateString(longString, 10)).toBe('This is...');
//   expect(truncateString(longString, 20)).toBe('This is a l...');
//   expect(truncateString(longString, longString.length)).toBe(longString);
// });

// test("should return empty string for null input", () => {
//   expect(truncateString(null)).toBe("");
// });

// test("should return original string when length is 0 or less", () => {
//   expect(truncateString("Hello World", 0)).toBe("Hello World");
//   expect(truncateString("Hello World", -5)).toBe("Hello World");
// });

// test("should return original string when string length is less than or equal to length", () => {
//   expect(truncateString("Hello", 5)).toBe("Hello");
//   expect(truncateString("Hello", 10)).toBe("Hello");
// });

// test("should truncate string and append ... when string length is greater than length", () => {
//   expect(truncateString("Hello World", 5)).toBe("Hello...");
//   expect(truncateString("Hello World", 1)).toBe("H...");
//   expect(truncateString("Hello World", 10)).toBe("Hello World");
// });

// test("should handle empty string input", () => {
//   expect(truncateString("", 5)).toBe("");
// });

describe("Test truncateString", () => {
  it("should return empty string for null input", () => {
    expect(truncateString(null)).toBe("");
  });

  it("should return empty string when input is empty", () => {
    expect(truncateString("", 5)).toBe("");
  });

  it("should return original string when length is 0", () => {
    expect(truncateString("Hello World", 0)).toBe("Hello World");
  });

  it("should return original string when length is less than 0", () => {
    expect(truncateString("Hello World", -1)).toBe("Hello World");
  });

  it("should return original string when string length is less than the length", () => {
    const str = "Hello";
    expect(truncateString("Hello", str.length + 1)).toBe("Hello");
  });

  it("should return original string when string length is equal to the length", () => {
    const str = "Hello";
    expect(truncateString("Hello", str.length)).toBe("Hello");
  });

  it("should truncate string and append ... when string length is greater than length", () => {
    const str = "Hello";
    expect(truncateString("Hello", 2)).toBe("He...");
  });

  it("should handle long strings", () => {
    const longString = "This is a long string to test truncateString function.";
    expect(truncateString(longString, 10)).toBe("This is a ...");
  });
});
