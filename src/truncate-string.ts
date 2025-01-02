export const truncateString = (str = "", length = 0) => {
  if (str === null) {
    return "";
  }
  if (length <= 0) {
    return str;
  }
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
};
