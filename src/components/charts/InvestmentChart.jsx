"use client"

import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class InvestmentChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [32.1, 21, 14.8, 13.6, 9.9, 6.2, 2.5],
            options: {
                colors: ['#F7A35C', '#90ED7D', '#434348', '#7CB5EC', '#E4D354', '#F15C80', '#8085E9'],
                labels: ['Blockchain Service', 'DeFi', 'CeFi', 'Blockchain Infrast....', 'NFT', 'GameFi', 'Social'],
                chart: {
                    type: 'donut',
                },
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
            },

        };
    }



    render() {
        return (
            <>
                <p className="mb-4 text-base text-left text-white">Paradigm Investment Categories</p>
                <div className='flex justify-center mb-4'>
                    <Chart options={this.state.options} series={this.state.series} type="donut" width={280} />
                </div>

                <ul className="flex flex-col gap-3">
                    {
                        this.state.series.map((el, i) => {
                            return (
                                <li className="flex items-center gap-2" key={i}>
                                    <div className={`w-4 h-4 rounded-sm`} style={{ backgroundColor: this.state.options.colors[i] }}></div>
                                    <span className="text-xs text-[#d8dbd5]">{this.state.options.labels[i]} {this.state.series[i]}%</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        );
    }
}

export default InvestmentChart