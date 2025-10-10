import React from 'react';
import ComplaintList from '../components/Dashboard/ComplaintList';
import UserList from '../components/Dashboard/UserList';
import ModerationPanel from '../components/Dashboard/ModerationPanel';
import StatsOverview from '../components/Dashboard/SatatsOverview';
import QuickActions from '../components/Dashboard/QuickActions';
import LegalNotice from '../components/Dashboard/LegalNotice';


export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <StatsOverview />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ComplaintList />
        <UserList />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ModerationPanel />
        <QuickActions />
      </div>

      <div className="mt-6">
        <LegalNotice />
      </div>
    </div>
  );
}