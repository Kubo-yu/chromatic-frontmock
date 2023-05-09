// 出力例: 100,000
export function addCommas(num: number): string {
  const parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

// 出力例: 100,000.00
export function addDecimal(num: number): string {
  const result = Math.round(num * 100) / 100;
  const numberWithCommas = result.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return numberWithCommas;
}