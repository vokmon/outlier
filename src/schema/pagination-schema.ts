import { z } from "zod";

export const MIN_LIMIT = 1;
export const MAX_LIMIT = 100;
export const DEFAULT_LIMIT = 10;

export const PaginationSchema = z.object({
  page: z
    .string()
    .optional()
    .default("1")
    .transform((val) => parseInt(val, 10))
    .refine((val) => val > 0, { message: "Page must be greater than 0" }),

  limit: z
    .string()
    .optional()
    .default(String(DEFAULT_LIMIT))
    .transform((val) => parseInt(val, 10))
    .refine((val) => val >= MIN_LIMIT, {
      message: `Limit must be greater than ${MIN_LIMIT - 1}`,
    })
    .refine((val) => val <= MAX_LIMIT, {
      message: `Limit must be less than or equal to ${MAX_LIMIT}`,
    }),
});
