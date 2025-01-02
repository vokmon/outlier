import { describe, it, expect } from "vitest";
import { z } from "zod";
import { ProductSchema } from "../../src/schema/product-schema"; // เปลี่ยน path ให้ถูกต้อง

// describe('ProductSchema', () => {
//   it('should parse valid product data', () => {
//     const validProduct = {
//       id: 'd9b1d58d-3d2b-4b65-9f4e-bf8a7b7c0b7f',
//       name: 'Product Name',
//       description: 'Product Description',
//       price: 99.99,
//     };
//     const parsed = ProductSchema.parse(validProduct);
//     expect(parsed).toEqual(validProduct);
//   });

//   it('should throw error for missing id', () => {
//     const invalidProduct = {
//       name: 'Product Name',
//       price: 99.99,
//     };
//     expect(() => ProductSchema.parse(invalidProduct)).toThrowError("Id must be in uuid format");
//   });

//   it('should throw error for invalid uuid format id', () => {
//     const invalidProduct = {
//       id: 'invalid-uuid',
//       name: 'Product Name',
//       price: 99.99,
//     };
//     expect(() => ProductSchema.parse(invalidProduct)).toThrowError("Id must be in uuid format");
//   });

//   it('should throw error for missing name', () => {
//     const invalidProduct = {
//       id: 'd9b1d58d-3d2b-4b65-9f4e-bf8a7b7c0b7f',
//       price: 99.99,
//     };
//     expect(() => ProductSchema.parse(invalidProduct)).toThrowError("Name is required");
//   });

//   it('should throw error for negative price', () => {
//     const invalidProduct = {
//       id: 'd9b1d58d-3d2b-4b65-9f4e-bf8a7b7c0b7f',
//       name: 'Product Name',
//       price: -10,
//     };
//     expect(() => ProductSchema.parse(invalidProduct)).toThrowError("Price must be a positive number");
//   });

//   it('should parse product data without description', () => {
//     const validProduct = {
//       id: 'd9b1d58d-3d2b-4b65-9f4e-bf8a7b7c0b7f',
//       name: 'Product Name',
//       price: 49.99,
//     };
//     const parsed = ProductSchema.parse(validProduct);
//     expect(parsed).toEqual(validProduct);
//   });
// });

// describe("ProductSchema", () => {
//   it("should validate a valid product", () => {
//     const validProduct = {
//       id: "123e4567-e89b-12d3-a456-426655440000",
//       name: "Test Product",
//       description: "This is a test product",
//       price: 100.0,
//     };

//     expect(() => ProductSchema.parse(validProduct)).not.toThrow();
//   });

//   it("should invalidate an empty id", () => {
//     const invalidProduct = {
//       id: "",
//       name: "Test Product",
//       description: "This is a test product",
//       price: 100.0,
//     };

//     expect(() => ProductSchema.parse(invalidProduct)).toThrow(z.SchemaError);
//   });

//   it("should invalidate a non-uuid id", () => {
//     const invalidProduct = {
//       id: "invalid-id",
//       name: "Test Product",
//       description: "This is a test product",
//       price: 100.0,
//     };

//     expect(() => ProductSchema.parse(invalidProduct)).toThrow(z.SchemaError);
//   });

//   it("should invalidate an empty name", () => {
//     const invalidProduct = {
//       id: "123e4567-e89b-12d3-a456-426655440000",
//       name: "",
//       description: "This is a test product",
//       price: 100.0,
//     };

//     expect(() => ProductSchema.parse(invalidProduct)).toThrow(z.SchemaError);
//   });

//   it("should invalidate a negative price", () => {
//     const invalidProduct = {
//       id: "123e4567-e89b-12d3-a456-426655440000",
//       name: "Test Product",
//       description: "This is a test product",
//       price: -100.0,
//     };

//     expect(() => ProductSchema.parse(invalidProduct)).toThrow(z.SchemaError);
//   });

//   it("should invalidate a non-numeric price", () => {
//     const invalidProduct = {
//       id: "123e4567-e89b-12d3-a456-426655440000",
//       name: "Test Product",
//       description: "This is a test product",
//       price: "invalid",
//     };

//     expect(() => ProductSchema.parse(invalidProduct)).toThrow(z.SchemaError);
//   });
// });

describe("ProductSchema", () => {
  it("should parse valid product data", () => {
    const validProduct = {
      id: "d9b1d58d-3d2b-4b65-9f4e-bf8a7b7c0b7f",
      name: "Product Name",
      description: "Product Description",
      price: 99.99,
    };
    const parsed = ProductSchema.parse(validProduct);
    expect(parsed).toEqual(validProduct);
  });

  it("should parse product data without description", () => {
    const validProduct = {
      id: "d9b1d58d-3d2b-4b65-9f4e-bf8a7b7c0b7f",
      name: "Product Name",
      price: 49.99,
    };
    const parsed = ProductSchema.parse(validProduct);
    expect(parsed).toEqual(validProduct);
  });

  it("should throw error for missing id", () => {
    const invalidProduct = {
      name: "Product Name",
      price: 99.99,
    };
    expect(() => ProductSchema.parse(invalidProduct)).toThrowError("Required");
  });

  it("should throw error for empty id", () => {
    const invalidProduct = {
      id: "",
      name: "Product Name",
      price: 99.99,
    };
    expect(() => ProductSchema.parse(invalidProduct)).toThrowError(
      "Id must be in uuid format"
    );
  });

  it("should throw error for invalid uuid format id", () => {
    const invalidProduct = {
      id: "invalid-uuid",
      name: "Product Name",
      price: 99.99,
    };
    expect(() => ProductSchema.parse(invalidProduct)).toThrowError(
      "Id must be in uuid format"
    );
  });

  it("should throw error for missing name", () => {
    const invalidProduct = {
      id: "d9b1d58d-3d2b-4b65-9f4e-bf8a7b7c0b7f",
      price: 99.99,
    };
    expect(() => ProductSchema.parse(invalidProduct)).toThrowError("Required");
  });

  it("should throw error for empty name", () => {
    const invalidProduct = {
      id: "d9b1d58d-3d2b-4b65-9f4e-bf8a7b7c0b7f",
      name: "",
      price: 99.99,
    };
    expect(() => ProductSchema.parse(invalidProduct)).toThrowError(
      "Name is required"
    );
  });


  it("should throw error when price is 0", () => {
    const product = {
      id: "d9b1d58d-3d2b-4b65-9f4e-bf8a7b7c0b7f",
      name: "Product Name",
      price: 0,
    };
    expect(() => ProductSchema.parse(product)).toThrowError("Price must be a positive number");
  });
  
  it("should throw error for negative price", () => {
    const invalidProduct = {
      id: "d9b1d58d-3d2b-4b65-9f4e-bf8a7b7c0b7f",
      name: "Product Name",
      price: -10,
    };
    expect(() => ProductSchema.parse(invalidProduct)).toThrowError(
      "Price must be a positive number"
    );
  });
});
