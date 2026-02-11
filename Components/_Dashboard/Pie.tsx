"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useCurrency } from '../../app/DataContext'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChart() {
  const { rates, loading } = useCurrency()

  
  const labels = ['EUR', 'CHF', 'SGD', 'GBP', 'AUD']

  
  const values = loading
    ? [0, 0, 0, 0, 0]
    : [
        1 / (rates.EUR || 1),
        1 / (rates.CHF || 1),
        1 / (rates.SGD || 1),
        1 / (rates.GBP || 1),
        1 / (rates.AUD || 1),
      ]

  const data = {
    labels,
    datasets: [
      {
        label: 'USD Index',
        data: values,
        backgroundColor: [
          'rgba(59, 130, 246, 0.45)',
          'rgba(34, 197, 94, 0.45)',
          'rgba(245, 158, 11, 0.45)',
          'rgba(168, 85, 247, 0.45)',
          'rgba(239, 68, 68, 0.45)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
        labels: {
          color: '#6b7280',
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || ''
            const value = context.raw
            return `${label}: $${Number(value).toFixed(2)}`
          },
        },
      },
    },
  }

  return (
    <div className="Special md:h-70 mt-4 md:w-70 pt-2 rounded-xl m-auto flex flex-col">
      <h3 className="text-sm m-auto pb-3 text-gray-400">Top Five Currency</h3>

      <div className="px-7 pb-7 flex justify-center items-center">
        {loading ? (
          <Skeleton circle width={200} height={200} baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)"/>
        ) : (
          <Doughnut data={data} options={options} />
        )}
      </div>
    </div>
  )
}
