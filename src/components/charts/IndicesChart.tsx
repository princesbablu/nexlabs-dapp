"use client"

import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import { ApexOptions } from 'apexcharts';

import cbit from '~/assets/c-bit.png';
import ct from '~/assets/c-t.png';
import cpriz from '~/assets/c-priz.png';
import Image from 'next/image';


const ReportChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    theme: {
      mode: 'dark'
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
      curve: 'smooth',
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
  }
  const series = [
    {
      name: 'Alpha',
      data: [40, 30, 45, 35, 55, 40, 50, 25, 45, 35]
    }
  ]

  return (
    <Chart
      type="line"
      options={options}
      series={series}
      width="100%"
      height={230}
    />
  );
}


const IndicesChart = () => {
  return (
    <div className="h-[260px] w-full relative overflow-hidden rounded-lg z-10">
      <div className="relative z-10">
        <ReportChart />
      </div>


      <div
        className="absolute top-0 left-0 h-full w-full rounded-[inherit] flex flex-col p-3"
        style={{ background: "linear-gradient(221.27deg, rgba(55,75,35,0.75) 5.16%, rgba(55,75,35,0.35) 97.57%)" }}
      >
        <p className="text-lg font-bold text-[#f6f9f3]">
          All Weather Alpha Please
        </p>
        <div className="mt-auto">
          <p className="text-[10px] font-medium text-[#f6f9f3] mb-2">Last 24h</p>
          <div className="inline-flex justify-center items-center relative gap-2.5 px-1 py-0.5 rounded-[20px] bg-[#7dc350]/30 mb-2">
            <p className="text-[10px] font-medium text-center text-[#f6f9f3]">
              0.56%
            </p>
          </div>
          <div className="flex items-start justify-start gap-1">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 pl-0.5 pr-[5px] py-0.5 rounded-[40px] bg-[#7dc350]/30">
              <Image className="flex-grow-0 flex-shrink-0" src={cbit} alt="" />
              <p className="text-[10px] font-medium text-center text-[#d8dbd5]">5%</p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 pl-0.5 pr-[5px] py-0.5 rounded-[40px] bg-[#7dc350]/30">
              <Image className="flex-grow-0 flex-shrink-0" src={ct} alt="" />
              <p className="text-[10px] font-medium text-center text-[#d8dbd5]">5%</p>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1 pl-0.5 pr-[5px] py-0.5 rounded-[40px] bg-[#7dc350]/30">
              <Image className="flex-grow-0 flex-shrink-0" src={cpriz} alt="" />
              <p className="text-[10px] font-medium text-center text-[#d8dbd5]">7%</p>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1 px-1 py-0.5 rounded-[40px] bg-[#7dc350]/30">
              <p className="text-[10px] font-medium text-center text-[#d8dbd5]">+7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndicesChart;