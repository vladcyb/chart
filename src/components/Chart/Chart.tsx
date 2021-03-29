import React from 'react';
import './style.css';

type PropsType = {
  color: string
  width: number
  height: number
  values: number[]
  lineWidth?: number
  justifyContent?: 'space-between' | 'space-evenly' | 'space-around'
}

export const Chart = ({
  values,
  height,
  width,
  color,
  lineWidth,
  justifyContent = 'space-between',
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
        justifyContent,
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
