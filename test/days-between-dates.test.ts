import { daysBetweenDates } from "../src/days-between-dates"; // Change 'your-module-name' to the actual name of your module

// test("daysBetweenDates should return 0 when dates are the same", () => {
//   const date = new Date();
//   expect(daysBetweenDates(date, date)).toBe(0);
// });

// test("daysBetweenDates should return 1 when dates are one day apart", () => {
//   const date1 = new Date();
//   const date2 = new Date(date1);
//   date2.setDate(date1.getDate() + 1);
//   expect(daysBetweenDates(date1, date2)).toBe(1);
// });

// test("daysBetweenDates should return the correct number of days between two dates", () => {
//   const date1 = new Date(2023, 11, 1);
//   const date2 = new Date(2023, 11, 3);
//   expect(daysBetweenDates(date1, date2)).toBe(2);
// });

// test("daysBetweenDates should handle dates in different years", () => {
//   const date1 = new Date(2023, 11, 31);
//   const date2 = new Date(2024, 0, 1);
//   expect(daysBetweenDates(date1, date2)).toBe(1);
// });

// test("daysBetweenDates should handle dates in different months", () => {
//   const date1 = new Date(2023, 11, 31);
//   const date2 = new Date(2024, 1, 1);
//   expect(daysBetweenDates(date1, date2)).toBe(32);
// });

// test("daysBetweenDates should handle dates in the past", () => {
//   const date1 = new Date(2023, 11, 3);
//   const date2 = new Date(2023, 11, 1);
//   expect(daysBetweenDates(date1, date2)).toBe(2);
// });

// test("daysBetweenDates should return a positive number when date2 is after date1", () => {
//   const date1 = new Date(2023, 11, 1);
//   const date2 = new Date(2023, 11, 3);
//   expect(daysBetweenDates(date1, date2)).toBe(2);
// });

// test("daysBetweenDates should return a positive number when date1 is after date2", () => {
//   const date1 = new Date(2023, 11, 3);
//   const date2 = new Date(2023, 11, 1);
//   expect(daysBetweenDates(date1, date2)).toBe(2);
// });

// import { daysBetweenDates } from './path-to-your-function'; // Adjust the import path as needed

// test('should return the correct number of days between two dates', () => {
//   // Test with same date
//   const sameDate = new Date(2024, 0, 1);
//   expect(daysBetweenDates(sameDate, sameDate)).toBe(0);

//   // Test with one day difference
//   const oneDayDifference = new Date(2024, 0, 2);
//   expect(daysBetweenDates(sameDate, oneDayDifference)).toBe(1);

//   // Test with multiple days difference
//   const multipleDaysDifference = new Date(2024, 0, 5);
//   expect(daysBetweenDates(sameDate, multipleDaysDifference)).toBe(4);
// });

// test('should handle dates in reverse order', () => {
//   const laterDate = new Date(2024, 0, 3);
//   const earlierDate = new Date(2024, 0, 1);
//   expect(daysBetweenDates(laterDate, earlierDate)).toBe(2);
// });

// test('should work with dates in different months and years', () => {
//   // From end of one year to start of the next
//   const dec31 = new Date(2023, 11, 31);
//   const jan1 = new Date(2024, 0, 1);
//   expect(daysBetweenDates(dec31, jan1)).toBe(1);

//   // From mid of one month to mid of the next
//   const feb15 = new Date(2024, 1, 15);
//   const mar15 = new Date(2024, 2, 15);
//   expect(daysBetweenDates(feb15, mar15)).toBe(28); // February 2024 is not a leap year
// });

// test('should handle leap years', () => {
//   // February 29 in a leap year to March 1
//   const feb29LeapYear = new Date(2024, 1, 29);
//   const mar1LeapYear = new Date(2024, 2, 1);
//   expect(daysBetweenDates(feb29LeapYear, mar1LeapYear)).toBe(1);
// });

// test('should handle default dates (today)', () => {
//   // Calculate difference from today to a specific date
//   const futureDate = new Date(2024, 0, 5);
//   const today = new Date(); // Assuming the test runs before January 5, 2024
//   expect(daysBetweenDates(today, futureDate)).toBeGreaterThanOrEqual(4);

//   // Calculate difference to today
//   const pastDate = new Date(2024, 0, 3);
//   expect(daysBetweenDates(pastDate)).toBeGreaterThanOrEqual(0);
// });

describe("Test daysBetweenDates", () => {
  // วันทั้งสองวันเป็นวันเดียวผลลัพธ์ควรได้ 0
  it("should return 0 when dates are the same", () => {
    const sameDate = new Date();
    expect(daysBetweenDates(sameDate, sameDate)).toBe(0);
  });

  // วันทั้งสองวันเป็น undefined
  it("should return 0 when dates are undefined", () => {
    expect(daysBetweenDates(undefined, undefined)).toBe(0);
  });

  // วันทั้งสองวันเป็น null
  it("should return 0 when dates are null", () => {
    expect(daysBetweenDates(null, null)).toBe(0);
  });

  // วันทั้งสองวัน ห่างกัน 1 วัน
  it("should return 1 when dates are one day apart", () => {
    const currentDate = new Date();
    const oneDayDifference = new Date(currentDate);
    oneDayDifference.setDate(currentDate.getDate() + 1);
    expect(daysBetweenDates(currentDate, oneDayDifference)).toBe(1);
  });

  // ทดสอบระยะหว่างของวันด้วยการกำหนดวันที่เอง
  it("should return the correct number of days between two dates", () => {
    const earlierDate = new Date(2023, 11, 1);
    const laterDate = new Date(2023, 11, 3);
    expect(daysBetweenDates(earlierDate, laterDate)).toBe(2);
  });

  // ทดสอบกรณีที่วันข้ามปี
  it("should handle dates in different years", () => {
    const dateInFirstYear = new Date(2023, 11, 31);
    const dateInAnotherYear = new Date(2024, 0, 1);
    expect(daysBetweenDates(dateInFirstYear, dateInAnotherYear)).toBe(1);
  });

  // ทดสอบกรณีที่วันข้ามเดือน
  it("should handle dates in different months", () => {
    const dateInFirstMonth = new Date(2023, 11, 31);
    const dateInAnotherMonth = new Date(2024, 1, 1);
    expect(daysBetweenDates(dateInFirstMonth, dateInAnotherMonth)).toBe(32);
  });

  // วันที่แรกอยู่หลังวันที่ที่สอง
  it("should return a positive number when second date is after first date", () => {
    const firstDate = new Date(2023, 11, 3);
    const secondDate = new Date(2023, 11, 1);
    expect(daysBetweenDates(firstDate, secondDate)).toBe(2);
  });

  // สามารถจัดการกรณีปีอธิกสุรทิน, 2024 is a leap year
  test("should handle leap years", () => {
    const firstDateInLeapYear = new Date(2024, 1, 28);
    const secondDateInLeapYear = new Date(2024, 2, 1);
    expect(daysBetweenDates(firstDateInLeapYear, secondDateInLeapYear)).toBe(2);
  });

  // สามารถจัดการกรณีวันที่ในอนาคต
  test("should handle dates in the future", () => {
    const currentDate = new Date();
    const nextYear = new Date(currentDate);
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    expect(daysBetweenDates(currentDate, nextYear)).toBeGreaterThanOrEqual(365);
  });
});
