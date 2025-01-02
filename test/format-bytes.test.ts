import { formatBytes } from "../src/format-bytes";

// test formatBytes function with Vitest
// describe("formatBytes function", () => {
//   // Test for zero bytes
//   it("should return 0.00 B for zero bytes", () => {
//     expect(formatBytes(0)).toBe("0.00 B");
//   });

//   // Test for positive bytes
//   it("should format positive bytes correctly", () => {
//     expect(formatBytes(1023)).toBe("1023.00 B");
//     expect(formatBytes(1024)).toBe("1.00 KB");
//     expect(formatBytes(1048575)).toBe("1023.99 KB");
//     expect(formatBytes(1048576)).toBe("1.00 MB");
//     expect(formatBytes(1073741823)).toBe("1023.99 MB");
//     expect(formatBytes(1073741824)).toBe("1.00 GB");
//     expect(formatBytes(1099511627775)).toBe("1023.99 GB");
//     expect(formatBytes(1099511627776)).toBe("1.00 TB");
//   });

//   // Test for negative bytes
//   it("should format negative bytes correctly", () => {
//     expect(formatBytes(-1023)).toBe("-1023.00 B");
//     expect(formatBytes(-1024)).toBe("-1.00 KB");
//     expect(formatBytes(-1048575)).toBe("-1023.99 KB");
//     expect(formatBytes(-1048576)).toBe("-1.00 MB");
//     expect(formatBytes(-1073741823)).toBe("-1023.99 MB");
//     expect(formatBytes(-1073741824)).toBe("-1.00 GB");
//     expect(formatBytes(-1099511627775)).toBe("-1023.99 GB");
//     expect(formatBytes(-1099511627776)).toBe("-1.00 TB");
//   });

//   // Test for null input
//   it("should throw an error for null input", () => {
//     expect(() => formatBytes(null)).toThrow("Byte cannot be null.");
//   });
// });

// describe("formatBytes", () => {
//   test("should format bytes correctly", () => {
//     expect(formatBytes(0)).toBe("0.00 B");
//     expect(formatBytes(1023)).toBe("1,023.00 B");
//     expect(formatBytes(1024)).toBe("1.00 KB");
//     expect(formatBytes(1048575)).toBe("1,023.00 KB");
//     expect(formatBytes(1048576)).toBe("1.00 MB");
//     expect(formatBytes(1073741823)).toBe("1,023.00 MB");
//     expect(formatBytes(1073741824)).toBe("1.00 GB");
//     expect(formatBytes(1099511627775)).toBe("1,023.00 GB");
//     expect(formatBytes(1099511627776)).toBe("1.00 TB");
//   });

//   test("should handle negative numbers correctly", () => {
//     expect(formatBytes(-0)).toBe("-0.00 B");
//     expect(formatBytes(-1023)).toBe("-1,023.00 B");
//     expect(formatBytes(-1024)).toBe("-1.00 KB");
//     expect(formatBytes(-1048575)).toBe("-1,023.00 KB");
//     expect(formatBytes(-1048576)).toBe("-1.00 MB");
//     expect(formatBytes(-1073741823)).toBe("-1,023.00 MB");
//     expect(formatBytes(-1073741824)).toBe("-1.00 GB");
//     expect(formatBytes(-1099511627775)).toBe("-1,023.00 GB");
//     expect(formatBytes(-1099511627776)).toBe("-1.00 TB");
//   });
// });

describe("formatBytes function", () => {
  it("should return 0.00 B for zero bytes", () => {
    expect(formatBytes(0)).toBe("0.00 B");
  });

  it("should throw an error for null input", () => {
    expect(() => formatBytes(null)).toThrow("Byte cannot be null.");
  });

  it("should return comma separate correctly", () => {
    expect(formatBytes(1000)).toBe("1,000.00 B");
  });

  it("should return B (bytes) correctly", () => {
    expect(formatBytes(100)).toBe("100.00 B");
  });

  it("should return KB (kilo bytes) correctly", () => {
    expect(formatBytes(1024)).toBe("1.00 KB");
  });

  it("should return MB (mega bytes) correctly", () => {
    expect(formatBytes(1048576)).toBe("1.00 MB");
  });

  it("should return GB (giga bytes) correctly", () => {
    expect(formatBytes(1073741824)).toBe("1.00 GB");
  });

  it("should return TB (terra bytes) correctly", () => {
    expect(formatBytes(1099511627776)).toBe("1.00 TB");
  });

  it("should return TB (terra bytes) for large number", () => {
    expect(formatBytes(9999099511627776)).toBe("9,094.13 TB");
  });

  it("should return format correctly for negative value", () => {
    expect(formatBytes(-1023)).toBe("-1,023.00 B");
  });

  it("should return format correctly when input is decimal", () => {
    expect(formatBytes(1073731823.234)).toBe("1,023.99 MB");
  });
});
