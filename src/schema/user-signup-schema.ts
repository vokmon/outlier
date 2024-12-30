import { z } from "zod";

export const userSignupSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
  })
  .strict();
