"use client"
import { useEffect, useState } from "react"
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6"
import { useTableContext } from "./TableContext"

type Props<T> = {
  itemsPerPage?: number
  children: (data: T[]) => React.ReactNode
}

export default function Pagination<T>({
  itemsPerPage = 60,
  children
}: Props<T>) {

  const { filteredData } = useTableContext() as any

  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [filteredData])

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

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
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className='bg-[rgba(75,192,192,0.18)] px-3 py-1 rounded-sm cursor-pointer'
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
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className='bg-[rgba(75,192,192,0.18)] px-3 py-1 rounded-sm cursor-pointer'
          >
            <FaAnglesRight />
          </span>

        </div>
      )}
    </>
  )
}
