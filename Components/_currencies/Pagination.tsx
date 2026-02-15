"use client"
import { useState } from "react"
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6"

type Props<T> = {
  data: T[]
  itemsPerPage?: number
  children: (paginatedData: T[]) => React.ReactNode
}

export default function Pagination<T>({
  data,
  itemsPerPage = 60,
  children
}: Props<T>) {

  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage)

  // 👇 هنا الجزء الجديد
  const visiblePages = 3

  let startPage = Math.max(currentPage - 1, 1)
  let endPage = Math.min(startPage + visiblePages - 1, totalPages)

  if (endPage - startPage < visiblePages - 1) {
    startPage = Math.max(endPage - visiblePages + 1, 1)
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  )

  return (
    <>
      {children(paginatedData)}

      {totalPages > 1 && (
        <div className='mt-4 flex justify-center gap-4 text-sm'>

          <span
            className='bg-[rgba(75,192,192,0.18)] px-3 py-1 rounded-sm cursor-pointer'
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          >
            <FaAnglesLeft />
          </span>

          {pages.map((page) => (
            <span
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-2xl cursor-pointer ${
                currentPage === page
                  ? "bg-[rgba(39,255,255,0.56)]"
                  : "bg-[rgba(75,192,192,0.18)]"
              }`}
            >
              {page}
            </span>
          ))}

          <span
            className='bg-[rgba(75,192,192,0.18)] px-3 py-1 rounded-sm cursor-pointer'
            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          >
            <FaAnglesRight />
          </span>

        </div>
      )}
    </>
  )
}
