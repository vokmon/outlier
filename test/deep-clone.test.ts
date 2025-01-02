import { describe, it, expect } from "vitest";
import { deepClone } from "../src/deep-clone"; // Adjust the import path as necessary

// describe('deepClone function', () => {

//   it('should clone a single level object', () => {
//     const original = { a: 1, b: 2, c: 3 };
//     const cloned = deepClone(original);
//     expect(cloned).toEqual(original);
//     cloned.a = 100;
//     expect(original.a).toBe(1);
//   });

//   it('should clone a nested object', () => {
//     const original = { a: 1, b: { c: 2, d: { e: 3 } } };
//     const cloned = deepClone(original);
//     expect(cloned).toEqual(original);
//     cloned.b.c = 100;
//     expect(original.b.c).toBe(2);
//     cloned.b.d.e = 300;
//     expect(original.b.d.e).toBe(3);
//   });

//   it('should retain object structure even after cloning', () => {
//     const original = { a: { b: { c: { d: 4 } } } };
//     const cloned = deepClone(original);
//     expect(cloned.a.b.c.d).toBe(4);
//     cloned.a.b.c.d = 100;
//     expect(original.a.b.c.d).toBe(4);
//   });

//   it('should handle array properties in objects', () => {
//     const original = { a: [1, 2, 3], b: { c: [4, 5, 6] } };
//     const cloned = deepClone(original);
//     expect(cloned).toEqual(original);
//     cloned.a[0] = 100;
//     expect(original.a[0]).toBe(1);
//     cloned.b.c[1] = 500;
//     expect(original.b.c[1]).toBe(5);
//   });

// });

describe("deepClone", () => {
  it("should clone a flat object", () => {
    const original = { a: 1, b: 2, c: 3 };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
  });

  it("should clone a nested object", () => {
    const original = { a: 1, b: { c: 2, d: { e: 3 } } };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.b).not.toBe(original.b);
    expect(cloned.b.d).not.toBe(original.b.d);
  });

  it("modifying cloned object should not affect the original", () => {
    const original = { a: 1, b: { c: 2, d: { e: 3 } } };
    const cloned = deepClone(original);

    const bcValue = 42;
    const bdeValue = 99;
    cloned.b.c = bcValue;
    cloned.b.d.e = bdeValue;
    expect(cloned.b.c).toBe(bcValue);
    expect(cloned.b.d.e).toBe(bdeValue);

    expect(original.b.c).toBe(2);
    expect(original.b.d.e).toBe(3);
  });

  it("should handle objects with array properties", () => {
    const original = { a: [1, 2, 3], b: { c: [4, 5] } };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.a).not.toBe(original.a);
    expect(cloned.b.c).not.toBe(original.b.c);
  });

  it("modifying arrays in cloned object should not affect the original", () => {
    const original = { a: [1, 2, 3], b: { c: [4, 5] } };
    const cloned = deepClone(original);

    const aValue = 6;
    const bcValue = 99;
    cloned.a.push(aValue);
    cloned.b.c[0] = bcValue;
    expect(cloned.a).toEqual([1, 2, 3, aValue]);
    expect(cloned.b.c).toEqual([bcValue, 5]);

    expect(original.a).toEqual([1, 2, 3]);
    expect(original.b.c).toEqual([4, 5]);
  });

  it("should return null when null is provided", () => {
    const original = null;
    const cloned = deepClone(original);
    expect(original).toBe(cloned);
    expect(cloned).toBeNull();
  });

  it("should return undefined when null is provided", () => {
    const original = undefined;
    const cloned = deepClone(original);
    expect(original).toBe(cloned);
    expect(cloned).toBeUndefined();
  });
});
