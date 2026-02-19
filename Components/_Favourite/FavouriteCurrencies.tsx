"use client"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import { useCurrency } from "@/app/DataContext"
import { useFavourites } from "./FavouriteContext"
import Image from "next/image"

export default function FavouriteCurrencies() {
    const { favourites, delFavo } = useFavourites()
    const { rates } = useCurrency()

    if (!favourites) return <p className="text-gray-400 mt-4">Loading favourites...</p>
    if (favourites.length === 0)
        return <p className="text-gray-400 mt-4">No favourites yet</p>

    return (
        <div className="flex flex-col md:flex-row md:flex-wrap  gap-7 mt-4 h-170 md:h-auto overflow-y-scroll overflow-x-hidden no-scrollbar">
            {favourites.map((item) => {
                const price: number = rates?.[item.name.currencyCode] ? 1 / rates[item.name.currencyCode] : 0

                return (
                    <div key={item.code} className="rounded-xl h-25  md:w-90 py-3 px-4 shadow bg-[linear-gradient(315deg,rgba(75,192,192,0.3),transparent_50%)] hover:scale-102 transition-all duration-300 flex flex-col justify-between">

                        {/* Header: icon + currency code + status */}
                        <div className="flex items-center justify-between text-sm text-gray-400">
                            <div className="flex gap-3">

                                <Image width={20} height={20} src={item.name.icon} alt={item.name.currencyCode} className="rounded-full border" />

                            </div>


                            <span className={`${item.name.status === "active" ? "text-green-500" : "text-gray-400"}`}>
                                {item.name.status}
                            </span>

                        </div>

                        {/* Price + Delete Button */}
                        <div className="flex items-center justify-between text-sm">

                            <p className="mt-3 text-2xl font-semibold">${price.toFixed(6)}</p>

                            <button className="mt-3 px-3 py-1 bg-red-500/80 cursor-pointer text-white rounded-md hover:bg-red-700 transition-all duration-300 text-sm"
                                onClick={() => delFavo(item.code)}
                            >
                                Delete
                            </button>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}
