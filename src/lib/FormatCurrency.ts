
// 出力例: 1000,00 JPY
export function formatCurrencyJPYLast(num: number): string {
  const formattedNumber = num.toLocaleString("ja-JP");
  return `${formattedNumber} JPY`;
}

// 出力例: JPY 1000,00
export function formatCurrencyJPYFirst(num: number): string {
  const formattedNumber = num.toLocaleString("ja-JP");
  return `JPY ${formattedNumber}`;
}

// 出力例: 100,000.00 USD
export function formatCurrencyUSDLast(num: number): string {
  const formattedNumber = num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `${formattedNumber} USD`;
}

// 出力例: USD 100,000.00
export function formatCurrencyUSDFirst(num: number): string {
  const formattedNumber = num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `USD ${formattedNumber}`;
}

