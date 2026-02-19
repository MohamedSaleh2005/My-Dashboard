import ThemeButton from "../_Dashboard/ThemeButton";
import { FavouriteProvider } from "../_Favourite/FavouriteContext";
import Table from "./Table";
import { TableProvider } from "./TableContext";


export default function CurrenciesPage() {
    return (
        <div className=" px-4 mt-15 w-full h-120">
            
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='MyFont font-bold'>Currencies Table</h2>
                    <p className='text-sm'>Live Exchange rates and market analytics</p>
                </div>

                <div>
                    <ThemeButton />
                </div>
            </div>

            <div>
                <TableProvider>
                    <Table />
                </TableProvider>

            </div>
        </div>
    )
}
