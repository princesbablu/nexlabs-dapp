"use client"

import React from 'react'
import { Component } from "react";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class AssetChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
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
                colors: ['#F69B24', '#3AC954', '#33F7FF'],
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: .5,
                        opacityTo: 0,
                        stops: [0, 50, 100],
                    }
                }
            },
            series: [
                {
                    name: 'Senior Tranche',
                    data: [20, 30, 45, 55, 65, 70, 80, 95, 115, 135]
                },
                {
                    name: 'Mezzanine Tranche',
                    data: [10, 20, 35, 45, 55, 65, 70, 85, 95, 105]
                },
                {
                    name: 'Junior Tranche',
                    data: [0, 10, 25, 35, 45, 50, 60, 75, 85, 80]
                },
            ],
        };
    }

    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="area"
                width="100%"
                height="450px"
            />
        );
    }
}


export default AssetChart;