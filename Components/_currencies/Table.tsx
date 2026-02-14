"use client"
import { useCurrency } from '@/app/DataContext'
import { useEffect, useState } from 'react'
import { CiStar } from 'react-icons/ci'
import { IoSearchOutline } from 'react-icons/io5'
import SkeletonRow from "./SkeletonRow"
import Pagination from './Pagination'
import { useCurrencySnapshot } from './TRendPrice'
import Skeleton from 'react-loading-skeleton'

type Currency = {
    currencyCode: string
    currencyName: string
    icon: string
    status: string
}

type CurrencyItem = {
    code: string
    name: Currency
}

type SupportedCurrenciesResponse = {
    supportedCurrenciesMap: Record<string, Currency>
}
type trends = "up" | "down" | "same"
export default function Table() {
    const [Data, setData] = useState<CurrencyItem[]>([])
    const [load, setload] = useState<boolean>(true)
    const [SearchTrem, setSearchTrem] = useState<string>("")
    // Pagination State
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 60

    const { rates } = useCurrency()

    const oldPrices = useCurrencySnapshot(Data, rates)
    useEffect(() => {
        fetch("https://api.currencyfreaks.com/v2.0/supported-currencies?apikey=YOUR_KEY")
            .then(res => res.json())
            .then((data: SupportedCurrenciesResponse) => {
                const arr: CurrencyItem[] = Object.entries(
                    data.supportedCurrenciesMap
                ).map(([code, name]) => ({
                    code,
                    name
                }))
                setData(arr)
            })
            .catch(err => console.error(err))
            .finally(() => setload(false))
    }, [])

    // Search Filter
    const filterasset = Data.filter((item) =>
        item.name.currencyCode
            .toLowerCase()
            .includes(SearchTrem.toLowerCase())
    )

    // Reset page when searching
    useEffect(() => {
        setCurrentPage(1)
    }, [SearchTrem])

    // Pagination Logic
    const totalPages = Math.ceil(filterasset.length / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedData = filterasset.slice(
        startIndex,
        startIndex + itemsPerPage
    )

    return (
        <div className='Special p-3 h-screen md:h-115 mt-3'>

            {/* Header */}
            <div className="flex justify-between text-sm text-gray-400">
                <h3>All Currenices Here</h3>
                <div className="flex items-center border px-2 border-[rgba(75,192,192,0.32)] rounded-3xl">
                    <span><IoSearchOutline /></span>
                    <input
                        type="text"
                        className="Special outline-none px-1 text-sm w-full text-gray-400"
                        placeholder='Search'
                        value={SearchTrem}
                        onChange={(e) => setSearchTrem(e.target.value)}
                    />
                </div>
            </div>

            {/* Head */}
            <div className='w-full bg-[rgba(75,192,192,0.19)] h-10 mt-2 flex justify-between items-center font-bold px-3 text-sm rounded'>
                <span>Asset</span>
                <span>Symbol</span>
                <span>Price</span>
                <span>Status</span>
                <span>Trend</span>
                <span>Favourite</span>
            </div>

            {/* Body */}
            <div className='h-130 md:h-80 overflow-scroll no-scrollbar'>

                {load ? (
                    Array.from({ length: 10 }).map((_, index) => (
                        <SkeletonRow key={index} />
                    ))
                ) : filterasset.length === 0 ? (
                    <div className="text-center text-gray-400 mt-6">
                        No Results Found
                    </div>
                ) : (
                    paginatedData.map((item) => {
                        const price: number = rates?.[item.name.currencyCode] ? 1 / rates[item.name.currencyCode] : 0

                        const oldPrice: number | undefined = oldPrices?.[item.name.currencyCode]
                        const percent: number = oldPrice ? (price / oldPrice) * 100 - 100 : 0

                        let trend: trends = "same"
                        if (oldPrice !== undefined) {
                            if (price > oldPrice) trend = "up"
                            else if (price < oldPrice) trend = "down"
                        }


                        return (
                            <div
                                key={item.name.currencyCode}
                                className='w-full border-b-2 border-[rgba(75,192,192,0.32)] h-10 mt-2 flex justify-between items-center px-3 text-sm pr-8'
                            >
                                <span className='w-10'>
                                    <img
                                        alt='Currency Photo'
                                        src={item.name?.icon}
                                        className='w-5 h-5 rounded-full'
                                    />
                                </span>

                                <span className='w-10 truncate block mr-4'>
                                    {item.name.currencyCode}
                                </span>

                                <span className='w-10 mr-5 md:mr-0'>
                                    {price.toFixed(4)}$
                                </span>

                                <span className='w-10 md:w-14 truncate block'>
                                    {item.name.status}
                                </span>


                                <span
                                    className={
                                        `w-15 ${trend === "up"
                                            ? "text-green-500"
                                            : trend === "down"
                                                ? "text-red-500"
                                                : "text-gray-400"
                                        }`
                                    }
                                >
                                    {load ? (
                                        <Skeleton
                                            width={40}
                                            height={16}
                                            baseColor="var(--skeleton-base)"
                                            highlightColor="var(--skeleton-highlight)"
                                        />
                                    ) : trend === "up" ? (
                                        `▲ ${percent.toFixed(2)}%`
                                    ) : trend === "down" ? (
                                        `▼ ${percent.toFixed(2)}%`
                                    ) : (
                                        "0.00%"
                                    )}
                                </span>


                                <span className='cursor-pointer text-2xl hover:rotate-180 transition-all duration-300'>
                                    <CiStar />
                                </span>
                            </div>
                        )
                    })
                )}
            </div>

            {/* Pagination */}
            {!load && filterasset.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}

        </div>
    )
}
