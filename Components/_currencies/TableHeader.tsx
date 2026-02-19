"use client"
import SearchBox from "./SearchBox"
import { useTableContext } from "./TableContext"

export default function TableHeader() {
    const { searchTerm, setSearchTerm } = useTableContext()

    return (
        <div className="flex justify-between text-sm text-gray-400">
            <h3>All Currenices Here</h3>
            <SearchBox value={searchTerm} onChange={setSearchTerm} />
        </div>
    )
}
