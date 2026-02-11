"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { CurItems } from './Data'
import { useCurrency } from '@/app/DataContext'

type Props = {
    amount: number 
    setvalue: (val: number) => void
    setOneResult: (val: { price: number; currency: string }) => void;
}

type CurItem = {
    id: number
    asset: string
    picture: string
}

export default function ToConverter({ amount, setvalue , setOneResult}: Props) {
    const { rates } = useCurrency()
    const [Opening, setOpening] = useState<boolean>(false)
    const [Currency, setCurrency] = useState<string>("EGP")
    const [Photo, setPhoto] = useState<string>("/eg.png")


    useEffect(() => {
        if (!rates || !Currency) return;
        const rate = rates[Currency]
        if (rate) {
            const price = 1 / rate
            setvalue(amount / price)
             setOneResult({
             price: (1 / price),
            currency: Currency
    });
        } 
        
       
    }, [amount, Currency, rates, setvalue])

    const ChooseCurrency = (cur: CurItem) => {
        setCurrency(cur.asset)
        setPhoto(cur.picture)
        setOpening(false)
    }

    return (
        <div className="flex flex-col w-[40%]">
            <p className="text-sm">To</p>

            <div className="relative">
                <div className="Special border-gray-400/60 border p-2 text-sm flex justify-between items-center rounded-sm mt-1">
                    <div className='flex items-center gap-3'>
                        <Image width={250} height={250} src={Photo} alt="Currency Picture" className='h-5 w-auto' />
                        <span className='text-gray-400'>{Currency}</span>
                    </div>
                    <span
                        className={`cursor-pointer transition-all duration-300 ${Opening ? "rotate-180" : ""}`}
                        onClick={() => setOpening(!Opening)}
                    >
                        <FaAngleDown />
                    </span>
                </div>

                {/* dropdown */}
                <div className={`absolute mt-1 w-full border rounded-sm overflow-y-scroll h-40 Special no-scrollbar ${Opening ? "Open" : "Close"}`}>
                    {CurItems.map((cur: CurItem) => (
                        <div
                            key={cur.id}
                            className="flex items-center py-1 px-3 gap-3 cursor-pointer text-sm"
                            onClick={() => ChooseCurrency(cur)}
                        >
                            <Image width={20} height={20} src={cur.picture} alt="Currency Picture" />
                            <span>{cur.asset}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
