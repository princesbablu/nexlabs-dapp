import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { type NextPage } from "next";

import AssetChart from '../../components/charts/AssetChart';
import InvestmentChart from '../../components/charts/InvestmentChart';
import PortfolioChart from '../../components/charts/PortfolioChart';

import Footer from '../../components/Footer';

const Analytics: NextPage = () => {

    const [timeCount, setTimeCount] = useState("1")

    return (
        <>
            <Head>
                <title>Analytics | Nexlabs Dapp</title>
                <meta name="description" content="Swap Nex token for USDC" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                <div className="py-11">
                    <p className="text-[34px] font-medium text-left text-white">Portfolio</p>
                </div>
                <div className="rounded-[10px] bg-[#0b0f07] p-8 mb-10">
                    <p className="text-2xl font-medium text-left text-white">Performance</p>
                    <p className="opacity-60 text-base font-medium text-left text-white pt-[30px] pb-[36px]">Total Worth</p>
                    <div className="flex items-start justify-start mb-10">
                        <div className="relative flex items-start justify-start">
                            <p className={`text-sm px-4 py-2 rounded font-medium ${timeCount === "1" ? 'text-[#f6f9f3] font-medium bg-[#151911]' : 'text-[#d8dbd5]'}`} onClick={() => setTimeCount("1")}>7 Days</p>
                        </div>
                        <div className="relative flex items-start justify-start">
                            <p className={`text-sm px-4 py-2 rounded ${timeCount === "2" ? 'text-[#f6f9f3] font-medium bg-[#151911]' : 'text-[#d8dbd5]'}`} onClick={() => setTimeCount("2")}>30 Days</p>
                        </div>
                        <div className="relative flex items-start justify-start">
                            <p className={`text-sm px-4 py-2 rounded ${timeCount === "3" ? 'text-[#f6f9f3] font-medium bg-[#151911]' : 'text-[#d8dbd5]'}`} onClick={() => setTimeCount("3")}>6 Month</p>
                        </div>
                    </div>
                    <p className="text-base text-left text-[#d8dbd5] mb-4">
                        The daily asset change data will be updated before 08.00 UTC the next day
                    </p>
                    <PortfolioChart />
                </div>

                <div className="rounded-[10px] bg-[#0b0f07] p-8 mb-10">
                    <p className="mb-8 text-2xl font-medium text-left text-white">Assets Overview</p>
                    <div className="flex flex-wrap gap-10">
                        <div className="w-full md:w-[calc(50%-40px)] lg:w-[calc(33%-40px)] xl:w-[calc(20%-40px)]">
                            <div className="relative flex items-center justify-start w-full gap-3">
                                <div className="w-12 h-12 rounded relative bg-[#171b13] flex items-center justify-center flex-shrink-0">
                                    <Image src="/analytics/icon-asset-1.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', minHeight: '22px' }} />
                                </div>
                                <div className="relative flex flex-col items-start justify-start gap-1">
                                    <div className="relative flex items-end self-stretch justify-start gap-2">
                                        <p className="text-lg font-medium text-left text-[#f6f9f3]">
                                            $7,669
                                        </p>
                                        <p className="opacity-90 text-sm text-left text-[#d8dbd5]">69</p>
                                    </div>
                                    <p className="text-sm text-left text-[#d8dbd5]">Asset on Arbitrum</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[calc(50%-40px)] lg:w-[calc(33%-40px)] xl:w-[calc(20%-40px)]">
                            <div className="relative flex items-center justify-start w-full gap-3">
                                <div className="w-12 h-12 rounded relative bg-[#171b13] flex items-center justify-center flex-shrink-0">
                                    <Image src="/analytics/icon-asset-2.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', minHeight: '22px' }} />
                                </div>
                                <div className="relative flex flex-col items-start justify-start gap-1">
                                    <div className="relative flex items-end self-stretch justify-start gap-2">
                                        <p className="text-lg font-medium text-left text-[#f6f9f3]">$1,639</p>
                                        <p className="opacity-90 text-sm text-left text-[#d8dbd5]">69</p>
                                    </div>
                                    <p className="text-sm text-left text-[#d8dbd5]">Asset on Dogechain</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[calc(50%-40px)] lg:w-[calc(33%-40px)] xl:w-[calc(20%-40px)]">
                            <div className="relative flex items-center justify-start w-full gap-3">
                                <div className="w-12 h-12 rounded relative bg-[#171b13] flex items-center justify-center flex-shrink-0">
                                    <Image src="/analytics/icon-asset-3.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', minHeight: '22px' }} />
                                </div>
                                <div className="relative flex flex-col items-start justify-start gap-1">
                                    <div className="relative flex items-end self-stretch justify-start gap-2">
                                        <p className="text-lg font-medium text-left text-[#f6f9f3]">$1,570</p>
                                        <p className="opacity-90 text-sm text-left text-[#d8dbd5]">14</p>
                                    </div>
                                    <p className="text-sm text-left text-[#d8dbd5]">Asset on BNB Chain</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[calc(50%-40px)] lg:w-[calc(33%-40px)] xl:w-[calc(20%-40px)]">
                            <div className="relative flex items-center justify-start w-full gap-3">
                                <div className="w-12 h-12 rounded relative bg-[#171b13] flex items-center justify-center flex-shrink-0">
                                    <Image src="/analytics/icon-asset-4.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', minHeight: '22px' }} />
                                </div>
                                <div className="relative flex flex-col items-start justify-start gap-1">
                                    <div className="relative flex items-end self-stretch justify-start gap-2">
                                        <p className="text-lg font-medium text-left text-[#f6f9f3]">$158</p>
                                        <p className="opacity-90 text-sm text-left text-[#d8dbd5]">01</p>
                                    </div>
                                    <p className="text-sm text-left text-[#d8dbd5]">Asset on Ethereum</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[calc(50%-40px)] lg:w-[calc(33%-40px)] xl:w-[calc(20%-40px)]">
                            <div className="relative flex items-center justify-start w-full gap-3">
                                <div className="w-12 h-12 rounded relative bg-[#171b13] flex items-center justify-center flex-shrink-0">
                                    <Image src="/analytics/icon-asset-5.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', minHeight: '22px' }} />
                                </div>
                                <div className="relative flex flex-col items-start justify-start gap-1">
                                    <div className="relative flex items-end self-stretch justify-start gap-2">
                                        <p className="text-lg font-medium text-left text-[#f6f9f3]">$144</p>
                                        <p className="opacity-90 text-sm text-left text-[#d8dbd5]">01</p>
                                    </div>
                                    <p className="text-sm text-left text-[#d8dbd5]">Asset on Tomb chain</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[calc(50%-40px)] lg:w-[calc(33%-40px)] xl:w-[calc(20%-40px)]">
                            <div className="relative flex items-center justify-start w-full gap-3">
                                <div className="w-12 h-12 rounded relative bg-[#171b13] flex items-center justify-center flex-shrink-0">
                                    <Image src="/analytics/icon-asset-6.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', minHeight: '22px' }} />
                                </div>
                                <div className="relative flex flex-col items-start justify-start gap-1">
                                    <div className="relative flex items-end self-stretch justify-start gap-2">
                                        <p className="text-lg font-medium text-left text-[#f6f9f3]">$2</p>
                                        <p className="opacity-90 text-sm text-left text-[#d8dbd5]">00</p>
                                    </div>
                                    <p className="text-sm text-left text-[#d8dbd5]">Asset on Fantom</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[calc(50%-40px)] lg:w-[calc(33%-40px)] xl:w-[calc(20%-40px)]">
                            <div className="relative flex items-center justify-start w-full gap-3">
                                <div className="w-12 h-12 rounded relative bg-[#171b13] flex items-center justify-center flex-shrink-0">
                                    <Image src="/analytics/icon-asset-7.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', minHeight: '22px' }} />
                                </div>
                                <div className="relative flex flex-col items-start justify-start gap-1">
                                    <div className="relative flex items-end self-stretch justify-start gap-2">
                                        <p className="text-lg font-medium text-left text-[#f6f9f3]">$7</p>
                                        <p className="opacity-90 text-sm text-left text-[#d8dbd5]">0</p>
                                    </div>
                                    <p className="text-sm text-left text-[#d8dbd5]">Asset on Avalanche</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[calc(50%-40px)] lg:w-[calc(33%-40px)] xl:w-[calc(20%-40px)]">
                            <div className="relative flex items-center justify-start w-full gap-3">
                                <div className="w-12 h-12 rounded relative bg-[#171b13] flex items-center justify-center flex-shrink-0">
                                    <Image src="/analytics/icon-asset-8.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', minHeight: '22px' }} />
                                </div>
                                <div className="relative flex flex-col items-start justify-start gap-1">
                                    <div className="relative flex items-end self-stretch justify-start gap-2">
                                        <p className="text-lg font-medium text-left text-[#f6f9f3]">$0</p>
                                        <p className="opacity-90 text-sm text-left text-[#d8dbd5]">69</p>
                                    </div>
                                    <p className="text-sm text-left text-[#d8dbd5]">Asset on Polygon</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[calc(50%-40px)] lg:w-[calc(33%-40px)] xl:w-[calc(20%-40px)]">
                            <div className="relative flex items-center justify-start w-full gap-3">
                                <div className="w-12 h-12 rounded relative bg-[#171b13] flex items-center justify-center flex-shrink-0">
                                    <Image src="/analytics/icon-asset-9.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', minHeight: '22px' }} />
                                </div>
                                <div className="relative flex flex-col items-start justify-start gap-1">
                                    <div className="relative flex items-end self-stretch justify-start gap-2">
                                        <p className="text-lg font-medium text-left text-[#f6f9f3]">$0</p>
                                        <p className="opacity-90 text-sm text-left text-[#d8dbd5]">69</p>
                                    </div>
                                    <p className="text-sm text-left text-[#d8dbd5]">Asset on Klaytn</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-[10px] bg-[#0b0f07] p-8 mb-16">
                    <p className="mb-8 text-2xl font-medium text-left text-white">Assets Allocation</p>
                    <div className="flex flex-wrap w-full gap-8">
                        <div className="w-full lg:w-[calc(41.66%-32px)]">
                            <InvestmentChart />
                        </div>
                        <div className="w-full lg:w-[calc(59.33%-32px)]">
                            <p className="text-base text-left text-white">Most Performant Asset</p>
                            <AssetChart />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Analytics