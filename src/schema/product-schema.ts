import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string().uuid("Id must be in uuid format"), // Assuming the ID is a UUID
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(), // Description is optional
  price: z.number().positive("Price must be a positive number"),
});


// 0 price.
// empty id, name