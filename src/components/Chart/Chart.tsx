import React from 'react';
import './style.css';

type PropsType = {
  color: string
  width: number
  height: number
  values: number[]
}

export const Chart = ({
  values,
  height,
  width,
  color,
}: PropsType) => {
  const maxValue = Math.max(...values);
  const percents = values.map((value) => value / maxValue * 100);
  const lineWidth = Math.max(width / values.length - 20, 1);

  return (
    <div
      className="chart"
      style={{
        width,
        height,
      }}
    >
      {percents.map((height, index) => (
        <div
          className="chart__line"
          style={{
            width: `${lineWidth}px`,
            height: `${height}%`,
            background: color,
          }}
          key={index}
        />
      ))}
    </div>
  )
};
