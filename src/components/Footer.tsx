import Image from 'next/image';
import Link from 'next/link';

import { Book, Discord, Github, Linkedin, Medium, Paperplane, Twitter } from './socials';

const Footer = () => {
    return (
        <div className="relative overflow-hidden bg-black z-10">
            <div
                className="absolute top-0 w-full h-full -translate-x-1/2 left-1/2 -z-10"
                style={{ background: 'radial-gradient(50% 98.13% at 50% 1.87%, rgba(140, 198, 63, 0.1) 30%, rgba(11, 15, 7, 0.2) 100%)' }}
            ></div>
            <div className="container pb-10 pt-14">
                <div className="flex flex-col items-center">
                    <Image src="/logo.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                    <div className="flex flex-wrap justify-center gap-2 mt-8 lg:gap-7">
                        <Link href="/" className="flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-[#191C14]">
                            <Twitter />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-[#191C14]">
                            <Discord />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-[#191C14]">
                            <Paperplane />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-[#191C14]">
                            <Medium />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-[#191C14]">
                            <Linkedin />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-[#191C14]">
                            <Book />
                        </Link>
                        <Link href="/" className="flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-[#191C14]">
                            <Github />
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