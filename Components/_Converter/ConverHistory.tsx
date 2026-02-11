import { MdDelete } from "react-icons/md";

export default function ConverHistory() {
  return (
    <section className="Special pb-4 pt-2 px-5 h-75 md:h-60 mt-5 shadow-[rgba(75,192,192,0.3)] shadow rounded-xl">

      <div className="flex items-center justify-between text-gray-400 text-sm">
        <h3>All Conversion History</h3>
        <span>Update Just Now</span>
      </div>

      <div className="mt-3">
        {/* header */}

        <table className="w-full text-sm table-fixed">
          <thead className="bg-[rgba(85,216,216,0.19)]">
            <tr className="text-left font-serif">
              <th>ID</th>
              <th>Mush</th>
              <th>From</th>
              <th>To</th>
              <th>Res...</th>
              <th>Date</th>
              <th>Time</th>
              <th>Act...</th>
            </tr>
          </thead>
        </table>

        {/* body */}
        <div className="h-55 md:h-40 overflow-y-auto no-scrollbar">
          <table className="w-full text-sm table-fixed border-separate border-spacing-y-2">
            <tbody>
              <tr>
                <td>125</td>
                <td>100</td>
                <td>USD</td>
                <td>EGP</td>
                <td>3090</td>
                <td>8 Feb</td>
                <td>12:00</td>
                <td>
                  <button className="px-3 py-1 bg-red-600 text-white rounded-md cursor-pointer hover:scale-95 transition-all duration-300">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            </tbody>
           
            

          </table>
        </div>
      </div>




    </section>
  );
}
