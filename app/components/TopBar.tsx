import Link from 'next/link';
import React from 'react'
import { BiSolidEnvelope } from "react-icons/bi";
import { MdPhone } from "react-icons/md";
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";

export default function TopBar() {
    return (
        <main className='max-w-[1718px] mx-auto 2xl:px-0 px-4 relative top-3'>
            <section className='flex flex-col md:flex-row gap-y-3 md:gap-y-0 md:justify-self-end items-center gap-x-6 xl:gap-x-14 '>
                <div className='flex gap-x-2 items-center'>
                    <BiSolidEnvelope className='text-light-green text-xl' />
                    <Link href="mailto:info@greenlight-digital.co.uk" className='text-sm xl:text-base text-white'>
                        info@greenlight-digital.co.uk
                    </Link>
                </div>
                <div className='flex gap-x-2 items-center'>
                    <MdPhone className='text-light-green text-xl' />
                    <Link href="tel:01234 567 890" className='text-sm xl:text-base text-white'>
                        01234 567 890
                    </Link>
                </div>
                <div className='flex flex-row gap-x-3 items-center'>
                    <Link href="#"><FaFacebookF className='text-light-green text-base xl:text-lg'/></Link>
                    <Link href="#"><FaLinkedinIn className='text-light-green text-lg xl:text-xl'/></Link>
                    <Link href="#"><FaInstagram className='text-light-green text-lg xl:text-xl'/></Link>
                </div>
            </section>
        </main>
    )
}
