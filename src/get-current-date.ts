export function getCurrentDate(
  locale: string,
  monthFormat: "2-digit" | "short" = "short"
) {
  const currentDate = new Date();
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: monthFormat,
    year: "numeric",
  }).format(currentDate);
}
