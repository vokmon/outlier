import { describe, it, expect } from 'vitest';
import { chunkArray } from '../src/chunk-arrays';

// describe('chunkArray', () => {
//   // ทดสอบกรณีที่ array เป็น null
//   it('should throw an error if array is null', () => {
//     expect(() => chunkArray(null, 2)).toThrow("Array cannot be null or undefined.");
//   });

//   // ทดสอบกรณีที่ array เป็น undefined
//   it('should throw an error if array is undefined', () => {
//     expect(() => chunkArray(undefined, 2)).toThrow("Array cannot be null or undefined.");
//   });

//   // ทดสอบกรณีที่ array มีขนาดเป็น 0
//   it('should return the same empty array', () => {
//     expect(chunkArray([], 2)).toEqual([]);
//   });

//   // ทดสอบกรณีที่ size น้อยกว่า 1
//   it('should throw an error if size is less than 1', () => {
//     expect(() => chunkArray([1, 2, 3], 0)).toThrow("Size must be greater than 0.");
//     expect(() => chunkArray([1, 2, 3], -1)).toThrow("Size must be greater than 0.");
//   });

//   // ทดสอบกรณีปกติ: แบ่ง array ออกเป็น chunks
//   it('should chunk the array into smaller arrays of specified size', () => {
//     const result = chunkArray([1, 2, 3, 4, 5], 2);
//     expect(result).toEqual([[1, 2], [3, 4], [5]]);
    
//     // ทดสอบกรณีที่ size เป็น 3
//     const result2 = chunkArray([1, 2, 3, 4, 5], 3);
//     expect(result2).toEqual([[1, 2, 3], [4, 5]]);
//   });
// });


// describe('Testing chunkArray function', () => {
  
//   // Test case when array is null
//   it('should throw an error when array is null', () => {
//     expect(() => chunkArray(null, 2)).toThrowError("Array cannot be null or undefined.");
//   });
  
//   // Test case when array is undefined
//   it('should throw an error when array is undefined', () => {
//     expect(() => chunkArray(undefined, 2)).toThrowError("Array cannot be null or undefined.");
//   });

//   // Test case when array is empty
//   it('should return the same empty array when input is an empty array', () => {
//     expect(chunkArray([], 2)).toEqual([]);
//   });

//   // Test case when size is less than or equal to 0
//   it('should throw an error when size is less than or equal to 0', () => {
//     expect(() => chunkArray([1, 2, 3], 0)).toThrowError("Size must be greater than 0.");
//     expect(() => chunkArray([1, 2, 3], -1)).toThrowError("Size must be greater than 0.");
//   });

//   // Test case for valid input
//   it('should chunk the array correctly based on the given size', () => {
//     expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
//     expect(chunkArray([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
//     expect(chunkArray([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
//   });
// });


// test('chunkArray should throw an error for null input', () => {
//   expect(() => chunkArray(null, 2)).toThrowError('Array cannot be null or undefined.');
// });

// test('chunkArray should throw an error for undefined input', () => {
//   expect(() => chunkArray(undefined, 2)).toThrowError('Array cannot be null or undefined.');
// });

// test('chunkArray should return the original array when input array has zero length', () => {
//   expect(chunkArray([], 2)).toEqual([]);
// });

// test('chunkArray should throw an error when size is zero or negative', () => {
//   expect(() => chunkArray([1, 2, 3], 0)).toThrowError('Size must be greater than 0.');
//   expect(() => chunkArray([1, 2, 3], -1)).toThrowError('Size must be greater than 0.');
// });

// test('chunkArray should correctly chunk an array', () => {
//   expect(chunkArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
// });

// test('chunkArray should correctly handle partial last chunk', () => {
//   expect(chunkArray([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
// });

// test('chunkArray should handle single element array', () => {
//   expect(chunkArray([1], 1)).toEqual([[1]]);
// });

// test('chunkArray should handle a larger size than array length', () => {
//   expect(chunkArray([1, 2, 3], 4)).toEqual([[1, 2, 3]]);
// });


describe('Testing chunkArray function', () => {
  
  // กรณี array เป็น null จะได้ error
  it('should throw an error when array is null', () => {
    expect(() => chunkArray(null, 2)).toThrowError("Array cannot be null or undefined.");
  });
  
  // array เป็น undefined จะได้ error
  it('should throw an error when array is undefined', () => {
    expect(() => chunkArray(undefined, 2)).toThrowError("Array cannot be null or undefined.");
  });

  // ส่ง array เปล่า จะได้ผลลัพธ์เปน array เดิม
  it('should return the same empty array when input is an empty array', () => {
    expect(chunkArray([], 2)).toEqual([]);
  });

  // ขนาดของ array ที่กำหนด มีค่าน้อยกว่า 0
  it('should throw an error when size is less than 0', () => {
    expect(() => chunkArray([1, 2, 3], -1)).toThrowError("Size must be greater than 0.");
  });

  // ขนาดของ array ที่กำหนด มีค่าเป็น 0
  it('should throw an error when size is equal to 0', () => {
    expect(() => chunkArray([1, 2, 3], 0)).toThrowError("Size must be greater than 0.");
  });

  // ทดสอบกรณีที่สามารถแบ่ง array ตามที่กำหนดได้
  it('should chunk the array correctly based on the given size', () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunkArray([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
    expect(chunkArray([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  // array ตั้งต้นมีสมาชิกเพียงตัวเดียว
  it('should handle single element array', () => {
    expect(chunkArray([1], 1)).toEqual([[1]]);
  });

  // ขนาดของ array ย่อยมีจำนวนใหญ่กว่าขนาดของ array
  it('should handle a larger size than array length', () => {
    expect(chunkArray([1, 2, 3], 4)).toEqual([[1, 2, 3]]);
  });
});