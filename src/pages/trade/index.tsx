import { useState } from 'react'
import Image from 'next/image';
import Head from 'next/head';
import { type NextPage } from 'next';

import Selection from '~/components/Selection';
import TradeChart from '~/components/charts/TradeChart';
import PositionTable from '~/components/table/Position';
import HistoryTable from '~/components/table/History';

const TradePage: NextPage = () => {

    const [selected, setSelected] = useState("1");
    const [toggle, setToggle] = useState("1");
    const [toggleInner, setToggleInner] = useState("1");
    const [switcher, setSwitcher] = useState(false);
    const [tableToggle, setTableToggle] = useState("1");
    const [pop, setPop] = useState(false);

    return (
        <>
            <Head>
                <title>Trade | Nexlabs Dapp</title>
                <meta name="description" content="Swap Nex token for USDC" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={`fixed top-0 left-0 z-50 items-center justify-center w-full h-full ${pop ? 'flex' : 'hidden'}`} onClick={() => setPop(false)}>
                <div className="absolute top-0 left-0 w-full h-full bg-[#0B0F07]/80 blur-3xl"></div>
                <div className="bg-gradient-to-tl from-[#00ADEF] to-[#8AC640] p-px rounded-lg">
                    <div className="flex flex-col justify-center items-center gap-2 p-4 rounded-lg bg-[#0b0f07]">
                        <div className="flex flex-col items-center justify-start gap-4">
                            <div className="relative flex items-center self-stretch justify-between ">
                                <p className=" text-base text-left text-[#d8dbd5]">
                                    Stop Loss / Take Profit
                                </p>
                                <svg
                                    width={24}
                                    height={26}
                                    viewBox="0 0 24 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" w-[25.04px] h-6"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <rect
                                        y="25.0435"
                                        width="25.0435"
                                        height={24}
                                        rx={2}
                                        transform="rotate(-90 0 25.0435)"
                                        fill="#292B2E"
                                    />
                                    <path
                                        d="M17.8563 15.8178C18.14 15.5215 18.1399 15.0543 17.8561 14.7581L12 8.64746L6.14395 14.7581C5.86011 15.0543 5.86003 15.5215 6.14376 15.8178C6.44526 16.1327 6.94836 16.1327 7.24994 15.818L12 10.8607L16.7501 15.818C17.0517 16.1327 17.5548 16.1327 17.8563 15.8178Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <div className="relative flex items-center self-stretch justify-between ">
                                    <p className=" text-base font-medium text-left text-[#d8dbd5]">
                                        SL
                                    </p>
                                    <div className="flex justify-center items-center  gap-1 py-0.5">
                                        <div className="flex justify-center items-center  relative gap-2.5 px-3 py-1 rounded-[40px] border-[0.5px] border-[#353535]">
                                            <p className=" text-sm text-left text-[#d8dbd5]/60">2%</p>
                                        </div>
                                        <div className="flex justify-center items-center  relative gap-2.5 px-3 py-1 rounded-[40px] border-[0.5px] border-[#353535]">
                                            <p className=" text-sm text-left text-[#d8dbd5]/60">5%</p>
                                        </div>
                                        <div className="flex justify-center items-center  relative gap-2.5 px-3 py-1 rounded-[40px] border-[0.5px] border-[#353535]">
                                            <p className=" text-sm text-left text-[#d8dbd5]/60">10%</p>
                                        </div>
                                        <div className="flex justify-center items-center  relative gap-2.5 px-3 py-1 rounded-[40px] border-[0.5px] border-[#353535]">
                                            <p className=" text-sm text-left text-[#d8dbd5]/60">20%</p>
                                        </div>
                                        <div className="flex justify-center items-center  relative gap-2.5 px-3 py-1 rounded-[40px] border-[0.5px] border-[#353535]">
                                            <p className=" text-sm text-left text-[#d8dbd5]/60">50%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-center self-stretch  relative gap-2.5 pl-[9px] pr-[33px] py-2.5 rounded border-[0.5px] border-[#353535]">
                                    <p className=" text-sm text-center text-[#d8dbd5]">0.00</p>
                                </div>
                                <div className="flex justify-between items-center  w-[331px] relative">
                                    <p className=" text-base font-medium text-left text-[#d8dbd5]">
                                        TP
                                    </p>
                                    <div className="flex justify-center items-center  gap-1 py-0.5">
                                        <div className="flex justify-center items-center  relative gap-2.5 px-3 py-1 rounded-[40px] border-[0.5px] border-[#353535]">
                                            <p className=" text-sm text-left text-[#d8dbd5]/80">5%</p>
                                        </div>
                                        <div className="flex justify-center items-center  relative gap-2.5 px-3 py-1 rounded-[40px] border-[0.5px] border-[#353535]">
                                            <p className=" text-sm text-left text-[#d8dbd5]/80">10%</p>
                                        </div>
                                        <div className="flex justify-center items-center  relative gap-2.5 px-3 py-1 rounded-[40px] border-[0.5px] border-[#353535]">
                                            <p className=" text-sm text-left text-[#d8dbd5]/80">25%</p>
                                        </div>
                                        <div className="flex justify-center items-center  relative gap-2.5 px-3 py-1 rounded-[40px] border-[0.5px] border-[#353535]">
                                            <p className=" text-sm text-left text-[#d8dbd5]/80">50%</p>
                                        </div>
                                        <div className="flex justify-center items-center  relative gap-2.5 px-3 py-1 rounded-[40px] border-[0.5px] border-[#353535]">
                                            <p className=" text-sm text-left text-[#d8dbd5]/80">100%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-start items-center  w-[333px] relative gap-2.5 pl-[9px] pr-[33px] py-2.5 rounded border-[0.5px] border-[#353535]">
                                    <p className=" text-sm text-center text-[#d8dbd5]">0.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex flex-wrap items-stretch gap-6 mt-8">
                    <div className="w-full xl:w-[calc(66.66%-24px)]">
                        <div className="rounded-2xl bg-[#0B0F07] p-4 lg:p-8 h-full">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="z-20 relative">
                                    <Selection />
                                </div>
                                <div className="flex flex-wrap rounded-3xl gap-2.5 bg-[#12160e] ml-auto">
                                    <div className={`py-2 px-3 sm:px-6 cursor-pointer rounded-3xl ${selected === "1" ? 'bg-gradient-to-tl from-[#00adef] to-[#8ac640]' : ''}`} onClick={() => setSelected("1")}>24H</div>
                                    <div className={`py-2 px-3 sm:px-6 cursor-pointer rounded-3xl ${selected === "2" ? 'bg-gradient-to-tl from-[#00adef] to-[#8ac640]' : ''}`} onClick={() => setSelected("2")}>1W</div>
                                    <div className={`py-2 px-3 sm:px-6 cursor-pointer rounded-3xl ${selected === "3" ? 'bg-gradient-to-tl from-[#00adef] to-[#8ac640]' : ''}`} onClick={() => setSelected("3")}>1M</div>
                                    <div className={`py-2 px-3 sm:px-6 cursor-pointer rounded-3xl ${selected === "4" ? 'bg-gradient-to-tl from-[#00adef] to-[#8ac640]' : ''}`} onClick={() => setSelected("4")}>1Y</div>
                                </div>
                                <div>
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[19px] h-[19px] relative"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <g opacity="0.7" clipPath="url(#clip0_86_1144)">
                                            <path
                                                d="M10.3601 1.3913C10.1901 1.3913 10.0271 1.45882 9.90695 1.579C9.78676 1.69919 9.71924 1.8622 9.71924 2.03217C9.71924 2.20214 9.78676 2.36515 9.90695 2.48533C10.0271 2.60552 10.1901 2.67304 10.3601 2.67304H16.5061L10.578 8.60112C10.5109 8.65857 10.4564 8.72927 10.418 8.80878C10.3795 8.88829 10.3579 8.97489 10.3545 9.06315C10.3511 9.15141 10.3659 9.23943 10.3982 9.32167C10.4304 9.4039 10.4792 9.4786 10.5417 9.54105C10.6042 9.60351 10.6789 9.65238 10.7611 9.6846C10.8433 9.71682 10.9313 9.73169 11.0196 9.72828C11.1079 9.72487 11.1945 9.70326 11.274 9.66479C11.3535 9.62632 11.4242 9.57184 11.4816 9.50475L17.4097 3.57667V9.72264C17.4097 9.89262 17.4772 10.0556 17.5974 10.1758C17.7176 10.296 17.8806 10.3635 18.0506 10.3635C18.2206 10.3635 18.3836 10.296 18.5038 10.1758C18.6239 10.0556 18.6915 9.89262 18.6915 9.72264V1.3913H10.3601Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M0.74707 11.0044C0.74707 10.8344 0.814591 10.6714 0.934778 10.5512C1.05496 10.431 1.21797 10.3635 1.38794 10.3635C1.55791 10.3635 1.72092 10.431 1.84111 10.5512C1.9613 10.6714 2.02882 10.8344 2.02882 11.0044V17.1504L7.95689 11.2223C8.01434 11.1552 8.08504 11.1007 8.16455 11.0623C8.24406 11.0238 8.33067 11.0022 8.41893 10.9988C8.50719 10.9954 8.5952 11.0102 8.67744 11.0424C8.75968 11.0747 8.83437 11.1235 8.89683 11.186C8.95928 11.2484 9.00816 11.3231 9.04037 11.4054C9.07259 11.4876 9.08747 11.5756 9.08406 11.6639C9.08065 11.7522 9.05903 11.8388 9.02056 11.9183C8.9821 11.9978 8.92761 12.0685 8.86052 12.1259L2.93245 18.054H9.07842C9.24839 18.054 9.4114 18.1215 9.53158 18.2417C9.65177 18.3619 9.71929 18.5249 9.71929 18.6949C9.71929 18.8648 9.65177 19.0279 9.53158 19.148C9.4114 19.2682 9.24839 19.3357 9.07842 19.3357H0.74707V11.0044Z"
                                                fill="white"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-2">
                                <div className="inline-flex flex-col justify-center items-start min-w-[200px] gap-2.5 px-4 py-3 rounded-[32px] bg-[#18210f]">
                                    <div className="flex items-center justify-between gap-3 rounded-full">
                                        <div className="flex flex-col">
                                            <p className="text-base font-bold text-left text-[#f6f9f3]">
                                                1,876.13
                                            </p>
                                            <p className="text-xs text-left text-[#d8dbd5]">
                                                $ 1,26374
                                            </p>
                                        </div>
                                        <p className="text-sm text-[#eb5454] ml-6">$ 1,876.13</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-start min-w-[200px] gap-2.5 px-4 py-3 rounded-[32px] bg-[#18210f]">
                                    <div className="flex items-center gap-3 rounded-full">
                                        <div className="flex flex-col">
                                            <p className="text-base font-bold text-left text-[#f6f9f3]">
                                                1H Funding Rate
                                            </p>
                                            <p className="text-sm text-left text-[#eb5454]">$ 1,876.13</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            d="M3.36472 1C2.11859 1 1.1084 2.01019 1.1084 3.25632V14.7437C1.1084 15.9898 2.11859 17 3.36472 17H14.8521C16.0982 17 17.1084 15.9898 17.1084 14.7437V3.25632C17.1084 2.01019 16.0982 1 14.8521 1H3.36472ZM1.51862 3.66654C1.51862 2.42041 2.52881 1.41022 3.77493 1.41022H14.4418C15.6879 1.41022 16.6981 2.42041 16.6981 3.66654V14.3334C16.6981 15.5795 15.6879 16.5897 14.4418 16.5897H3.77494C2.52881 16.5897 1.51862 15.5795 1.51862 14.3334V3.66654ZM4.18523 5.51278C4.07195 5.51278 3.98012 5.60461 3.98012 5.71789C3.98012 5.83117 4.07195 5.923 4.18523 5.923H14.0314C14.1447 5.923 14.2365 5.83117 14.2365 5.71789C14.2365 5.60461 14.1447 5.51278 14.0314 5.51278H4.18523ZM4.18523 8.79491C4.07195 8.79491 3.98012 8.88674 3.98012 9.00002C3.98012 9.1133 4.07195 9.20513 4.18523 9.20513H14.0314C14.1447 9.20513 14.2365 9.1133 14.2365 9.00002C14.2365 8.88674 14.1447 8.79491 14.0314 8.79491H4.18523ZM4.18523 12.077C4.07195 12.077 3.98012 12.1689 3.98012 12.2821C3.98012 12.3954 4.07195 12.4873 4.18523 12.4873H14.0314C14.1447 12.4873 14.2365 12.3954 14.2365 12.2821C14.2365 12.1689 14.1447 12.077 14.0314 12.077H4.18523Z"
                                            fill="#C7CAC4"
                                            stroke="#B6B7B5"
                                            strokeWidth="0.5"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <TradeChart />
                        </div>
                    </div>
                    <div className="w-full xl:w-[calc(33.33%-24px)]">
                        <div className="rounded-2xl bg-[#0B0F07] p-8">
                            <div className="flex flex-col p-4 bg-[#12160E] mb-6">
                                <p className="text-sm font-medium text-[#ecf1f6] mb-3">Available Balance</p>
                                <div className="h-0.5 bg-[#B4B4B4]/[0.06] w-full"></div>
                                <p className="text-xs font-bold text-[#d8dbd5] mt-2.5">$0.00</p>
                            </div>

                            <div className="flex gap-2 mb-4">
                                <div className="w-full text-[13px]">
                                    <button className={`from-[#00ADEF]/50 via-[#40B99E]/50 to-[#8AC640]/50 rounded w-full ${toggle === "1" ? 'bg-gradient-to-r pt-px' : ''}`} onClick={() => setToggle("1")}>
                                        <div className="bg-[#0B0F07] rounded w-full">
                                            <span className={`block from-[#82C44A]/10 to-[#12160E]/0 p-3 ${toggle === "1" ? 'bg-gradient-to-b text-[#509624]' : 'text-[#D8DBD5]'}`}>
                                                LONG
                                            </span>
                                        </div>
                                    </button>
                                </div>
                                <div className="w-full text-[13px]">
                                    <button className={`from-[#00ADEF]/50 via-[#40B99E]/50 to-[#8AC640]/50 rounded w-full ${toggle === "2" ? 'bg-gradient-to-r pt-px' : ''}`} onClick={() => setToggle("2")}>
                                        <div className="bg-[#0B0F07] rounded w-full">
                                            <span className={`block from-[#82C44A]/10 to-[#12160E]/0 p-3 ${toggle === "2" ? 'bg-gradient-to-b text-[#509624]' : 'text-[#D8DBD5]'}`}>
                                                SHORT
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2.5 px-3 py-2.5 rounded bg-[#12160e] mb-4 p-4">
                                <div className="w-full">
                                    <button className={`rounded w-full ${toggleInner === "1" ? 'border border-[#353535]' : ''}`} onClick={() => setToggleInner("1")}>
                                        <div className="bg-[#0B0F07] rounded w-full">
                                            <span className={`block p-3 text-xs ${toggleInner === "1" ? 'text-[#D8DBD5]' : 'text-[#D8DBD5]/50'}`}>
                                                Market
                                            </span>
                                        </div>
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className={`rounded w-full ${toggleInner === "2" ? 'border border-[#353535]' : ''}`} onClick={() => setToggleInner("2")}>
                                        <div className="bg-[#0B0F07] rounded w-full">
                                            <span className={`block p-3 text-xs ${toggleInner === "2" ? 'text-[#D8DBD5]' : 'text-[#D8DBD5]/50'}`}>
                                                Limit
                                            </span>
                                        </div>
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className={`rounded w-full ${toggleInner === "3" ? 'border border-[#353535]' : ''}`} onClick={() => setToggleInner("3")}>
                                        <div className="bg-[#0B0F07] rounded w-full">
                                            <span className={`block p-3 text-xs ${toggleInner === "3" ? 'text-[#D8DBD5]' : 'text-[#D8DBD5]/50'}`}>
                                                Stop
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <p className=" text-sm font-medium text-left text-[#ecf1f6]">Margin</p>
                                    <div className='relative cursor-pointer group'>
                                        <div className="absolute invisible px-2 py-1 mb-2 text-xs -translate-x-1/2 bg-black rounded opacity-0 bottom-full left-1/2 group-hover:opacity-100 group-hover:visible">Margin</div>
                                        <svg
                                            width={13}
                                            height={12}
                                            viewBox="0 0 13 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className=" w-3 h-3 opacity-[0.45]"
                                            preserveAspectRatio="xMidYMid meet"
                                        >
                                            <g opacity="0.45">
                                                <path
                                                    d="M6.37805 6.80001V6.63201C6.37805 6.08801 6.71405 5.80001 7.05005 5.56801C7.37805 5.34401 7.70605 5.05601 7.70605 4.52801C7.70605 3.79201 7.11405 3.20001 6.37805 3.20001C5.64205 3.20001 5.05005 3.79201 5.05005 4.52801M6.37405 8.71201H6.38205"
                                                    stroke="#949393"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <circle cx="6.25" cy={6} r="5.25" stroke="#949393" strokeWidth="1.5" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex flex-wrap justify-start items-start gap-2.5">
                                    <div className="flex justify-center items-center w-[42px] relative gap-2.5 px-2.5 py-[5px] rounded border-[0.5px] border-[#353535] hover:bg-[#353535] cursor-pointer">
                                        <p className="text-xs text-center text-[#d8dbd5]">10%</p>
                                    </div>
                                    <div className="flex justify-center items-center w-[42px] relative gap-2.5 px-2.5 py-[5px] rounded border-[0.5px] border-[#353535] hover:bg-[#353535] cursor-pointer">
                                        <p className="text-xs text-center text-[#d8dbd5]">25%</p>
                                    </div>
                                    <div className="flex justify-center items-center w-[42px] relative gap-2.5 px-2.5 py-[5px] rounded border-[0.5px] border-[#353535] hover:bg-[#353535] cursor-pointer">
                                        <p className="text-xs text-center text-[#d8dbd5]">50%</p>
                                    </div>
                                    <div className="flex justify-center items-center w-[42px] relative gap-2.5 px-2.5 py-[5px] rounded border-[0.5px] border-[#353535] hover:bg-[#353535] cursor-pointer">
                                        <p className="text-xs text-center text-[#d8dbd5]">100%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-[51px] rounded bg-[#12160e] mb-4 p-4 flex items-center">
                                <input type='text' placeholder="1000" className="text-[13px] bg-transparent outline-none font-medium text-left text-[#ecf1f6] mb-1 w-full" />
                            </div>

                            <div className="px-2 py-2.5 rounded bg-[#12160e] flex flex-col gap-4 mb-4">
                                <div className="flex justify-between">
                                    <p className="text-[10px] text-left text-[#d8dbd5]">
                                        Leverage - Up to 25.00 x
                                    </p>
                                    <div className="w-7 h-4 rounded-full bg-[#292b2e] border-2 border-[#292b2e] box-content cursor-pointer" onClick={() => setSwitcher(!switcher)}>
                                        <div className={`h-4 w-4 rounded-full bg-gradient-to-r from-[#00ADEF] to-[#8AC640] ${switcher ? 'ml-auto' : ''}`}></div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap sm:flex-nowrap items-center self-stretch justify-between gap-8">
                                    <div className="flex justify-start items-center w-full relative gap-2.5 pl-[9px] pr-[33px] py-2 rounded bg-[#1a1e16] border-[0.5px] border-[#353535]">
                                        <input type="text" placeholder="16.5" className="bg-transparent outline-none text-xs font-medium text-[#d8dbd5] w-full" />
                                    </div>
                                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2">
                                        <div className="cursor-pointer flex justify-center items-center flex-grow relative gap-2.5 px-4 py-2 rounded bg-[#1a1e16] border-[0.5px] border-[#353535]">
                                            <p className=" text-xs font-medium text-center text-[#d8dbd5]">1x</p>
                                        </div>
                                        <div className="cursor-pointer flex justify-center items-center flex-grow relative gap-2.5 px-4 py-2 rounded bg-[#1a1e16] border-[0.5px] border-[#353535]">
                                            <p className=" text-xs font-medium text-center text-[#d8dbd5]">5x</p>
                                        </div>
                                        <div className="cursor-pointer flex justify-center items-center flex-grow relative gap-2.5 px-4 py-2 rounded bg-[#1a1e16] border-[0.5px] border-[#353535]">
                                            <p className=" text-xs font-medium text-center text-[#d8dbd5]">
                                                10x
                                            </p>
                                        </div>
                                        <div className="cursor-pointer flex justify-center items-center flex-grow relative gap-2.5 px-4 py-2 rounded bg-[#1a1e16] border-[0.5px] border-[#353535]">
                                            <p className=" text-xs font-medium text-center text-[#d8dbd5]">
                                                25x
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-start items-start w-full gap-2.5 p-2.5 rounded bg-[#12160e] cursor-pointer mb-6" onClick={() => setPop(true)}>
                                <div className="relative flex items-center justify-between w-full">
                                    <p className="text-[10px] text-left text-[#ecf1f6] mr-auto">
                                        Stop Loss / Take Profite
                                    </p>
                                    <svg
                                        width={25}
                                        height={24}
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="relative w-6 h-6"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            d="M12.25 15.713L18.26 9.70302L16.847 8.28802L12.25 12.888L7.65399 8.28802L6.23999 9.70202L12.25 15.713Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex justify-center items-center w-full relative gap-2.5 px-[30px] py-[15px] rounded-lg bg-[#1c1f19] cursor-pointer">
                                <p className="text-base text-left text-white opacity-40">
                                    Open Position
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-stretch gap-6 mt-6 mb-8">
                    <div className="w-full lg:w-[calc(66.66%-24px)]">
                        <div className="rounded-2xl bg-[#0B0F07] h-full">
                            <div className="px-4 pt-8 border-b border-[#161C10]">
                                <div className="inline-flex -mb-px">
                                    <div className="relative px-5 pb-6 cursor-pointer" onClick={() => setTableToggle("1")}>
                                        <p className="text-[13px] text-center text-[#ecf1f6]">Open Positions</p>
                                        {tableToggle === "1" ?
                                            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#8AC640] to-[#00ADEF]"></div> : null
                                        }
                                    </div>
                                    <div className="relative px-5 pb-6 cursor-pointer" onClick={() => setTableToggle("2")}>
                                        <p className="text-[13px] text-center text-[#ecf1f6]">Tx History</p>
                                        {tableToggle === "2" ?
                                            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#8AC640] to-[#00ADEF]"></div> : null
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-8 overflow-auto">
                                {tableToggle === "1" ? <PositionTable /> : <HistoryTable />}

                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[calc(33.33%-24px)]">
                        <div className="h-full overflow-hidden rounded-2xl">
                            <div className="flex justify-between items-center w-full relative px-4 py-3 bg-[#12160e]">
                                <p className="text-base font-medium text-left text-white">News</p>
                                <div className="flex justify-start items-center  relative gap-2.5">
                                    <svg
                                        width={16}
                                        height={17}
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 "
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            d="M12.0213 11.6885L14.8767 14.5432L13.9333 15.4865L11.0787 12.6312C10.0165 13.4827 8.69532 13.9458 7.33399 13.9438C4.02198 13.9438 1.33398 11.2558 1.33398 7.94385C1.33398 4.63185 4.02198 1.94385 7.33399 1.94385C10.646 1.94385 13.334 4.63185 13.334 7.94385C13.3359 9.30518 12.8728 10.6263 12.0213 11.6885ZM10.684 11.1938C11.5301 10.3238 12.0026 9.15747 12.0007 7.94385C12.0007 5.36518 9.91199 3.27718 7.33399 3.27718C4.75532 3.27718 2.66732 5.36518 2.66732 7.94385C2.66732 10.5218 4.75532 12.6105 7.33399 12.6105C8.5476 12.6124 9.71391 12.1399 10.584 11.2938L10.684 11.1938Z"
                                            fill="#D8DBD5"
                                        />
                                    </svg>
                                    <svg
                                        width={16}
                                        height={17}
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="relative w-4 h-4"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            d="M12.0001 9.94181C11.2637 9.94181 10.6667 9.34486 10.6667 8.60848C10.6667 7.8721 11.2637 7.27515 12.0001 7.27515C12.7365 7.27515 13.3334 7.8721 13.3334 8.60848C13.3334 8.9621 13.1929 9.30124 12.9429 9.55129C12.6928 9.80134 12.3537 9.94181 12.0001 9.94181ZM8.00008 9.94181C7.2637 9.94181 6.66675 9.34486 6.66675 8.60848C6.66675 7.8721 7.2637 7.27515 8.00008 7.27515C8.73646 7.27515 9.33342 7.8721 9.33342 8.60848C9.33342 8.9621 9.19294 9.30124 8.94289 9.55129C8.69284 9.80134 8.3537 9.94181 8.00008 9.94181ZM4.00008 9.94181C3.2637 9.94181 2.66675 9.34486 2.66675 8.60848C2.66675 7.8721 3.2637 7.27515 4.00008 7.27515C4.73646 7.27515 5.33341 7.8721 5.33341 8.60848C5.33341 8.9621 5.19294 9.30124 4.94289 9.55129C4.69284 9.80134 4.3537 9.94181 4.00008 9.94181Z"
                                            fill="#D8DBD5"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="px-4 py-8 bg-[#0B0F07]">
                                <div className="flex w-full flex-col">
                                    <div className="flex items-end justify-start gap-2 mb-2">
                                        <div className="relative flex items-center justify-start gap-2">
                                            <div className="w-4 h-4 rounded-sm bg-[#3253dc] flex items-center justify-center">
                                                <Image src="/q.png" alt="" width={8} height={8} />
                                            </div>
                                            <p className="text-xs text-left text-white">16 hours ago</p>
                                        </div>
                                        <div className="relative flex items-center justify-start gap-1">
                                            <svg
                                                width={2}
                                                height={3}
                                                viewBox="0 0 2 3"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className=""
                                                preserveAspectRatio="xMidYMid meet"
                                            >
                                                <circle cx={1} cy="1.6084" r={1} fill="white" />
                                            </svg>
                                            <p className="text-xs text-left text-white">TradingView</p>
                                        </div>
                                    </div>
                                    <div className="mb-4 cursor-pointer child-img:w-full">
                                        <Image src="/news-1.png" alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                                    </div>
                                    <p className="text-base text-left text-[#f6f9f3]">
                                        QCOM: Qualcomm Set to Acquire Autotalks in Effort to Expand its Automotive Business
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-start items-start w-full gap-1 px-4 py-4 rounded bg-[#0b0f07] mt-3.5">
                                <div className="relative flex items-center self-stretch justify-between ">
                                    <p className=" text-sm font-medium text-left text-[#f6f9f3]">
                                        Cryptocurrencies [39.9M]
                                    </p>
                                    <svg
                                        width={16}
                                        height={17}
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="relative w-4 h-4"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            d="M8.00008 15.6453C7.2637 15.6453 6.66675 15.0483 6.66675 14.3119H9.33341C9.33341 15.0483 8.73646 15.6453 8.00008 15.6453ZM13.3334 13.6453H2.66675V12.3119L4.00008 11.6453V7.97859C3.96496 7.038 4.17737 6.10467 4.61608 5.27192C5.05277 4.49959 5.79921 3.95117 6.66675 3.76525V2.31192H9.09741C8.231 3.28021 8.08641 4.69618 8.73921 5.81961C9.39201 6.94304 10.6938 7.51854 11.9641 7.24525C11.9874 7.48325 11.9987 7.72992 11.9987 7.97859V11.6453L13.3321 12.3119V13.6453H13.3334ZM11.3334 6.31192C10.2732 6.31027 9.39853 5.48162 9.33961 4.42307C9.28069 3.36452 10.058 2.44391 11.1115 2.32462C12.1649 2.20533 13.1284 2.92881 13.3077 3.97374C13.487 5.01866 12.8197 6.02192 11.7867 6.26059C11.6381 6.29474 11.486 6.31196 11.3334 6.31192Z"
                                            fill="#D8DBD5"
                                        />
                                    </svg>
                                </div>
                                <div className="relative flex items-center self-stretch justify-between ">
                                    <p className=" text-xs text-left text-[#b6b7b5]">
                                        Bullyx: what kind od simp goes to.....
                                    </p>
                                    <div className="relative flex items-center justify-start gap-1">
                                        <p className=" text-xs text-left text-[#d8dbd5]">just now</p>
                                        <div className="flex justify-start items-start  relative gap-2.5 p-1 rounded-sm bg-[#1c1f19]">
                                            <svg
                                                width={5}
                                                height={8}
                                                viewBox="0 0 5 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className=""
                                                preserveAspectRatio="none"
                                            >
                                                <path
                                                    d="M1.56006 3.05852L0.400059 2.97852C0.380059 2.79852 0.370059 2.67518 0.370059 2.60852C0.370059 2.02185 0.576725 1.52185 0.990059 1.10852C1.41006 0.688516 1.97339 0.478516 2.68006 0.478516C3.37339 0.478516 3.92673 0.675182 4.34006 1.06852C4.75339 1.46185 4.96006 1.94518 4.96006 2.51852C4.96006 3.34518 4.54339 4.01518 3.71006 4.52852L2.45006 5.30852C2.08339 5.52852 1.86339 5.77518 1.79006 6.04852H5.00006V7.10852H0.310059C0.323392 6.52852 0.446725 6.02185 0.680059 5.58852C0.913392 5.15518 1.30339 4.76852 1.85006 4.42852L2.92006 3.75852C3.47339 3.41185 3.75006 3.00518 3.75006 2.53852C3.75006 2.25185 3.65339 2.01185 3.46006 1.81852C3.27339 1.62518 3.00673 1.52852 2.66006 1.52852C2.29339 1.52852 2.01339 1.64185 1.82006 1.86852C1.62673 2.08852 1.53006 2.37518 1.53006 2.72852L1.56006 3.05852Z"
                                                    fill="#D8DBD5"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TradePage;