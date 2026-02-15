"use client"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import { useCurrency } from "@/app/DataContext"
import { useFavourites } from "./FavouriteContext"
import Image from "next/image"

export default function FavouriteCurrencies() {
    const { favourites, delFavo } = useFavourites()
    const { rates, loading } = useCurrency() // لو عندك loading state في Context

    if (!favourites) return <p className="text-gray-400 mt-4">Loading favourites...</p>
    if (favourites.length === 0)
        return <p className="text-gray-400 mt-4">No favourites yet</p>

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-4 h-170 md:h-115 overflow-y-scroll overflow-x-hidden no-scrollbar">
            {favourites.map((item) => {
                const price: number = rates?.[item.name.currencyCode] ? 1 / rates[item.name.currencyCode] : 0

                return (
                    <div key={item.code} className="rounded-xl h-25 py-3 px-4 shadow bg-[linear-gradient(315deg,rgba(75,192,192,0.3),transparent_50%)] hover:scale-102 transition-all duration-300 flex flex-col justify-between">
                        
                        {/* Header: icon + currency code + status */}
                        <div className="flex items-center justify-between text-sm text-gray-400">
                            <div className="flex gap-3">
                                {loading ? (
                                    <Skeleton circle width={20} height={20} baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)" />
                                ) : (
                                    <Image width={20} height={20} src={item.name.icon} alt={item.name.currencyCode} className="rounded-full border" />
                                )}
                                {loading ? (
                                    <Skeleton width={50} height={16} baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)" />
                                ) : (
                                    <h3 className="font-semibold">{item.name.currencyCode}</h3>
                                )}
                            </div>

                            {loading ? (
                                <Skeleton width={40} height={15} baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)" />
                            ) : (
                                <span className={`${item.name.status === "active" ? "text-green-500" : "text-gray-400"}`}>
                                    {item.name.status}
                                </span>
                            )}
                        </div>

                        {/* Price + Delete Button */}
                        <div className="flex items-center justify-between text-sm">
                            {loading ? (
                                <Skeleton width={100} height={25} baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)" />
                            ) : (
                                <p className="mt-3 text-2xl font-semibold">${price.toFixed(6)}</p>
                            )}

                            {loading ? (
                                <Skeleton width={60} height={25} baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)" />
                            ) : (
                                <button
                                    className="mt-3 px-3 py-1 bg-red-500/80 cursor-pointer text-white rounded-md hover:bg-red-700 transition-all duration-300 text-sm"
                                    onClick={() => delFavo(item.code)}
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
