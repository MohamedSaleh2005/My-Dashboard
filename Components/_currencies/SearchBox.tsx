"use client"
import { useTranslation } from "react-i18next"
import { IoSearchOutline } from "react-icons/io5"

type Props = {
    value: string
    onChange: (value: string) => void
}

export default function SearchBox({ value, onChange }: Props) {
     const { t } = useTranslation();
    return (
        <div className="flex items-center border px-2 border-[rgba(75,192,192,0.32)] rounded-3xl w-45">
            <span>
                <IoSearchOutline />
            </span>

         <input
  type="text"
  className="Special outline-none px-1 text-sm w-full text-gray-400"
  placeholder={t("search")}  // ترجمنا البليس هولدر
  value={value}
  onChange={(e) => onChange(e.target.value)}
/>
        </div>
    )
}
