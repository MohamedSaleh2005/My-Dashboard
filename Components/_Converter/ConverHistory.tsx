"use client"
import { MdDelete } from "react-icons/md";
import { useCurrencyContext } from "./DataContext";

export default function ConverHistory() {
  const { history, deleteFromHistory } = useCurrencyContext();

  return (
    <section className="Special pb-4 pt-2 px-2 h-75 md:h-60 mt-5 shadow-[rgba(75,192,192,0.3)] shadow rounded-xl">

      {/* Header */}
      <div className="flex items-center justify-between text-gray-400 text-sm">
        <h3>All Conversion History</h3>
        <span>Update Just Now</span>
      </div>

      <div className="mt-3">
        {/* Table Header */}
     <div className="flex  px-2 md:px-0 bg-[rgba(85,216,216,0.19)] text-sm font-serif rounded-t-lg">
  {["ID", "Mu", "Fr", "To", "Res", "Date", "Time", "Act"].map((title) => {
    // نخلي عمود Date مخفي على الشاشات الصغيرة
    if (title === "Date") {
      return (
        <span key={title} className="flex-1 text-center py-2 hidden md:flex ml-2  md:relative left-4">
          {title}
        </span>
      );
    }
    return (
      <span key={title} className="flex-1 text-center py-2">
        {title}
      </span>
    );
  })}
</div>


        {/* Table Body */}
        <div className="h-55 md:h-40 overflow-y-auto no-scrollbar ">
          {history.map((item) => (
            <span
              key={item.id}
              className="flex items-center justify-between bg-white/50 md:bg-transparent mb-2 md:mb-1 p-2 md:p-0 rounded-md shadow md:shadow-none w-full"
            >
              <span className="flex-1 text-center py-1">{item.id}</span>
              <span className="flex-1 text-center py-1 mr-1">{item.amount.toFixed(2)}</span>
              <span className="flex-1 text-center py-1">USD</span>
              <span className="flex-1 text-center py-1">{item.currency}</span>
              <span className="flex-1 text-center py-1">{item.result.toFixed(2)}</span>
              <span className="flex-1 text-center py-1 hidden md:flex">
                {new Date(item.date).toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })}
              </span>
              <span className="flex-1 text-center py-1 ml-2">
                {new Date(item.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })}
              </span>
              <span className="flex-1 text-center py-1 ">
                <button
                  className="px-2 py-1 bg-red-800 text-white rounded-md cursor-pointer hover:scale-95 transition-all duration-300"
                  onClick={() => deleteFromHistory(item.id)}
                >
                  <MdDelete />
                </button>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
