import React, { useState } from 'react'
import Header from '../../components/Header'
import LeftMenuBar from '../../components/User/LeftMenuBar'
import Footer from '../../components/Footer'
import TicketDetailsModal from '../../components/TicketDetailsModal'

const tickets = [
  { no: '1234', subject: 'Login issue', status: 'In Progress', support: 'Tech support', date: '13/08/21', rate: 0 },
  { no: '1124', subject: 'New ticket issue', status: 'On hold', support: 'Operation Team', date: '14/08/21', rate: 0 },
  { no: '1224', subject: 'New request', status: 'Closed', support: 'Tech support', date: '13/08/21', rate: 4.5 },
  { no: '1244', subject: 'Ticket submission', status: 'In Progress', support: 'Operation Team', date: '14/08/21', rate: 0 },
  { no: '1114', subject: 'Login issue', status: 'In Progress', support: 'Tech support', date: '3/08/21', rate: 0 },
]

const statusBadge = (status) => {
  if (status === 'In Progress') return <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold">In Progress</span>
  if (status === 'On hold') return <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">On hold</span>
  if (status === 'Closed') return <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Closed</span>
  return status
}

const Star = ({ filled }) => (
  <span className={filled ? 'text-yellow-400 text-lg' : 'text-gray-400 text-lg'}>★</span>
)
const HalfStar = () => (
  <span className="text-yellow-400 text-lg relative" style={{ display: 'inline-block', width: '1em' }}>
    <span style={{ position: 'absolute', width: '50%', overflow: 'hidden', left: 0, top: 0 }}>★</span>
    <span className="text-gray-400">★</span>
  </span>
)

const renderStars = (rate) => {
  const full = Math.floor(rate)
  const half = rate % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span className="flex items-center">
      {[...Array(full)].map((_, i) => <Star key={i} filled />)}
      {half && <HalfStar />}
      {[...Array(empty)].map((_, i) => <Star key={i} />)}
    </span>
  )
}

const MyTickets = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState(null)

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 bg-gray-100 min-h-0">
        <LeftMenuBar />
        <main className="flex-1 bg-white p-4 md:p-8 pt-14 pl-0 md:pl-56" style={{paddingTop:'56px'}}>
          <h2 className="text-2xl font-semibold text-center mb-8 mt-2">List of Ticket</h2>
          <div className="max-w-6xl mx-auto">
         
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <input type="text" placeholder="Find ticket" className="rounded bg-gray-200 px-4 py-2 text-lg shadow focus:outline-none" style={{fontFamily:'inherit'}} />
                <button className="-ml-10 z-10"><span className="text-2xl">🔍</span></button>
              </div>
              <div className="flex items-center gap-2 ml-2">
                <span>Show:</span>
                <select className="rounded bg-gray-400 px-2 py-1 text-lg font-mono">
                  <option>10</option>
                </select>
                <span>Entries</span>
              </div>
            </div>
           
            <div className="overflow-x-auto rounded-lg">
              <table className="w-full text-left border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-base">
                    <th>Ticket No.</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Support by</th>
                    <th>Date</th>
                    <th>Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((t, i) => (
                    <tr key={t.no} className={i % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                      <td className="text-blue-700 underline cursor-pointer px-4 py-2" onClick={() => handleTicketClick(t)}>{t.no}</td>
                      <td className="px-4 py-2">{t.subject}</td>
                      <td className="px-4 py-2">{statusBadge(t.status)}</td>
                      <td className="px-4 py-2">{t.support}</td>
                      <td className="px-4 py-2">{t.date}</td>
                      <td className="px-4 py-2">{renderStars(t.rate)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
           
            <div className="flex flex-col sm:flex-row justify-between items-center mt-2 text-base">
              <span>Showing 1 to 5 of 5 entries</span>
              <span className="flex items-center gap-1 text-xl">
                <span className="cursor-pointer">&laquo;</span>
                <span className="cursor-pointer">&lt;</span>
                <span className="mx-1 text-base">1</span>
                <span className="cursor-pointer">&gt;</span>
                <span className="cursor-pointer">&raquo;</span>
              </span>
            </div>
          </div>
          <TicketDetailsModal open={modalOpen} onClose={() => setModalOpen(false)} ticket={selectedTicket} />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default MyTickets
