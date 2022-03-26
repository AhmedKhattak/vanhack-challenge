export function formartCurrency(number: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
  }).format(number);
}
