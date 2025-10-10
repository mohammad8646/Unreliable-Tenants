// src/components/Dashboard/QuickActions.jsx
import React from 'react';

export default function QuickActions() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
      <div className="flex flex-col gap-2">
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Add Complaint</button>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">Search Tenant</button>
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded">Export Report</button>
      </div>
    </div>
  );
}