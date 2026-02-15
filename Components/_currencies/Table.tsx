// Table.tsx
"use client"
import { useCurrency } from '@/app/DataContext'
import { useEffect, useState } from 'react'
import Pagination from './Pagination'
import { useCurrencySnapshot } from './TrendPrice'
import TableHeader from './TableHeader'
import CurrencyList from './CurrencyList'

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
  const [load, setLoad] = useState<boolean>(true)
  const [SearchTrem, setSearchTrem] = useState<string>("")

  const { rates } = useCurrency()
  const oldPrices = useCurrencySnapshot(Data, rates)

  // Fetch currencies
  useEffect(() => {
    fetch("https://api.currencyfreaks.com/v2.0/supported-currencies?apikey=YOUR_KEY")
      .then(res => res.json())
      .then((data: SupportedCurrenciesResponse) => {
        const arr: CurrencyItem[] = Object.entries(data.supportedCurrenciesMap).map(([code, name]) => ({
          code,
          name
        }))
        setData(arr)
      })
      .catch(err => console.error(err))
      .finally(() => setLoad(false))
  }, [])

  // Search
  const filterasset = Data.filter(item =>
    item.name.currencyCode.toLowerCase().includes(SearchTrem.toLowerCase())
  )

  // Favourites 
  const [favourites, setFavourites] = useState<CurrencyItem[]>([])

  
  useEffect(() => {
    const stored = localStorage.getItem("favourites")
    if (stored) { setFavourites(JSON.parse(stored))}
    else {setFavourites([])}
    }, [])

  // Toggle favourite and save to localStorage
  const toggleFavourite = (item: CurrencyItem) => {
    setFavourites(prev => {
      let updated
      const exists = prev.find(f => f.code === item.code)
      if (exists) {
        updated = prev.filter(f => f.code !== item.code)
      } else {
        updated = [...prev, item]
      }
      localStorage.setItem("favourites", JSON.stringify(updated))
      return updated
    })
  }

  return (
    <div className='Special p-3 h-170  md:h-115 mt-3 flex flex-col'>
      {/* Header */}
      <TableHeader search={SearchTrem} setSearch={setSearchTrem} />

      {/* Table Head */}
      <div className='w-full bg-[rgba(75,192,192,0.19)] h-10 mt-2 flex justify-between items-center font-bold px-3 text-sm rounded'>
        <span>Asset</span>
        <span>Symbol</span>
        <span>Price</span>
        <span>Status</span>
        <span>Trend</span>
        <span>Favourite</span>
      </div>

      {/* Pagination controller */}
      <Pagination data={filterasset} itemsPerPage={60}>
        {(paginatedData) => (
          <div className='flex-1 overflow-scroll no-scrollbar'>
            <CurrencyList
              loading={load}
              data={paginatedData}
              rates={rates}
              oldPrices={oldPrices}
            
            />
          </div>
        )}
      </Pagination>
    </div>
  )
}
