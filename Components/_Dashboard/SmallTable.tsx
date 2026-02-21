"use client"
import Image from 'next/image'
import { assets } from './tybe'
import { useCurrency } from '../../app/DataContext'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useTranslation } from 'react-i18next'

export default function SmallTable() {
  const { rates, loading } = useCurrency()
  const { t } = useTranslation()

  return (
    <div className='Special h-36 mt-4 md:w-70 rounded-xl text-gray-400 text-sm px-4 py-1 flex'>
      <table className="w-full text-sm text-gray-400">

        <thead>
          <tr className="border-b border-gray-600">
            <th className="text-left py-1">.....</th>
            <th className="text-center py-1">{t("asset")}</th>          
            <th className="text-right py-1">{t("price")}</th>
          </tr>
        </thead>

        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id || asset.currency}>
              <td>
                <Image
                  width={17}
                  height={17}
                  src={asset.img}
                  alt={asset.currency}
                  className='mt-1'
                />
              </td>

              <td className="text-center">
                {loading ? (
                  <Skeleton width={40} height={16} baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)"/>
                ) : (
                  asset.currency
                )}
              </td>

              <td className="text-right">
                {loading ? (
                  <Skeleton width={50} height={16} baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)"/>
                ) : rates?.[asset.price] ? (
                  `$${(1 / Number(rates[asset.price])).toFixed(4)}`
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}