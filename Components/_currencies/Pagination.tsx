"use client"

import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6"

type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {

  const pages = []

  for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
    pages.push(i)
  }

  return (
    <div className='mt-4 flex justify-center gap-4 text-sm'>

      <span
        className='bg-[rgba(75,192,192,0.18)] px-3 py-1 rounded-sm cursor-pointer'
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
      >
        <FaAnglesLeft />
      </span>

      {pages.map((page) => (
        <span
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-2xl cursor-pointer ${
            currentPage === page
              ? "bg-[rgba(60,245,205,0.61)]"
              : "bg-[rgba(75,192,192,0.18)]"
          }`}
        >
          {page}
        </span>
      ))}

      <span
        className='bg-[rgba(75,192,192,0.18)] px-3 py-1 rounded-sm cursor-pointer'
        onClick={() =>
          onPageChange(Math.min(currentPage + 1, totalPages))
        }
      >
        <FaAnglesRight />
      </span>

    </div>
  )
}
