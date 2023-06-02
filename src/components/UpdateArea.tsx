import { useState } from 'react'
import Image from 'next/image';

import HomeChart from './charts/HomeChart';

const UpdateArea = () => {

    const [edit, setEdit] = useState(false);
    const [idNo, setIdNo] = useState("");

    return (
        <div className="container relative z-10">
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -z-10">
                <Image src="/blur/blur-top.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
            </div>
            <div className="lg:h-[150px] flex items-center px-7 py-8 rounded-xl bg-[#0B0F07]">
                <div className="flex flex-wrap justify-between w-full">
                    <div className="flex items-center w-full gap-4 sm:w-1/2">
                        <Image src="/up-dp.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', minWidth: '45px' }} />
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4">
                                <p className="text-xl font-medium text-[#d8dbd5]">
                                    {edit ? <input type="number" className="w-40 text-white bg-transparent border-0 outline-none" onChange={(e) => setIdNo(e.target.value)} /> : idNo ? idNo : "No ID"}
                                </p>
                                <div className="flex justify-center items-center relative gap-1.5 cursor-pointer" onClick={() => setEdit(!edit)}>
                                    <svg
                                        width={25}
                                        height={24}
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="relative w-6 h-6"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <g clipPath="url(#clip0_208_2106)">
                                            <rect x="0.00585938" width={24} height={24} rx={4} fill="#191C14" />
                                            <path
                                                d="M18.5007 5.53105L18.488 5.51649V5.51662C18.1565 5.1859 17.7074 5 17.2392 5C16.7708 5 16.3217 5.18588 15.9904 5.51662L9.96002 11.5486C9.8919 11.6165 9.85341 11.7085 9.85303 11.8046V13.7633V13.7631C9.85303 13.8595 9.89127 13.9518 9.95926 14.0199C10.0274 14.0879 10.1197 14.1262 10.216 14.1262L12.2128 14.1534H12.2127C12.3089 14.153 12.4009 14.1145 12.4687 14.0464L18.4897 8.01604C18.8189 7.6871 19.0048 7.24127 19.0069 6.77581C19.0089 6.31037 18.827 5.86302 18.5006 5.53103L18.5007 5.53105ZM17.9743 7.50236L12.0532 13.4254L10.5756 13.4054V11.9532L16.5042 6.03016C16.6965 5.83859 16.9562 5.73008 17.2276 5.72767C17.499 5.72527 17.7606 5.82935 17.9562 6.0175L17.9689 6.03206L17.969 6.03193C18.1644 6.22629 18.2748 6.49005 18.2762 6.76557C18.2776 7.04121 18.1697 7.30611 17.9762 7.50224L17.9743 7.50236Z"
                                                fill="#D8DBD5"
                                            />
                                            <path
                                                d="M6.45657 19H16.6833C17.0684 19 17.4378 18.8469 17.7101 18.5746C17.9824 18.3023 18.1355 17.933 18.1355 17.5478V12.4361C18.1355 12.2355 17.9729 12.073 17.7723 12.073C17.5719 12.073 17.4093 12.2355 17.4093 12.4361V17.5478C17.4093 17.7404 17.3328 17.925 17.1967 18.0613C17.0605 18.1974 16.8759 18.2739 16.6833 18.2739H6.45658C6.264 18.2739 6.07925 18.1974 5.94314 18.0613C5.80703 17.925 5.73042 17.7404 5.73042 17.5478V7.32275C5.73042 7.13017 5.80703 6.94555 5.94314 6.80931C6.07926 6.6732 6.26399 6.59672 6.45658 6.59672H11.5699C11.7705 6.59672 11.9331 6.43414 11.9331 6.23371C11.9331 6.03315 11.7705 5.87057 11.5699 5.87057H6.45658C6.07141 5.87057 5.70208 6.02366 5.4297 6.29588C5.15735 6.56824 5.00439 6.93759 5.00439 7.32277V17.5478C5.00439 17.933 5.15735 18.3023 5.4297 18.5746C5.70206 18.8469 6.07139 19 6.45657 19Z"
                                                fill="#D8DBD5"
                                            />
                                        </g>
                                    </svg>
                                    <p className="text-sm text-[#d8dbd5]">Edit</p>
                                </div>
                            </div>
                            <div className="relative flex items-start justify-start gap-2">
                                <p className="text-xs text-left text-[#d8dbd5] truncate w-20 sm:w-40 lg:w-80 xl:w-auto">
                                    Oxcda2a57432dr8qrouqowurojfouq9qwouroqu5ouo9qwuq958
                                </p>
                                <div className="relative flex items-start justify-start gap-1">
                                    <svg
                                        width={17}
                                        height={17}
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[16.04px] h-[16.04px]"
                                        preserveAspectRatio="none"
                                    >
                                        <circle cx="8.0249" cy="8.01904" r="8.01904" fill="#11170B" />
                                        <g clipPath="url(#clip0_86_2797)">
                                            <path
                                                d="M8.8584 12.1852H4.69173C4.46843 12.193 4.25193 12.1077 4.09393 11.9497C3.93594 11.7917 3.85064 11.5752 3.8584 11.3519V7.18523C3.85064 6.96193 3.93594 6.74543 4.09393 6.58743C4.25193 6.42944 4.46843 6.34414 4.69173 6.3519H6.3584V4.68523C6.35064 4.46193 6.43594 4.24543 6.59393 4.08743C6.75193 3.92944 6.96843 3.84414 7.19173 3.8519H11.3584C11.5817 3.84414 11.7982 3.92944 11.9562 4.08743C12.1142 4.24543 12.1995 4.46193 12.1917 4.68523V8.8519C12.1994 9.07516 12.114 9.29159 11.9561 9.44956C11.7981 9.60752 11.5817 9.69286 11.3584 9.68523H9.69173V11.3519C9.69936 11.5752 9.61402 11.7916 9.45606 11.9496C9.29809 12.1075 9.08166 12.1929 8.8584 12.1852ZM4.69173 7.18523V11.3519H8.8584V9.68523H7.19173C6.96846 9.69286 6.75204 9.60752 6.59407 9.44956C6.43611 9.29159 6.35076 9.07516 6.3584 8.8519V7.18523H4.69173ZM7.19173 4.68523V8.8519H11.3584V4.68523H7.19173Z"
                                                fill="#D8DBD5"
                                            />
                                        </g>
                                    </svg>
                                    <svg
                                        width={17}
                                        height={17}
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[16.04px] h-[16.04px]"
                                        preserveAspectRatio="none"
                                    >
                                        <circle cx="8.06299" cy="8.01904" r="8.01904" fill="#11170B" />
                                        <g clipPath="url(#clip0_86_2800)">
                                            <path
                                                d="M8.47965 11.7686V7.60189H11.813V11.7686H8.47965ZM4.31299 8.43522V4.26855H7.64632V8.43522H4.31299ZM6.81299 7.60189V5.10189H5.14632V7.60189H6.81299ZM4.31299 11.7686V9.26855H7.64632V11.7686H4.31299ZM5.14632 10.9352H6.81299V10.1019H5.14632V10.9352ZM9.31299 10.9352H10.9797V8.43522H9.31299V10.9352ZM8.47965 4.26855H11.813V6.76855H8.47965V4.26855ZM9.31299 5.10189V5.93522H10.9797V5.10189H9.31299Z"
                                                fill="#D8DBD5"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-end justify-start w-full gap-2 sm:w-1/2 drop-shadow">
                        <div className="absolute top-0 left-0 z-10 w-full h-full"></div>
                        <div className="absolute right-0 z-20 flex flex-col items-end w-full -translate-y-1/2 top-1/2">
                            <p className="text-[28px] text-right text-[#d8dbd5]">$120</p>
                            <div className="relative flex items-center self-stretch justify-end gap-2">
                            </div>
                            <div className="flex items-center gap-1">
                                <p className="text-sm text-right text-[#d8dbd5]">+4.10%</p>
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-3.5 h-3.5 relative"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path
                                        d="M7.72542 12.9017C4.50376 12.9017 1.89209 10.29 1.89209 7.06835C1.89209 3.84669 4.50376 1.23502 7.72542 1.23502C10.9471 1.23502 13.5588 3.84669 13.5588 7.06835C13.5552 10.2885 10.9456 12.8981 7.72542 12.9017ZM7.72542 2.40168C5.14809 2.40168 3.05876 4.49102 3.05876 7.06835C3.05876 9.64568 5.14809 11.735 7.72542 11.735C10.3028 11.735 12.3921 9.64568 12.3921 7.06835C12.3892 4.49222 10.3016 2.40458 7.72542 2.40168ZM7.69626 9.11002L4.80876 6.22252L5.63359 5.39768L7.69626 7.45977L9.75892 5.39768L10.5838 6.22252L7.69626 9.11002Z"
                                        fill="#D8DBD5"
                                    />
                                </svg>
                            </div>
                        </div>
                        <HomeChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateArea