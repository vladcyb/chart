import React from 'react';
import './style.css';

type PropsType = {
  color: string
  width: number
  height: number
  values: number[]
  lineWidth?: number
  evenly?: boolean
}

export const Chart = ({
  values,
  height,
  width,
  color,
  lineWidth,
  evenly,
}: PropsType) => {
  const maxValue = Math.max(...values);
  const percents = values.map((value) => value / maxValue * 100);
  const lWidth = lineWidth || width / values.length - 20;

  return (
    <div
      className="chart"
      style={{
        width,
        height,
        justifyContent: evenly ? 'space-evenly' : 'space-between',
      }}
    >
      {percents.map((height, index) => (
        <div
          style={{
            width: `${lWidth}px`,
            height: `${height}%`,
            background: color,
          }}
          key={index}
        />
      ))}
    </div>
  )
};
