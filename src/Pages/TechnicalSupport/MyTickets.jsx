import React, { useState } from 'react';
import Header from '../../components/Header';
import LeftMenuBar from '../../components/TechnicalSupport/LeftMenuBar';
import Footer from '../../components/Footer';
import TicketDetailsBox from '../../components/TechnicalSupport/MyTicketsTable';
import CloseTicket from '../../components/TechnicalSupport/CloseTicket';
import TeamCreation from '../../components/TechnicalSupport/TeamCreation';
import { RiUserAddFill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";

const tickets = [
  { no: '1234', subject: 'Login issue', category: 'Access Issue', priority: 'High', date: '13/08/21', status: 'In Progress', person: '👤', actions: true },
  { no: '1124', subject: 'New ticket issue', category: 'Access Issue', priority: 'Medium', date: '14/08/21', status: 'On hold', person: '👤', actions: true },
  { no: '1224', subject: 'New request', category: 'Feedback', priority: 'Low', date: '13/08/21', status: 'Closed', person: '👤', actions: true },
  { no: '1244', subject: 'Ticket submission', category: 'Ticketing', priority: 'High', date: '14/08/21', status: 'In Progress', person: '👤', actions: true },
  { no: '1114', subject: 'Login issue', category: 'Access Issue', priority: 'High', date: '3/08/21', status: 'In Progress', person: '👤', actions: true },
];

const statusBadge = (status) => {
  if (status === 'In Progress') return <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold">In Progress</span>;
  if (status === 'On hold') return <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">On hold</span>;
  if (status === 'Closed') return <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Closed</span>;
  return status;
};

const SupportTickets = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [closeTicketOpen, setCloseTicketOpen] = useState(false);
  const [closeTicketTicket, setCloseTicketTicket] = useState(null);
  const [createTeamOpen,setCreateTeamOpen] = useState(false);
  const [CreateTeamTicket,setCreateTeamTicket] = useState(null)

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
    setModalOpen(true);
  };

  const handleDeleteClick = (ticket) => {
    setCloseTicketTicket(ticket);
    setCloseTicketOpen(true);
  };

  const handleCreateTeamClick = (ticket) => {
    setCreateTeamTicket(ticket);
    setCreateTeamOpen(true);
  }

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 bg-gray-100 min-h-0">
        <LeftMenuBar />
        <main className="flex-1 bg-white p-4 md:p-8 pt-14 pl-0 md:pl-56" style={{paddingTop:'56px'}}>
          <h2 className="text-2xl font-semibold mb-6 mt-4 ml-5">My Ticket</h2>
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
                  <tr className="text-base border-b border-gray-400">
                    <th>Ticket No.</th>
                    <th>Subject</th>
                    <th>Category</th>
                    <th>Priority</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Person in charge</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((t, i) => (
                    <tr key={t.no} className={i % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                      <td className="text-blue-700 underline cursor-pointer px-4 py-2" onClick={() => handleTicketClick(t)}>{t.no}</td>
                      <td className="px-4 py-2">{t.subject}</td>
                      <td className="px-4 py-2">{t.category}</td>
                      <td className="px-4 py-2">{t.priority}</td>
                      <td className="px-4 py-2">{t.date}</td>
                      <td className="px-4 py-2">{statusBadge(t.status)}</td>
                      <td className="px-4 py-2">{t.person}</td>
                      <td className="px-4 py-2 flex gap-2 text-lg">
                        <span title="Edit" className="cursor-pointer m-1" onClick={()=>handleCreateTeamClick(t)}><RiUserAddFill /></span>
                        <span title="Delete" className="cursor-pointer mt-1" onClick={() => handleDeleteClick(t)}><RiDeleteBin6Fill /></span>
                        <span title="Download" className="cursor-pointer mt-1"><FaDownload /></span>
                      </td>
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
          <TicketDetailsBox open={modalOpen} onClose={() => setModalOpen(false)} ticket={selectedTicket} />
          <CloseTicket open={closeTicketOpen} onClose={() => setCloseTicketOpen(false)} ticket={closeTicketTicket} />
          <TeamCreation open={createTeamOpen} onClose={()=>setCreateTeamOpen(false)} ticket={CreateTeamTicket}/>

        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SupportTickets;
