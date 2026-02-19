// CurrencyList.tsx
import CurrencyRow from "./CurrencyRow"
import SkeletonRow from "./SkeletonRow"
import { useTableContext } from "./TableContext"

type Props = {
  data: any[]
}

export default function CurrencyList({ data }: Props) {
  const { loading } = useTableContext()
  if (loading) return Array.from({ length: 10 }).map((_, i) => <SkeletonRow key={i} />)
  if (data.length === 0) return <div className="text-center text-gray-400 mt-6">No Results Found</div>

  return data.map(item => (
    <CurrencyRow key={item.name.currencyCode} item={item} />
  ))
}
