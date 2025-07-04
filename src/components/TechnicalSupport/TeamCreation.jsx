import React from 'react';
import { RiUserAddFill } from "react-icons/ri";
const TeamCreation = ({ open, onClose, ticket }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] ">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl mx-2 text-center flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6">My Ticket - Team Creation</h2>
        <div className="bg-teal-300 rounded-xl p-8 flex flex-col md:flex-row gap-6 items-start justify-center w-full">
          <div className="flex-1 flex flex-col gap-4">
            <input
              type="text"
              className="w-full rounded bg-white py-2 px-3 text-base font-semibold italic"
              placeholder="Ticket No."
              
            />
            <input
              type="text"
              className="w-full rounded bg-white py-2 px-3 text-base"
              placeholder="Team name"
            />
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="w-full rounded bg-white py-2 px-3 text-base"
                placeholder="Team Member"
              />
              <span className="text-2xl -ml-12 cursor-pointer" title="Add team member"><RiUserAddFill /></span>
            </div>
            <div className="flex gap-4 justify-center mt-4 ml-30 w-full">
              <button className="text-2xl" title="Refresh">⟳</button>
              <button
                className="bg-gray-400 hover:bg-gray-500 text-black font-semibold px-8 py-2 rounded shadow flex items-center gap-2"
                onClick={onClose}
              >
                Create Team
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col w-full gap-4">
            <textarea
              className="rounded w-full bg-white py-2 px-3 text-base min-h-[150px]"
              placeholder="Remark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCreation;
