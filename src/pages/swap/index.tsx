"use client"

import Footer from '~/components/Footer'
import React, { useState } from 'react'

import close from '~/assets/icon-close.png';
import usdc from '~/assets/coin-usdc.png';
import Image from 'next/image';

const Swap = () => {

    const [dialog, setDialog] = useState("1");
    const [swap, setSwap] = useState(false);

    return (
        <>
            <div className="flex items-center justify-center min-h-screen py-20">
                {/* SWAP */}
                <div className={`w-full mx-2 max-w-[432px] bg-gradient-to-tl from-[#00ADEF] to-[#8AC640] p-px rounded-2xl ${dialog === "1" ? '' : 'hidden'}`}>

                    <div className="w-full h-full rounded-2xl bg-[#0b0f07] p-8">
                        <div className="flex flex-col items-start justify-start gap-6 w-full">
                            <div className="relative flex flex-col items-start justify-start gap-4 w-full">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex flex-col justify-start items-start relative gap-[5px]">
                                        <p className="text-xl font-bold text-left text-white ">Swap</p>
                                        <p className="text-xs text-left text-white opacity-70">
                                            Trade Tokens in an Instant
                                        </p>
                                    </div>
                                    <div className="relative flex items-start justify-start gap-2">
                                        <span className="cursor-pointer" onClick={() => setDialog("2")}>
                                            <svg
                                                width={35}
                                                height={35}
                                                viewBox="0 0 35 35"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className=" w-[35px] h-[35px]"
                                                preserveAspectRatio="none"
                                            >
                                                <circle cx="17.5" cy="17.5" r="17.5" fill="#12160E" />
                                                <g clipPath="url(#clip0_86_5798)">
                                                    <path
                                                        d="M18.9071 25H16.0933C15.917 25 15.746 24.9416 15.6087 24.8344C15.4713 24.7271 15.3758 24.5776 15.3381 24.4105L15.0235 22.9975C14.6038 22.8191 14.2058 22.596 13.8369 22.3323L12.4169 22.771C12.2488 22.823 12.0674 22.8177 11.9029 22.7559C11.7384 22.6941 11.6006 22.5795 11.5124 22.4313L10.1024 20.068C10.0152 19.9196 9.98246 19.7469 10.0096 19.5781C10.0367 19.4093 10.122 19.2544 10.2516 19.1388L11.3532 18.1638C11.3031 17.7221 11.3031 17.2764 11.3532 16.8347L10.2516 15.862C10.1218 15.7463 10.0364 15.5913 10.0093 15.4223C9.98215 15.2534 10.015 15.0805 10.1024 14.932L11.5093 12.5672C11.5975 12.419 11.7353 12.3044 11.8998 12.2426C12.0643 12.1808 12.2457 12.1755 12.4138 12.2275L13.8338 12.6662C14.0224 12.5312 14.2188 12.4052 14.4213 12.2912C14.6169 12.1847 14.8179 12.088 15.0235 12.0018L15.3389 10.5902C15.3764 10.4231 15.4717 10.2735 15.6089 10.1662C15.7461 10.0588 15.9171 10.0002 16.0933 10H18.9071C19.0834 10.0002 19.2543 10.0588 19.3915 10.1662C19.5288 10.2735 19.6241 10.4231 19.6616 10.5902L19.9801 12.0025C20.3993 12.182 20.7971 12.405 21.1667 12.6678L22.5875 12.229C22.7555 12.1772 22.9366 12.1826 23.101 12.2444C23.2654 12.3062 23.403 12.4206 23.4911 12.5688L24.898 14.9335C25.0774 15.2388 25.0155 15.625 24.7488 15.8628L23.6473 16.8377C23.6974 17.2794 23.6974 17.7251 23.6473 18.1667L24.7488 19.1418C25.0155 19.3803 25.0774 19.7658 24.898 20.071L23.4911 22.4357C23.403 22.584 23.2652 22.6986 23.1007 22.7604C22.9361 22.8222 22.7548 22.8275 22.5867 22.7755L21.1667 22.3367C20.798 22.6003 20.4003 22.8231 19.9809 23.0012L19.6616 24.4105C19.6239 24.5775 19.5286 24.7269 19.3913 24.8341C19.2541 24.9413 19.0833 24.9999 18.9071 25V25ZM17.4971 14.5C16.6771 14.5 15.8906 14.8161 15.3107 15.3787C14.7308 15.9413 14.4051 16.7044 14.4051 17.5C14.4051 18.2956 14.7308 19.0587 15.3107 19.6213C15.8906 20.1839 16.6771 20.5 17.4971 20.5C18.3172 20.5 19.1037 20.1839 19.6836 19.6213C20.2635 19.0587 20.5892 18.2956 20.5892 17.5C20.5892 16.7044 20.2635 15.9413 19.6836 15.3787C19.1037 14.8161 18.3172 14.5 17.4971 14.5V14.5Z"
                                                        fill="white"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="cursor-pointer" onClick={() => setDialog("3")}>
                                            <svg
                                                width={35}
                                                height={35}
                                                viewBox="0 0 35 35"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className=" w-[35px] h-[35px]"
                                                preserveAspectRatio="none"
                                            >
                                                <circle cx="17.5" cy="17.5" r="17.5" fill="#12160E" />
                                                <g clipPath="url(#clip0_86_5802)">
                                                    <path d="M16.9106 10.0232C18.4248 9.90383 19.9396 10.247 21.2545 11.0074C22.5694 11.7678 23.6225 12.9095 24.2743 14.2815C24.9261 15.6534 25.146 17.191 24.9049 18.6906C24.6637 20.1903 23.9729 21.5814 22.9239 22.6799C21.8748 23.7784 20.517 24.5324 19.03 24.8423C17.543 25.1521 15.9969 25.0032 14.5964 24.4152C13.196 23.8271 12.007 22.8277 11.187 21.5492C10.3669 20.2706 9.9544 18.7732 10.004 17.2551C10.0095 17.0686 10.0888 16.8919 10.2245 16.7639C10.3603 16.6359 10.5413 16.5671 10.7278 16.5726C10.9142 16.578 11.0909 16.6574 11.2189 16.7931C11.3469 16.9288 11.4157 17.1098 11.4103 17.2963C11.3627 18.7334 11.8249 20.1409 12.715 21.2701C13.6051 22.3993 14.8659 23.1774 16.2743 23.4667C17.6827 23.7561 19.1481 23.5381 20.4113 22.8514C21.6745 22.1646 22.6542 21.0533 23.1771 19.7139C23.7001 18.3745 23.7325 16.8934 23.2688 15.5324C22.8051 14.1713 21.875 13.0182 20.6431 12.2767C19.4112 11.5352 17.9568 11.2532 16.5371 11.4806C15.1173 11.708 13.8237 12.43 12.8849 13.5191L12.6937 13.7526H14.4534L14.549 13.7591C14.718 13.7815 14.8731 13.8646 14.9855 13.9928C15.0978 14.121 15.1598 14.2857 15.1598 14.4562C15.1598 14.6267 15.0978 14.7913 14.9855 14.9195C14.8731 15.0478 14.718 15.1308 14.549 15.1532L14.4534 15.1588H11.174L11.0784 15.1532C10.9262 15.1323 10.7851 15.0621 10.6766 14.9534C10.5681 14.8447 10.4981 14.7035 10.4774 14.5513L10.4709 14.4557V10.7057L10.4774 10.611C10.4981 10.4588 10.5681 10.3176 10.6766 10.2089C10.7851 10.1002 10.9262 10.0301 11.0784 10.0091L11.174 10.0035L11.2696 10.0091C11.4218 10.0301 11.5629 10.1002 11.6714 10.2089C11.7799 10.3176 11.8499 10.4588 11.8706 10.611L11.8771 10.7057L11.8762 12.5366C13.1631 11.0754 14.9692 10.1737 16.9106 10.0232V10.0232ZM17.2649 13.7526L17.3606 13.7591C17.5127 13.7801 17.6538 13.8502 17.7624 13.9589C17.8709 14.0676 17.9408 14.2088 17.9615 14.361L17.9681 14.4557V17.4998L19.6087 17.5007L19.7043 17.5073C19.8726 17.5304 20.0268 17.6137 20.1385 17.7418C20.2501 17.8698 20.3116 18.0339 20.3116 18.2038C20.3116 18.3737 20.2501 18.5378 20.1385 18.6659C20.0268 18.7939 19.8726 18.8772 19.7043 18.9004L19.6087 18.9069H17.2649L17.1693 18.9004C17.0173 18.8795 16.8763 18.8095 16.7678 18.701C16.6593 18.5925 16.5892 18.4515 16.5684 18.2994L16.5618 18.2029V14.4557L16.5684 14.361C16.5891 14.2088 16.659 14.0676 16.7675 13.9589C16.876 13.8502 17.0172 13.7801 17.1693 13.7591L17.2649 13.7535V13.7526Z"
                                                        fill="white"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <svg
                                    width="100%"
                                    height={1}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" opacity-10"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <line
                                        opacity="0.1"
                                        x1="0.5"
                                        y1="0.5"
                                        x2="371.5"
                                        y2="0.500032"
                                        stroke="#36432A"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <div className="relative flex flex-col items-start justify-start gap-4 w-full">
                                {/* SWAP 1 */}
                                {swap ?
                                    <div className="px-4 pr-2 flex items-center w-full h-[51px] rounded-lg bg-[#12160e] border border-[#7bc150]/10">
                                        <input type="text" className="w-full text-[13px] font-medium text-[#ecf1f6] bg-transparent outline-none" placeholder="0.0" />
                                    </div> :
                                    <div className="px-4 pr-2 flex items-center w-full h-[51px] rounded-lg bg-[#12160e] border border-[#7bc150]/10">
                                        <input type="text" className="w-full text-[13px] font-medium text-[#ecf1f6] bg-transparent outline-none" placeholder="0.0" />
                                        <div className="flex gap-2 h-6">
                                            <div className="relative flex items-center justify-start gap-2 mr-2">
                                                <Image
                                                    src={usdc}
                                                    alt=""
                                                    className="w-[18px] h-[18px] object-cover"
                                                />
                                                <p className="text-base font-semibold text-left text-white ">
                                                    USDC
                                                </p>
                                            </div>
                                            <svg
                                                width={25}
                                                height={25}
                                                viewBox="0 0 25 25"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="relative w-6 h-6"
                                                preserveAspectRatio="xMidYMid meet"
                                            >
                                                <path
                                                    d="M12.5 16.213L18.51 10.203L17.097 8.78802L12.5 13.388L7.90399 8.78802L6.48999 10.202L12.5 16.213Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                }
                                {/* SWAP 1 */}

                                <div className="relative w-full flex flex-col items-start justify-start gap-4">
                                    <div className="relative h-px w-full my-4">
                                        <svg
                                            width={36}
                                            height={35}
                                            viewBox="0 0 36 35"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35px] h-[35px]"
                                            preserveAspectRatio="xMidYMid meet"
                                            onClick={() => setSwap(!swap)}
                                        >
                                            <circle cx={18} cy="17.5" r="17.5" transform="rotate(90 18 17.5)" fill="#242820" />
                                            <g clipPath="url(#clip0_86_5821)">
                                                <path
                                                    d="M18.4999 14.6438L21.7999 11.3438L25.0999 14.6438L24.1573 15.5865L22.4659 13.8958L22.4666 22.6771L21.1333 22.6771L21.1333 13.8958L19.4426 15.5865L18.4999 14.6438ZM11.8333 20.0438L12.7759 19.1011L14.4666 20.7918L14.4666 12.0105L15.7999 12.0105L15.7999 20.7918L17.4906 19.1011L18.4333 20.0438L15.1333 23.3438L11.8333 20.0438Z"
                                                    fill="#82C449"
                                                />
                                            </g>
                                        </svg>
                                    </div>

                                    <div className="relative w-full flex flex-col items-start justify-start gap-6">
                                        {/* SWAP 2 */}
                                        {swap ?
                                            <div className="px-4 pr-2 flex items-center w-full h-[51px] rounded-lg bg-[#12160e] border border-[#7bc150]/10">
                                                <input type="text" className="w-full text-[13px] font-medium text-[#ecf1f6] bg-transparent outline-none" placeholder="0.0" />
                                                <div className="flex gap-2 h-6">
                                                    <div className="relative flex items-center justify-start gap-2 mr-2">
                                                        <Image
                                                            src={usdc}
                                                            alt=""
                                                            className="w-[18px] h-[18px] object-cover"
                                                        />
                                                        <p className="text-base font-semibold text-left text-white ">
                                                            USDC
                                                        </p>
                                                    </div>
                                                    <svg
                                                        width={25}
                                                        height={25}
                                                        viewBox="0 0 25 25"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="relative w-6 h-6"
                                                        preserveAspectRatio="xMidYMid meet"
                                                    >
                                                        <path
                                                            d="M12.5 16.213L18.51 10.203L17.097 8.78802L12.5 13.388L7.90399 8.78802L6.48999 10.202L12.5 16.213Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                            </div> :
                                            <div className="px-4 pr-2 flex items-center w-full h-[51px] rounded-lg bg-[#12160e] border border-[#7bc150]/10">
                                                <input type="text" className="w-full text-[13px] font-medium text-[#ecf1f6] bg-transparent outline-none" placeholder="0.0" />
                                            </div>
                                        }
                                        {/* SWAP 2 END */}

                                        <div className="flex w-full flex-col justify-start items-start gap-[41px]">
                                            <div className="flex justify-between items-center w-full relative">
                                                <p className="self-stretch  w-[164.39px] h-[19px] text-[13px] font-medium text-left text-[#ecf1f6]">
                                                    Slippage Tolerance
                                                </p>
                                                <p className=" w-16 text-base font-medium text-right text-[#87ee3b]">
                                                    0.5%
                                                </p>
                                            </div>
                                            <div className="flex justify-center items-center  w-full relative gap-2.5 px-[30px] py-[15px] rounded-lg bg-gradient-to-tl from-[#00adef] to-[#8ac640] cursor-pointer">
                                                <p className="text-base font-bold text-left text-white ">
                                                    Connect Wallet
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* SETTINGS */}
                <div className={`w-full max-w-[432px] bg-gradient-to-tl from-[#00ADEF] to-[#8AC640] p-px rounded-2xl ${dialog === "2" ? '' : 'hidden'}`}>
                    <div className="flex flex-col justify-start items-start gap-2.5 px-[26px] py-8 rounded-2xl bg-[#0b0f07]">
                        <div className="flex flex-col justify-center items-start w-full h-[134px] gap-6">
                            <div className="relative flex flex-col items-start self-stretch justify-start gap-3">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex flex-col justify-start items-start  relative gap-[5px]">
                                        <p className="text-lg font-bold text-left text-white ">
                                            Setting
                                        </p>
                                    </div>
                                    <div className="relative flex items-start justify-start gap-2">
                                        <div className=" w-[35px] h-[35px]" onClick={() => setDialog("1")}>
                                            <svg
                                                width={36}
                                                height={35}
                                                viewBox="0 0 36 35"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="absolute left-[-0.5px] top-[-0.5px]"
                                                preserveAspectRatio="xMidYMid meet"
                                            >
                                                <circle cx={18} cy="17.5" r="17.5" fill="#12160E" />
                                            </svg>
                                            <Image
                                                src={close}
                                                alt=""
                                                className="w-6 h-[21.71px] absolute left-[5px] top-[6.14px] object-cover"
                                            />
                                            <div className="w-[15px] h-[15px] absolute left-2.5 top-2.5 overflow-hidden" />
                                        </div>
                                    </div>
                                </div>
                                <svg
                                    width="100%"
                                    height={1}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" opacity-10"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <line
                                        opacity="0.1"
                                        x1={1}
                                        y1="0.5"
                                        x2={367}
                                        y2="0.500032"
                                        stroke="#69765D"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col items-start justify-end gap-6">
                                <div className="flex flex-col items-start justify-start gap-6">
                                    <div className="flex flex-col items-start justify-center gap-4">
                                        <div className="relative flex items-center justify-center gap-2">
                                            <p className=" text-sm text-left text-[#d8dbd5]">
                                                Slippage Tolerance
                                            </p>
                                            <div className="relative flex items-center justify-center gap-3">
                                                <svg
                                                    width={13}
                                                    height={13}
                                                    viewBox="0 0 13 13"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-3 h-3 "
                                                    preserveAspectRatio="xMidYMid meet"
                                                >
                                                    <path
                                                        d="M6.62732 7.30013V7.13213C6.62732 6.58813 6.96332 6.30013 7.29932 6.06813C7.62732 5.84413 7.95532 5.55613 7.95532 5.02813C7.95532 4.29213 7.36332 3.70013 6.62732 3.70013C5.89132 3.70013 5.29932 4.29213 5.29932 5.02813M6.62332 9.21213H6.63132"
                                                        stroke="#949393"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <circle cx="6.5" cy="6.5" r="5.25" stroke="#949393" strokeWidth="1.5" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="relative flex items-center justify-center gap-2">
                                            <div className="flex items-start justify-start gap-2">
                                                <div className="flex justify-center items-center  w-[49px] relative gap-2.5 px-3 py-1.5 rounded bg-[#1f2124] cursor-pointer">
                                                    <p className=" text-xs font-bold text-center text-[#d8dbd5]">
                                                        0.1%
                                                    </p>
                                                </div>
                                                <div className="flex justify-center items-center  w-[49px] relative gap-2.5 px-3 py-1.5 rounded bg-gradient-to-tl from-[#00adef] to-[#8ac640] cursor-pointer">
                                                    <p className="text-xs font-bold text-center text-white ">
                                                        0.5%
                                                    </p>
                                                </div>
                                                <div className="flex justify-center items-center  w-[49px] relative gap-2.5 px-3 py-1.5 rounded bg-[#1f2124] cursor-pointer">
                                                    <p className=" text-xs font-bold text-center text-[#d8dbd5]">
                                                        1.0%
                                                    </p>
                                                </div>
                                                <div className="flex justify-center items-center  w-[49px] relative gap-2.5 px-3 py-1.5 rounded bg-[#1f2124] cursor-pointer">
                                                    <p className=" text-xs font-bold text-center text-[#d8dbd5]">
                                                        0.50
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-xs font-bold text-center text-white ">%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TRANSACTION */}
                <div className={`w-full max-w-[432px] bg-gradient-to-tl from-[#00ADEF] to-[#8AC640] p-px rounded-2xl ${dialog === "3" ? '' : 'hidden'}`}>
                    <div className="flex flex-col justify-start items-start gap-2.5 p-6 rounded-2xl bg-[#0b0f07]">
                        <div className="flex w-full flex-col items-center justify-center gap-12">
                            <div className="relative w-full flex flex-col items-start justify-start gap-4">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex flex-col justify-start items-start relative gap-[5px]">
                                        <p className="text-lg font-bold text-left text-white">
                                            Recent Transaction
                                        </p>
                                    </div>
                                    <div className="relative flex items-start justify-start gap-2">
                                        <div className="w-[35px] h-[35px]" onClick={() => setDialog("1")}>
                                            <svg
                                                width={35}
                                                height={35}
                                                viewBox="0 0 35 35"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="absolute left-[-0.5px] top-[-0.5px]"
                                                preserveAspectRatio="xMidYMid meet"
                                            >
                                                <circle cx="17.5" cy="17.5" r="17.5" fill="#12160E" />
                                            </svg>
                                            <Image
                                                src={close}
                                                alt=""
                                                className="w-6 h-[21.71px] absolute left-[5px] top-[6.14px] object-cover"
                                            />
                                            <div className="w-[15px] h-[15px] absolute left-2.5 top-2.5 overflow-hidden" />
                                        </div>
                                    </div>
                                </div>
                                <svg
                                    width="100%"
                                    height={1}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="opacity-10"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <line
                                        opacity="0.1"
                                        x1="0.5"
                                        y1="0.5"
                                        x2="371.5"
                                        y2="0.500032"
                                        stroke="#69765D"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <div className="flex justify-center items-center w-full relative gap-2.5 px-[30px] py-[15px] rounded-lg bg-gradient-to-tl from-[#00adef] to-[#8ac640] cursor-pointer">
                                <p className="text-base font-bold text-left text-white">
                                    Connect Wallet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Swap