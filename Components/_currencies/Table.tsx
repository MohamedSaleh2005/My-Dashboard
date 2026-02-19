"use client"

import Pagination from "./Pagination"
import TableHeader from "./TableHeader"
import CurrencyList from "./CurrencyList"



export default function Table() {
 

  return (
    <div className="Special p-3 h-170 md:h-115 mt-3 flex flex-col">
      <TableHeader />

      <div className="w-full bg-[rgba(75,192,192,0.19)] h-10 mt-2 flex justify-between items-center font-bold px-3 text-sm rounded">
        <span>Asset</span>
        <span>Symbol</span>
        <span>Price</span>
        <span>Status</span>
        <span>Trend</span>
        <span>Favourite</span>
      </div>

      <Pagination  itemsPerPage={60}>
        {(paginatedData) => (
          <div className="flex-1 overflow-scroll no-scrollbar">
            <CurrencyList data={paginatedData} />
          </div>
        )}
      </Pagination>
    </div>
  )
}
