
import React, { useState } from "react";

type OneResultType = {
  price: number;
  currency: string;
};
type props = {
amount: number 
value: number
 OneResult: OneResultType;
}

export default function CurrencyResult({amount , value , OneResult}: props) {
    console.log(OneResult);
    const [Result , setResult] = useState<number>(0.00)
    
  return (
    <div className="flex justify-between items-center px-5 mb-3">
        <div>
            <h3 className="text-3xl MyFont transition-all duration-1000">{(Result)?.toFixed(2)}</h3>
            <p className="text-sm">1 USD = {(OneResult.price).toFixed(1)} {OneResult.currency}</p>
        </div>
        <div>
            <button className="bg-[rgba(75,192,192,0.47)] py-1 px-6 shadow rounded-sm cursor-pointer hover:scale-95 transition-all duration-300" onClick={(e: React.MouseEvent<HTMLButtonElement>) => setResult(value)}>
                Convert
            </button>
        </div>
    </div>
  )
}
