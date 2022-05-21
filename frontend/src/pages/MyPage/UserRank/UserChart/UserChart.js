import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';
import styled from 'styled-components';
import { zh_TW } from 'faker/lib/locales';

const Chart = ({ stats }) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);
  const labels = [''];
  const options = {
    responsive: false,
    plugins: {},
  };

  const data = {
    labels,
    datasets: [
      {
        label: '체력',
        data: labels.map(() => 55),
        backgroundColor: 'rgba(255,255, 255, 0.5)',
      },
      {
        label: '지능',
        data: labels.map(() => 20),
        backgroundColor: 'rgba(255,255, 255, 0.5)',
      },
      {
        label: '매력',
        data: labels.map(() => 30),
        backgroundColor: 'rgba(255,255, 255, 0.5)',
      },
      {
        label: '예술',
        data: labels.map(() => 30),
        backgroundColor: 'rgba(255,255, 255, 0.5)',
      },
    ],
  };

  return (
    <ChartContainer>
      <div>
        <Bar
          options={options}
          data={data}
          style={{ width: '250px', margin: '0 0 0 8px' }}
        />
      </div>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  margin: ${props => props.theme.marginCenter};
`;

export default Chart;
