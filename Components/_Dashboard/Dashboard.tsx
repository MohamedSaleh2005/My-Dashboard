"use client"
import Chart from './Chart'
import Cards from './Cards'
import Pie from './Pie'
import SmallTable from './SmallTable'
import ThemeButton from './ThemeButton'



export default function Dashboard() {

    return (
        <main className='px-4 mt-15'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='MyFont font-bold'>Dashboard</h2>
                    <p className='text-sm'>Live Exchange rates and market analytics</p>
                </div>
                
                <div>
                    <ThemeButton />
                </div>
            </div>

            <div className='md:flex items-center gap-5'>
                <Cards />
                <SmallTable />
            </div>
            <div className='md:flex items-center gap-5'>
                <Chart />
                <Pie />
            </div>

        </main>
    )
}
