import { useState } from "react";
import Header from "./components/Header";
import MonthCard from "./components/MonthCard";
import { chunk } from "./utils";

const currentYear = new Date().getFullYear();

function App() {
  const [activeYear, setActiveYear] = useState(currentYear);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="bg-white w-[80vw] rounded-md"
        style={{ boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.5)" }}
      >
        <Header
          onPrevClick={() => setActiveYear(activeYear - 1)}
          onNextClick={() => setActiveYear(activeYear + 1)}
          goToday={() => setActiveYear(currentYear)}
        />

        <div className="font-extrabold text-3xl p-2">{activeYear} 年</div>
        <div className="flex flex-wrap overflow-scroll h-[80vh] p-4">
          {chunk(
            Array.from({ length: 12 }).map((_, index) => index),
            4
          ).map((chunk) => {
            return (
              <div className="flex gap-10">
                {chunk.map((month, index) => (
                  <MonthCard key={index} year={activeYear} month={month} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
