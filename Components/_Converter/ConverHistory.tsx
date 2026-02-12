"use client"
import { MdDelete } from "react-icons/md";
import { useCurrencyContext } from "./DataContext";




export default function ConverHistory() {
  const {history , deleteFromHistory} = useCurrencyContext()

 
  return (
    <section className="Special pb-4 pt-2 px-2 h-75 md:h-60 mt-5 shadow-[rgba(75,192,192,0.3)] shadow rounded-xl">

      <div className="flex items-center justify-between text-gray-400 text-sm">
        <h3>All Conversion History</h3>
        <span>Update Just Now</span>
      </div>

      <div className="mt-3">
        {/* header */}

        <table className="w-full text-sm table-fixed">
          <thead className="bg-[rgba(85,216,216,0.19)]">
            <tr className="text-left font-serif ">
              <th>ID</th>
              <th>Mu</th>
              <th>Fr</th>
              <th>To</th>
              <th>Res</th>            
              <th className="hidden md:flex">Date</th>
              <th>Time</th>
              <th>Act</th>
            </tr>
          </thead>
        </table>

        {/* body */}
        <div className="h-55 md:h-40 overflow-y-auto no-scrollbar">
          <table className="w-full text-sm table-fixed border-separate border-spacing-y-4">
            <tbody>

              {history.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{(item.amount).toFixed(2)}</td>
                  <td>USD</td>
                  <td>{item.currency}</td>
                  <td>{(item.result).toFixed(2)}</td>
                  <td className="hidden md:flex">{new Date(item.date).toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })}</td>
                  <td>{new Date(item.date).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit" , hour12:false})}</td>
                  <td><button className="px-2 py-1 bg-red-800 text-white rounded-md cursor-pointer hover:scale-95 transition-all duration-300" onClick={() => deleteFromHistory(item.id)}><MdDelete /></button></td>
                </tr>
              ))}

            </tbody>
          </table>

        </div>
      </div>




    </section>
  );

}