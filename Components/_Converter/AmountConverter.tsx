"use client"
import Image from 'next/image'
import { useCurrencyContext } from './DataContext';




export default function AmountConverter() {
 const { amount, setAmount} = useCurrencyContext();

  return (
    <div className=" flex flex-col w-[40%] " >
          <div>
            <span className="text-sm">Amount</span>
          </div>

          <div className="flex border p-1 px-2 border-gray-400/60 rounded-sm mt-1 gap-3">
            <Image width={250} height={250} src={"/usd.png"} alt="Currency Picture" className='h-4 w-auto mt-1'/>
            <input type="number" className="Special outline-none p-1 text-sm w-full text-gray-400 " placeholder='00.00' value={amount === 0 ? "" : amount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value))}/>
          </div>
    </div>
  )
}
