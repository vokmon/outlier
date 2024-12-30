import { describe, expect, it } from "vitest";
import { isValidUrl } from "../src/url-utils";

describe("isValidUrl", () => {
  it("should return true for valid http URL", () => {
    expect(isValidUrl("http://www.example.com")).toBe(true);
  });

  it("should return true for valid https URL", () => {
    expect(isValidUrl("https://www.example.com")).toBe(true);
  });

  it("should return true for valid URL with port", () => {
    expect(isValidUrl("http://localhost:3000/path")).toBe(true);
  });

  it("should return true for valid URL with path, query and fragment", () => {
    expect(
      isValidUrl("https://www.example.com/path?query=value#fragment")
    ).toBe(true);
  });

  it("should return false for invalid scheme", () => {
    expect(isValidUrl("ftp://www.example.com")).toBe(false);
  });

  it("should return false for invalid URL format", () => {
    expect(isValidUrl("htp://invalid-url")).toBe(false);
  });

  it("should return false for empty string", () => {
    expect(isValidUrl("")).toBe(false);
  });

  it("should return false for invalid hostname", () => {
    expect(isValidUrl("http://invalid_hostname")).toBe(false); // return true
  });

  it("should return false for URL without scheme", () => {
    expect(isValidUrl("www.example.com")).toBe(false);
  });

  it("should return false for URL with only scheme", () => {
    expect(isValidUrl("http:")).toBe(false);
  });

  it("should return true for URL with ip address", () => {
    expect(isValidUrl("http://192.168.1.1")).toBe(true);
  });

  it("should return false for invalid url format", () => {
    expect(isValidUrl("random string")).toBe(false);
  });
});

// describe('isValidUrl', () => {
//   // Valid URLs
//   test('Valid http URL', () => {
//     expect(isValidUrl('http://example.com')).toBe(true);
//   });
//   test('Valid https URL', () => {
//     expect(isValidUrl('https://example.com')).toBe(true);
//   });
//   test('Valid URL with path', () => {
//     expect(isValidUrl('https://example.com/path/to/page')).toBe(true);
//   });
//   test('Valid URL with query string', () => {
//     expect(isValidUrl('https://example.com?key=value')).toBe(true);
//   });
//   test('Valid URL with fragment', () => {
//     expect(isValidUrl('https://example.com#fragment')).toBe(true);
//   });
//   test('Valid URL with hostname and port', () => {
//     expect(isValidUrl('https://localhost:8080')).toBe(true);
//   });
//   // Invalid URLs
//   test('Invalid URL scheme', () => {
//     expect(isValidUrl('ftp://example.com')).toBe(false);
//   });
//   test('Invalid URL without scheme', () => {
//     expect(isValidUrl('//example.com')).toBe(false);
//   });
//   test('Invalid URL with whitespace', () => {
//     expect(isValidUrl('http://example com')).toBe(false);
//   });
//   test('Invalid URL protocol', () => {
//     expect(isValidUrl('intrnet://test')).toBe(false);
//   });
//   test('Invalid URL missing host', () => {
//     expect(isValidUrl('http:///')).toBe(false);
//   });
//   test('Invalid URL insent correct scheme or http:// or https://', () => {
//     expect(isValidUrl('://example.com')).toBe(false);
//   });
//  });
