export function daysBetweenDates(date1 = new Date(), date2 = new Date()) {
  const diffTime = Math.abs(new Date(date2) - new Date(date1));
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
