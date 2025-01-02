export function formatCurrency(amount = 0, currency = "THB", locale = "th-TH") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}
