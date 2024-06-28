export const getDaysCount = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
}

export const getPrefixDaysCount = (year: number, month: number) => {
  return new Date(year, month, 0).getDay();
}