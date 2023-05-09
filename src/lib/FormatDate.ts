
// 出力例: 2020/01/01
export function formatDateWithSlash(date: Date): string {
  const year = date.getFullYear().toString().padStart(4, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}/${month}/${day}`;
}

// 出力例: 2020/01/01 (月)
export function formatDateWithSlashAndDay(date: Date): string {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"][date.getDay()];

  return `${year}/${month}/${day}(${dayOfWeek})`;
}

// 出力例: 2020-01-01
export function formatDateWithHyphen(date: Date): string {
  const year = date.getFullYear().toString().padStart(4, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// 出力例: 2020-01-01 00:00
export function formatDateTimeWithHyphen(date: Date): string {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}