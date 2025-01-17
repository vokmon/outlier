export function calculateCircleArea(radius) {
  if (radius <= 0) {
    throw new Error("Radius must be a positive number.");
  }
  const area = Math.PI * Math.pow(radius, 2);
  return area.toFixed(2);
}
