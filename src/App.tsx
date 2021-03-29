import React from 'react';
import { Chart } from './components';
import './App.css';

export const App = () => {
  const values1 = [1, 2, 3];
  const values2 = [1, 2, 4, 5, 3, 10];
  const values3 = new Array(100);
  for (let i = 0; i < 100; i += 1) {
    values3[i] = i;
  }

  return (
    <div className="app">
      <div className="app__chartWrapper">
        <Chart values={values1} width={200} height={200} color="#32a852" />
      </div>
      <div className="app__chartWrapper">
        <Chart
          values={values1}
          width={200}
          height={100}
          color="#32a852"
          lineWidth={30}
          evenly
        />
      </div>
      <div className="app__chartWrapper">
        <Chart values={values2} width={400} height={200} color="#32a892" />
      </div>
      <div className="app__chartWrapper">
        <Chart values={values2} width={200} height={200} color="#33aab5" />
      </div>
      <div className="app__chartWrapper">
        <Chart values={values2} width={200} height={100} color="#33b546" />
      </div>
      <div className="app__chartWrapper">
        <Chart values={values3} width={200} height={100} color="#1e9461" />
      </div>
      <div className="app__chartWrapper">
        <Chart values={values3} width={400} height={100} color="#1e9461" lineWidth={4} />
      </div>
    </div>
  );
};
