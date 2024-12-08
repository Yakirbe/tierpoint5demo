import React, { useState } from 'react';
import { AICompanion } from '../components/AICompanion';
import { ErrorNotification } from '../components/ErrorNotification';
import { Terminal, AlertCircle } from 'lucide-react';

export function UserEnvironment() {
  const [showError, setShowError] = useState(true);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold text-gray-900">Development Environment</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Terminal className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-medium">Application Logs</h2>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
            <p>[2024-03-15 10:23:15] INFO: Application started</p>
            <p>[2024-03-15 10:23:16] INFO: Connected to database</p>
            <p className="text-yellow-400">[2024-03-15 10:23:18] WARN: High memory usage detected</p>
            <p className="text-red-400">[2024-03-15 10:23:19] ERROR: Memory leak in user session handler</p>
          </div>

          <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
            <AlertCircle className="w-4 h-4" />
            <span>AI Assistant is monitoring your environment</span>
          </div>
        </div>
      </main>

      {showError && <ErrorNotification onClose={() => setShowError(false)} />}
      <AICompanion isAnalyzing={isAnalyzing} />
    </div>
  );
}