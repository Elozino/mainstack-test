export function getDate(inputDate: Date) {
  if (!inputDate) return;
  const date = new Date(inputDate);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export function getLast7Days() {
  const today = new Date();

  const seventhDayBefore = new Date(today);
  seventhDayBefore.setDate(today.getDate() - 7);

  const formattedDate = seventhDayBefore.toISOString().split("T")[0];

  return formattedDate;
}

export function getThisMonth() {
  const today = new Date();

  const seventhMonthBefore = new Date(today);
  seventhMonthBefore.setMonth(today.getMonth());
  const formattedDate = seventhMonthBefore.toISOString().split("T")[0];
  return formattedDate;
}

export function getLast3Months() {
  const today = new Date();

  // Calculate the date of the same day of the month 3 months before today
  const thirdMonthBefore = new Date(today);
  thirdMonthBefore.setMonth(today.getMonth() - 3);

  const formattedDate = thirdMonthBefore.toISOString().split("T")[0];

  return formattedDate;
}

export function isDateWithinTimeFrame(
  date: string,
  start: string,
  end: string
) {
  if (!date || !start || !end) return;
  return date >= start && date <= end;
}
