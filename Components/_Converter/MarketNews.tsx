import { news } from "./type";

type News = {
  id: number;
  text: string;
}

export default function MarketNews() {
  return (
    <section className='Special md:h-50 mt-4 md:w-[40%] rounded-xl  text-sm p-3 pb-3'>

      <div>
        <h3 className='text-gray-400'>Market News</h3>
      </div>


      <div>
        {news.map((item: News) => (
          <div className='flex items-center gap-2 mt-2 pb-1' key={item.id}>
             <span className='w-2 h-10 bg-[rgba(75,192,192,0.47)] rounded-full'></span>
             <p className="text-[12px] MyFont">{item.text}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
