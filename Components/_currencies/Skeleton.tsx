// CurrencyRowSkeleton.tsx
"use client"
import Skeleton from "react-loading-skeleton"

export default function CurrencyRowSkeleton() {
    return (
        <div className='w-full border-b-2 border-[rgba(75,192,192,0.32)] h-10 mt-2 flex justify-between items-center px-3 text-sm pr-8'>
            <span className='flex gap-3 w-10'>
                <Skeleton width={20} height={20} circle baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)" />
            </span>
            <span className='w-10 truncate block'>
                <Skeleton width={40} height={16} baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)" />
            </span>
            <span className='w-10'>
                <Skeleton width={50} height={16} baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)" />
            </span>
            <span className='w-17'>
                <Skeleton width={60} height={16} baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)" />
            </span>
            <span className='w-21'>
                <Skeleton width={60} height={16} baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)" />
            </span>
            <span className='cursor-pointer text-2xl'>
                <Skeleton width={20} height={20} circle baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)" />
            </span>
        </div>
    )
}
