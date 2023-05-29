import Image from "next/image"
import Head from 'next/head';
import { type NextPage } from "next";

import statIcon1 from '~/assets/stat-icon-1.svg';
import statIcon2 from '~/assets/stat-icon-2.svg';
import statIcon3 from '~/assets/stat-icon-3.svg';

import AssetChart from "../../components/charts/AssetChart";

import Footer from "../../components/Footer";

const stats: NextPage = () => {
    return (
        <>
            <Head>
                <title>Stats | Nexlabs Dapp</title>
                <meta name="description" content="Swap Nex token for USDC" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                <div className="pb-12 pt-11">
                    <p className="text-[34px] font-medium text-left text-white">Portfolio</p>
                </div>
                <div className="flex flex-wrap gap-[30px] items-stretch mb-10">
                    <div className="w-full md:w-[calc(50%-30px)] xl:w-[calc(33.33%-30px)]">
                        <div className="w-full bg-gradient-to-tl from-[#00ADEF] to-[#8AC640] rounded-xl p-px bg-animate">
                            <div className="bg-[#0B0F07] px-8 py-6 rounded-xl">
                                <div className="relative flex items-center justify-start gap-4">
                                    <div>
                                        <Image width={0} height={0} src={statIcon1} alt="" />
                                    </div>

                                    <div className="flex flex-col items-start justify-start gap-2">
                                        <div className="relative flex flex-col items-start justify-start gap-2">
                                            <p className="text-xs text-left text-[#d8dbd5]">Total Volume</p>
                                            <p className="text-2xl font-medium text-left text-[#f6f9f3]">
                                                $12,289,715,969
                                            </p>
                                        </div>
                                        <div className="relative flex items-center justify-start gap-1">
                                            <svg
                                                width={9}
                                                height={13}
                                                viewBox="0 0 9 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="relative w-2 h-3"
                                                preserveAspectRatio="none"
                                            >
                                                <g clipPath="url(#clip0_86_4600)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M1.02799 5.27582H7.63499C8.24899 5.27582 8.56099 4.53582 8.13199 4.09582L4.82899 0.70282C4.76416 0.636419 4.68671 0.583653 4.60118 0.547627C4.51566 0.511601 4.4238 0.493042 4.33099 0.493042C4.23819 0.493042 4.14633 0.511601 4.0608 0.547627C3.97528 0.583653 3.89782 0.636419 3.83299 0.70282L0.528993 4.09582C0.433535 4.1938 0.369112 4.31776 0.343795 4.45219C0.318477 4.58662 0.333392 4.72553 0.38667 4.85151C0.439948 4.9775 0.529221 5.08497 0.643303 5.16045C0.757385 5.23592 0.891203 5.27606 1.02799 5.27582ZM1.02799 11.6098H7.63499C8.24899 11.6098 8.56099 10.8698 8.13199 10.4298L4.82899 7.03582C4.76416 6.96942 4.68671 6.91665 4.60118 6.88063C4.51566 6.8446 4.4238 6.82604 4.33099 6.82604C4.23819 6.82604 4.14633 6.8446 4.0608 6.88063C3.97528 6.91665 3.89782 6.96942 3.83299 7.03582L0.528993 10.4288C0.433535 10.5268 0.369112 10.6508 0.343795 10.7852C0.318477 10.9196 0.333392 11.0585 0.38667 11.1845C0.439948 11.3105 0.529221 11.418 0.643303 11.4934C0.757385 11.5689 0.891203 11.6101 1.02799 11.6098Z"
                                                        fill="#0DCB81"
                                                    />
                                                </g>
                                            </svg>
                                            <div className="relative flex items-center justify-start gap-1">
                                                <p className="text-left text-[#0dcb81]">$198,989,707</p>
                                                <p className="text-left text-[#a3a6a0]">(24h)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[calc(50%-30px)] xl:w-[calc(33.33%-30px)]">
                        <div className="w-full bg-gradient-to-tl from-[#00ADEF] to-[#8AC640] rounded-xl p-px bg-animate">
                            <div className="bg-[#0B0F07] px-8 py-6 rounded-xl">
                                <div className="relative flex items-center justify-start gap-4">
                                    <div>
                                        <Image width={0} height={0} src={statIcon2} alt="" />
                                    </div>

                                    <div className="flex flex-col items-start justify-start gap-2">
                                        <div className="relative flex items-center justify-start gap-1">
                                            <p className="text-xs text-left text-[#d8dbd5]">
                                                Current Open Interest
                                            </p>
                                            <svg
                                                width={13}
                                                height={13}
                                                viewBox="0 0 13 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="relative w-3 h-3"
                                                preserveAspectRatio="xMidYMid meet"
                                            >
                                                <g clipPath="url(#clip0_86_4633)">
                                                    <path
                                                        opacity="0.6"
                                                        d="M6.52686 11.9919C3.76536 11.9919 1.52686 9.75344 1.52686 6.99194C1.52686 4.23044 3.76536 1.99194 6.52686 1.99194C9.28836 1.99194 11.5269 4.23044 11.5269 6.99194C11.5269 9.75344 9.28836 11.9919 6.52686 11.9919ZM6.52686 10.9919C7.58772 10.9919 8.60514 10.5705 9.35528 9.82037C10.1054 9.07023 10.5269 8.05281 10.5269 6.99194C10.5269 5.93108 10.1054 4.91366 9.35528 4.16352C8.60514 3.41337 7.58772 2.99194 6.52686 2.99194C5.46599 2.99194 4.44857 3.41337 3.69843 4.16352C2.94828 4.91366 2.52686 5.93108 2.52686 6.99194C2.52686 8.05281 2.94828 9.07023 3.69843 9.82037C4.44857 10.5705 5.46599 10.9919 6.52686 10.9919ZM6.02686 4.49194H7.02686V5.49194H6.02686V4.49194ZM6.02686 6.49194H7.02686V9.49194H6.02686V6.49194Z"
                                                        fill="#D8DBD5"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="relative flex flex-col items-start justify-start gap-1">
                                            <p className="text-2xl font-medium text-left text-[#f6f9f3]">
                                                $3,550,062
                                            </p>
                                        </div>
                                        <div className="relative flex items-center justify-center gap-1">
                                            <svg
                                                width={9}
                                                height={13}
                                                viewBox="0 0 9 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="relative w-2 h-3"
                                                preserveAspectRatio="none"
                                            >
                                                <g clipPath="url(#clip0_86_4637)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M1.22306 6.82494H7.83006C8.44406 6.82494 8.75606 7.56494 8.32706 8.00494L5.02406 11.3979C4.95923 11.4643 4.88178 11.5171 4.79625 11.5531C4.71073 11.5892 4.61886 11.6077 4.52606 11.6077C4.43326 11.6077 4.3414 11.5892 4.25587 11.5531C4.17035 11.5171 4.09289 11.4643 4.02806 11.3979L0.724062 8.00594C0.628603 7.90797 0.56418 7.784 0.538863 7.64957C0.513546 7.51515 0.528461 7.37624 0.581739 7.25025C0.635017 7.12426 0.724289 7.0168 0.838371 6.94132C0.952453 6.86584 1.08627 6.82471 1.22306 6.82494ZM1.22306 0.491944H7.83006C8.44406 0.491944 8.75606 1.23194 8.32706 1.67194L5.02406 5.06494C4.95923 5.13135 4.88178 5.18411 4.79625 5.22014C4.71073 5.25616 4.61886 5.27472 4.52606 5.27472C4.43326 5.27472 4.3414 5.25616 4.25587 5.22014C4.17035 5.18411 4.09289 5.13135 4.02806 5.06494L0.724062 1.67194C0.628603 1.57397 0.56418 1.45 0.538863 1.31557C0.513546 1.18115 0.528461 1.04224 0.581739 0.91625C0.635017 0.790262 0.724289 0.682797 0.838371 0.607319C0.952453 0.531841 1.08627 0.491707 1.22306 0.491944Z"
                                                        fill="#F83636"
                                                    />
                                                </g>
                                            </svg>
                                            <div className="relative flex items-start justify-start gap-1">
                                                <p className="text-base text-left text-[#f83636]">$9,902</p>
                                                <p className="text-base text-left text-[#a3a6a0]">(1h)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[calc(50%-30px)] xl:w-[calc(33.33%-30px)]">
                        <div className="w-full bg-gradient-to-tl from-[#00ADEF] to-[#8AC640] rounded-xl p-px bg-animate">
                            <div className="bg-[#0B0F07] px-8 py-6 rounded-xl">
                                <div className="relative flex items-center justify-start gap-4">
                                    <div>
                                        <Image width={0} height={0} src={statIcon3} alt="" />
                                    </div>

                                    <div className="flex flex-col items-start justify-start gap-2">
                                        <div className="relative flex flex-col items-start justify-start gap-2">
                                            <p className="text-xs text-left text-[#d8dbd5]">Accrued Fees</p>
                                            <p className="text-2xl font-medium text-left text-[#f6f9f3]">
                                                $14,359,571
                                            </p>
                                        </div>
                                        <div className="relative flex items-center justify-start gap-1">
                                            <svg
                                                width={9}
                                                height={13}
                                                viewBox="0 0 9 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="relative w-2 h-3"
                                                preserveAspectRatio="none"
                                            >
                                                <g clipPath="url(#clip0_86_4600)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M1.02799 5.27582H7.63499C8.24899 5.27582 8.56099 4.53582 8.13199 4.09582L4.82899 0.70282C4.76416 0.636419 4.68671 0.583653 4.60118 0.547627C4.51566 0.511601 4.4238 0.493042 4.33099 0.493042C4.23819 0.493042 4.14633 0.511601 4.0608 0.547627C3.97528 0.583653 3.89782 0.636419 3.83299 0.70282L0.528993 4.09582C0.433535 4.1938 0.369112 4.31776 0.343795 4.45219C0.318477 4.58662 0.333392 4.72553 0.38667 4.85151C0.439948 4.9775 0.529221 5.08497 0.643303 5.16045C0.757385 5.23592 0.891203 5.27606 1.02799 5.27582ZM1.02799 11.6098H7.63499C8.24899 11.6098 8.56099 10.8698 8.13199 10.4298L4.82899 7.03582C4.76416 6.96942 4.68671 6.91665 4.60118 6.88063C4.51566 6.8446 4.4238 6.82604 4.33099 6.82604C4.23819 6.82604 4.14633 6.8446 4.0608 6.88063C3.97528 6.91665 3.89782 6.96942 3.83299 7.03582L0.528993 10.4288C0.433535 10.5268 0.369112 10.6508 0.343795 10.7852C0.318477 10.9196 0.333392 11.0585 0.38667 11.1845C0.439948 11.3105 0.529221 11.418 0.643303 11.4934C0.757385 11.5689 0.891203 11.6101 1.02799 11.6098Z"
                                                        fill="#0DCB81"
                                                    />
                                                </g>
                                            </svg>
                                            <div className="relative flex items-center justify-start gap-1">
                                                <p className="text-left text-[#0dcb81]">$226,163</p>
                                                <p className="text-left text-[#a3a6a0]">(24h)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-6 mb-20">
                    <div className="w-full lg:w-[calc(50%-24px)]">
                        <div className="bg-[#12170C] px-2 md:px-4 xl:px-8 pt-8 pb-4 rounded-xl">
                            <p className="mb-6 w-full h-[18.55px] text-base font-bold text-center text-white">
                                AUM By Tranches
                            </p>

                            <AssetChart />
                        </div>
                    </div>
                    <div className="w-full lg:w-[calc(50%-24px)]">
                        <div className="bg-[#12170C] px-2 md:px-4 xl:px-8 pt-8 pb-4 rounded-xl">
                            <p className="mb-6 w-full h-[18.55px] text-base font-bold text-center text-white">
                                AUM By Tranches
                            </p>

                            <AssetChart />
                        </div>
                    </div>
                    <div className="w-full lg:w-[calc(50%-24px)]">
                        <div className="bg-[#12170C] px-2 md:px-4 xl:px-8 pt-8 pb-4 rounded-xl">
                            <p className="mb-6 w-full h-[18.55px] text-base font-bold text-center text-white">
                                AUM By Tranches
                            </p>

                            <AssetChart />
                        </div>
                    </div>
                    <div className="w-full lg:w-[calc(50%-24px)]">
                        <div className="bg-[#12170C] px-2 md:px-4 xl:px-8 pt-8 pb-4 rounded-xl">
                            <p className="mb-6 w-full h-[18.55px] text-base font-bold text-center text-white">
                                AUM By Tranches
                            </p>

                            <AssetChart />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default stats;