import React from 'react';

interface LineChartProps {
  data: number[];
  labels: string[];
  height?: string;
  className?: string;
}

export function LineChart({ data, labels, height = "h-40", className = "" }: LineChartProps) {
  const maxValue = Math.max(...data);
  const points = data.map((value, index) => ({
    x: (index / (data.length - 1)) * 100,
    y: 100 - ((value / maxValue) * 100)
  }));

  const pathData = points.reduce((path, point, index) => {
    return path + `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`;
  }, '');

  return (
    <div className={`${height} ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d={pathData}
          fill="none"
          stroke="rgb(59 130 246)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="flex justify-between mt-2">
        {labels.map((label, index) => (
          <span key={index} className="text-xs text-gray-600">{label}</span>
        ))}
      </div>
    </div>
  );
}