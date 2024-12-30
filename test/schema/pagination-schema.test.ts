import { ZodError } from "zod";
import {
  PaginationSchema,
  MIN_LIMIT,
  MAX_LIMIT,
  DEFAULT_LIMIT,
} from "../../src/schema/pagination-schema"; // Update the path to your schema file
import { test } from "vitest";

// // Test case 1: Default values
// test("should return default values when no query parameters are provided", () => {
//   const result = PaginationSchema.parse({});
//   expect(result).toEqual({ page: 1, limit: 10 });
// });

// // Test case 2: Valid page and limit
// test("should return valid values for provided page and limit", () => {
//   const result = PaginationSchema.parse({ page: "2", limit: "30" });
//   expect(result).toEqual({ page: 2, limit: 30 });
// });

// // Test case 3: Invalid page (less than 1)
// test("should throw an error for invalid page (less than 1)", () => {
//   expect(() => PaginationSchema.parse({ page: "0" })).toThrowError(
//     "Page must be greater than 0"
//   );
// });

// // Test case 4: Invalid limit (less than minimum)
// test("should throw an error for invalid limit (less than minimum)", () => {
//   expect(() => PaginationSchema.parse({ limit: "0" })).toThrowError(
//     `Limit must be greater than ${
//       PaginationSchema.definitions.limit.minValue - 1
//     }`
//   );
// });

// // Test case 5: Invalid limit (greater than maximum)
// test("should throw an error for invalid limit (greater than maximum)", () => {
//   expect(() => PaginationSchema.parse({ limit: "101" })).toThrowError(
//     `Limit must be less than or equal to ${PaginationSchema.definitions.limit.maxValue}`
//   );
// });

// // Test case 6: Invalid page (non-numeric)
// test("should throw an error for invalid page (non-numeric)", () => {
//   expect(() => PaginationSchema.parse({ page: "abc" })).toThrowError(
//     "Page must be greater than 0"
//   );
// });

// // Test case 7: Invalid limit (non-numeric)
// test("should throw an error for invalid limit (non-numeric)", () => {
//   expect(() => PaginationSchema.parse({ limit: "abc" })).toThrowError(
//     `Limit must be greater than ${
//       PaginationSchema.definitions.limit.minValue - 1
//     }`
//   );
// });

// ทดสอบการส่งข้อมูลเปล่าและได้ค่าเริ่มต้น
test("should use default values if page and limit are not provided", () => {
  const data = {};
  const parsedData = PaginationSchema.parse(data);

  expect(parsedData).toEqual({
    page: MIN_LIMIT,
    limit: DEFAULT_LIMIT,
  });
});

// ใส่ข้อมูลที่ถูกต้อง
test("should parse valid page and limit values", () => {
  const data = { page: "2", limit: "50" };
  const parsedData = PaginationSchema.parse(data);

  expect(parsedData).toEqual({
    page: 2,
    limit: 50,
  });
});

// ทดสอบใส่ข้อมูล page ติดลบ
test("should throw an error if page is less than 0", () => {
  const data = { page: '-1' };

  expect(() => PaginationSchema.parse(data)).toThrow(
    `Page must be greater than 0`
  );
});

// ทดสอบด้วยข้อมูล page ที่ไม่ใช่ตัวเลข
test("should throw an error if page is not a number", () => {
  const data = { page: "abc" };

  expect(() => PaginationSchema.parse(data)).toThrow(
    "Page must be greater than 0"
  );
});

// ทดสอบใส่ข้อมูล page ที่มีค่าน้อยกว่า MIN_LIMIT
test("should throw an error if limit is less than MIN_LIMIT", () => {
  const data = { limit: String(MIN_LIMIT - 1) };

  expect(() => PaginationSchema.parse(data)).toThrow(
    `Limit must be greater than 0.`
  );
});

// ทดสอบการใส่ข้อมูล limit ที่มากกว่า MAX_LIMIT
test("should throw an error if limit is greater than MAX_LIMIT", () => {
  const data = { limit: String(MAX_LIMIT + 1) };

  expect(() => PaginationSchema.parse(data)).toThrow(
    "Limit must be less than or equal to 100"
  );
});

// ทดสอบการใส่ข้อมูล limit ที่ไม่ใช่ตัวเลข
test("should throw an error if limit is not a number", () => {
  const data = { limit: "abc" };

  expect(() => PaginationSchema.parse(data)).toThrow(
    "Limit must be greater than 0"
  );
});

// ทดสอบการใส่ข้อมูล limit ติดลบ
test("should throw an error if limit is less than 0", () => {
  const data = { limit: "-1" };

  expect(() => PaginationSchema.parse(data)).toThrow(
    "Limit must be greater than 0"
  );
});
