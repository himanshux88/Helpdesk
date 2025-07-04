import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
const menuItems = [
  { to: '/user/dashboard', icon: '📊', label: 'Dashboard' },
  { to: '/user/new-ticket', icon: '📝', label: 'New Ticket' },
  { to: '/user/my-ticket', icon: '💼', label: 'My Ticket' },
]

const LeftMenuBar = () => {
  return (
    <aside className="bg-gray-200 min-h-[100vh] w-full md:w-56 flex flex-col pt-6 px-2 md:fixed md:top-14 z-20">
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-300 transition-colors ${isActive ? 'font-bold bg-gray-300' : ''}`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="text-lg"><MdKeyboardArrowRight /></span>}
                <span role="img" aria-label={item.label.toLowerCase()}>{item.icon}</span> {item.label}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default LeftMenuBar 