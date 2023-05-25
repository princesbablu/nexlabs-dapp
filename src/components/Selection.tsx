import Image from 'next/image';
import React, { useState } from 'react'
import logo1 from '~/assets/cur-nex-logo.png';

type Props = {}

const Selection = (props: Props) => {

    const [text, setText] = useState("Nex");
    const [logo, setLogo] = useState(logo1);
    const [down, setDown] = useState(false);

    return (
        <>
            <div className="relative" onClick={() => setDown(!down)}>
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <div>
                        <Image src={logo1} alt="" />
                    </div>
                    <div className="text-lg font-bold text-white">
                        {text}
                    </div>
                    <div>
                        <svg
                            width={13}
                            height={9}
                            viewBox="0 0 13 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M6.21947 8.07652L12.2295 2.06652L10.8165 0.65152L6.21947 5.25152L1.62347 0.65152L0.209473 2.06552L6.21947 8.07652Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
                <div className={`absolute top-full left-0 w-40 p-4 bg-body rounded flex flex-col gap-3 ${down ? '' : 'hidden'}`}>
                    <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => { setText("Nex 2"), setLogo(logo) }}>
                        <div>
                            <Image src={logo} alt="" />
                        </div>
                        <div className="text-lg font-bold text-white">
                            Nex 2
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => { setText("Nex 3"), setLogo(logo) }}>
                        <div>
                            <Image src={logo} alt="" />
                        </div>
                        <div className="text-lg font-bold text-white">
                            Nex 3
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => { setText("Nex 4"), setLogo(logo) }}>
                        <div>
                            <Image src={logo} alt="" />
                        </div>
                        <div className="text-lg font-bold text-white">
                            Nex 4
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => { setText("Nex 5"), setLogo(logo) }}>
                        <div>
                            <Image src={logo} alt="" />
                        </div>
                        <div className="text-lg font-bold text-white">
                            Nex 5
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Selection