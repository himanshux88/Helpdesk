import React from 'react';
import Header from '../../components/Header';
import LeftMenuBar from '../../components/Admin/LeftMenuBar';
import Footer from '../../components/Footer';

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
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 bg-gray-100">
        <LeftMenuBar />
        <main className="flex-1 p-4 md:p-8 ml-50 mt-10">
          <h2 className="text-2xl font-semibold mb-8 mt-2 ml-5">Dashboard</h2>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {cardData.map((card) => (
              <div
                key={card.label}
                className={`w-44 h-32 md:w-56 md:h-40 rounded-lg ${card.bg} shadow-lg flex flex-col items-center justify-center transition-transform hover:scale-105`}
              >
                <span className="text-base md:text-lg font-semibold text-black text-center mb-2">{card.label}</span>
                <span className={`text-4xl md:text-6xl font-bold ${card.text}`}>{card.value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-6 mb-8 justify-center items-stretch">
            <div className="flex-1 flex items-center justify-center min-h-[200px] bg-teal-200 rounded-lg shadow-md">
              
              <svg width="105" height="200" viewBox="0 0 100 100">
                <rect x="5" y="60" width="20" height="55" fill="none" stroke="#134e6f" strokeWidth="5" />
                <rect x="37" y="25" width="20" height="90" fill="none" stroke="#134e6f" strokeWidth="5" />
                <rect x="70" y="-35" width="20" height="150" fill="none" stroke="#134e6f" strokeWidth="5" />
                
              </svg>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex-1 flex gap-4">
                <div className="flex-1 bg-teal-100 rounded-lg shadow-md flex flex-col items-center justify-center p-4">
                  <span className="text-5xl mb-2" role="img" aria-label="support">🎧</span>
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-base font-medium">Technical Supports</div>
                </div>
                <div className="flex-1 bg-teal-100 rounded-lg shadow-md flex flex-col items-center justify-center p-4">
                  <span className="text-5xl mb-2" role="img" aria-label="operation">🛠️</span>
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-base font-medium">Operation Team</div>
                </div>
              </div>
              <div className="bg-teal-300 rounded-lg shadow-md flex flex-col items-center justify-center p-4 mt-4">
                <div className="font-semibold text-lg mb-2">Customer Feedback</div>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-2xl">★</span>
                  <span className="text-yellow-400 text-2xl">★</span>
                  <span className="text-yellow-400 text-2xl">★</span>
                  <span className="text-yellow-400 text-2xl">★</span>
                  <span className="text-yellow-400 text-2xl">☆</span>
                  <span className="ml-2 text-lg font-semibold">4.5</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
