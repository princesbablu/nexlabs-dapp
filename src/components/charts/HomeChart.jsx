"use client"

import React from 'react'
import { Component } from "react";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class HomeChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          },
        },
        xaxis: {
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        stroke: {
          curve: 'stepline',
          width: 2
        },
        grid: {
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 1,
            gradientToColors: ['#8AC640', '#00ADEF'],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          },
        },
        tooltip: {
          x: {
            show: false
          },
          marker: {
            show: false
          },
        }
      },
      series: [
        {
          name: 'Sales',
          data: [40, 30, 45, 35, 55, 40, 50, 25, 45, 35]
        }
      ]
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
        width="100%"
      />
    );
  }
}

export default HomeChart;