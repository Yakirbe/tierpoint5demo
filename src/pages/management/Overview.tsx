import React from 'react';
import { Settings, Users, Bell, AlertTriangle, BarChartIcon, Clock, Activity } from 'lucide-react';
import { MetricCard } from '../../components/dashboard/MetricCard';
import { BarChart } from '../../components/charts/BarChart';
import { LineChart } from '../../components/charts/LineChart';
import { PieChart } from '../../components/charts/PieChart';

const recentActivities = [
  {
    id: 1,
    type: 'incident',
    title: 'High Memory Usage Detected',
    description: 'AI Agent automatically scaled resources',
    time: '2 minutes ago',
    status: 'resolved'
  },
  {
    id: 2,
    type: 'escalation',
    title: 'Database Connection Issues',
    description: 'Escalated to Tier 2 Support',
    time: '15 minutes ago',
    status: 'in_progress'
  },
  {
    id: 3,
    type: 'alert',
    title: 'API Response Time Degradation',
    description: 'Investigating root cause',
    time: '1 hour ago',
    status: 'investigating'
  }
];

const issueCategories = {
  data: [45, 32, 27, 18, 15],
  labels: ['Memory', 'CPU', 'Network', 'Disk', 'Other'],
  colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']
};

export function Overview() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Overview</h1>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Active Issues"
          value={23}
          icon={AlertTriangle}
          iconColor="text-orange-500"
          trend={{ value: 12, isPositive: false }}
        />
        <MetricCard
          title="AI Resolutions"
          value="89%"
          icon={Settings}
          iconColor="text-blue-500"
          trend={{ value: 5, isPositive: true }}
        />
        <MetricCard
          title="Active Users"
          value="1,234"
          icon={Users}
          iconColor="text-green-500"
          trend={{ value: 8, isPositive: true }}
        />
        <MetricCard
          title="Avg Response Time"
          value="1.2s"
          icon={Activity}
          iconColor="text-purple-500"
          trend={{ value: 15, isPositive: true }}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Issues by Category</h2>
          <div className="h-64">
            <PieChart
              data={issueCategories.data}
              labels={issueCategories.labels}
              colors={issueCategories.colors}
              className="h-full"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Resolution Time Trend</h2>
          <LineChart
            data={[5, 8, 3, 10, 2, 4, 7]}
            labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
          />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className={`w-2 h-2 rounded-full ${
                    activity.status === 'resolved' ? 'bg-green-500' :
                    activity.status === 'in_progress' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                    <p className="text-sm text-gray-500">{activity.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}