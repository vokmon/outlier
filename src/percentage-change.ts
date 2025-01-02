export const percentageChange = (oldValue = 0, newValue = 0) => {
  if (oldValue === null || newValue === null) {
    throw new Error("The arguments oldValue and newValue cannot be null.");
  }
  return ((newValue - oldValue) / Math.abs(oldValue)) * 100;
};
