import React from 'react'
import Header from '../../components/Header'
import LeftMenuBar from '../../components/User/LeftMenuBar'
import Footer from '../../components/Footer'

const inputClass = "w-full rounded bg-gray-200 py-2 px-3 text-base";
const textareaClass = "w-full rounded bg-gray-200 min-h-[208px] pr-10 py-2 px-3 text-base";

const CreateTicket = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 bg-gray-100 min-h-0">
        <LeftMenuBar />
        <main className="flex-1 bg-white p-4 md:p-8 pt-14 pl-0 md:pl-56" style={{paddingTop:'56px'}}>
          <h2 className="text-2xl font-semibold text-center mb-8 mt-2">Create New Ticket</h2>
          <form className="max-w-5xl mx-auto space-y-4 overflow-hidden">
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Ticket No.</label>
                <input type="text" className={inputClass} disabled />
              </div>
              <div>
                <label className="block mb-1">Date:</label>
                <input type="date" className={inputClass} />
              </div>
            </div>
      
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Name:</label>
                <input type="text" className={inputClass} />
              </div>
              <div>
                <label className="block mb-1">Department:</label>
                <input type="text" className={inputClass} />
              </div>
            </div>
            
            <div>
              <label className="block mb-1">Subject:</label>
              <input type="text" className={inputClass} />
            </div>
         
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block mb-1">Category:</label>
                  <input type="text" className={inputClass} />
                </div>
                <div>
                  <label className="block mb-1">Type:</label>
                  <input type="text" className={inputClass} />
                </div>
                <div>
                  <label className="block mb-1">Priority:</label>
                  <input type="text" className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block mb-1">Description:</label>
                <div className="relative">
                  <textarea className={textareaClass} />
                  <span className="absolute bottom-2 right-2 text-2xl cursor-pointer" title="Attach file">📎</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button type="submit" className="bg-teal-300 px-10 py-2 rounded hover:bg-teal-400 transition-colors">Submit</button>
            </div>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default CreateTicket
