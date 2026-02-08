"use client"
import { useEffect, useState } from "react"
import Chart from './Chart'
import Cards from './Cards'
import Pie from './Pie'
import SmallTable from './SmallTable'
import ThemeButton from './ThemeButton'
import { DataProvider } from "../../app/DataContext"


export default function Dashboard() {

    return (
        <main className='px-4 mt-15 w-full'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='MyFont font-bold'>Dashboard</h2>
                    <p className='text-sm'>Live Exchange rates and market analytics</p>
                </div>
                <ThemeButton />
            </div>
       
            <div className='md:flex items-center gap-5'>
                <Cards />
                <SmallTable  />
            </div>
            <div className='md:flex items-center gap-5'>
                <Chart  />
                <Pie  />
            </div>
            
        </main>
    )
}
