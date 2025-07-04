import React from 'react'

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-300">
      <div className="bg-teal-100 rounded-md px-6 py-8 w-full max-w-2xl flex flex-col items-center sm:px-8 sm:py-10">
        <p className="text-center text-base mb-8 mt-4">Don't worry, Enter your email below and we will<br/>send you a link to change password.</p>
        <form className="w-full max-w-md flex flex-col gap-4 items-center">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-400 bg-white rounded placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            required
          />
          <button
            type="submit"
            className="w-[47%] bg-green-500 text-white py-2 rounded-lg mt-2 hover:bg-green-600 transition-colors text-lg font-medium"
          >
            Submit
          </button>
        </form>
        <a href="signin" className='w-full block text-center '><button
          className="px-20 bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition-colors text-lg font-medium"
        >
          Sign In
        </button></a>
        
      </div>
    </div>
  )
}

export default ForgotPassword
