"use client"
import Image from "next/image"
import { cards } from "./tybe"
import { useCurrencySnapshot } from "../../app/TrendHook"
import { useCurrency } from "../../app/DataContext"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

type trends = "up" | "down" | "same"

export default function DashCard() {
    const { rates, loading } = useCurrency()
    const oldPrices = useCurrencySnapshot(rates)

    return (
        <section className="Special mt-4 md:w-[75%] flex flex-col px-3 py-3 rounded-xl">
            <div className="flex justify-between text-sm text-gray-400">
                <h3>Live Currency</h3>
                <span>Updated just now</span>
            </div>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-5">
                {cards.map((card) => {
                    const price: number = rates?.[card.price] ? 1 / rates[card.price] : 0
                    const oldPrice: number | undefined = oldPrices?.[card.id]
                    const percent: number = oldPrice ? (price / oldPrice) * 100 - 100 : 0

                    let trend: trends = "same"
                    if (oldPrice !== undefined) {
                        if (price > oldPrice) trend = "up"
                        else if (price < oldPrice) trend = "down"
                    }

                    return (
                        <div
                            key={card.id}
                            className="rounded-xl py-3 px-2 shadow bg-[linear-gradient(315deg,rgba(75,192,192,0.3),transparent_50%)] hover:scale-105 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <Image
                                        width={20}
                                        height={20}
                                        src={card.img}
                                        alt={card.currency}
                                        className="rounded-full border"
                                    />
                                    {loading ? <Skeleton width={50} height={16} baseColor="var(--skeleton-base)" highlightColor= "var(--skeleton-highlight)"/> : <h3>{card.currency}</h3>}
                                </div>

                                <span
                                    className={
                                        trend === "up"
                                            ? "text-green-500"
                                            : trend === "down"
                                                ? "text-red-500"
                                                : "text-gray-400"
                                    }
                                >
                                    {loading ? (
                                        <Skeleton width={40} height={16} baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)"/>
                                    ) : trend === "up" ? (
                                        `▲ ${percent.toFixed(2)}%`
                                    ) : trend === "down" ? (
                                        `▼ ${percent.toFixed(2)}%`
                                    ) : (
                                        "0.00%"
                                    )}
                                </span>
                            </div>

                            <p className="mt-2 text-2xl font-semibold">
                                {loading ? <Skeleton width={60} height={24} baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)"/> : `$${price.toFixed(4)}`}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
