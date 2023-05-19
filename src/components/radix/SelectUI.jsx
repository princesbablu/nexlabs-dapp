"use client"

import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

import logo from '@/assets/cur-nex-logo.png';


const SelectUI = () => (
    <Select.Root>
        <Select.Trigger
            className="inline-flex items-center justify-center rounded px-[15px] text-lg font-bold leading-none h-[35px] gap-[5px] focus:outline-none"
            aria-label="Food"
        >
            <span><Image src={logo} alt="" /></span>
            <Select.Value placeholder="NEX" />
            <Select.Icon className="text-violet11">
                <ChevronDownIcon />
            </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
            <Select.Content className="overflow-hidden bg-black rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                <Select.ScrollUpButton className="flex items-center justify-center h-[25px] text-violet11 cursor-default">
                    <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport className="p-[5px]">
                    <Select.Group>
                        <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">SELECT NEX</Select.Label>
                        <SelectItem value="nex">NEX 0</SelectItem>
                        <SelectItem value="nex1">NEX 1</SelectItem>
                        <SelectItem value="nex2">NEX 2</SelectItem>
                        <SelectItem value="nex3">NEX 3</SelectItem>
                    </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                    <ChevronDownIcon />
                </Select.ScrollDownButton>
            </Select.Content>
        </Select.Portal>
    </Select.Root>
);

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
    return (
        <Select.Item
            className={classnames(
                'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <CheckIcon />
            </Select.ItemIndicator>
        </Select.Item>
    );
});

export default SelectUI;