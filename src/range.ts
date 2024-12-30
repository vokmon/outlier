export const range = (left: any, right: any) => {
  if (!Number.isInteger(left) || !Number.isInteger(right)) {
    throw new Error("All the argument must be integers")
  }
  const min = Math.min(left, right);
  const max = Math.max(left, right);
  const data = [];
  for (let i = min; i <= max; i++) {
    data.push(i);
  }
  return data;
};