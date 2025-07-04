import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { signIn } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = signIn(email, password)
    if (result.success) {
      if (result.role === 'admin') {
        navigate('/admin/dashboard')
      } else if (result.role === 'user') {
        navigate('/user/dashboard')
      } else if (result.role === 'support') {
        navigate('/support/dashboard')
      }
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-300">
      <div className="bg-teal-100 rounded-md px-6 py-8 w-full max-w-2xl flex flex-col items-center sm:px-8 sm:py-10">
        <h1 className="text-3xl font-bold italic text-center mb-2">Helpdesk System</h1>
        <form className="w-full max-w-md flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-400 bg-white rounded placeholder:text-black focus:outline-none focus:ring-2 focus:ring-green-400 text-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-400 bg-white rounded placeholder:text-black focus:outline-none focus:ring-2 focus:ring-green-400 text-lg"
            required
          />
          {error && <div className="text-red-600 text-center text-sm">{error}</div>}
          <button
            type="submit"
            className="w-2/3 mx-auto bg-green-500 text-white py-2 rounded-lg mt-2 hover:bg-green-600 transition-colors text-lg font-medium"
          >
            Sign In
          </button>
        </form>
        <div className="w-full flex justify-between mt-6 px-2">
          <a href="forgot-password" className="text-sm text-red-600 hover:underline">Forgot password</a>
          <a href="signup" className="text-lg text-black hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default SignIn
