// CurrencyList.tsx
import CurrencyRow from "./CurrencyRow"
import SkeletonRow from "./SkeletonRow"

type Props = {
  loading: boolean
  data: any[]
  rates: Record<string, number>
  oldPrices?: Record<string, number>
}

export default function CurrencyList({ loading, data, rates, oldPrices }: Props) {
  if (loading) return Array.from({ length: 10 }).map((_, i) => <SkeletonRow key={i} />)
  if (data.length === 0) return <div className="text-center text-gray-400 mt-6">No Results Found</div>

  return data.map(item => (
    <CurrencyRow
      key={item.name.currencyCode}
      item={item}
      rates={rates}
      oldPrices={oldPrices}
      loading={loading}
    />
  ))
}
