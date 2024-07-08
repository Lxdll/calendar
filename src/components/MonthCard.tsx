/**
 * @author: lxdll
 * Month Card
 */

import classNames from "classnames";
import { MonthNames, Week } from "../options";
import {
  getPrefixDaysCount,
  getPrevMonthInfo,
  validateIsWeekend,
} from "../utils";

interface MonthCardProps {
  year: number;
  month: number;
}

const MAX_DAYS = 7 * 6 + Week.length;
const today = new Date();

export default function MonthCard(props: MonthCardProps) {
  const { year, month } = props;

  const prefixDays = getPrefixDaysCount(year, month);
  const { daysCount: prevMonthDaysCount } = getPrevMonthInfo(year, month);

  const getData = () => {
    const data = [];

    const days = new Date(year, month + 1, 0).getDate();

    Week.forEach((item) => {
      data.push(
        <div key={item} className="calendar-week-header">
          {item}
        </div>
      );
    });

    if (prefixDays > 0) {
      Array.from({ length: prevMonthDaysCount })
        .map((_, index) => index + 1)
        .slice(-prefixDays)
        .forEach((item) => {
          data.push(
            <div key={`prevMonth-${item}`} className="calendar-prev-month-day">
              {item}
            </div>
          );
        });
    }

    for (let i = 1; i <= days; i++) {
      const isWeekend = validateIsWeekend(year, month, i);
      const isToday =
        today.getFullYear() === year &&
        today.getMonth() === month &&
        today.getDate() === i;

      data.push(
        <div
          key={`${year}-${month}-${i}`}
          className={classNames(
            "calendar-day",
            isWeekend && "weekend",
            isToday && "today"
          )}
        >
          {i}
        </div>
      );
    }

    const suffixDays = MAX_DAYS - data.length;
    for (let i = 1; i <= suffixDays; i++) {
      data.push(
        <div key={`nextMonth-${i}`} className="calendar-next-month-day">
          {i}
        </div>
      );
    }

    return data;
  };

  return (
    <div className="flex flex-col flex-1 min-w-[180px]">
      <h1 className="calendar-month-name my-1 ml-3 text-xl">
        {MonthNames[month]}
      </h1>
      <div className="flex flex-wrap">{getData()}</div>
    </div>
  );
}
