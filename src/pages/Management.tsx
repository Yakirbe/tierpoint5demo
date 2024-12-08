import React from 'react';
import { Settings, Users, Bell, AlertTriangle, BarChart } from 'lucide-react';

export function Management() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold text-gray-900">Support Management Dashboard</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Active Issues Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                <h2 className="text-lg font-medium">Active Issues</h2>
              </div>
              <span className="text-2xl font-semibold">23</span>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Critical</span>
                <span className="text-red-500 font-medium">5</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-600">High</span>
                <span className="text-orange-500 font-medium">8</span>
              </div>
            </div>
          </div>

          {/* AI Interventions Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-blue-500" />
                <h2 className="text-lg font-medium">AI Interventions</h2>
              </div>
              <span className="text-2xl font-semibold">89%</span>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 rounded-full h-2" style={{ width: '89%' }} />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Successfully resolved without human intervention
              </p>
            </div>
          </div>

          {/* Active Users Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-500" />
                <h2 className="text-lg font-medium">Active Users</h2>
              </div>
              <span className="text-2xl font-semibold">1,234</span>
            </div>
            <div className="mt-4">
              <BarChart className="w-full h-16 text-green-500" />
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="bg-white rounded-lg shadow p-6 md:col-span-2 lg:col-span-3">
            <div className="flex items-center space-x-2 mb-4">
              <Bell className="w-5 h-5 text-purple-500" />
              <h2 className="text-lg font-medium">Recent Alerts</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  user: "user@company.com",
                  issue: "Memory leak detected",
                  time: "2 minutes ago",
                  status: "critical"
                },
                {
                  user: "dev@company.com",
                  issue: "High CPU usage",
                  time: "15 minutes ago",
                  status: "warning"
                },
                {
                  user: "admin@company.com",
                  issue: "Database connection timeout",
                  time: "1 hour ago",
                  status: "resolved"
                }
              ].map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-2 h-2 rounded-full ${
                      alert.status === 'critical' ? 'bg-red-500' :
                      alert.status === 'warning' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`} />
                    <div>
                      <p className="font-medium">{alert.user}</p>
                      <p className="text-sm text-gray-600">{alert.issue}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{alert.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}