import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

export function ErrorNotification({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed top-4 right-4 max-w-md bg-white rounded-lg shadow-lg p-4 border-l-4 border-red-500">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">Performance Issue Detected</h4>
          <p className="text-sm text-gray-600 mt-1">
            High memory usage detected in your application. AI assistant is analyzing the issue.
          </p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}