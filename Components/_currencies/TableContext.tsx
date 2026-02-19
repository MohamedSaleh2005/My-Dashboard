"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useCurrency } from "@/app/DataContext"


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

type TableContextType = {
  data: CurrencyItem[]
  loading: boolean
  searchTerm: string
  setSearchTerm: (val: string) => void
  filteredData: CurrencyItem[]
  rates: any
  
  favourites: CurrencyItem[]
  setFavourites: React.Dispatch<React.SetStateAction<CurrencyItem[]>>
}

const TableContext = createContext<TableContextType | null>(null)

export const TableProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<CurrencyItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [favourites, setFavourites] = useState<CurrencyItem[]>([])

  const { rates } = useCurrency()
 

  useEffect(() => {
    fetch(
      "https://api.currencyfreaks.com/v2.0/supported-currencies?apikey=YOUR_KEY"
    )
      .then((res) => res.json())
      .then((data: SupportedCurrenciesResponse) => {
        const arr: CurrencyItem[] = Object.entries(
          data.supportedCurrenciesMap
        ).map(([code, name]) => ({
          code,
          name,
        }))
        setData(arr)
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    const stored = localStorage.getItem("favourites")
    if (stored) {
      setFavourites(JSON.parse(stored))
    }
  }, [])

 
  const filteredData = data.filter((item) =>
    item.name.currencyCode
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  return (
    <TableContext.Provider
      value={{
        data,
        loading,
        searchTerm,
        setSearchTerm,
        filteredData,
        rates,
        favourites,
        setFavourites,
      }}
    >
      {children}
    </TableContext.Provider>
  )
}


export const useTableContext = () => {
  const context = useContext(TableContext)
  if (!context) throw new Error("useTableContext must be used داخل TableProvider")
  return context
}
