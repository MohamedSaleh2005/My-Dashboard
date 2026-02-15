// FavouriteContext.tsx
"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from "react"

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

type FavouriteContextType = {
  favourites: CurrencyItem[]
  toggleFavourite: (item: CurrencyItem) => void
  delFavo: (code: string) => void 
}

const FavouriteContext = createContext<FavouriteContextType | undefined>(undefined)

export function FavouriteProvider({ children }: { children: ReactNode }) {
  const [favourites, setFavourites] = useState<CurrencyItem[]>([])

  // نقرأ من localStorage أول ما الكمبوننت يتحمل
  useEffect(() => {
    const stored = localStorage.getItem("favourites")
    if (stored) {
      try {
        setFavourites(JSON.parse(stored))
      } catch {
        setFavourites([])
      }
    }
  }, [])

  // نحدث localStorage كل مرة favourites تتغير
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites))
  }, [favourites])

  const toggleFavourite = (item: CurrencyItem) => {
    setFavourites(prev => {
      const exists = prev.find(f => f.code === item.code)
      if (exists) return prev.filter(f => f.code !== item.code)
      return [...prev, item]
    })
  }

  // Delete Favourite
  const delFavo = (code : string) => {
    setFavourites(prev => prev.filter(item => item.code !== code))
  }

  return (
    <FavouriteContext.Provider value={{ favourites, toggleFavourite , delFavo}}>
      {children}
    </FavouriteContext.Provider>
  )
}

// هوك للاستعمال في أي كمبوننت
export function useFavourites() {
  const context = useContext(FavouriteContext)
  if (!context) throw new Error("useFavourites must be used within FavouriteProvider")
  return context
}
