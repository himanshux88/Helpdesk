import React from 'react';
import Header from '../../components/Header';
import LeftMenuBar from '../../components/TechnicalSupport/LeftMenuBar';
import Footer from '../../components/Footer';

const stars = (count) => (
  <span className="flex items-center">
    {[...Array(Math.floor(count))].map((_, i) => <span key={i} className="text-yellow-400 text-xl">★</span>)}
    {count % 1 >= 0.5 && <span className="text-yellow-400 text-xl">★</span>}
    {[...Array(5 - Math.ceil(count))].map((_, i) => <span key={i} className="text-gray-300 text-xl">★</span>)}
  </span>
);

const Performance = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 bg-gray-100 min-h-0">
        <LeftMenuBar />
        <main className="flex-1 p-4 md:p-8 pt-14 pl-0 md:pl-56" style={{paddingTop:'56px'}}>
          <h2 className="text-2xl font-semibold mb-8 mt-4 ml-10" >Performance</h2>
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between max-w-6xl mx-auto">
            
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-lg bg-gray-300 flex items-center justify-center text-6xl">
                  <span role="img" aria-label="profile">👤</span>
                </div>
                <div className="text-2xl font-semibold">Technical Support Name</div>
              </div>
              <div className="bg-gray-200 rounded-xl px-6 py-3 text-base max-w-md">
                <div>Contact No: 0123456789</div>
                <div>Department: ABC</div>
              </div>
              <div className="bg-gray-200 rounded-xl px-6 py-5 text-base max-w-md flex flex-col gap-2">
                <div className="flex justify-between font-semibold text-lg mb-2">
                  <span>Total Ticket Handle</span>
                  <span>5</span>
                </div>
                <div className="flex justify-between"><span>Ticket Solved</span><span>2</span></div>
                <div className="flex justify-between"><span>Ticket Pending</span><span>1</span></div>
                <div className="flex justify-between"><span>Ticket in progress</span><span>2</span></div>
                <div className="flex justify-between items-center"><span>Rating</span>{stars(4.5)}</div>
              </div>
            </div>
           
            <div className="flex flex-col gap-6 w-full lg:w-80">
              {[1,2,3].map((n) => (
                <div key={n} className="flex items-center gap-4 bg-gray-100 rounded-xl p-4 shadow">
                  <div className="w-16 h-16 rounded-lg bg-gray-300 flex items-center justify-center text-4xl">
                    <span role="img" aria-label="profile">👤</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">Technical Support {n}</div>
                    <button className="bg-teal-300 hover:bg-teal-400 px-4 py-1 rounded text-base font-semibold mt-2">View details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Performance;
