"use client"

import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import { ApexOptions } from 'apexcharts';


const HomeChart: React.FC = () => {
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

export default HomeChart;