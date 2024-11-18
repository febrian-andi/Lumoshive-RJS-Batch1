import React, { useState } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import Navigation from '../components/Shared/Navigation';
import useAuth from '../hooks/useAuth';

const DashboardLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <Navigation
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onLogout={handleLogout}
      />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
