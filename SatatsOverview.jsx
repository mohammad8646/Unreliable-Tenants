// src/components/Dashboard/StatsOverview.jsx
import React from 'react';

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500">Total Complaints</p>
        <p className="text-2xl font-bold">102</p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500">Registered Users</p>
        <p className="text-2xl font-bold">245</p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500">Pending Moderations</p>
        <p className="text-2xl font-bold">12</p>
      </div>
    </div>
  );
}