"use client"

import Image from 'next/image';

import logo from "../../public/images/logo.png";

export default function Loading() {
    return (
        <div className='min-h-[60vh] w-full bg-inherit flex flex-col items-center justify-center gap-2 sm:gap-3'>
            <Image src={logo} alt="logo" className='h-16 w-16 rounded-full opacity-50 animate-spin' priority />
            <span className='font-semibold text-lg text-backgrounds md:text-xl animate-pulse font-mono'>Loading page...</span>
        </div>
    )
}