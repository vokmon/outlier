export const uniqueObject = (arr: any[]) => {
  if (!arr || arr.length === 0) {
    return arr;
  }
  return [...new Map(arr.map((obj) => [JSON.stringify(obj), obj])).values()];
};
