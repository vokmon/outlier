import { capitalizeWords } from "../src/capitalize-strings"; // import function к capitaleWord

// // converts every first character of each word into uppercase
// test("Should capitalize the first letter of each word", () => {
//   // expectの引数にfunction名と入力した文字列の後ろにそれが期待される文字列を記載し、および本番で得られる文字列で比較をする。
//   expect(capitalizeWords("hello world")).toBe("Hello World");
// });

// // checks if it capitalizes with mixed cases (uppercase and lowercase)
// test("Should capitalize with mixed cases", () => {
//   expect(capitalizeWords("HeLlO wOrLd")).toBe("Hello World");
// });

// // checks with numbers and punctuation
// test("Should handle numbers and punctuation", () => {
//   expect(capitalizeWords("HeLLo 123 WOrLd!")).toBe("Hello 123 World!");
// });

// // checks for multiple spaces
// test("Should handle multiple spaces", () => {
//   expect(capitalizeWords("   Hello     World   ")).toBe("Hello World");
// });

// // checks for an empty string
// test("Should return empty string for empty input", () => {
//   expect(capitalizeWords("")).toBe("");
// });

// // checks for single character
// test("Should capitalize single character", () => {
//   expect(capitalizeWords("a")).toBe("A");
// });

// // checks for single word without spaces
// test("Should handle single word", () => {
//   expect(capitalizeWords("testing")).toBe("Testing");
// });

// import { capitalizeWords } from './path/to/your/function'; // ให้แทนด้วยตระกูลและชื่อไฟล์ที่ถูกต้อง

// test("should capitalize the first letter of each word", () => {
//   // คำพูดที่ไม่มีตัวอักษรใหญ่ใดๆ
//   expect(capitalizeWords("hello world")).toBe("Hello World");
//   // คำพูดที่มีตัวอักษรใหญ่ในตระกูลที่ไม่ใช่ตระกูลแรก
//   expect(capitalizeWords("HeLLo WoRlD")).toBe("Hello World");
//   // คำพูดที่สามารถไม่ใช้เว้นว่างได้
//   expect(capitalizeWords("thisIsATest")).toBe("ThisIsATest");
//   // คำพูดที่มีตัวอักษรพิเศษ
//   expect(capitalizeWords("hello, world!")).toBe("Hello, World!");
//   // คำพูดที่เป็นชื่อประเทศที่มีตัวอักษรใหญ่ในตระกูลใหม่
//   expect(capitalizeWords("united states of america")).toBe(
//     "United States Of America"
//   );
// });

describe("Test capitalize string", () => {
  // แปลงตัวอักษรแรกในทุกคำให้เป็นตัวพิมพ์ใหญ่
  it("converts every first character of each word into uppercase", () => {
    const input = "hello world";
    const expected = "Hello World";
    const result = capitalizeWords(input);
    expect(result).toEqual(expected);
  });

  // แปลงตัวอักษรแรกในทุกคำให้เป็นตัวพิมพ์ใหญ่ กรณีบางคำขึ้นต้นด้วยตัวพิมพ์ใหญ่และพิมพ์เล็กสลับกัน
  it("Should capitalize with mixed cases", () => {
    const input = "hello world. This Is a Different sentence.";
    const expected = "Hello World. This Is A Different Sentence.";
    const result = capitalizeWords(input);
    expect(result).toEqual(expected);
  });

  // แปลงตัวอักษรแรกในทุกคำให้เป็นตัวพิมพ์ใหญ่กรณีที่มีคำเดียว
  it("Should capitalize with one word", () => {
    const input = "hello";
    const expected = "Hello";
    const result = capitalizeWords(input);
    expect(result).toEqual(expected);
  });

  // มีตัวเลขเป็นคำในประโยค
  it("Should handle number in the sentence", () => {
    const input = "hello world 123";
    const expected = "Hello World 123";
    const result = capitalizeWords(input);
    expect(result).toEqual(expected);
  });

   // ทุกๆตัวแรกในแต่ละคำเป็นพิมพ์ใหญ่อยู่แล้ว
   it("Should handle strings that already capitalized", () => {
    const input = "Hello World. This Is Already Capitalized.";
    const expected = "Hello World. This Is Already Capitalized.";
    const result = capitalizeWords(input);
    expect(result).toEqual(expected);
  });

  // ส่งตัวเลขเป็น input
  it("Should handle number input", () => {
    const input = 123;
    expect(() => capitalizeWords(input)).toThrow("split is not a function");
  });

  // ส่ง null เป็น input
  it("Should handle null case", () => {
    const input = null;
    expect(() => capitalizeWords(input)).toThrow(
      "Cannot read properties of null"
    );
  });

  // ส่ง undefined เป็น input
  it("Should handle undefined case", () => {
    const input = undefined;
    expect(() => capitalizeWords(input)).toThrow(
      "Cannot read properties of undefined"
    );
  });
});
