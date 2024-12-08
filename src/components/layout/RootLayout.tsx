import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Sidebar />
      <div className="ml-64">
        <Outlet />
      </div>
    </div>
  );
}