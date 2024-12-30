// import { test, expect } from "vitest";
// import { userSignupSchema } from "../../src/schema/user-signup-schema"; // Update the path to your schema file

// test("should allow valid user sign up data", async () => {
//   const validData = {
//     email: "test@example.com",
//     password: "securepassword",
//     firstName: "John",
//     lastName: "Doe",
//   };
//   const parsedData = userSignupSchema.parse(validData);
//   expect(parsedData).toMatchObject(validData); // Verify that the parsed data matches the input
// });

// test("should require email", async () => {
//   const dataWithoutEmail = {
//     password: "securepassword",
//     firstName: "John",
//     lastName: "Doe",
//   };
//   //expect(() => userSignupSchema.parse(dataWithoutEmail)).toThrow("Required");
//   expect(() => userSignupSchema.parse(dataWithoutEmail)).rejects.toThrow("Required");
// });

// test("should require password", async () => {
//   const dataWithoutPassword = {
//     email: "test@example.com",
//     firstName: "John",
//     lastName: "Doe",
//   };
//   await expect(() => userSignupSchema.parse(dataWithoutPassword)).rejects.toThrow("required");
// });

// test("should require password to be at least 6 characters long", async () => {
//   const shortPassword = {
//     email: "test@example.com",
//     password: "123",
//     firstName: "John",
//     lastName: "Doe",
//   };
//   await expect(() => userSignupSchema.parse(shortPassword)).rejects.toThrow("min");
// });

// test("should allow firstName and lastName to be optional", async () => {
//   const dataWithoutNames = {
//     email: "test@example.com",
//     password: "securepassword",
//   };
//   const parsedData = userSignupSchema.parse(dataWithoutNames);
//   expect(parsedData).toEqual({
//     email: "test@example.com",
//     password: "securepassword",
//   });
// });


// userSignupSchema.test.js

// test('should validate a valid user signup', () => {
//   const validData = {
//     email: 'example@example.com',
//     password: 'securepassword123',
//     firstName: 'John',
//     lastName: 'Doe',
//   };
//   expect(userSignupSchema.parse(validData)).toEqual(validData);
//   // ทดสอบว่า schema สามารถ parse ข้อมูลที่ถูกต้องได้และผลลัพธ์ต้องเหมือนกับข้อมูลที่ใส่
// });

// test('should require password to be at least 6 characters', () => {
//   const invalidData = {
//     email: 'example@example.com',
//     password: 'short', // รหัสผ่านต้นทานน้อยกว่า 6 ตัว
//     firstName: 'John',
//     lastName: 'Doe',
//   };
//   expect(() => userSignupSchema.parse(invalidData)).toThrow('password must be at least 6 characters long');
//   // ทดสอบว่าถ้า password น้อยกว่า 6 ตัวจะขึ้น error
// });

// test('should allow firstName and lastName to be optional', () => {
//   const dataWithoutNames = {
//     email: 'example@example.com',
//     password: 'securepassword123',
//   };
//   expect(userSignupSchema.parse(dataWithoutNames)).toEqual(dataWithoutNames);
//   // ทดสอบว่าสามารถส่งข้อมูลได้โดยไม่ต้องใส่ firstName และ lastName
// });

// test('should reject invalid email format', async () => {
//   const invalidEmailData = {
//     email: 'invalidemail',
//     password: 'securepassword123',
//     firstName: 'John',
//     lastName: 'Doe',
//   };
//   await expect(userSignupSchema.parse(invalidEmailData)).rejects.toThrow('email must be a valid email address');
//   // ทดสอบว่าถ้า email ไม่ถูกต้องจะขึ้น error (Zod จะทดสอบ format ของ email โดยตรง)
// });



import { test, expect } from "vitest";
import { userSignupSchema } from "../../src/schema/user-signup-schema"; // Update the path to your schema file

test("should allow valid user sign up data", async () => {
  const validData = {
    email: "test@example.com",
    password: "securepassword",
    firstName: "John",
    lastName: "Doe",
  };
  const parsedData = userSignupSchema.parse(validData);
  expect(parsedData).toMatchObject(validData); // Verify that the parsed data matches the input
});

test("should require email", async () => {
  const dataWithoutEmail = {
    password: "securepassword",
    firstName: "John",
    lastName: "Doe",
  };
  expect(() => userSignupSchema.parse(dataWithoutEmail)).toThrow("Required");
});

test("should require password", async () => {
  const dataWithoutPassword = {
    email: "test@example.com",
    firstName: "John",
    lastName: "Doe",
  };
  expect(() => userSignupSchema.parse(dataWithoutPassword)).toThrow("Required");
});

test("should require password to be at least 6 characters long", async () => {
  const shortPassword = {
    email: "test@example.com",
    password: "123",
    firstName: "John",
    lastName: "Doe",
  };
  expect(() => userSignupSchema.parse(shortPassword)).toThrow("min");
});

test("should allow firstName and lastName to be optional", async () => {
  const dataWithoutNames = {
    email: "test@example.com",
    password: "securepassword",
  };
  const parsedData = userSignupSchema.parse(dataWithoutNames);
  expect(parsedData).toEqual({
    email: "test@example.com",
    password: "securepassword",
  });
});

// test('should reject invalid email format', async () => {
//   const invalidEmailData = {
//     email: 'invalidemail',
//     password: 'securepassword123',
//     firstName: 'John',
//     lastName: 'Doe',
//   };
//   expect(() => userSignupSchema.parse(invalidEmailData)).toThrow("email");
// });