/**
 * 获取某年某月的天数
 * @param year 年份
 * @param month 月份
 * @returns {number}
 */
export const getDaysCount = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * 判断每个月的第一天是星期几
 * @param year 年份
 * @param month 月份
 * @returns {number}
 */
export const getPrefixDaysCount = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
}

/**
 * 判断某一天是否为周末
 * @param year 年份
 * @param month 月份
 * @param day 哪天
 * @returns {boolean}
 */
export const validateIsWeekend = (year: number, month: number, day: number): boolean => {
  const date = new Date(year, month, day);
  return [0, 6].includes(date.getDay());
}

/**
 * 获取上一个月的信息
 * @param year 年份
 * @param month 月份
 * @returns {year: number, month: number, daysCount: number}
 */
export const getPrevMonthInfo = (year: number, month: number) => {
  const prevDate = new Date(year, month - 1);

  const _year = prevDate.getFullYear()
  const _month = prevDate.getMonth()

  return {
    year: _year,
    month: _month,
    daysCount: getDaysCount(_year, _month),
  }
}

/**
 * 将一个数字数组按照指定大小分块
 * @param array 数组
 * @param size 每个块的大小
 * @returns {number[][]}
 */
export const chunk = (array: number[], size: number) => {
  const len = array.length;
  const res = [];

  for (let i = 0; i < len; i += size) {
    res.push(array.slice(i, i + size))
  }

  return res;
}