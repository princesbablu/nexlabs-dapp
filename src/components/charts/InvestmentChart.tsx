"use client"

import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import { ApexOptions } from 'apexcharts';


const InvestmentChart: React.FC = () => {
    const options: ApexOptions = {
        colors: ['#F7A35C', '#90ED7D', '#434348', '#7CB5EC', '#E4D354', '#F15C80', '#8085E9'],
        plotOptions: {
            bar: {
                distributed: true
            }
        },
        labels: ['Blockchain Service', 'DeFi', 'CeFi', 'Blockchain Infrast....', 'NFT', 'GameFi', 'Social'],
        chart: {
            id: "basic-bar",
            toolbar: {
                show: false
            },
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
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
        stroke: {
            curve: 'smooth',
            width: 2
        },
        grid: {
            borderColor: '#90A4AE08',
            xaxis: {
                lines: {
                    show: false
                }
            },
        },
        theme: {
            mode: 'dark'
        },
        // fill: {
        //     type: 'gradient',
        //     gradient: {
        //         shade: 'dark',
        //         type: 'horizontal',
        //         shadeIntensity: 1,
        //         gradientToColors: ['#00ADEF', '#8AC640'],
        //         inverseColors: false,
        //         opacityFrom: .5,
        //         opacityTo: 0,
        //         stops: [0, 200]
        //     },
        // },
    }
    const series = [
        {
            name: 'Alpha',
            data: [40, 30, 45, 35, 55, 40, 50]
        }
    ]
    // const outsiders = [
    //     {
    //         data: [40, 30, 45, 35, 55, 40, 50],
    //         colors: ['#F7A35C', '#90ED7D', '#434348', '#7CB5EC', '#E4D354', '#F15C80', '#8085E9'],
    //         labels: ['Blockchain Service', 'DeFi', 'CeFi', 'Blockchain Infrast....', 'NFT', 'GameFi', 'Social'],
    //     },
    // ]

    return (
        <>
            <p className="mb-4 text-base text-left text-white">Paradigm Investment Categories</p>
            <Chart options={options} series={series} type="bar" width={320} />

            <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-sm`} style={{ backgroundColor: '#F7A35C' }}></div>
                    <span className="text-xs text-[#d8dbd5]">Blockchain Service 40%</span>
                </li>
                <li className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-sm`} style={{ backgroundColor: '#90ED7D' }}></div>
                    <span className="text-xs text-[#d8dbd5]">DeFi 30%</span>
                </li>
                <li className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-sm`} style={{ backgroundColor: '#434348' }}></div>
                    <span className="text-xs text-[#d8dbd5]">CeFi 45%</span>
                </li>
                <li className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-sm`} style={{ backgroundColor: '#7CB5EC' }}></div>
                    <span className="text-xs text-[#d8dbd5]">Blockchain Infrast.... 35%</span>
                </li>
                <li className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-sm`} style={{ backgroundColor: '#E4D354' }}></div>
                    <span className="text-xs text-[#d8dbd5]">NFT 55%</span>
                </li>
                <li className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-sm`} style={{ backgroundColor: '#F15C80' }}></div>
                    <span className="text-xs text-[#d8dbd5]">GameFi 40%</span>
                </li>
                <li className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-sm`} style={{ backgroundColor: '#8085E9' }}></div>
                    <span className="text-xs text-[#d8dbd5]">Social 50%</span>
                </li>
            </ul>
        </>
    );
}

export default InvestmentChart