"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import blur from '~/assets/blur/blur-asset.svg';

import assetIcon1 from '~/assets/asset-icon-1.svg';
import assetIcon2 from '~/assets/asset-icon-2.svg';
import assetIcon3 from '~/assets/asset-icon-3.svg';
import assetIcon4 from '~/assets/asset-icon-4.svg';
import assetIcon5 from '~/assets/asset-icon-5.svg';
import assetIcon6 from '~/assets/asset-icon-6.svg';
import assetIcon7 from '~/assets/asset-icon-7.svg';
import assetIcon8 from '~/assets/asset-icon-8.svg';
import assetLine from '~/assets/asset-line.svg';

const listOfAsset = [
    {
        icon: assetIcon1,
        title: "Cryptocurrencies",
        sub: "Individual Assets",
        link: "",
    },
    {
        icon: assetIcon2,
        title: "Stocks",
        sub: "Individual Assets",
        link: "",
    },
    {
        icon: assetIcon3,
        title: "Commodities",
        sub: "Individual Assets",
        link: "",
    },
    {
        icon: assetIcon4,
        title: "NFTS",
        sub: "Individual Assets",
        link: "",
    },
    {
        icon: assetIcon1,
        title: "Cryptocurrencies",
        sub: "Individual Assets",
        link: "",
    },
    {
        icon: assetIcon2,
        title: "Stocks",
        sub: "Individual Assets",
        link: "",
    },
    {
        icon: assetIcon3,
        title: "Commodities",
        sub: "Individual Assets",
        link: "",
    },
    {
        icon: assetIcon4,
        title: "NFTS",
        sub: "Individual Assets",
        link: "",
    },
]

const listOfPre = [
    {
        icon: assetIcon5,
        title: "Cryptocurrencies",
        sub: "Individual Assets",
        link: "",
    },
    {
        icon: assetIcon6,
        title: "Stocks",
        sub: "Individual Assets",
        link: "",
    },
    {
        icon: assetIcon7,
        title: "Commodities",
        sub: "Individual Assets",
        link: "",
    },
    {
        icon: assetIcon8,
        title: "NFTS",
        sub: "Individual Assets",
        link: "",
    },
    {
        icon: assetIcon5,
        title: "Cryptocurrencies",
        sub: "Individual Assets",
        link: "",
    },
    {
        icon: assetIcon6,
        title: "Stocks",
        sub: "Individual Assets",
        link: "",
    },
    {
        icon: assetIcon7,
        title: "Commodities",
        sub: "Individual Assets",
        link: "",
    },
    {
        icon: assetIcon8,
        title: "NFTS",
        sub: "Individual Assets",
        link: "",
    },
]

