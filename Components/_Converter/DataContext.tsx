"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type OneResultType = {
  price: number;
  currency: string;
};

type HistoryItem = {
  id: number;
  amount: number;
  value: number;
  currency: string;
  photo: string;
  result: number;
  date: number;
};

type CurrencyContextType = {
  amount: number;
  setAmount: (val: number) => void;
  value: number;
  setValue: (val: number) => void;
  currency: string;
  setCurrency: (val: string) => void;
  photo: string;
  setPhoto: (val: string) => void;
  oneResult: OneResultType;
  setOneResult: (val: OneResultType) => void;
  history: HistoryItem[];
  addToHistory: () => void;
  deleteFromHistory: (id: number) => void;
  result: number;
  setResult: (val: number) => void;

};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [amount, setAmount] = useState<number>(0);
  const [value, setValue] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("EGP");
  const [photo, setPhoto] = useState<string>("/eg.png");

  const [oneResult, setOneResult] = useState<OneResultType>({
    price: 0,
    currency: "EGP"
  });

  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [result, setResult] = useState<number>(0.0);

  // 🔥 تحميل history من LocalStorage عند أول تحميل
  useEffect(() => {
    const storedHistory = localStorage.getItem("currency_history");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  //  تحديث LocalStorage كل مرة history يتغير
  useEffect(() => {
    localStorage.setItem("currency_history", JSON.stringify(history));
  }, [history]);

  //  إضافة عنصر للتاريخ
  const addToHistory = () => {
    if (result !== 0) {
      const newItem: HistoryItem = {
        id: Math.floor(Math.random() * 157),
        amount,
        value,
        currency,
        photo,
        result,
        date: Date.now(),
      };
      setHistory(prev => [...prev, newItem]);
      setResult(0);
      setAmount(0)
    }
  };

  //  حذف عنصر من التاريخ
  const deleteFromHistory = (id: number) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CurrencyContext.Provider
      value={{
        amount,
        setAmount,
        value,
        setValue,
        currency,
        setCurrency,
        photo,
        setPhoto,
        oneResult,
        setOneResult,
        history,
        addToHistory,
        result,
        setResult,
        deleteFromHistory
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrencyContext() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrencyContext must be used within a CurrencyProvider");
  }
  return context;
}