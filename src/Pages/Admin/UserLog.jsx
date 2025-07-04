import React from 'react';
import Header from '../../components/Header';
import LeftMenuBar from '../../components/Admin/LeftMenuBar';
import Footer from '../../components/Footer';

const logData = [
  {
    no: 1,
    signIn: '130821 / 0800',
    staffId: 'XL000001',
    dept: 'OT',
    activity: 'Create Team',
    signOut: '130821 / 0815',
  },
  {
    no: 2,
    signIn: '130821 / 0805',
    staffId: '',
    dept: '',
    activity: '',
    signOut: '130821 / 0810',
  },
  { no: 3 },
  { no: 4 },
  { no: 5 },
];

const UserLog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 bg-gray-100 min-h-0">
        <LeftMenuBar />
        <main className="flex-1 p-4 md:p-8 pt-14 pl-56 ml-5 mt-5" style={{paddingTop:'56px', paddingLeft:'224px'}}>
          <h2 className="text-2xl font-semibold mb-6 mt-2">User Log History</h2>
          <div className="flex items-center gap-2 mb-2">
            <span>Show:</span>
            <select className="rounded bg-gray-400 px-2 py-1 text-lg font-mono">
              <option>10</option>
            </select>
            <span>Entries</span>
          </div>
          <div className="border-b border-gray-400 mb-2"></div>
          <div className="overflow-x-auto rounded-lg bg-white">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="text-base">
                  <th className="px-2">No.</th>
                  <th>Date/Sign InTime</th>
                  <th>Staff ID</th>
                  <th>Department</th>
                  <th>Activity</th>
                  <th>Date/Sign Out time</th>
                </tr>
              </thead>
              <tbody>
                {logData.map((row, i) => (
                  <tr key={row.no} className={i % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="px-2">{row.no}.</td>
                    <td>{row.signIn || ''}</td>
                    <td>{row.staffId || ''}</td>
                    <td>{row.dept || ''}</td>
                    <td>{row.activity || ''}</td>
                    <td>{row.signOut || ''}</td>
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
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserLog;
