import React from 'react'
import Header from '../../components/Header'
import LeftMenuBar from '../../components/User/LeftMenuBar'
import Footer from '../../components/Footer'

const fields = [
  { label: 'Username', type: 'text' },
  { label: 'Current Password', type: 'password' },
  { label: 'New Password', type: 'password' },
  { label: 'Comfirm Password', type: 'password' },
  { label: 'Email', type: 'email' },
  { label: 'Real Name', type: 'text' },
  { label: 'Access Level', type: 'text' },
  { label: 'Project Access Level', type: 'text' },
]

const UserSetting = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden ">
      <Header />
      <div className="flex flex-1 bg-gray-100 min-h-0">
        <LeftMenuBar />
        <main className="flex-1 bg-white p-4 md:p-8 pt-14 pl-0 md:pl-56" style={{paddingTop:'56px'}}>
          <h2 className="text-2xl font-semibold mb-6 mt-4 md:pl-20">User Profile</h2>
          <div className="max-w-6xl mx-auto">
            <div className="flex">
              <div className="bg-teal-300 text-black font-semibold px-8 py-2 rounded-t-md mb-0">Edit Account</div>
            </div>
            
            <form className="w-full border border-gray-300">
              {fields.map((f, i) => (
                <div key={f.label} className="flex border-b border-gray-300 last:border-b-0 ">
                  <label className="w-1/3 bg-gray-400 text-white text-lg px-4 py-3 flex items-center">{f.label}</label>
                  <div className="w-2/3 bg-white flex items-center px-4 py-3">
                    <input type={f.type} className="w-full bg-white border-none outline-none text-lg" />
                  </div>
                </div>
              ))}
              <div className="flex">
                <div className="w-1/3 bg-gray-400 px-4 py-3"></div>
                <div className="w-2/3 bg-gray-300 px-4 py-3">
                  <button type="submit" className="bg-teal-300 px-8 py-2 rounded text-lg font-semibold">Update User</button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default UserSetting
