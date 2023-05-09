import { formatDateWithSlash, formatDateWithSlashAndDay, formatDateWithHyphen, formatDateTimeWithHyphen } from "../lib/FormatDate";

type FormatDateProps = {
  date: Date;
  format: number;
};

// format
// 1: YYYY/MM/DD
// 2: YYYY/MM/DD(Day)
// 3: YYYY-MM-DD
// 4: YYYY-MM-DD hh:mm
export default function FormatDate({ date, format }: FormatDateProps) {
  let formatDate: string = "";
  switch (format) {
    case 1:
      formatDate = formatDateWithSlash(date);
      break
    case 2:
      formatDate = formatDateWithSlashAndDay(date);
      break
    case 3:
      formatDate = formatDateWithHyphen(date);
      break
    case 4:
      formatDate = formatDateTimeWithHyphen(date);
      break
    default:
      formatDate = formatDateWithSlash(date);
      break
  }

  return(
    <>
      <p>{formatDate}</p>
    </>
  )
}
