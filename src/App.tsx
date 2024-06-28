import Header from "./components/Header";
import MonthCard from "./components/MonthCard";

function App() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-white w-[80vw] h-[80vh]">
        <Header />
        <MonthCard />
      </div>
    </div>
  );
}

export default App;
