/**
 * @author: Lxdll
 * description
 */

interface MonthCardProps {}

const MAX_DAYS = 7 * 6;

const Week = ["日", "一", "二", "三", "四", "五", "六"];

export default function MonthCard(props: MonthCardProps) {
  const getData = () => {
    const data = [];

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();

    const days = new Date(year, month + 1, 0).getDate();

    Week.forEach((item) => {
      data.push(<div className="calendar-week-header">{item}</div>);
    });

    for (let i = 1; i <= days; i++) {
      data.push(<div className="calendar-day">{i}</div>);
    }

    return data;
  };

  return (
    <>
      <h1 className="text-[red]">一月</h1>
      <div className="w-[250px] border flex flex-wrap p-2">{getData()}</div>
    </>
  );
}