const Assets = () => {

    return (
        <div className="relative z-10 overflow-hidden">
            <div className="absolute top-0 left-0 -z-10">
                <Image src={blur} alt="" />
            </div>
            <div className="container relative z-10">
                <div className="flex items-center justify-between pt-[60px] mb-10">
                    <p className="text-xl md:text-3xl lg:text-[40px] font-bold text-[#f6f9f3]">
                        Explore Assets
                    </p>
                    <div className="flex gap-4">
                        <div className="h-14 w-14 rounded-full bg-[#0B0F07] hover:bg-[#18291B] flex items-center justify-center cursor-pointer asset-prev-el">
                            <svg
                                width={24}
                                height={23}
                                viewBox="0 0 24 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M11.3766 1.11243L1.32861 11.2529L11.3766 21.3933M2.72479 11.2529L23.1004 11.2529"
                                    stroke="#D6D6D6"
                                    strokeWidth="1.36074"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="h-14 w-14 rounded-full bg-[#0B0F07] hover:bg-[#18291B] flex items-center justify-center cursor-pointer asset-next-el">
                            <svg
                                width={24}
                                height={23}
                                viewBox="0 0 24 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M12.4823 1.11243L22.5303 11.2529L12.4823 21.3933M21.1341 11.2529L0.758462 11.2529"
                                    stroke="#D6D6D6"
                                    strokeWidth="1.36074"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <Swiper
                        spaceBetween={24}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.asset-prev-el',
                            nextEl: '.asset-next-el'
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            992: {
                                slidesPerView: 3
                            },
                            1280: {
                                slidesPerView: 4
                            },
                        }}
                    >
                        {
                            listOfAsset.map((el, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <div className="hover:bg-gradient-to-tl bg-[#0B0F07] from-[#00ADEF] to-[#8AC640] p-px rounded-lg hover:from-[#8ac640] hover:to-[#00adef]">
                                            <div className="min-h-[317px] rounded-lg bg-[#0B0F07] w-full pt-14 pb-8 flex flex-col items-center">
                                                <div className="w-14 h-14 rounded bg-[#1b1f17] flex items-center justify-center mb-4">
                                                    <Image src={el.icon} alt="" />
                                                </div>
                                                <p className="text-xl font-bold text-center text-[#f6f9f3] mb-1">{el.title}</p>
                                                <p className="opacity-70 text-sm text-center text-[#d8dbd5] mb-3">{el.sub}</p>
                                                <Image src={assetLine} alt="" />
                                                <div className="mt-auto">
                                                    <Link href={el.link} className="flex bg-gradient-to-tl bg-[#0B0F07] from-[#00ADEF] to-[#8AC640] p-px rounded cursor-pointer hover:from-[#8ac640] hover:to-[#00adef] overflow-hidden">
                                                        <p className="px-14 py-2 text-sm text-center bg-[#0B0F07] rounded">View</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </div>
            </div>

            <div className="container pt-[60px] mb-[120px] relative z-10">
                <div className="flex items-center justify-between pt-[60px] mb-10">
                    <p className="text-xl md:text-3xl lg:text-[40px] font-bold text-[#f6f9f3]">
                        Prediction Market
                    </p>
                    <div className="flex gap-4">
                        <div className="h-14 w-14 rounded-full bg-[#0B0F07] hover:bg-[#18291B] flex items-center justify-center cursor-pointer pre-prev-el">
                            <svg
                                width={24}
                                height={23}
                                viewBox="0 0 24 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M11.3766 1.11243L1.32861 11.2529L11.3766 21.3933M2.72479 11.2529L23.1004 11.2529"
                                    stroke="#D6D6D6"
                                    strokeWidth="1.36074"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="h-14 w-14 rounded-full bg-[#0B0F07] hover:bg-[#18291B] flex items-center justify-center cursor-pointer pre-next-el">
                            <svg
                                width={24}
                                height={23}
                                viewBox="0 0 24 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M12.4823 1.11243L22.5303 11.2529L12.4823 21.3933M21.1341 11.2529L0.758462 11.2529"
                                    stroke="#D6D6D6"
                                    strokeWidth="1.36074"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <Swiper
                        spaceBetween={24}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.pre-prev-el',
                            nextEl: '.pre-next-el'
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            992: {
                                slidesPerView: 3
                            },
                            1280: {
                                slidesPerView: 4
                            },
                        }}
                    >
                        {
                            listOfPre.map((el, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <div className="hover:bg-gradient-to-tl bg-[#0B0F07] from-[#00ADEF] to-[#8AC640] p-px rounded-lg hover:from-[#8ac640] hover:to-[#00adef]">
                                            <div className="min-h-[317px] rounded-lg bg-[#0B0F07] w-full pt-14 pb-8 flex flex-col items-center">
                                                <div className="w-14 h-14 rounded bg-[#1b1f17] flex items-center justify-center mb-4">
                                                    <Image src={el.icon} alt="" />
                                                </div>
                                                <p className="text-xl font-bold text-center text-[#f6f9f3] mb-1">{el.title}</p>
                                                <p className="opacity-70 text-sm text-center text-[#d8dbd5] mb-3">{el.sub}</p>
                                                <Image src={assetLine} alt="" />
                                                <div className="mt-auto">
                                                    <Link href={el.link} className="flex bg-gradient-to-tl bg-[#0B0F07] from-[#00ADEF] to-[#8AC640] p-px rounded cursor-pointer hover:from-[#8ac640] hover:to-[#00adef] overflow-hidden">
                                                        <p className="px-14 py-2 text-sm text-center bg-[#0B0F07] rounded">View</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Assets