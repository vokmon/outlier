import { userSignupSchema } from "./user-signup-schema.ts";

export const userSigninSchema = userSignupSchema
  .pick({
    email: true,
    password: true,
  })
  .strict();






  const { z } = require('zod');

  // สร้าง schema สำหรับการ sign in ของ user
  const userSignInSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }), // เป็น string ที่มีรูปแบบ email ถูกต้อง
    password: z.string()
               .min(8, { message: "Password must be at least 8 characters long" }) // มีความยาวอย่างน้อย 8 ตัวอักษร
               .regex(/\d/, { message: "Password must contain at least one number" }) // มีตัวเลขอย่างน้อย 1 ตัว
               .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "Password must contain at least one special character" }) // มีอักขระพิเศษอย่างน้อย 1 ตัว
  });
  
  // ตัวอย่าง schema ที่ถูกต้อง
  const validSignInData = {
    email: "user@example.com",
    password: "Passw0rd!"
  };
  const result = userSignInSchema.parse(validSignInData);
  console.log(result);

  // ตัวอย่าง schema ที่ไม่ถูกต้องจะได้ error
  const invalidSignInData = {
    email: "user",
    password: "password!"
  };
 userSignInSchema.parse(invalidSignInData);