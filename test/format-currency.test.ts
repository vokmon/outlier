import { describe, it, expect } from "vitest";
import { formatCurrency } from "../src/format-currency";

describe('formatCurrency', () => {
  it('should format 0 to ฿0.00', () => {
    expect(formatCurrency(0, "THB", "th-TH")).toBe('฿0.00');
  });

  it('should format 1234.56 to ฿1,234.56', () => {
    expect(formatCurrency(1234.56, "THB", "th-TH")).toBe('฿1,234.56');
  });

  it('should format 123456789.12 to ฿123,456,789.12', () => {
    expect(formatCurrency(123456789.12, "THB", "th-TH")).toBe('฿123,456,789.12');
  });

  it('should format 1234 to ฿1,234.00', () => {
    expect(formatCurrency(1234, "THB", "th-TH")).toBe('฿1,234.00');
  });

  it('should format string of 1234 to ฿1,234.00', () => {
    expect(formatCurrency('1234', "THB", "th-TH")).toBe('฿1,234.00');
  });

  it('should format string of -1234 to -฿1,234.00', () => {
    expect(formatCurrency('-1234', "THB", "th-TH")).toBe('-฿1,234.00');
  });

  it('should format -1234.56 to -฿1,234.56', () => {
    expect(formatCurrency(-1234.56, "THB", "th-TH")).toBe('-฿1,234.56');
  });

  it('should return ฿NaN for non-numeric string input', () => {
    expect(formatCurrency('abc', "THB", "th-TH")).toContain('NaN');
  });

  it('should return ฿NaN for formatted string input', () => {
    expect(formatCurrency('฿1,234.00', "THB", "th-TH")).toContain('NaN');
  });

  it('should return ฿0.00 for empty string input', () => {
    expect(formatCurrency('', "THB", "th-TH")).toBe('฿0.00');
  });

  it('should format null value as ฿0.00', () => {
    expect(formatCurrency(null, "THB", "th-TH")).toBe('฿0.00');
  });
  
  it('should format undefined value as ฿0.00', () => {
    expect(formatCurrency(undefined, "THB", "th-TH")).toBe('฿0.00');
  });
});

// test("มีธนาคารหรือไม่", () => {
//   // Default currency: THB expect(formatCurrency(1000)).toBe('฿1,000.00'); expect(formatCurrency(12345.67)).toBe('฿12,345.67'); expect(formatCurrency(-12345.67)).toBe('-฿12,345.67');

//   // Validate avec currency spécifié expect(formatCurrency(1000, 'THB')).toBe('฿1,000.00'); });

//   test("ข้อมูล edge case", () => {
//     expect(formatCurrency(0)).toBe("฿0.00");
//     expect(formatCurrency("string")).toBe("฿NaN");
//     expect(formatCurrency()).toBe("฿0.00");
//   });

//   test("minimumFractionDigits", () => {
//     expect(formatCurrency(1.1)).toBe("฿1.10");
//     expect(formatCurrency(1)).toBe("฿1.00");
//   });
// });

// null and undefined
