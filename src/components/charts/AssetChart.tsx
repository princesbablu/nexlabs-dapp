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
    }
    const series = [
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
    ]

    return (
        <Chart
            options={options}
            series={series}
            type="area"
            width="100%"
            height="400px"
        />
    );
}


export default HomeChart;