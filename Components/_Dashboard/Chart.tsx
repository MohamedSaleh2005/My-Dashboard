"use client"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useCurrency } from '../../app/DataContext'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useTranslation } from 'react-i18next'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Chart() {
  const { rates, loading } = useCurrency()
  const { t } = useTranslation()

  const labels = ['EUR', 'GBP', 'CAD', 'AUD', 'SGD', 'NZD', 'CHF']

  const values = loading
    ? Array(labels.length).fill(0)
    : [
        1 / (rates.EUR || 1),
        1 / (rates.GBP || 1),
        1 / (rates.CAD || 1),
        1 / (rates.AUD || 1),
        1 / (rates.SGD || 1),
        1 / (rates.NZD || 1),
        1 / (rates.CHF || 1),
      ]

  const data = {
    labels,
    datasets: [
      {
        label: t("usdCurrency"),
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false, position: 'top' as const },
      title: { display: false, text: t("usdCurrency") },
    },
    scales: {
      x: { grid: { color: 'rgba(200, 200, 200, 0.3)' } },
      y: {
        grid: { color: 'rgba(200, 200, 200, 0.3)' },
        ticks: {
          stepSize: 0.1,
          callback: function (value: number | string) {
            return `$${Number(value).toFixed(2)}`
          },
        },
      },
    },
  }

  return (
    <section className="Special pb-10 pt-3 h-70 md:w-[75%] mt-5 shadow-[rgba(75,192,192,0.3)] shadow rounded-xl">
      <div className="flex justify-between text-gray-400 text-sm px-4 pb-2">
        <h3>{t("marketTrends")}</h3>
        <span>{t("updatedJustNow")}</span>
      </div>

      {loading ? (
        <div className="w-full h-60 flex justify-around items-end gap-2 px-4">
          {labels.map((i) => (
            <Skeleton
              key={i}
              width={40}
              height={200}
              baseColor="var(--skeleton-base)"
              highlightColor="var(--skeleton-highlight)"
            />
          ))}
        </div>
      ) : (
        <Bar options={options} data={data} className="w-full m-auto px-4 h-60" />
      )}
    </section>
  )
}