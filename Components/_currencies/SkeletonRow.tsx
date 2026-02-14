"use client"
import Skeleton from "react-loading-skeleton"

export default function SkeletonRow() {
  const skeletonProps = {
    baseColor: "var(--skeleton-base)",
    highlightColor: "var(--skeleton-highlight)"
  }

  return (
    <div className='w-full border-b-2 border-[rgba(75,192,192,0.32)] h-10 mt-2 flex justify-between items-center px-3 text-sm pr-8'>
      <span className='w-10'>
        <Skeleton circle width={20} height={20} {...skeletonProps} />
      </span>

      <span className='w-10'>
        <Skeleton width={35} {...skeletonProps} />
      </span>

      <span className='w-10'>
        <Skeleton width={50} {...skeletonProps} />
      </span>

      <span className='w-10'>
        <Skeleton width={45} {...skeletonProps} />
      </span>

      <span className='w-15'>
        <Skeleton width={40} {...skeletonProps} />
      </span>

      <span>
        <Skeleton circle width={22} height={22} {...skeletonProps} />
      </span>
    </div>
  )
}
