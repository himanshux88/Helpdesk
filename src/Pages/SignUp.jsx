import React from 'react'

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-300">
      <div className="bg-teal-100  rounded-md px-8 py-10 w-full max-w-2xl flex flex-col items-center">
        <h1 className="text-3xl font-bold italic text-center mb-2">Helpdesk System</h1>
        <p className="text-lg text-center mb-6">Sign up here</p>
        <form className="w-full max-w-md flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-400 bg-white rounded placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-400 rounded bg-white placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-400 rounded bg-white placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            required
          />
          <button
            type="submit"
            className="w-2/3 mx-auto bg-blue-500 text-white py-2 rounded-lg mt-2 hover:bg-blue-600 transition-colors text-lg font-medium"
          >
            Sign Up
          </button>
        </form>
        <div className="w-full flex justify-between mt-6 px-2">
          <a href="forgot-password" className="text-sm text-red-600 hover:underline">Forgot password</a>
          <a href="signin" className="text-lg text-black hover:underline">Sign In</a>
        </div>
      </div>
    </div>
  )
}

export default SignUp
