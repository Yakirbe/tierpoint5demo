import React from 'react';

interface PieChartProps {
  data: number[];
  labels: string[];
  colors: string[];
  className?: string;
}

export function PieChart({ data, labels, colors, className = "" }: PieChartProps) {
  const total = data.reduce((sum, value) => sum + value, 0);
  let currentAngle = 0;

  const paths = data.map((value, index) => {
    const angle = (value / total) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;

    const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
    const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
    const x2 = 50 + 40 * Math.cos(((startAngle + angle) * Math.PI) / 180);
    const y2 = 50 + 40 * Math.sin(((startAngle + angle) * Math.PI) / 180);

    const largeArcFlag = angle > 180 ? 1 : 0;

    const pathData = [
      `M 50 50`,
      `L ${x1} ${y1}`,
      `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ');

    return { path: pathData, color: colors[index], percentage: ((value / total) * 100).toFixed(1) };
  });

  return (
    <div className={`flex flex-col h-full ${className}`}>
      <div className="relative flex-1 min-h-0">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          {paths.map((segment, index) => (
            <path
              key={index}
              d={segment.path}
              fill={segment.color}
              className="transition-all duration-300 hover:opacity-80"
            />
          ))}
        </svg>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[index] }} />
            <span className="text-sm text-gray-600">{label} ({paths[index].percentage}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}