// src/components/Dashboard/UserList.jsx
import React from 'react';

const users = [
  { id: 1, name: 'Landlord Alpha', role: 'Landlord', status: 'Active' },
  { id: 2, name: 'Tenant Omega', role: 'Tenant', status: 'Blocked' },
  { id: 3, name: 'Landlord Beta', role: 'Landlord', status: 'Active' }
];

export default function UserList() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">User Management</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className="border-b py-2 flex justify-between">
            <span>{user.name} ({user.role})</span>
            <span className="text-sm text-gray-500">{user.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}