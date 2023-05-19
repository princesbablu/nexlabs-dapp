import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import logo from '~/assets/logo.png';
import social1 from '~/assets/social-icon-twitter.svg';
import social2 from '~/assets/social-icon-discord.svg';
import social3 from '~/assets/social-icon-paperplane.svg';
import social4 from '~/assets/social-icon-medium.svg';
import social5 from '~/assets/social-icon-linkedin.svg';
import social6 from '~/assets/social-icon-book.svg';
import social7 from '~/assets/social-icon-github.svg';

const Footer = () => {
    return (
        <div className="relative overflow-hidden bg-black z-10">
            <div
                className="absolute top-0 w-full h-full -translate-x-1/2 left-1/2 -z-10"
                style={{ background: 'radial-gradient(50% 98.13% at 50% 1.87%, rgba(140, 198, 63, 0.1) 30%, rgba(11, 15, 7, 0.2) 100%)' }}
            ></div>
            <div className="container pb-10 pt-14">
                <div className="flex flex-col items-center">
                    <Image src={logo} alt="" />
                    <div className="flex flex-wrap justify-center gap-2 mt-8 lg:gap-7">
                        <Link href="/" className="flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-[#191C14]">
                            <Image src={social1} alt="" />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-[#191C14]">
                            <Image src={social2} alt="" />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-[#191C14]">
                            <Image src={social3} alt="" />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-[#191C14]">
                            <Image src={social4} alt="" />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-[#191C14]">
                            <Image src={social5} alt="" />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-[#191C14]">
                            <Image src={social6} alt="" />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-[#191C14]">
                            <Image src={social7} alt="" />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
                    <Link href="/" className="relative flex items-center justify-start gap-2 cursor-pointer">
                        <p className="text-[#d8dbd5]">
                            Policies &amp; Conditions
                        </p>
                        <svg
                            width={17}
                            height={17}
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative w-4 h-4"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g clipPath="url(#clip0_350_562)">
                                <path
                                    d="M11.1694 6.39661L5.43144 12.1346L4.48877 11.1919L10.2261 5.45394H5.16944V4.12061H12.5028V11.4539H11.1694V6.39661V6.39661Z"
                                    fill="#D8DBD5"
                                />
                            </g>
                        </svg>
                    </Link>
                    <Link href="/" className="relative flex items-center justify-start gap-2 cursor-pointer">
                        <p className="text-[#d8dbd5]">Referral Terms</p>
                        <svg
                            width={17}
                            height={17}
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative w-4 h-4"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g clipPath="url(#clip0_350_568)">
                                <path
                                    d="M11.1694 6.39661L5.43144 12.1346L4.48877 11.1919L10.2261 5.45394H5.16944V4.12061H12.5028V11.4539H11.1694V6.39661V6.39661Z"
                                    fill="#D8DBD5"
                                />
                            </g>
                        </svg>
                    </Link>
                    <Link href="/" className="relative flex items-center justify-start gap-2 cursor-pointer">
                        <p className="text-[#d8dbd5]">Brand Assets</p>
                        <svg
                            width={17}
                            height={17}
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative w-4 h-4"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g clipPath="url(#clip0_350_574)">
                                <path
                                    d="M11.1694 6.39661L5.43144 12.1346L4.48877 11.1919L10.2261 5.45394H5.16944V4.12061H12.5028V11.4539H11.1694V6.39661V6.39661Z"
                                    fill="#D8DBD5"
                                />
                            </g>
                        </svg>
                    </Link>
                </div>
                <p className="opacity-70 text-sm text-center text-[#d8dbd5] mt-6">
                    © 2023 NexLabs B.V. All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer