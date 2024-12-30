export const sort = (arr: any[], attr: string) =>
  arr.sort((a, b) =>
    (a[attr] || "").toString().localeCompare(b[attr] || "", undefined, {
      numeric: true,
      sensitivity: "base",
    })
  );
