import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { GoBellFill } from "react-icons/go";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
    navigate('/signin');
  };

  return (
    <header className="w-full flex items-center justify-between bg-teal-400 px-6 py-3 fixed top-0 left-0 z-30" style={{height:'56px'}}>
      <div className="text-white text-2xl italic font-bold">Helpdesk</div>
      <div className="flex items-center gap-3">
        <button className="bg-gray-200 text-xs font-bold rounded px-2 py-1">BM</button>
        <button className="bg-gray-200 text-xs font-bold rounded px-2 py-1">BI</button>
        <button className="text-xl"><span role="img" aria-label="bell"><GoBellFill /></span></button>
        <button className="text-xl"><span role="img" aria-label="user"><a href="profile"><FaUser /></a></span></button>
        <button className="text-xl cursor-pointer" onClick={handleLogout}><span role="img" aria-label="logout"><FaSignOutAlt /></span></button>
      </div>
    </header>
  )
}

export default Header 