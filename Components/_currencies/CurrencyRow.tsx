import { useTableContext } from "./TableContext";

import Skeleton from "react-loading-skeleton";
import AddFavourite from "../_Favourite/AddFavourite";
import { useDailyRatesSnapshot } from "./PriceHook";

type trends = "up" | "down" | "same";

export default function CurrencyRow({ item }: { item: any }) {
  const { rates, loading } = useTableContext();
  const { getOldPrice } = useDailyRatesSnapshot(rates ?? {});

  const price: number = rates?.[item.name.currencyCode] ? 1 / rates[item.name.currencyCode] : 0;
  const oldPrice: number | undefined = getOldPrice(item.name.currencyCode);

  const percent: number = oldPrice ? (price / oldPrice) * 100 - 100: 0;

  let trend: trends = "same";
  if (oldPrice !== undefined) {
    trend = price > oldPrice ? "up" : price < oldPrice ? "down" : "same";
  }

  return (
    <div className='w-full border-b-2 border-[rgba(75,192,192,0.32)] h-10 mt-2 flex justify-between items-center px-3 text-sm pr-8'>
      <span className='w-10'>
        <img alt='Currency' src={item.name?.icon} className='w-5 h-5 rounded-full' />
      </span>
      <span className='w-10 truncate block mr-4'> {item.name.currencyCode} </span>
      <span className='w-10 mr-5 md:mr-0'> {price.toFixed(4)}$ </span>
      <span className='w-10 md:w-14 truncate block'> {item.name.status} </span>

      <span
        className={`w-15 ${
          trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-gray-400"
        }`}
      >
        {loading ? (
          <Skeleton width={40} height={16} />
        ) : trend === "up" ? (
          `▲ ${percent.toFixed(2)}%`
        ) : trend === "down" ? (
          `▼ ${percent.toFixed(1)}%`
        ) : (
          "0.00%"
        )}
      </span>

      <AddFavourite item={item} />
    </div>
  );
}
