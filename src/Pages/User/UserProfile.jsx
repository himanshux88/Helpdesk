import React from 'react'
import Header from '../../components/Header'
import LeftMenuBar from '../../components/User/LeftMenuBar'
import Footer from '../../components/Footer'

const UserProfile = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 bg-gray-100 min-h-0 ">
        <LeftMenuBar />
        <main className="flex-1 bg-white p-4 md:p-8 pt-14 pl-0 md:pl-65 mt-5" style={{paddingTop:'56px'}}>
          <h2 className="text-2xl font-semibold mb-6 mt-2">User Profile</h2>
          <div className="bg-teal-200 rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start justify-center min-h-[70vh]">
            
            <div className="bg-white rounded-2xl shadow-md p-8 min-w-[320px] flex flex-col items-center relative">
              <button className="absolute top-4 right-4 text-2xl" title="Edit Profile">
                <span role="img" aria-label="edit"><a href="settings">📝</a></span>
              </button>
              <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center mb-6">
                <span className="text-7xl text-gray-700">👤</span>
              </div>
              <div className="text-lg text-left w-full pl-4">
                <div>Username</div>
                <div>Contact Number</div>
                <div>Email</div>
                <div>Department</div>
              </div>
            </div>
           
            <div className="bg-white rounded-2xl shadow-md p-8 min-w-[320px] flex flex-col items-center">
              <div className="text-lg font-semibold mb-2">Give Your Feedback</div>
              <input
                type="text"
                className="w-full bg-gray-400 text-black rounded px-2 py-1 mb-3 text-center"
                value="[Lorem Ipsum]"
                readOnly
              />
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-gray-400">★</span>
                ))}
              </div>
              <button className="bg-teal-300 hover:bg-teal-400 px-8 py-2 rounded text-lg font-semibold shadow">Submit Feedback</button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default UserProfile
