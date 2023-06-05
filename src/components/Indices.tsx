import IndicesChart1 from './charts/indices/Chart1';
import IndicesChart2 from './charts/indices/Chart2';
import IndicesChart3 from './charts/indices/Chart3';
import IndicesChart4 from './charts/indices/Chart4';
import IndicesChart5 from './charts/indices/Chart5';
import IndicesChart6 from './charts/indices/Chart6';
import IndicesChart7 from './charts/indices/Chart7';
import IndicesChart8 from './charts/indices/Chart8';

const Indices = () => {
    return (
        <>
            <div className="relative z-10 mt-12">
                <div className="container">
                    <div className="flex flex-wrap items-center justify-between gap-5 mb-12">
                        <div>
                            <p className="text-2xl md:text-3xl lg:text-[40px] font-bold text-[#f6f9f3]">Indices</p>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center items-center w-[268px] gap-2 px-4 py-2.5 rounded bg-[#0b0f07]">
                                <div className="relative flex items-center self-stretch justify-between">
                                    <input className="text-sm text-left text-[#d8dbd5] bg-transparent focus:outline-none" placeholder="Search Now" />
                                    <svg
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="relative w-4 h-4"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <g clipPath="url(#clip0_86_2815)">
                                            <path
                                                d="M12.0208 11.078L14.8762 13.9327L13.9328 14.876L11.0782 12.0207C10.016 12.8722 8.69483 13.3353 7.3335 13.3333C4.0215 13.3333 1.3335 10.6453 1.3335 7.33334C1.3335 4.02134 4.0215 1.33334 7.3335 1.33334C10.6455 1.33334 13.3335 4.02134 13.3335 7.33334C13.3354 8.69468 12.8723 10.0158 12.0208 11.078ZM10.6835 10.5833C11.5296 9.71327 12.0021 8.54696 12.0002 7.33334C12.0002 4.75468 9.9115 2.66668 7.3335 2.66668C4.75483 2.66668 2.66683 4.75468 2.66683 7.33334C2.66683 9.91134 4.75483 12 7.3335 12C8.54712 12.0019 9.71342 11.5294 10.5835 10.6833L10.6835 10.5833V10.5833Z"
                                                fill="#D8DBD5"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        <div className="w-full lg:w-[calc(50%-12px)]">
                            <div className="h-11 px-6 pb-6 border-b border-[#181D19]">
                                <div className="flex gap-2.5 items-center">
                                    <svg
                                        width={10}
                                        height={13}
                                        viewBox="0 0 10 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="none"
                                        className='animate-pulse'
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0.804005 5.66267H8.43401C9.14308 5.66267 9.50339 4.80809 9.00797 4.29996L5.19354 0.381602C5.11867 0.30492 5.02922 0.243984 4.93046 0.20238C4.83169 0.160776 4.7256 0.139343 4.61843 0.139343C4.51126 0.139343 4.40517 0.160776 4.30641 0.20238C4.20764 0.243984 4.11819 0.30492 4.04332 0.381602L0.227741 4.29996C0.117502 4.41311 0.043104 4.55627 0.0138668 4.71151C-0.0153704 4.86675 0.00185363 5.02717 0.0633811 5.17267C0.124909 5.31816 0.228003 5.44227 0.35975 5.52943C0.491496 5.6166 0.646034 5.66294 0.804005 5.66267ZM0.804005 12.9774H8.43401C9.14308 12.9774 9.50339 12.1228 9.00797 11.6147L5.19354 7.69518C5.11867 7.6185 5.02922 7.55756 4.93046 7.51596C4.83169 7.47436 4.7256 7.45292 4.61843 7.45292C4.51126 7.45292 4.40517 7.47436 4.30641 7.51596C4.20764 7.55756 4.11819 7.6185 4.04332 7.69518L0.227741 11.6135C0.117502 11.7267 0.043104 11.8699 0.0138668 12.0251C-0.0153704 12.1803 0.00185363 12.3408 0.0633811 12.4862C0.124909 12.6317 0.228003 12.7558 0.35975 12.843C0.491496 12.9302 0.646034 12.9777 0.804005 12.9774Z"
                                            fill="#0DCB81"
                                        />
                                    </svg>
                                    <p className="text-base font-medium text-left text-white">Top Gainer</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-6 mt-[30px]">
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart1 />
                                </div>
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart2 />
                                </div>
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart3 />
                                </div>
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart4 />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[calc(50%-12px)]">
                            <div className="h-11 px-6 pb-6 border-b border-[#181D19]">
                                <div className="flex gap-2.5 items-center">
                                    <svg
                                        width={10}
                                        height={13}
                                        viewBox="0 0 10 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="none"
                                        className='animate-pulse'
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0.791085 7.43861H8.29848C8.99616 7.43861 9.35068 8.27946 8.86321 8.77942L5.11008 12.6348C5.03642 12.7103 4.94841 12.7702 4.85123 12.8112C4.75405 12.8521 4.64966 12.8732 4.54422 12.8732C4.43877 12.8732 4.33438 12.8521 4.2372 12.8112C4.14003 12.7702 4.05201 12.7103 3.97835 12.6348L0.224081 8.78056C0.115614 8.66923 0.0424114 8.52837 0.013644 8.37562C-0.0151234 8.22288 0.00182385 8.06504 0.0623626 7.92188C0.122901 7.77872 0.22434 7.65661 0.353969 7.57085C0.483598 7.48508 0.635653 7.43834 0.791085 7.43861ZM0.791085 0.242555H8.29848C8.99616 0.242555 9.35068 1.0834 8.86321 1.58336L5.11008 5.43876C5.03642 5.51421 4.94841 5.57417 4.85123 5.6151C4.75405 5.65604 4.64966 5.67713 4.54422 5.67713C4.43877 5.67713 4.33438 5.65604 4.2372 5.6151C4.14003 5.57417 4.05201 5.51421 3.97835 5.43876L0.224081 1.58336C0.115614 1.47204 0.0424114 1.33118 0.013644 1.17843C-0.0151234 1.02568 0.00182385 0.867842 0.0623626 0.724684C0.122901 0.581526 0.22434 0.459417 0.353969 0.373653C0.483598 0.287889 0.635653 0.242285 0.791085 0.242555Z"
                                            fill="#F83636"
                                        />
                                    </svg>
                                    <p className="text-base font-medium text-left text-white">Top Loser</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-6 mt-[30px]">
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart5 />
                                </div>
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart6 />
                                </div>
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart7 />
                                </div>
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart8 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-20 lg:mt-[120px]">
                <div className="container">
                    <div className="flex flex-wrap items-center justify-between gap-5 mb-12">
                        <div>
                            <p className="text-2xl md:text-3xl lg:text-[40px] font-bold text-[#f6f9f3]">Individual Assets</p>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center items-center w-[268px] gap-2 px-4 py-2.5 rounded bg-[#0b0f07]">
                                <div className="relative flex items-center self-stretch justify-between">
                                    <input className="text-sm text-left text-[#d8dbd5] bg-transparent focus:outline-none" placeholder="Search Now" />
                                    <svg
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="relative w-4 h-4"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <g clipPath="url(#clip0_86_2815)">
                                            <path
                                                d="M12.0208 11.078L14.8762 13.9327L13.9328 14.876L11.0782 12.0207C10.016 12.8722 8.69483 13.3353 7.3335 13.3333C4.0215 13.3333 1.3335 10.6453 1.3335 7.33334C1.3335 4.02134 4.0215 1.33334 7.3335 1.33334C10.6455 1.33334 13.3335 4.02134 13.3335 7.33334C13.3354 8.69468 12.8723 10.0158 12.0208 11.078ZM10.6835 10.5833C11.5296 9.71327 12.0021 8.54696 12.0002 7.33334C12.0002 4.75468 9.9115 2.66668 7.3335 2.66668C4.75483 2.66668 2.66683 4.75468 2.66683 7.33334C2.66683 9.91134 4.75483 12 7.3335 12C8.54712 12.0019 9.71342 11.5294 10.5835 10.6833L10.6835 10.5833V10.5833Z"
                                                fill="#D8DBD5"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        <div className="w-full lg:w-[calc(50%-12px)]">
                            <div className="h-11 px-6 pb-6 border-b border-[#181D19]">
                                <div className="flex gap-2.5 items-center">
                                    <svg
                                        width={10}
                                        height={13}
                                        viewBox="0 0 10 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="none"
                                        className='animate-pulse'
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0.804005 5.66267H8.43401C9.14308 5.66267 9.50339 4.80809 9.00797 4.29996L5.19354 0.381602C5.11867 0.30492 5.02922 0.243984 4.93046 0.20238C4.83169 0.160776 4.7256 0.139343 4.61843 0.139343C4.51126 0.139343 4.40517 0.160776 4.30641 0.20238C4.20764 0.243984 4.11819 0.30492 4.04332 0.381602L0.227741 4.29996C0.117502 4.41311 0.043104 4.55627 0.0138668 4.71151C-0.0153704 4.86675 0.00185363 5.02717 0.0633811 5.17267C0.124909 5.31816 0.228003 5.44227 0.35975 5.52943C0.491496 5.6166 0.646034 5.66294 0.804005 5.66267ZM0.804005 12.9774H8.43401C9.14308 12.9774 9.50339 12.1228 9.00797 11.6147L5.19354 7.69518C5.11867 7.6185 5.02922 7.55756 4.93046 7.51596C4.83169 7.47436 4.7256 7.45292 4.61843 7.45292C4.51126 7.45292 4.40517 7.47436 4.30641 7.51596C4.20764 7.55756 4.11819 7.6185 4.04332 7.69518L0.227741 11.6135C0.117502 11.7267 0.043104 11.8699 0.0138668 12.0251C-0.0153704 12.1803 0.00185363 12.3408 0.0633811 12.4862C0.124909 12.6317 0.228003 12.7558 0.35975 12.843C0.491496 12.9302 0.646034 12.9777 0.804005 12.9774Z"
                                            fill="#0DCB81"
                                        />
                                    </svg>
                                    <p className="text-base font-medium text-left text-white">Top Gainer</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-6 mt-[30px]">
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart1 />
                                </div>
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart2 />
                                </div>
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart3 />
                                </div>
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart4 />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[calc(50%-12px)]">
                            <div className="h-11 px-6 pb-6 border-b border-[#181D19]">
                                <div className="flex gap-2.5 items-center">
                                    <svg
                                        width={10}
                                        height={13}
                                        viewBox="0 0 10 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="none"
                                        className='animate-pulse'
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0.791085 7.43861H8.29848C8.99616 7.43861 9.35068 8.27946 8.86321 8.77942L5.11008 12.6348C5.03642 12.7103 4.94841 12.7702 4.85123 12.8112C4.75405 12.8521 4.64966 12.8732 4.54422 12.8732C4.43877 12.8732 4.33438 12.8521 4.2372 12.8112C4.14003 12.7702 4.05201 12.7103 3.97835 12.6348L0.224081 8.78056C0.115614 8.66923 0.0424114 8.52837 0.013644 8.37562C-0.0151234 8.22288 0.00182385 8.06504 0.0623626 7.92188C0.122901 7.77872 0.22434 7.65661 0.353969 7.57085C0.483598 7.48508 0.635653 7.43834 0.791085 7.43861ZM0.791085 0.242555H8.29848C8.99616 0.242555 9.35068 1.0834 8.86321 1.58336L5.11008 5.43876C5.03642 5.51421 4.94841 5.57417 4.85123 5.6151C4.75405 5.65604 4.64966 5.67713 4.54422 5.67713C4.43877 5.67713 4.33438 5.65604 4.2372 5.6151C4.14003 5.57417 4.05201 5.51421 3.97835 5.43876L0.224081 1.58336C0.115614 1.47204 0.0424114 1.33118 0.013644 1.17843C-0.0151234 1.02568 0.00182385 0.867842 0.0623626 0.724684C0.122901 0.581526 0.22434 0.459417 0.353969 0.373653C0.483598 0.287889 0.635653 0.242285 0.791085 0.242555Z"
                                            fill="#F83636"
                                        />
                                    </svg>
                                    <p className="text-base font-medium text-left text-white">Top Loser</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-6 mt-[30px]">
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart5 />
                                </div>
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart6 />
                                </div>
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart7 />
                                </div>
                                <div className="w-full md:w-[calc(50%-12px)] lg:w-full xl:w-[calc(50%-12px)]">
                                    <IndicesChart8 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Indices