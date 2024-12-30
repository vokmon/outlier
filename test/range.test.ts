// import { range } from "../src/range";

// test("กรณีที่ทุกส่วนตัวเป็นตัวเลข", () => {
//   expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
//   expect(range(3, 6)).toEqual([3, 4, 5, 6]);
//   expect(range(-3, 0)).toEqual([-3, -2, -1, 0]);
//   expect(range(5, 2)).toEqual([2, 3, 4, 5]);
//   expect(range(1, 1)).toEqual([1]);
// });

// test("กรณีที่ left และ right เป็นตัวเลขติดลบ", () => {
//   expect(range(-1, -5)).toEqual([-5, -4, -3, -2, -1]);
//   expect(range(-3, -6)).toEqual([-6, -5, -4, -3]);
//   expect(range(-5, -1)).toEqual([-5, -4, -3, -2, -1]);
// });

// test("กรณีที่ส่งค่าสำหรับ left ที่ไม่ใช่ตัวเลข", () => {
//   expect(() => range("a", 5)).toThrowError("All the argument must be integers");
//   expect(() => range(null, 5)).toThrowError(
//     "All the argument must be integers"
//   );
//   expect(() => range(undefined, 5)).toThrowError(
//     "All the argument must be integers"
//   );
//   expect(() => range(true, 5)).toThrowError(
//     "All the argument must be integers"
//   );
//   expect(() => range({}, 5)).toThrowError("All the argument must be integers");
// });

// test("กรณีที่ส่งค่าสำหรับ right ที่ไม่ใช่ตัวเลข", () => {
//   expect(() => range(1, "a")).toThrowError("All the argument must be integers");
//   expect(() => range(1, null)).toThrowError(
//     "All the argument must be integers"
//   );
//   expect(() => range(1, undefined)).toThrowError(
//     "All the argument must be integers"
//   );
//   expect(() => range(1, true)).toThrowError(
//     "All the argument must be integers"
//   );
//   expect(() => range(1, {})).toThrowError("All the argument must be integers");
// });

// test("กรณีที่ส่งค่าสำหรับ left และ right ที่ไม่ใช่ตัวเลข", () => {
//   expect(() => range("a", "b")).toThrowError(
//     "All the argument must be integers"
//   );
//   expect(() => range(null, undefined)).toThrowError(
//     "All the argument must be integers"
//   );
//   expect(() => range(true, false)).toThrowError(
//     "All the argument must be integers"
//   );
//   expect(() => range({}, [])).toThrowError("All the argument must be integers");
// });




import { range } from "../src/range"; // Adjust the import path as needed

describe('range function', () => {
  it('should return an array from left to right', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an array from right to left when right is less than left', () => {
    expect(range(5, 2)).toEqual([2, 3, 4, 5]);
  });

  it('should return an array with a single element when left is equal to right', () => {
    expect(range(1, 1)).toEqual([1]);
  });

  it('should handle negative numbers', () => {
    expect(range(-3, 0)).toEqual([-3, -2, -1, 0]);
    expect(range(0, -3)).toEqual([-3, -2, -1, 0]);
  });

  it('should throw an error if left is not an integer', () => {
    expect(() => range('1', 5)).toThrowError('All the argument must be integers');
  });

  it('should throw an error if right is not an integer', () => {
    expect(() => range(1, '5')).toThrowError('All the argument must be integers');
  });

  it('should throw an error if both left and right are not integers', () => {
    expect(() => range('1', '5')).toThrowError('All the argument must be integers');
  });
});