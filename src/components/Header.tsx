/**
 * @author: Lxdll
 * Calendar Header
 */

import classNames from "classnames";
import Dot from "./Dot";

interface HeaderProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  goToday: () => void;
}

export default function Header(props: HeaderProps) {
  const { onPrevClick, onNextClick, goToday } = props;

  return (
    <div className="flex justify-between p-2 items-center">
      <div className="flex gap-1">
        <Dot backgroundColor="#ff5f57" />
        <Dot backgroundColor="#ffbd2e" />
        <Dot backgroundColor="#28c940" />
      </div>

      <div className="flex border divide-x rounded-md text-sm text-gray-500">
        {["日", "周", "月", "年"].map((item) => {
          return (
            <div
              key={item}
              className={classNames(
                "cursor-pointer px-5",
                item === "年" && "bg-[#EFEFEF] text-black"
              )}
            >
              {item}
            </div>
          );
        })}
      </div>

      <div className="border rounded-md flex divide-x">
        <div
          className="py-1 px-4 hover:text-[#ccc] hover:cursor-pointer"
          onClick={onPrevClick}
        >
          &lt;
        </div>

        <div
          className="py-1 px-4 hover:text-[#ccc] hover:cursor-pointer"
          onClick={goToday}
        >
          Today
        </div>

        <div
          className="py-1 px-4 hover:text-[#ccc] hover:cursor-pointer"
          onClick={onNextClick}
        >
          &gt;
        </div>
      </div>
    </div>
  );
}
