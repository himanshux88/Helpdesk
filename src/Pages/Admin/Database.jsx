import React, { useState } from 'react';
import Header from '../../components/Header';
import LeftMenuBar from '../../components/Admin/LeftMenuBar';
import Footer from '../../components/Footer';

const initialTabs = [
  { key: 'user', label: 'User' },
  { key: 'operation', label: 'Operation Team' },
  { key: 'support', label: 'Technical Support' },
];

const tableData = {
  user: [
    { id: 'ABC123', name: 'Abu', dept: 'IT', spec: 'Software' },
    { id: 'ABC124', name: 'Ahmad', dept: 'Software', spec: 'Networking' },
    { id: 'ABC125', name: 'Ali', dept: 'Technical', spec: 'Hardware' },
  ],
  operation: [
    { id: 'OPR001', name: 'Sara', dept: 'Ops', spec: 'Logistics' },
  ],
  support: [
    { id: 'SUP001', name: 'John', dept: 'Support', spec: 'Helpdesk' },
  ],
};

const Database = () => {
  const [activeTab, setActiveTab] = useState('user');
  const [search, setSearch] = useState('');
  const [entries, setEntries] = useState(10);
  const [tabs, setTabs] = useState(initialTabs);

  const filteredData = tableData[activeTab]?.filter(row =>
    Object.values(row).some(val => val.toLowerCase().includes(search.toLowerCase()))
  ) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 bg-gray-100 min-h-0">
        <LeftMenuBar />
        <main className="flex-1 p-4 md:p-8 pt-14 pl-56 ml-5 mt-5" style={{paddingTop:'56px', paddingLeft:'224px'}}>
          <h2 className="text-2xl font-semibold mb-6 mt-2">Database</h2>
         
          <div className="flex gap-2 mb-4">
            {tabs.map(tab => (
              <div
                key={tab.key}
                className={`relative px-4 py-2 rounded-t-md font-semibold cursor-pointer transition-colors ${activeTab === tab.key ? 'bg-teal-300 text-black' : 'bg-gray-200 text-gray-700 hover:bg-teal-100'}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </div>
            ))}
          </div>
         
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Find ticket"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="rounded bg-gray-200 px-4 py-2 text-lg shadow focus:outline-none"
                style={{ fontFamily: 'inherit' }}
              />
              <button className="-ml-10 z-10"><span className="text-2xl">🔍</span></button>
            </div>
            <div className="flex items-center gap-2 ml-2">
              <span>Show:</span>
              <select
                className="rounded bg-gray-400 px-2 py-1 text-lg font-mono"
                value={entries}
                onChange={e => setEntries(Number(e.target.value))}
              >
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>Entries</span>
            </div>
          </div>
        
          <div className="overflow-x-auto rounded-lg bg-white">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="text-base ">
                  <th className='px-2'><input type="checkbox" /></th>
                  <th>Staff ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Speciality</th>
                  <th>Setting</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(0, entries).map((row, i) => (
                  <tr key={row.id} className={i % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className='px-2'><input type="checkbox" /></td>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.dept}</td>
                    <td>{row.spec}</td>
                    <td>
                      <button className="mr-2" title="Edit"><span role="img" aria-label="edit">✏️</span></button>
                      <button title="Delete"><span role="img" aria-label="delete">🗑️</span></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center mt-2 text-base">
            <span>Showing 1 to {Math.min(filteredData.length, entries)} of {filteredData.length} entries</span>
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

export default Database;
