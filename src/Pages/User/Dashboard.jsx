import React from 'react'
import Header from '../../components/Header'
import LeftMenuBar from '../../components/User/LeftMenuBar'
import Footer from '../../components/Footer'

const cardData = [
  {
    label: 'Total Tickets',
    value: 12,
    bg: 'bg-blue-500',
    text: 'text-blue-900',
  },
  {
    label: 'Total Solved',
    value: 8,
    bg: 'bg-green-400',
    text: 'text-green-900',
  },
  {
    label: 'Total Awaiting Approval',
    value: 2,
    bg: 'bg-red-400',
    text: 'text-red-900',
  },
  {
    label: 'Total in Progress',
    value: 2,
    bg: 'bg-yellow-300',
    text: 'text-yellow-900',
  },
]

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 bg-gray-100 min-h-0">
        <LeftMenuBar />
        <main className="flex-1 bg-white p-4 md:p-8 pt-14 pl-0 md:pl-56" style={{paddingTop:'56px'}}>
          <h2 className="text-2xl font-semibold text-center mb-8 mt-2">Dashboard</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {cardData.map((card, idx) => (
              <div
                key={card.label}
                className={`w-48 h-48 rounded-lg ${card.bg} shadow-lg shadow-gray-400 flex flex-col items-center justify-center transition-transform hover:scale-105`}
              >
                <span className="text-lg font-semibold text-black text-center mb-2">{card.label}</span>
                <span className={`text-6xl font-bold ${card.text}`}>{card.value}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
