// import { describe } from 'vitest';
import { getTimeOfDay } from '../src/date-utils'; // เปลี่ยนเป็น path ที่ถูกต้อง

describe('getTimeOfDay', () => {
  test('should return "เช้ามืด" for times between 00:00 and 05:59', () => {
    expect(getTimeOfDay(new Date('2023-10-01T00:00:00'))).toBe('เช้ามืด');
    expect(getTimeOfDay(new Date('2023-10-01T05:59:59'))).toBe('เช้ามืด');
  });

  test('should return "เช้า" for times between 06:00 and 11:59', () => {
    expect(getTimeOfDay(new Date('2023-10-01T06:00:00'))).toBe('เช้า');
    expect(getTimeOfDay(new Date('2023-10-01T11:59:59'))).toBe('เช้า');
  });

  test('should return "บ่าย" for times between 12:00 and 14:59', () => {
    expect(getTimeOfDay(new Date('2023-10-01T12:00:00'))).toBe('บ่าย');
    expect(getTimeOfDay(new Date('2023-10-01T14:59:59'))).toBe('บ่าย');
  });

  test('should return "เย็น" for times between 15:00 and 17:59', () => {
    expect(getTimeOfDay(new Date('2023-10-01T15:00:00'))).toBe('เย็น');
    expect(getTimeOfDay(new Date('2023-10-01T17:59:59'))).toBe('เย็น');
  });

  test('should return "ค่ำ" for times between 18:00 and 20:59', () => {
    expect(getTimeOfDay(new Date('2023-10-01T18:00:00'))).toBe('ค่ำ');
    expect(getTimeOfDay(new Date('2023-10-01T20:59:59'))).toBe('ค่ำ');
  });

  test('should return "ดึก" for times between 21:00 and 23:59', () => {
    expect(getTimeOfDay(new Date('2023-10-01T21:00:00'))).toBe('ดึก');
    expect(getTimeOfDay(new Date('2023-10-01T23:59:59'))).toBe('ดึก');
  });
});

// // คำนวณเวลาเป็นภาษาพูดโดยใช้ function getTimeOfDay

// // Test case 1: เช้า
// console.log(getTimeOfDay(new Date(2024, 4, 27, 9, 0, 0)));  // Should output "เช้า"

// // Test case 2: บ่าย
// console.log(getTimeOfDay(new Date(2024, 4, 27, 13, 0, 0)));  // Should output "บ่าย"

// // Test case 3: เย็น
// console.log(getTimeOfDay(new Date(2024, 4, 27, 16, 0, 0)));  // Should output "เย็น"

// // Test case 4: ค่ำ
// console.log(getTimeOfDay(new Date(2024, 4, 27, 19, 0, 0)));  // Should output "ค่ำ"

// // Test case 5: ดึก
// console.log(getTimeOfDay(new Date(2024, 4, 27, 22, 0, 0)));  // Should output "ดึก"

// // Test case 6: เช้ามืด
// console.log(getTimeOfDay(new Date(2024, 4, 27, 1, 0, 0)));   // Should output "เช้ามืด"