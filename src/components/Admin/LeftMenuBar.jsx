import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";

const mainMenuItems = [
  { to: '/admin/dashboard', icon: '📊', label: 'Dashboard' },
  { to: '/admin/database', icon: '🗄️', label: 'Database' },
  { to: '/admin/settings', icon: '⚙️', label: 'Setting' },
  { to: '/admin/user-log', icon: '📜', label: 'User Log History' },
];

const dbTabs = [
  { key: 'user', icon: '👤', label: 'User' },
  { key: 'operation-team', icon: '🛠️', label: 'Operation Team' },
  { key: 'technical-support', icon: '🎧', label: 'Technical Support' },
];

const SIDEBAR_WIDTH = 224; 
const HEADER_HEIGHT = 56; 

const LeftMenuBar = () => {
  const location = useLocation();
  const [openDb, setOpenDb] = useState(location.pathname.startsWith('/admin/database'));
  const [openTabs, setOpenTabs] = useState(dbTabs.map(tab => tab.key));
  const [activeTab, setActiveTab] = useState('user');

  React.useEffect(() => {
    setOpenDb(location.pathname.startsWith('/admin/database'));
  }, [location.pathname]);

  return (
    <aside
      className="bg-gray-200 w-56 flex flex-col pt-6 px-2 shadow-md fixed z-20 left-0"
      style={{ top: HEADER_HEIGHT, height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
    >
      <nav className="flex flex-col gap-2">
        {mainMenuItems.map((item) => (
          <div key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-300 transition-colors text-lg ${isActive || (item.to === '/admin/database' && openDb) ? 'font-bold bg-gray-300' : ''}`
              }
              onClick={() => {
                if (item.to === '/admin/database') setOpenDb(v => !v);
              }}
            >
              {({ isActive }) => (
                <>
                  {(isActive || (item.to === '/admin/database' && openDb)) && <span className="text-lg"><MdKeyboardArrowRight /></span>}
                  <span role="img" aria-label={item.label.toLowerCase()}>{item.icon}</span> {item.label}
                </>
              )}
            </NavLink>
           
            {item.to === '/admin/database' && openDb && (
              <div className="ml-8 flex flex-col gap-1 mt-1">
                {dbTabs.filter(tab => openTabs.includes(tab.key)).map(tab => (
                  <div key={tab.key} className="flex items-center group">
                    <button
                      className={`flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-300 transition-colors text-base w-full text-left ${activeTab === tab.key ? 'font-bold bg-gray-300' : ''}`}
                      onClick={() => setActiveTab(tab.key)}
                    >
                      <span role="img" aria-label={tab.label.toLowerCase()}>{tab.icon}</span> {tab.label}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default LeftMenuBar;
