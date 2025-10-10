// src/components/Dashboard/LegalNotice.jsx
import React from 'react';

export default function LegalNotice() {
  return (
    <div className="bg-yellow-100 p-4 rounded-xl border border-yellow-400">
      <h2 className="text-lg font-semibold text-yellow-800">Legal Notice</h2>
      <p className="text-sm text-yellow-700 mt-2">
        All complaints must be reviewed before publication. Sharing defamatory or unverified information may result in legal action. This platform complies with GDPR and local privacy regulations.
      </p>
    </div>
  );
}
