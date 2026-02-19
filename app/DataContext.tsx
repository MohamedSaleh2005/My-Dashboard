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
        fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=df8ef15a974d46fe926cc129f7caa513")
            .then(res => res.json())
            .then((data) => {
                if (data.rates) setRates(data.rates);
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

 

    return (
        <DataContext.Provider value={{ rates, loading }}>
            {children}
        </DataContext.Provider>
    );
};


export const useCurrency = () => useContext(DataContext);
