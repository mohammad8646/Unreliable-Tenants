// src/components/Dashboard/ComplaintList.jsx
import React from 'react';

const complaints = [
  { id: 1, tenant: 'John Doe', issue: 'Late rent payment', status: 'Pending' },
  { id: 2, tenant: 'Sarah Connor', issue: 'Property damage', status: 'Approved' },
  { id: 3, tenant: 'Rick Sanchez', issue: 'Broke lease agreement', status: 'Rejected' }
];

export default function ComplaintList() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">Recent Complaints</h2>
      <ul>
        {complaints.map(complaint => (
          <li key={complaint.id} className="border-b py-2 flex justify-between">
            <span>{complaint.tenant} - {complaint.issue}</span>
            <span className="text-sm text-gray-500">{complaint.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}