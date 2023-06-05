import Image from 'next/image';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import { ApexOptions } from 'apexcharts';

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
        yaxis: {
            labels: {
                show: false
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
            colors: ['#8AC640']
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
                type: 'vertical',
                shadeIntensity: 1,
                gradientToColors: ['#8AC640'],
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100],
                colorStops: [
                    {
                        offset: 0,
                        color: '#47B262',
                        opacity: 25
                    },
                    {
                        offset: 100,
                        color: '#374B23',
                        opacity: 0
                    },
                ],
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
            data: [41, 48, 53, 44, 49, 54, 50, 52, 43, 58]
        }
    ]

    return (
        <Chart
            type="area"
            options={options}
            series={series}
            width="100%"
            height={240}
        />
    );
}


const IndicesChart1 = () => {
    return (
        <div className="h-[260px] w-full relative overflow-hidden rounded-lg z-10"
            style={{ background: "linear-gradient(221.27deg, rgba(55,75,35,0.75) 5.16%, rgba(55,75,35,0.35) 97.57%)" }}
        >
            <div className="relative z-10 -ml-5 -mr-2.5">
                <ReportChart />
            </div>


            <div className="absolute top-0 left-0 h-full w-full rounded-[inherit] flex flex-col p-3 z-10 pointer-events-none">
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
                        <div className="flex justify-start items-center  relative gap-1 pl-0.5 pr-[5px] py-0.5 rounded-[40px] bg-[#7dc350]/30">
                            <Image src="/c-bit.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', minWidth: '12px' }} />
                            <p className="text-[10px] font-medium text-center text-[#d8dbd5]">5%</p>
                        </div>
                        <div className="flex justify-start items-center  relative gap-1 pl-0.5 pr-[5px] py-0.5 rounded-[40px] bg-[#7dc350]/30">
                            <Image src="/c-t.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', minWidth: '12px' }} />
                            <p className="text-[10px] font-medium text-center text-[#d8dbd5]">5%</p>
                        </div>
                        <div className="flex justify-center items-center  relative gap-1 pl-0.5 pr-[5px] py-0.5 rounded-[40px] bg-[#7dc350]/30">
                            <Image src="/c-priz.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', minWidth: '12px' }} />
                            <p className="text-[10px] font-medium text-center text-[#d8dbd5]">7%</p>
                        </div>
                        <div className="flex justify-center items-center  relative gap-1 px-1 py-0.5 rounded-[40px] bg-[#7dc350]/30">
                            <p className="text-[10px] font-medium text-center text-[#d8dbd5]">+7</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndicesChart1;