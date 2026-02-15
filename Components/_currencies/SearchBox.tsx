"use client"
import { IoSearchOutline } from "react-icons/io5"

type Props = {
    value: string
    onChange: (value: string) => void
}

export default function SearchBox({ value, onChange }: Props) {
    return (
        <div className="flex items-center border px-2 border-[rgba(75,192,192,0.32)] rounded-3xl">
            <span>
                <IoSearchOutline />
            </span>

            <input
                type="text"
                className="Special outline-none px-1 text-sm w-full text-gray-400"
                placeholder="Search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}
