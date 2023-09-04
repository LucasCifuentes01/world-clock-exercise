export const convert24To12 = (date: Date) => {
  const hours = date.getUTCHours() % 12 || 12;
  const minutes = date.getUTCMinutes();
  const AmOrPm = hours >= 12 ? "PM" : "AM";

  return `${hours}:${minutes} ${AmOrPm}`;
};
