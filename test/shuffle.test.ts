// shuffle.test.js
import { describe, it, expect } from "vitest";
import { shuffle } from "../src/shuffle";

// describe("shuffle function", () => {
//   it("should return the same array if input is empty", () => {
//     const input = [];
//     const result = shuffle(input);
//     expect(result).toEqual(input);
//   });

//   it("should return the same array if input has one element", () => {
//     const input = [42];
//     const result = shuffle(input);
//     expect(result).toEqual(input);
//   });

//   it("should shuffle an array of numbers", () => {
//     const input = [1, 2, 3, 4, 5];
//     const result = shuffle(input);
//     expect(result.length).toBe(input.length);
//     expect(expect.arrayContaining(result)).toEqual(
//       expect.arrayContaining(input)
//     );
//     // expect(result).toEqual(expect.arrayContaining(input))
//   });

//   it("should shuffle an array of strings", () => {
//     const input = ["a", "b", "c", "d"];
//     const result = shuffle(input);
//     expect(result.length).toBe(input.length);
//     expect(expect.arrayContaining(result)).toEqual(
//       expect.arrayContaining(input)
//     );
//   });

//   it("should shuffle an array of booleans", () => {
//     const input = [true, false, true];
//     const result = shuffle(input);
//     expect(result.length).toBe(input.length);
//     expect(expect.arrayContaining(result)).toEqual(
//       expect.arrayContaining(input)
//     );
//   });

//   it("should shuffle an array of objects", () => {
//     const input = [{ id: 1 }, { id: 2 }, { id: 3 }];
//     const result = shuffle(input);
//     expect(result.length).toBe(input.length);
//     expect(expect.arrayContaining(result)).toEqual(
//       expect.arrayContaining(input)
//     );
//   });
// });


describe('shuffle', () => {
  it('should shuffle an array of numbers', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(originalArray);

    expect(shuffledArray.length).toBe(originalArray.length);
    expect(new Set(shuffledArray)).toEqual(new Set(originalArray));
  });

  it('should shuffle an array of strings', () => {
    const originalArray = ['a', 'b', 'c', 'd', 'e'];
    const shuffledArray = shuffle(originalArray);

    expect(shuffledArray.length).toBe(originalArray.length);
    expect(new Set(shuffledArray)).toEqual(new Set(originalArray));
  });

  it('should shuffle an array of booleans', () => {
    const originalArray = [true, false, true, false, true];
    const shuffledArray = shuffle(originalArray);
    
    expect(shuffledArray.length).toBe(originalArray.length);
    expect(new Set(shuffledArray)).toEqual(new Set(originalArray));
  });

  it('should shuffle an array of objects', () => {
    const originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const shuffledArray = shuffle(originalArray);

    expect(shuffledArray.length).toBe(originalArray.length);
    expect(shuffledArray).toEqual(expect.arrayContaining(originalArray));
  });

  it('should return the same array when input is an empty array', () => {
    const originalArray: any[] = [];
    const shuffledArray = shuffle(originalArray);

    expect(shuffledArray).toEqual(originalArray);
  });

  it('should return the same array when input array contains a single element', () => {
    const originalArray = ['x'];
    const shuffledArray = shuffle(originalArray);

    expect(shuffledArray).toEqual(originalArray);
  });
});