"use client"

import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import { ApexOptions } from 'apexcharts';


const InvestmentChart: React.FC = () => {
    const options: ApexOptions = {
        colors: ['#F7A35C', '#90ED7D', '#434348', '#7CB5EC', '#E4D354', '#F15C80', '#8085E9'],
        labels: ['Blockchain Service', 'DeFi', 'CeFi', 'Blockchain Infrast....', 'NFT', 'GameFi', 'Social'],
        legend: {
            show: false
        },
        stroke: {
            width: 0
        },
        dataLabels: {
            enabled: false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
            }
        }]
    }
    const series = [
        {
            name: 'Alpha',
            data: [40, 30, 45, 35, 55, 40, 50, 25, 45, 35]
        }
    ]
    const outsiders = [
        {
            data: [40, 30, 45, 35, 55, 40, 50, 25, 45, 35],
            colors: ['#F7A35C', '#90ED7D', '#434348', '#7CB5EC', '#E4D354', '#F15C80', '#8085E9'],
            labels: ['Blockchain Service', 'DeFi', 'CeFi', 'Blockchain Infrast....', 'NFT', 'GameFi', 'Social'],
        }
    ]

    return (
        <>
            <p className="mb-4 text-base text-left text-white">Paradigm Investment Categories</p>
            <div className='flex justify-center mb-4'>
                <Chart options={options} series={series} type="donut" width={280} />
            </div>

            <ul className="flex flex-col gap-3">
                {
                    outsiders.map((el, i) => {
                        return (
                            <li className="flex items-center gap-2" key={i}>
                                <div className={`w-4 h-4 rounded-sm`} style={{ backgroundColor: el.colors[i] }}></div>
                                <span className="text-xs text-[#d8dbd5]">{el.labels[i]} {el.data[i]}%</span>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default InvestmentChart