import React from 'react'

const TicketDetailsModal = ({ open, onClose, ticket }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none bg-[rgba(0,0,0,0.5)]">
      <div className="bg-white rounded-md shadow-lg w-full max-w-2xl p-8 relative pointer-events-auto">
        <h2 className="text-2xl text-center mb-6">Ticket Details</h2>
        <div className="text-lg space-y-1 mb-8 pl-8">
          <div>Ticket No: {ticket?.no}</div>
          <div>Date: {ticket?.date}</div>
          <div>Name: {ticket?.name || ''}</div>
          <div>Dept: {ticket?.dept || ''}</div>
          <br />
          <div>Title: {ticket?.title || ''}</div>
          <div>Description: {ticket?.description || ''}</div>
          <div>Category: {ticket?.category || ''}</div>
          <div>Type: {ticket?.type || ''}</div>
          <div>Priority: {ticket?.priority || ''}</div>
          <div>Status: {ticket?.status || ''}</div>
          <div>Attachment: {ticket?.attachment || ''}</div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-green-400 hover:bg-green-500 text-black font-semibold px-10 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsModal; 