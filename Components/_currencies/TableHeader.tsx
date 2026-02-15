"use client"
import SearchBox from "./SearchBox"

type Props = {
    search: string
    setSearch: (value: string) => void
}

export default function TableHeader({ search, setSearch }: Props) {
    return (
        <div className="flex justify-between text-sm text-gray-400">
            <h3>All Currenices Here</h3>
            <SearchBox value={search} onChange={setSearch} />
        </div>
    )
}
