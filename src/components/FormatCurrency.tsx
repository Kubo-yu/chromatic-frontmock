import { formatCurrencyJPYFirst, formatCurrencyJPYLast, formatCurrencyUSDFirst, formatCurrencyUSDLast } from "../lib/FormatCurrency";


type FormatDateProps = {
  number: number;
  format: number;
};


// format
// 1: 1000,00 JPY
// 2: JPY 1000,00
// 3: 100,000.00 USD
// 4: USD 100,000.00
export default function FormatCurrency({ number, format }: FormatDateProps) {

  let formatMoney: string = "";
  switch (format) {
    case 1:
      formatMoney = formatCurrencyJPYLast(number);
      break
    case 2:
      formatMoney = formatCurrencyJPYFirst(number);
      break
    case 3:
      formatMoney = formatCurrencyUSDLast(number);
      break
    case 4:
      formatMoney = formatCurrencyUSDFirst(number);
      break
  }
  return(
    <>
      <p>{formatMoney}</p>
    </>
  )
}