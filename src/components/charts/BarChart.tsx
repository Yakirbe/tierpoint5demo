import React from 'react';

interface BarChartProps {
  data: number[];
  labels: string[];
  height?: string;
  className?: string;
}

export function BarChart({ data, labels, height = "h-40", className = "" }: BarChartProps) {
  const maxValue = Math.max(...data);

  return (
    <div className={`${height} ${className}`}>
      <div className="flex items-end justify-between h-full space-x-2">
        {data.map((value, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
              style={{ height: `${(value / maxValue) * 100}%` }}
            />
            <span className="text-xs text-gray-600 mt-1">{labels[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}