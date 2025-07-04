import React, { useState } from 'react';
import Header from '../../components/Header';
import LeftMenuBar from '../../components/Admin/LeftMenuBar';
import Footer from '../../components/Footer';

const sections = [
  {
    key: 'general',
    label: 'General',
    options: [
      {
        label: 'Language',
        type: 'lang',
      },
      {
        label: 'Data Backup',
        type: 'check',
        stateKey: 'dataBackup',
      },
    ],
  },
  {
    key: 'connect',
    label: 'Connect To',
    options: [
      { label: 'GoDash', type: 'check', stateKey: 'goDash' },
      { label: 'SuperController', type: 'check', stateKey: 'superController' },
    ],
  },
  {
    key: 'email',
    label: 'Email',
    options: [
      { label: 'Enable SMTP', type: 'check', stateKey: 'enableSmtp' },
    ],
  },
  {
    key: 'authorization',
    label: 'Authorization',
    options: [
      { label: 'Edit authorization', type: 'check', stateKey: 'editAuth' },
      { label: 'Authority Level', type: 'dropdown' },
    ],
  },
  {
    key: 'notification',
    label: 'Notification',
    options: [
      { label: 'Enable Notification', type: 'check', stateKey: 'enableNotif' },
    ],
  },
];

const initialChecks = {
  dataBackup: false,
  goDash: false,
  superController: false,
  enableSmtp: false,
  editAuth: false,
  enableNotif: false,
};

const Settings = () => {
  const [openSections, setOpenSections] = useState(sections.map(s => s.key));
  const [lang, setLang] = useState('BM');
  const [dropdownValue, setDropdownValue] = useState('');
  const [checks, setChecks] = useState(initialChecks);

  const toggleSection = (key) => {
    setOpenSections(open => open.includes(key) ? open.filter(k => k !== key) : [...open, key]);
  };

  const handleCheck = (key) => {
    setChecks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 bg-gray-100 min-h-0">
        <LeftMenuBar />
        <main className="flex-1 p-4 md:p-8 flex flex-col min-h-0 pt-14 pl-56 ml-10 mb-30 " style={{paddingTop:'56px', paddingLeft:'224px'}}>
          <h2 className="text-2xl font-semibold mb-6 mt-5">Setting</h2>
          <div className="max-w-3xl mx-auto w-full flex-1  rounded-lg min-h-0" style={{ maxHeight: 'calc(100vh - 160px)' }}>
            {sections.map(section => (
              <div key={section.key} className="mb-2">
                <button
                  className="w-full text-left px-4 py-2 bg-teal-400 text-black font-semibold rounded-t-md flex items-center justify-between focus:outline-none"
                  onClick={() => toggleSection(section.key)}
                >
                  <span>{section.label}</span>
                  <span className="ml-2">{openSections.includes(section.key) ? '▾' : '▸'}</span>
                </button>
                {openSections.includes(section.key) && (
                  <div className="bg-gray-100">
                    {section.options.map((opt, i) => (
                      <div key={opt.label} className="flex items-center justify-between px-6 py-3 border-b last:border-b-0 bg-gray-200 even:bg-gray-100">
                        <span className="text-lg">{opt.label}</span>
                        {opt.type === 'lang' && (
                          <span className="flex gap-2">
                            <button
                              className={`px-2 py-1 rounded font-bold text-xs ${lang === 'BM' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                              onClick={() => setLang('BM')}
                            >BM</button>
                            <button
                              className={`px-2 py-1 rounded font-bold text-xs ${lang === 'BI' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                              onClick={() => setLang('BI')}
                            >BI</button>
                          </span>
                        )}
                        {opt.type === 'check' && (
                          <input
                            type="checkbox"
                            checked={checks[opt.stateKey]}
                            onChange={() => handleCheck(opt.stateKey)}
                            className="w-5 h-5 accent-teal-500 cursor-pointer"
                          />
                        )}
                        {opt.type === 'dropdown' && (
                          <select
                            className="bg-gray-300 px-2 py-1 rounded shadow border-none"
                            value={dropdownValue}
                            onChange={e => setDropdownValue(e.target.value)}
                          >
                            <option value="">Select</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                            <option value="guest">Guest</option>
                          </select>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
