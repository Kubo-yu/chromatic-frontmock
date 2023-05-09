import { addCommas, addDecimal } from "../lib/FormatNumber";


type FormatDateProps = {
  number: number;
  format: number;
};


// format
// 1: 100,000
// 2: 100,000.00
export default function FormatNumber({ number, format }: FormatDateProps) {

  let formatNumber: string = "";
  switch (format) {
    case 1:
      formatNumber = addCommas(number);
      break
    case 2:
      formatNumber = addDecimal(number);
      break
  }
  return(
    <>
      <p>{formatNumber}</p>
    </>
  )
}