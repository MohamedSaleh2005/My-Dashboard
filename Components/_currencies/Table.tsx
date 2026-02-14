"use client"
import { useCurrency } from '@/app/DataContext'
import { useEffect, useState } from 'react'
import { CiStar } from 'react-icons/ci'
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6'
import Skeleton from "react-loading-skeleton"
import { IoSearchOutline } from 'react-icons/io5'

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

export default function Table() {
    const [Data, setData] = useState<CurrencyItem[]>([])
    const [load, setload] = useState<boolean>(true)
    const { rates } = useCurrency()
    console.log(rates);

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

    return (
        <div className='Special p-3 h-175 md:h-115  mt-3'>
            {/* Header */}
            <div className="flex justify-between text-sm text-gray-400">
                <h3>All Currenices will be here</h3>
                <div className="flex items-center border px-2 border-[rgba(75,192,192,0.32)] rounded-3xl">
                    <span className=''><IoSearchOutline /></span>
                    <input type="text" className="Special outline-none px-1 text-sm w-full text-gray-400" placeholder='Search' />
                </div>
            </div>

            {/* Head Rows */}
            <div className='w-full bg-[rgba(75,192,192,0.32)] h-10 mt-2 flex justify-between items-center font-bold px-3 text-sm'>
                <span>Asset</span>
                <span>Symbol</span>
                <span>Price</span>
                <span>Status</span>
                <span>Trend</span>
                <span>Favourite</span>
            </div>

            {/* Body Rows */}
            <div className='h-135 md:h-80 overflow-scroll no-scrollbar'>
                {load ? Array.from({ length: 18 }).map((_, index) => (<Skeleton key={index}/>)) : 
                    Data.map((item) => {
                        const price: number = rates?.[item.name.currencyCode] ? 1 / rates[item.name.currencyCode] : 0
                        return (
                            <div key={item.name.currencyCode} className='w-full border-b-2 border-[rgba(75,192,192,0.32)] h-10 mt-2 flex justify-between items-center px-3 text-sm pr-8 '>
                                <span className=' w-10 '>
                                    <img alt='Currency Photo' src={item.name?.icon} className='w-5 h-5 rounded-full' />
                                </span>
                                <span className='w-10 truncate block mr-4'>{item.name.currencyCode}</span>
                                <span className='w-10 mr-5 md:mr-0'>{price.toFixed(4)}$</span>
                                <span className='w-10 md:w-14 truncate block '>{item.name.status}</span>
                                <span className='w-15 '>123$</span>
                                <span className='cursor-pointer hover:rotate-360 transition-all duration-300 text-2xl'><CiStar /></span>
                            </div>
                        )
                    })
                }
            </div>

            {/* Navigation */}
            <div className='mt-4 flex justify-center gap-4 text-sm'>
                <span className='bg-[rgba(75,192,192,0.18)] px-3 py-1 rounded-sm cursor-pointer flex items-center hover:scale-95 transition-all duration-300'>
                    <FaAnglesLeft />
                </span>
                <span className='bg-[rgba(75,192,192,0.18)] px-3 py-1 rounded-2xl cursor-pointer hover:scale-95 transition-all duration-300'>1</span>
                <span className='bg-[rgba(75,192,192,0.18)] px-3 py-1 rounded-2xl cursor-pointer hover:scale-95 transition-all duration-300'>2</span>
                <span className='bg-[rgba(75,192,192,0.18)] px-3 py-1 rounded-2xl cursor-pointer hover:scale-95 transition-all duration-300'>3</span>
                <span className='bg-[rgba(75,192,192,0.18)] px-3 py-1 rounded-sm cursor-pointer flex items-center hover:scale-95 transition-all duration-300'>
                    <FaAnglesRight />
                </span>
            </div>
        </div>
    )
}
