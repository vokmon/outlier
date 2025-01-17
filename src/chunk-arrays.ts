export function chunkArray(array, size) {
  if (!array) {
    throw new Error("Array cannot be null or undefined.");
  }
  if (size <= 0) {
    throw new Error("Size must be greater than 0.");
  }

  if (array.length === 0) {
    return array;
  }
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
