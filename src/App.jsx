import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import ForgotPassword from './Pages/ForgotPassword';
import Dashboard from './Pages/User/Dashboard';
import CreateTicket from './Pages/User/CreateTicket';
import MyTickets from './Pages/User/MyTickets';
import UserProfile from './Pages/User/UserProfile';
import UserSetting from './Pages/User/UserSetting';
import AdminDashboard from './Pages/Admin/Dashboard';
import AdminDatabase from './Pages/Admin/Database';
import AdminSettings from './Pages/Admin/Settings';
import AdminLog from './Pages/Admin/UserLog';
import AdminProfile from './Pages/Admin/Profile';
import AdminProfileSettings from "./Pages/Admin/ProfileSettings";
import { AuthProvider, RequireAuth } from './context/AuthContext';
import SupportDashboard from './Pages/TechnicalSupport/Dashboard';
import SupportProfile from './Pages/TechnicalSupport/Profile';
import SupportSetting from './Pages/TechnicalSupport/ProfileSetting';
import SupportTickets from './Pages/TechnicalSupport/MyTickets';
import Performance from './Pages/TechnicalSupport/Performance';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/user/dashboard" element={<RequireAuth role="user"><Dashboard /></RequireAuth>} />
        <Route path="/user/new-ticket" element={<RequireAuth role="user"><CreateTicket /></RequireAuth>} />
        <Route path="/user/my-ticket" element={<RequireAuth role="user"><MyTickets /></RequireAuth>} />
        <Route path="/user/profile" element={<RequireAuth role="user"><UserProfile /></RequireAuth>} />
        <Route path="/user/settings" element={<RequireAuth role="user"><UserSetting /></RequireAuth>} />

        <Route path="/admin/dashboard" element={<RequireAuth role="admin"><AdminDashboard /></RequireAuth>} />
        <Route path="/admin/database" element={<RequireAuth role="admin"><AdminDatabase /></RequireAuth>} />
        <Route path="/admin/settings" element={<RequireAuth role="admin"><AdminSettings /></RequireAuth>} />
        <Route path="/admin/user-log" element={<RequireAuth role="admin"><AdminLog /></RequireAuth>} />
        <Route path="/admin/profile" element={<RequireAuth role="admin"><AdminProfile /></RequireAuth>} />
        <Route path="/admin/edit" element={<RequireAuth role="admin"><AdminProfileSettings /></RequireAuth>} />

        <Route path="/support/dashboard" element={<RequireAuth role="support"><SupportDashboard/></RequireAuth>}></Route>
        <Route path="/support/my-ticket" element={<RequireAuth role="support"><SupportTickets/></RequireAuth>}></Route>
        <Route path="/support/performance" element={<RequireAuth role="support"><Performance/></RequireAuth>}></Route>
        <Route path="/support/profile" element={<RequireAuth role="support"><SupportProfile/></RequireAuth>}></Route>
        <Route path="/support/settings" element={<RequireAuth role="support"><SupportSetting/></RequireAuth>}></Route>

        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
