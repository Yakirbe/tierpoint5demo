import React from 'react';
import { Shield, AlertTriangle, Bot, GitPullRequest, Save } from 'lucide-react';

export function PolicyManagement() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Policy Management</h1>
          <p className="text-gray-600 mt-1">Configure system behavior and automation rules</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Escalation Policy */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-2 mb-4">
            <GitPullRequest className="w-5 h-5 text-blue-500" />
            <h2 className="text-lg font-medium">Escalation Policy</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Auto-escalation Timeout
              </label>
              <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>5 minutes</option>
                <option>10 minutes</option>
                <option>15 minutes</option>
                <option>30 minutes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Escalation Levels
              </label>
              <div className="space-y-2">
                {['Tier 1 Support', 'Tier 2 Support', 'Engineering Team', 'Management'].map((level, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                    <span className="text-sm text-gray-600">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Error Sensitivity */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-medium">Error Sensitivity</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Error Detection Threshold
              </label>
              <input 
                type="range" 
                min="1" 
                max="100" 
                defaultValue="75"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Less Sensitive</span>
                <span>More Sensitive</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monitor Categories
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Memory Usage',
                  'CPU Load',
                  'API Response Time',
                  'Error Rates',
                  'Database Performance',
                  'Network Latency'
                ].map((category, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                    <span className="text-sm text-gray-600">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Companion Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Bot className="w-5 h-5 text-green-500" />
            <h2 className="text-lg font-medium">AI Companion Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Intervention Level
              </label>
              <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Aggressive (Auto-fix when confident)</option>
                <option>Moderate (Suggest fixes)</option>
                <option>Conservative (Monitor only)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                AI Features
              </label>
              <div className="space-y-2">
                {[
                  'Screen Analysis',
                  'Automated Problem Resolution',
                  'Performance Optimization',
                  'User Behavior Analysis',
                  'Predictive Alerts'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Data Collection Policy */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="w-5 h-5 text-purple-500" />
            <h2 className="text-lg font-medium">Data Collection Policy</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data Retention Period
              </label>
              <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>30 days</option>
                <option>60 days</option>
                <option>90 days</option>
                <option>180 days</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Collection Settings
              </label>
              <div className="space-y-2">
                {[
                  'System Logs',
                  'User Interactions',
                  'Performance Metrics',
                  'Error Reports',
                  'Screen Recordings',
                  'Environment Variables'
                ].map((setting, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                    <span className="text-sm text-gray-600">{setting}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}