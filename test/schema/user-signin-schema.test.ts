// import { userSigninSchema } from "../../src/schema/user-signin-schema";

// describe("userSigninSchema", () => {
//   it("should pass with valid email and password", () => {
//     const validData = {
//       email: "test@example.com",
//       password: "password123",
//     };

//     // ค่าที่ส่งตรงกับ schema ควรจะไม่มี error เกิดขึ้น
//     expect(() => userSigninSchema.parse(validData)).not.toThrow();
//   });

//   it("should fail with invalid email format", () => {
//     const invalidEmailData = {
//       email: "invalid-email",
//       password: "password123",
//     };

//     // ค่าที่ใส่ให้มี format email ที่ไม่ถูกต้อง ควรจะเกิด error
//     expect(() => userSigninSchema.parse(invalidEmailData)).toThrow(
//       /Invalid email address/
//     );
//   });

//   it("should fail with short password", () => {
//     const shortPasswordData = {
//       email: "test@example.com",
//       password: "short",
//     };

//     // ค่าที่ใส่มี password ที่สั้นเกินไป ควรจะเกิด error
//     expect(() => userSigninSchema.parse(shortPasswordData)).toThrow(
//       /Password must be at least 6 characters long/
//     );
//   });

//   it("should fail when email is missing", () => {
//     const missingEmailData = {
//       password: "password123",
//     };

//     // ค่าที่ส่งไม่มี email ควรจะเกิด error
//     expect(() => userSigninSchema.parse(missingEmailData)).toThrow();
//   });

//   it("should fail when password is missing", () => {
//     const missingPasswordData = {
//       email: "test@example.com",
//     };

//     // ค่าที่ส่งไม่มี password ควรจะเกิด error
//     expect(() => userSigninSchema.parse(missingPasswordData)).toThrow();
//   });
// });

// describe('userSigninSchema Tests', () => {
//   it('should pass when valid email and password are provided', () => {
//     const validSigninData = {
//       email: 'example@example.com',
//       password: 'secure123',
//     };
    
//     expect(() => userSigninSchema.parse(validSigninData)).not.toThrow();
//   });

//   it('should fail when email is missing', () => {
//     const invalidSigninData = {
//       password: 'secure123',
//     };
    
//     expect(() => userSigninSchema.parse(invalidSigninData)).toThrow('Required');
//   });

//   it('should fail when password is missing', () => {
//     const invalidSigninData = {
//       email: 'example@example.com',
//     };
    
//     expect(() => userSigninSchema.parse(invalidSigninData)).toThrow('Required');
//   });

//   it('should fail when email is invalid format', () => {
//     const invalidSigninData = {
//       email: 'not-an-email',
//       password: 'secure123',
//     };

//     expect(() => userSigninSchema.parse(invalidSigninData)).toThrow('Invalid email address');
//   });

//   it('should fail when password is less than 6 characters', () => {
//     const invalidSigninData = {
//       email: 'example@example.com',
//       password: '123',
//     };

//     expect(() => userSigninSchema.parse(invalidSigninData)).toThrow('Password must be at least 6 characters long');
//   });
// });

import { userSigninSchema } from "../../src/schema/user-signin-schema"; // เปลี่ยนเป็น path ที่ถูกต้อง

describe("userSigninSchema", () => {
  it("should pass with valid email and password", () => {
    const validData = {
      email: "test@example.com",
      password: "password123",
    };

    // ค่าที่ส่งตรงกับ schema ควรจะไม่มี error เกิดขึ้น
    expect(() => userSigninSchema.parse(validData)).not.toThrow();
  });

  it("should fail with invalid email format", () => {
    const invalidEmailData = {
      email: "invalid-email",
      password: "password123",
    };

    // ค่าที่ใส่ให้มี format email ที่ไม่ถูกต้อง ควรจะเกิด error
    expect(() => userSigninSchema.parse(invalidEmailData)).toThrow(
      /Invalid email address/
    );
  });

  it("should fail with short password", () => {
    const shortPasswordData = {
      email: "test@example.com",
      password: "short",
    };

    // ค่าที่ใส่มี password ที่สั้นเกินไป ควรจะเกิด error
    expect(() => userSigninSchema.parse(shortPasswordData)).toThrow(
      /Password must be at least 6 characters long/
    );
  });

  it("should fail when email is missing", () => {
    const missingEmailData = {
      password: "password123",
    };

    // ค่าที่ส่งไม่มี email ควรจะเกิด error
    expect(() => userSigninSchema.parse(missingEmailData)).toThrow('Required');
  });

  it("should fail when password is missing", () => {
    const missingPasswordData = {
      email: "test@example.com",
    };

    // ค่าที่ส่งไม่มี password ควรจะเกิด error
    expect(() => userSigninSchema.parse(missingPasswordData)).toThrow('Required');
  });
});