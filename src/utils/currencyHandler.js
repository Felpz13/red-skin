export function toCurrency(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function removeCurrency(value) {
  return parseInt(value.toString().replace(".", ""));
}
