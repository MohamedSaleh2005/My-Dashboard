type Currencies = {
    id:number
    currency:string
    img:string
    price:string
}

export const cards: Currencies[] = [
    {id:1 , currency:"EUR/USD" , img:"/eur.png" , price:"EUR"},
    {id:2 , currency:"GBP/USD" , img:"/gbp.png" , price:"GBP"},
    {id:3 , currency:"JPY/USD" , img:"/jpy.png" , price:"AUD"},
    {id:4 , currency:"CAD/USD" , img:"/cad.png" , price:"CAD"},
]
// Small Table

export const assets: Currencies[] = [
    {id:1 , currency:"BTC" , img:"/btc.png", price:"BTC"},
    {id:2 , currency:"BCH" , img:"/bch.png", price:"BCH"},
    {id:3 , currency:"BNB" , img:"/bnb.png", price:"BNB"},
    {id:4 , currency:"LTC" , img:"/ltc.png", price:"LTC"}
]