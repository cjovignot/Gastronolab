"use client"
import React, { useState } from 'react';
import Filter from '../ChartFilters';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'plantes',
        data: [5, 8, 12, 10, 7, 14, 16, 20, 5, 9, 3, 5],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
    },
  });

  const [filterValue, setFilterValue] = useState('plantes');
  const [newCategories, setNewCategories] = useState(chartData.options.xaxis.categories);

  const updateChartData = (filterValue) => {
    let newData = [];
    let updatedCategories = [...chartData.options.xaxis.categories];
    let utilisationCategories = ['Infusions', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let monthsCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let plantCategories = ['Fleurs', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    if (filterValue === 'utilisation') {
      newData = [8, 13, 6, 18, 12, 17, 11, 24, 9, 11, 6, 9];
      updatedCategories = utilisationCategories
    } else if (filterValue === 'semis') {
      newData = [5, 8, 12, 10, 7, 14, 16, 20, 5, 9, 3, 5];
      updatedCategories = monthsCategories
    } else if (filterValue === 'recolte') {
      newData = [3, 5, 3, 14, 12, 13, 11, 12, 8, 6, 8, 4];
      updatedCategories = monthsCategories
    } else if (filterValue === 'plantes') {
      newData = [5, 8, 12, 10, 7, 14, 16, 20, 5, 9, 3, 5];
      updatedCategories = plantCategories
    }

    setChartData({
      series: [
        {
          name: filterValue,
          data: newData,
        },
      ],
      options: {
        ...chartData.options,
        xaxis: {
          categories: updatedCategories,
        },
      },
    });

    setFilterValue(filterValue);
  };

  return (
    <div className="flex flex-col items-center">
      <Filter onFilterChange={updateChartData} />
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
          width={900}
        />
      </div>
    </div>
  );
};

const BarChart = () => {
  return (
    <div>
      <ApexChart />
    </div>
  );
};

export default BarChart;
