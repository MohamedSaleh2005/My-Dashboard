"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// نوع البيانات
type Rates = Record<string, number>;

// نوع الـ Context
type DataContextType = {
    rates: Rates;
    loading: boolean;
};


const DataContext = createContext<DataContextType>({
    rates: {},
    loading: true,
});

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [rates, setRates] = useState<Rates>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=ccab947d656e4ada9b5ae003f7690215")
            .then(res => res.json())
            .then((data) => {
                if (data.rates) setRates(data.rates);
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

       // useEffect(() => {
        
      
    //     fetch("https://api.currencyfreaks.com/v2.0/supported-currencies?apikey=5439da6617e5450bbd55ec22a3e0065a")
    //         .then(res => res.json())
    //         .then(data => setData(data))
    //         .catch(err => console.error(err));
            
            
    //     }, [])

    return (
        <DataContext.Provider value={{ rates, loading }}>
            {children}
        </DataContext.Provider>
    );
};


export const useCurrency = () => useContext(DataContext);
