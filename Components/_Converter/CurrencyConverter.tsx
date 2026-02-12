import { FaArrowRightArrowLeft } from "react-icons/fa6";
import AmountConverter from "./AmountConverter";
import ToConverter from "./ToConverter";
import CurrencyResult from "./CurrencyResult";


export default function CurrencyConverter() {



  return (
    <section className='Special mt-4 md:w-[60%] flex flex-col p-3 rounded-xl h-50'>
      <div className="flex justify-between items-center text-sm text-gray-400 ">
        <h3>Live Exchange Currency</h3>
        <span>Update Just Now</span>
      </div>

      <div className="mt-3 flex items-center justify-between m-auto w-[95%]">

        <AmountConverter  />
        <p className=" text-sm mt-5"><FaArrowRightArrowLeft /></p>
        <ToConverter />

      </div>

      <div>
        <CurrencyResult />
      </div>
    </section>
  )
}
