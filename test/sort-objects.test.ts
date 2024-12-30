// test/sort.test.js
import { sort } from "../src/sort-objects";

// // Test case 1: ทดสอบการรียงเรียงข้อมูลจาก array ของ object ตาม attribute 'name'
// test('should sort objects by name attribute', () => {
//   const data = [
//     { name: 'banana', quantity: 5 },
//     { name: 'apple', quantity: 2 },
//     { name: 'orange', quantity: 4 },
//   ];
//   const expected = [
//     { name: 'apple', quantity: 2 },
//     { name: 'banana', quantity: 5 },
//     { name: 'orange', quantity: 4 },
//   ];
//   expect(sort(data, 'name')).toEqual(expected);
// });

// // Test case 2: ทดสอบการรียงเรียงข้อมูลจาก array ของ object ตาม attribute 'quantity' ในรูปแบบ numeric
// test('should sort objects by quantity attribute in numeric format', () => {
//   const data = [
//     { name: 'banana', quantity: 5 },
//     { name: 'apple', quantity: 2 },
//     { name: 'orange', quantity: 4 },
//   ];
//   const expected = [
//     { name: 'apple', quantity: 2 },
//     { name: 'orange', quantity: 4 },
//     { name: 'banana', quantity: 5 },
//   ];
//   expect(sort(data, 'quantity')).toEqual(expected);
// });

// // Test case 3: ทดสอบการรียงเรียงข้อมูลจาก array ของ object โดยไม่กำหนด attribute จะใช้ค่าว่างเป็นเรื่องต้น
// test('should use empty string as default attribute when not provided', () => {
//   const data = [
//     { name: 'banana', quantity: 5 },
//     { name: 'apple', quantity: 2 },
//     { name: 'orange', quantity: 4 },
//   ];
//   const expected = [
//     { name: 'apple', quantity: 2 },
//     { name: 'banana', quantity: 5 },
//     { name: 'orange', quantity: 4 },
//   ];
//   expect(sort(data)).toEqual(expected);
// });

// // Test case 4: ทดสอบการรียงเรียงข้อมูลใน array ของ object ที่ไม่มี attribute ที่กำหนด
// test('should sort objects with non-existent attribute', () => {
//   const data = [
//     { name: 'banana', quantity: 5 },
//     { name: 'apple', quantity: 2 },
//     { name: 'orange', quantity: 4 },
//   ];
//   const attribute = 'color';
//   const expected = [
//     { name: 'apple', quantity: 2 },
//     { name: 'banana', quantity: 5 },
//     { name: 'orange', quantity: 4 },
//   ];
//   expect(sort(data, attribute)).toEqual(expected);
// });


// Test Case 1: Sort เกี่ยวข้องกับหลักสูตรที่ใช้ในฟังก์ชัน
describe('sort function', () => {
  it('should sort an array of objects by the specified attribute', () => {
    const data = [
      { name: 'banana', price: 2.5 },
      { name: 'apple', price: 1.8 },
      { name: 'cherry', price: 3.2 },
    ];
    const sortedData = sort(data, 'price');
    expect(sortedData).toEqual([
      { name: 'apple', price: 1.8 },
      { name: 'banana', price: 2.5 },
      { name: 'cherry', price: 3.2 },
    ]);
  });

  // Test Case 2: Sort โดยใช้ attribute ที่ไม่มีใน object
  it('should keep the order when sorting by an attribute that does not exist', () => {
    const data = [
      { name: 'banana', price: 2.5 },
      { name: 'apple', price: 1.8 },
      { name: 'cherry', price: 3.2 },
    ];
    const sortedData = sort(data, 'nonExistentAttribute');
    expect(sortedData).toEqual(data);
  });

  // Test Case 3: Sort โดยใช้ attribute ของชนิด string
  it('should sort objects with string attributes', () => {
    const data = [
      { name: 'cherry' },
      { name: 'banana' },
      { name: 'apple' },
    ];
    const sortedData = sort(data, 'name');
    expect(sortedData).toEqual([
      { name: 'apple' },
      { name: 'banana' },
      { name: 'cherry' },
    ]);
  });

  // Test Case 4: Sort โดยใช้ attribute ที่เป็นค่าไม่มี (undefined)
  it('should sort objects with undefined attributes by an empty string', () => {
    const data = [
      { name: 'banana', price: 2.5 },
      { name: 'apple', price: undefined },
      { name: 'cherry', price: 3.2 },
    ];
    const sortedData = sort(data, 'price');
    expect(sortedData).toEqual([
      { name: 'apple', price: undefined },
      { name: 'banana', price: 2.5 },
      { name: 'cherry', price: 3.2 },
    ]);
  });

  // Test Case 5: Sort โดยใช้ attribute ชื่อว่าง ''
  it('should sort objects with an empty attribute name', () => {
    const data = [
      { name: 'banana', price: 2.5 },
      { name: 'apple', price: 1.8 },
      { name: 'cherry', price: 3.2 },
    ];
    const sortedData = sort(data, '');
    expect(sortedData).toEqual(data);
  });
});