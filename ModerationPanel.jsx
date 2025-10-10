// src/components/Dashboard/ModerationPanel.jsx
import React from 'react';

export default function ModerationPanel() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">Moderation Panel</h2>
      <p className="text-gray-600">Here you can approve or reject submitted complaints before they are published.</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Go to Moderation Queue</button>
    </div>
  );
}