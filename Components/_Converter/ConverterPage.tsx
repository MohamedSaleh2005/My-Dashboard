import CurrencyConverter from './CurrencyConverter'
import MarketNews from './MarketNews'
import ConverHistory from './ConverHistory'
import ThemeButton from '../_Dashboard/ThemeButton'

export default function Converter() {
  return (
    <main className='mt-15 px-4'>

      <div className='flex justify-between items-center'>
        <div>
          <h2 className='MyFont font-bold'>Converter Currency</h2>
          <p className='text-sm'>Live Exchange rates and market analytics</p>
        </div>

        <ThemeButton />
      </div>

      <div className='md:flex items-center gap-5'>
        <CurrencyConverter />
        <MarketNews />
      </div>

      <div>
        <ConverHistory />
      </div>
    </main>
  )
}
