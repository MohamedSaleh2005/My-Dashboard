import React from 'react'
import ThemeButton from '../_Dashboard/ThemeButton'
import FavouriteCurrencies from './FavouriteCurrencies'

export default function Favourite() {
    return (
        <div className='px-4 mt-15 w-full h-120'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='MyFont font-bold'>Favourite Currencies</h2>
                    <p className='text-sm'>Live Exchange rates and market analytics</p>
                </div>

                <div>
                    <ThemeButton />
                </div>
            </div>

            <div>
                <FavouriteCurrencies/>
            </div>

        </div>
    )
}
