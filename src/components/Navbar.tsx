import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

    const [toggleNav, setToggleNav] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const darkModeToggle = () => {
        if (typeof document !== 'undefined') {
            const htmlWrap = document.querySelector('html') as HTMLInputElement | null;
            if (darkMode === false) {
                localStorage.setItem('theme', 'dark');
                if (htmlWrap != null) {
                    htmlWrap.classList.add('dark');
                }
                setDarkMode(true)
            } else {
                localStorage.setItem('theme', 'light');
                if (htmlWrap != null) {
                    htmlWrap.classList.remove('dark');
                }
                setDarkMode(false)
            }
        }
    }

    return (
        <div className="relative z-50">
            <div className="container">
                <div className="flex items-center h-20 gap-8">
                    <div>
                        <Link href="/">
                            <Image src="/logo.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                        </Link>
                    </div>

                    <div className={`fixed top-0 z-50 transition-all duration-300 left-0 h-full bg-body w-72 sm:w-80 lg:static lg:top-auto lg:left-auto lg:h-auto lg:w-auto  lg:-translate-x-0 ${toggleNav ? '' : '-translate-x-full'}`}>
                        <div className="flex items-center justify-center mt-4 ml-auto mr-4 cursor-pointer h-11 w-11 lg:hidden" onClick={() => setToggleNav(!toggleNav)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </div>
                        <ul className="flex flex-col items-start lg:items-center lg:flex-row child:w-full">
                            <li className="relative">
                                <Link href="/" className="block px-5 py-4 text-white opacity-80 hover:text-[#6DAC4C]">Dashboard</Link>
                            </li>
                            <li className="relative group">
                                <Link href="/trade" className="block px-5 py-4 text-white opacity-80 hover:text-[#6DAC4C]">
                                    Trade
                                </Link>
                                <ul className="lg:absolute left-0 top-full mx-2 lg:w-[380px] rounded-xl bg-[#151B10] lg:px-4 py-1 lg:opacity-0 lg:invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 lg:mt-1 transition-all z-10">
                                    <div className="absolute top-0 left-5 h-3 w-3 -translate-y-1/4 bg-[inherit] rotate-45 hidden lg:block"></div>
                                    <li className="relative border-b border-[#69765D]/10 last:border-0">
                                        <Link href="/trade" className="flex items-center gap-3 px-5 py-3 text-white hover:text-[#6DAC4C] opacity-80 group">
                                            <span>
                                                <Image src="/nav-icon-1.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                                            </span>
                                            <span className="block w-full">
                                                Perpetual - Individual Assets
                                            </span>
                                            <span className="ml-auto">
                                                <Image src="/nav-angle-right.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="relative border-b border-[#69765D]/10 last:border-0">
                                        <Link href="/trade" className="flex items-center gap-3 px-5 py-3 text-white hover:text-[#6DAC4C] opacity-80 group">
                                            <span>
                                                <Image src="/nav-icon-2.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                                            </span>
                                            <span className="block w-full">
                                                Perpetual - Indices
                                            </span>
                                            <span className="ml-auto">
                                                <Image src="/nav-angle-right.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="relative border-b border-[#69765D]/10 last:border-0">
                                        <Link href="/trade" className="flex items-center gap-3 px-5 py-3 text-white hover:text-[#6DAC4C] opacity-80 group">
                                            <span>
                                                <Image src="/nav-icon-3.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                                            </span>
                                            <span className="block w-full">
                                                Futures - Prediction Markets
                                            </span>
                                            <span className="ml-auto">
                                                <Image src="/nav-angle-right.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative">
                                <Link href="/swap" className="block px-5 py-4 text-white opacity-80 hover:text-[#6DAC4C]">Swap </Link>
                            </li>
                            <li className="relative group">
                                <div className="flex gap-2 items-center px-5 py-4 text-white opacity-80 hover:text-[#6DAC4C] cursor-pointer">
                                    <span>Analytics</span>
                                    <svg
                                        width={11}
                                        height={6}
                                        viewBox="0 0 11 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="opacity-80"
                                        preserveAspectRatio="none"
                                    >
                                        <path opacity="0.8" d="M5.12061 5.5L0.120605 0.5L10.1206 0.5L5.12061 5.5Z" fill="white" />
                                    </svg>
                                </div>
                                <ul className="lg:absolute left-0 top-full lg:w-[180px] rounded-xl bg-[#151B10] lg:px-4 py-1 lg:opacity-0 lg:invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 lg:mt-1 transition-all z-10 mx-2">
                                    <div className="absolute top-0 left-5 h-3 w-3 -translate-y-1/4 bg-[inherit] rotate-45"></div>
                                    <li className="relative border-b border-[#69765D]/10 last:border-0">
                                        <Link href="/analytics" className="flex items-center gap-3 px-5 py-3 text-[#D8DBD5] hover:text-[#F6F9F3] opacity-80 group/link hover:bg-[#12160E]">
                                            <span className="block w-full">
                                                Portfolio
                                            </span>
                                            <span className="ml-auto">
                                                <div className="h-2 w-2 rounded-3xl bg-gradient-to-r from-[#8AC640] to-[#00ADEF] opacity-0 invisible group-hover/link:opacity-100 group-hover/link:visible"></div>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="relative border-b border-[#69765D]/10 last:border-0">
                                        <Link href="/stats" className="flex items-center gap-3 px-5 py-3 text-[#D8DBD5] hover:text-[#F6F9F3] opacity-80 group/link hover:bg-[#12160E]">
                                            <span className="block w-full">
                                                Stats
                                            </span>
                                            <span className="ml-auto">
                                                <div className="h-2 w-2 rounded-3xl bg-gradient-to-r from-[#8AC640] to-[#00ADEF] opacity-0 invisible group-hover/link:opacity-100 group-hover/link:visible"></div>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-3 ml-auto">
                        <div className='relative cursor-pointer group'>
                            <svg
                                width={46}
                                height={46}
                                viewBox="0 0 46 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="rounded w-9 h-9 sm:w-11 sm:h-11"
                                preserveAspectRatio="none"
                            >
                                <rect
                                    x="0.878906"
                                    y={1}
                                    width={44}
                                    height={44}
                                    rx={4}
                                    fill="#191C14"
                                    stroke="#191C14"
                                    strokeWidth="0.5"
                                />
                                <path
                                    d="M25.0011 22.2643L21.4855 21.2356C21.0786 21.1184 20.7954 20.7376 20.7954 20.3144C20.7954 19.7838 21.2251 19.3541 21.7556 19.3541H23.9139C24.311 19.3541 24.7016 19.4746 25.0271 19.6959C25.2257 19.8294 25.4926 19.7968 25.6619 19.6308L26.7947 18.524C27.0258 18.2994 26.9933 17.9251 26.7361 17.7265C25.9386 17.1015 24.9425 16.7532 23.9204 16.75V15.1875C23.9204 14.901 23.686 14.6666 23.3995 14.6666H22.3579C22.0714 14.6666 21.837 14.901 21.837 15.1875V16.75H21.7556C19.6821 16.75 18.0154 18.5306 18.2075 20.6432C18.3442 22.1438 19.49 23.3645 20.9353 23.7877L24.2719 24.7643C24.6788 24.8847 24.962 25.2623 24.962 25.6855C24.962 26.2161 24.5323 26.6458 24.0017 26.6458H21.8435C21.4464 26.6458 21.0558 26.5254 20.7303 26.304C20.5317 26.1705 20.2648 26.2031 20.0955 26.3691L18.9627 27.4759C18.7316 27.7005 18.7641 28.0748 19.0213 28.2734C19.8188 28.8984 20.8149 29.2467 21.837 29.25V30.8125C21.837 31.0989 22.0714 31.3333 22.3579 31.3333H23.3995C23.686 31.3333 23.9204 31.0989 23.9204 30.8125V29.2434C25.4373 29.2142 26.8598 28.3125 27.3611 26.8769C28.061 24.8717 26.8859 22.8144 25.0011 22.2643V22.2643Z"
                                    fill="white"
                                />
                            </svg>
                            <ul className="absolute right-0 top-full w-[110px] rounded-xl bg-[#151B10] px-4 py-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 mt-3 transition-all z-10 flex flex-col gap-2.5">
                                <div className="absolute top-0 right-5 h-3 w-3 -translate-y-1/4 bg-[inherit] rotate-45"></div>
                                <li className="flex gap-2.5">
                                    <div className="flex-shrink-0">
                                        <Image src="/coin-usdc.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                                    </div>
                                    <p className="text-sm font-medium text-left text-[#f6f9f3]">USD</p>
                                </li>
                                <li className="flex gap-2.5">
                                    <div className="flex-shrink-0">
                                        <Image src="/coin-eth.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                                    </div>
                                    <p className="text-sm font-medium text-left text-[#f6f9f3]">ETH</p>
                                </li>
                                <li className="flex gap-2.5">
                                    <div className="flex-shrink-0">
                                        <Image src="/coin-bit.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                                    </div>
                                    <p className="text-sm font-medium text-left text-[#f6f9f3]">BTC</p>
                                </li>
                                <li className="flex gap-2.5">
                                    <div className="flex-shrink-0">
                                        <Image src="/coin-usdc.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                                    </div>
                                    <p className="text-sm font-medium text-left text-[#f6f9f3]">USDC</p>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-tl from-[#00ADEF] to-[#8AC640] p-px rounded-lg cursor-pointer hover:from-[#8ac640] hover:to-[#00adef] group shrink-0">
                            <div className="relative flex items-center justify-center gap-3 px-3 rounded-lg h-9 sm:h-11 bg-body sm:px-4">
                                <Image src="/currency-logo.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} className='w-4 h-4 sm:h-6 sm:w-6' />

                                <div className="h-6 w-0.5 bg-[#171F10] hidden sm:block"></div>

                                <svg
                                    width={25}
                                    height={24}
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="relative hidden w-6 h-6 sm:block"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <g clipPath="url(#clip0_322_731)">
                                        <path
                                            d="M12.8789 3C12.0539 3 11.3789 3.675 11.3789 4.5C11.3789 5.325 12.0539 6 12.8789 6C13.7039 6 14.3789 5.325 14.3789 4.5C14.3789 3.675 13.7039 3 12.8789 3ZM12.8789 18C12.0539 18 11.3789 18.675 11.3789 19.5C11.3789 20.325 12.0539 21 12.8789 21C13.7039 21 14.3789 20.325 14.3789 19.5C14.3789 18.675 13.7039 18 12.8789 18ZM12.8789 10.5C12.0539 10.5 11.3789 11.175 11.3789 12C11.3789 12.825 12.0539 13.5 12.8789 13.5C13.7039 13.5 14.3789 12.825 14.3789 12C14.3789 11.175 13.7039 10.5 12.8789 10.5Z"
                                            fill="#D8DBD5"
                                        />
                                    </g>
                                </svg>

                                <ul className="absolute right-0 top-full w-[266px] rounded-xl bg-[#151B10] p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 mt-3 transition-all z-10">
                                    <div className="absolute top-0 right-5 h-3 w-3 -translate-y-1/4 bg-[inherit] rotate-45"></div>
                                    <p className="text-[#f6f9f3]">
                                        Networks
                                    </p>
                                    <li className="flex flex-col gap-2 py-2 border-b border-[#69765D]/20">
                                        <div className="flex justify-between items-center px-2 group/link hover:bg-[#12160E]">
                                            <div className="relative flex items-center justify-start gap-2">
                                                <Image src="/currency-logo.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                                                <p className="flex-grow w-[67px] text-base font-medium text-left text-[#D8DBD5] group-hover/link:text-[#f6f9f3]">Arbitrum</p>
                                            </div>

                                            <span className="ml-auto">
                                                <div className="h-2 w-2 rounded-3xl bg-gradient-to-r from-[#8AC640] to-[#00ADEF] opacity-0 invisible group-hover/link:opacity-100 group-hover/link:visible"></div>
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center px-2 group/link hover:bg-[#12160E]">
                                            <div className="relative flex items-center justify-start gap-2">
                                                <Image src="/currency-logo-2.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                                                <p className="flex-grow w-[67px] text-base font-medium text-left text-[#D8DBD5] group-hover/link:text-[#f6f9f3]">Avalanche</p>
                                            </div>

                                            <span className="ml-auto">
                                                <div className="h-2 w-2 rounded-3xl bg-gradient-to-r from-[#8AC640] to-[#00ADEF] opacity-0 invisible group-hover/link:opacity-100 group-hover/link:visible"></div>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center px-2 py-2 group/link hover:bg-[#12160E] border-b border-[#69765D]/20 relative group/inner">
                                        <p className="text-[#d8dbd5]">Language</p>
                                        <div className="absolute top-0 flex flex-col px-3 py-2 left-full bg-[#151B10] w-[170px] opacity-0 invisible group-hover/inner:opacity-100 group-hover/inner:visible">
                                            <p className="text-sm text-left text-[#f6f9f3] py-2">English</p>
                                            <span className="block bg-[#69765D]/20 h-px w-full"></span>
                                            <p className="text-sm text-left text-[#f6f9f3] py-2">Italiano</p>
                                            <span className="block bg-[#69765D]/20 h-px w-full"></span>
                                            <p className="text-sm text-left text-[#f6f9f3] py-2">Espanol</p>
                                        </div>
                                    </li>
                                    <li className="flex justify-between items-center px-2 py-1 group/link hover:bg-[#12160E]">
                                        <p className="text-[#d8dbd5]">Dark Mode</p>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-5 h-5 rounded-full cursor-pointer" onClick={darkModeToggle}>
                                                {darkMode ?
                                                    <svg
                                                        width={13}
                                                        height={14}
                                                        viewBox="0 0 13 14"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        preserveAspectRatio="xMidYMid meet"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M1.68462 8.11921L1.68477 8.11998C2.11922 10.3646 3.97649 12.1571 6.2377 12.52L6.23994 12.5203C7.91643 12.7923 9.47392 12.3272 10.6517 11.3967C6.73405 9.99755 4.36405 5.83586 5.26705 1.72407C2.76796 2.62421 1.12703 5.24692 1.68462 8.11921ZM5.78987 0.127084C2.11431 0.85823 -0.457051 4.44551 0.307996 8.38649C0.854904 11.2122 3.17576 13.4489 6.0155 13.9047C8.48437 14.305 10.7592 13.4143 12.2812 11.8002C12.2884 11.7925 12.2955 11.785 12.3026 11.7773C12.402 11.671 12.4982 11.5616 12.5909 11.4492C12.5927 11.447 12.5945 11.4448 12.5963 11.4426C12.7153 11.2981 12.8286 11.1487 12.936 10.9948C13.0832 10.7775 12.964 10.4689 12.7046 10.4409C12.4531 10.4125 12.2069 10.3713 11.9662 10.3183C11.9518 10.315 11.9373 10.3118 11.9229 10.3085C11.8615 10.2946 11.8003 10.2798 11.7396 10.2642L11.7357 10.2632C7.90395 9.28019 5.59134 5.22421 6.80368 1.40575C6.80417 1.40432 6.80459 1.40291 6.80508 1.40149C6.82703 1.33239 6.85017 1.26336 6.8745 1.19442C6.87541 1.19185 6.87632 1.18927 6.87723 1.18669C6.95976 0.953525 7.05568 0.721496 7.16541 0.491346C7.2776 0.25295 7.08127 -0.0134925 6.81483 0.000530796C6.62222 0.0101648 6.43192 0.0274764 6.24408 0.0521574C6.241 0.0525711 6.23784 0.0529848 6.23476 0.0533985C6.09347 0.0721616 5.95359 0.0950967 5.81532 0.122078C5.80683 0.123732 5.79835 0.125401 5.78987 0.127084Z"
                                                            fill="white"
                                                        />
                                                    </svg> :
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        preserveAspectRatio="none"
                                                    >
                                                        <path
                                                            d="M8 4.36364C5.99273 4.36364 4.36364 5.99273 4.36364 8C4.36364 10.0073 5.99273 11.6364 8 11.6364C10.0073 11.6364 11.6364 10.0073 11.6364 8C11.6364 5.99273 10.0073 4.36364 8 4.36364ZM0.727273 8.72727H2.18182C2.58182 8.72727 2.90909 8.4 2.90909 8C2.90909 7.6 2.58182 7.27273 2.18182 7.27273H0.727273C0.327273 7.27273 0 7.6 0 8C0 8.4 0.327273 8.72727 0.727273 8.72727ZM13.8182 8.72727H15.2727C15.6727 8.72727 16 8.4 16 8C16 7.6 15.6727 7.27273 15.2727 7.27273H13.8182C13.4182 7.27273 13.0909 7.6 13.0909 8C13.0909 8.4 13.4182 8.72727 13.8182 8.72727ZM7.27273 0.727273V2.18182C7.27273 2.58182 7.6 2.90909 8 2.90909C8.4 2.90909 8.72727 2.58182 8.72727 2.18182V0.727273C8.72727 0.327273 8.4 0 8 0C7.6 0 7.27273 0.327273 7.27273 0.727273ZM7.27273 13.8182V15.2727C7.27273 15.6727 7.6 16 8 16C8.4 16 8.72727 15.6727 8.72727 15.2727V13.8182C8.72727 13.4182 8.4 13.0909 8 13.0909C7.6 13.0909 7.27273 13.4182 7.27273 13.8182ZM3.62909 2.60364C3.34545 2.32 2.88 2.32 2.60364 2.60364C2.32 2.88727 2.32 3.35273 2.60364 3.62909L3.37455 4.4C3.65818 4.68364 4.12364 4.68364 4.4 4.4C4.67636 4.11636 4.68364 3.65091 4.4 3.37455L3.62909 2.60364ZM12.6255 11.6C12.3418 11.3164 11.8764 11.3164 11.6 11.6C11.3164 11.8836 11.3164 12.3491 11.6 12.6255L12.3709 13.3964C12.6545 13.68 13.12 13.68 13.3964 13.3964C13.68 13.1127 13.68 12.6473 13.3964 12.3709L12.6255 11.6ZM13.3964 3.62909C13.68 3.34545 13.68 2.88 13.3964 2.60364C13.1127 2.32 12.6473 2.32 12.3709 2.60364L11.6 3.37455C11.3164 3.65818 11.3164 4.12364 11.6 4.4C11.8836 4.67636 12.3491 4.68364 12.6255 4.4L13.3964 3.62909ZM4.4 12.6255C4.68364 12.3418 4.68364 11.8764 4.4 11.6C4.11636 11.3164 3.65091 11.3164 3.37455 11.6L2.60364 12.3709C2.32 12.6545 2.32 13.12 2.60364 13.3964C2.88727 13.6727 3.35273 13.68 3.62909 13.3964L4.4 12.6255V12.6255Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                }
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='shrink-0'>
                            <div className="flex justify-center items-center self-stretch relative gap-1.5 px-2 sm:px-5 py-1 sm:py-2.5 rounded-lg bg-gradient-to-tl from-[#00adef] to-[#8ac640] cursor-pointer hover:from-[#8ac640] hover:to-[#00adef] h-9 sm:h-11">
                                <svg
                                    width={25}
                                    height={16}
                                    viewBox="0 0 25 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-grow-0 flex-shrink-0"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path
                                        d="M5.79507 3.53749C9.70523 -0.281559 16.0526 -0.281559 19.9627 3.53749L20.4335 4.00063C20.6309 4.19044 20.6309 4.50174 20.4335 4.69155L18.8239 6.26321C18.7252 6.36191 18.5657 6.36191 18.467 6.26321L17.8216 5.63302C15.0883 2.96805 10.6695 2.96805 7.93617 5.63302L7.24525 6.30876C7.14654 6.40747 6.9871 6.40747 6.8884 6.30876L5.27878 4.73711C5.08137 4.54729 5.08137 4.236 5.27878 4.04619L5.79507 3.53749ZM23.2959 6.78709L24.7309 8.18412C24.9283 8.37393 24.9283 8.68522 24.7309 8.87504L18.2696 15.1844C18.0722 15.3742 17.7533 15.3742 17.5635 15.1844L12.9776 10.7048C12.9321 10.6593 12.8485 10.6593 12.803 10.7048L8.21709 15.1844C8.01969 15.3742 7.7008 15.3742 7.51098 15.1844L1.02696 8.87504C0.829555 8.68522 0.829555 8.37393 1.02696 8.18412L2.46195 6.78709C2.65936 6.59728 2.97824 6.59728 3.16806 6.78709L7.75395 11.2667C7.7995 11.3122 7.88302 11.3122 7.92857 11.2667L12.5145 6.78709C12.7119 6.59728 13.0308 6.59728 13.2206 6.78709L17.8065 11.2667C17.852 11.3122 17.9355 11.3122 17.9811 11.2667L22.567 6.78709C22.7796 6.59728 23.0985 6.59728 23.2959 6.78709Z"
                                        fill="white"
                                    />
                                </svg>
                                <p className="hidden text-base font-medium text-left text-white sm:inline-block">
                                    Connect Wallet
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 cursor-pointer sm:h-11 sm:w-11 lg:hidden" onClick={() => setToggleNav(!toggleNav)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar