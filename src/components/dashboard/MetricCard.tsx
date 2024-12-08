import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function MetricCard({ title, value, icon: Icon, iconColor, trend }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon className={`w-5 h-5 ${iconColor}`} />
          <h2 className="text-lg font-medium">{title}</h2>
        </div>
        <span className="text-2xl font-semibold">{value}</span>
      </div>
      {trend && (
        <div className="mt-2 flex items-center">
          <span className={`text-sm ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
          <span className="text-sm text-gray-500 ml-1">vs last week</span>
        </div>
      )}
    </div>
  );
}