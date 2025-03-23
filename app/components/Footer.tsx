import Link from 'next/link'
import React from 'react'
import { BiSolidEnvelope } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { MdPhone } from 'react-icons/md'
import Image from 'next/image'

const navigation = [
    { name: "Our Websites", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Giving Back", href: "#" },
    { name: "Reviews", href: "#" },
    { name: "Talk to us", href: "#" },
];

export default function Footer() {
    return (
        <main className='bg-dark-green mt-44 pt-16 md:pt-24 overflow-hidden max-w-[1920px] mx-auto'>
            <div className='flex flex-col lg:flex-row gap-x-20 2xl:gap-x-28 gap-y-10 lg:gap-y-0'>
                <div className='w-full lg:w-[33%] pl-4 2xl:pl-24'>
                    <h1 className='text-light-green text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px] font-extrabold'>Let&apos;s</h1>
                    <p className='text-base lg:text-[19px] text-white pt-5'>If you have any questions or would like to get started, get in touch using our form and a member of our team will be in touch as soon as possible.
                    </p>
                    <p className='text-base lg:text-[19px] text-white pt-3'> Alternatively, you can reach us via:</p>
                    <div className='gap-y-3 items-center mt-5 space-y-3'>
                        <div className='flex gap-x-2 items-center'>
                            <BiSolidEnvelope className='text-light-green text-xl' />
                            <Link href="mailto:info@greenlight-digital.co.uk" className='text-base lg:text-[19px] text-white'>
                                info@greenlight-digital.co.uk
                            </Link>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                            <MdPhone className='text-light-green text-xl' />
                            <Link href="tel:01234 567 890" className='text-base lg:text-[19px] text-white'>
                                01234 567 890
                            </Link>
                        </div>
                        <div className='flex flex-row gap-x-3 items-center'>
                            <Link href="#"><FaFacebookF className='text-light-green text-base xl:text-lg' /></Link>
                            <Link href="#"><FaLinkedinIn className='text-light-green text-lg xl:text-xl' /></Link>
                            <Link href="#"><FaInstagram className='text-light-green text-lg xl:text-xl' /></Link>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[67%] rounded-l-[67px] border-[11px] border-light-green p-10 xl:p-16 -mr-5'>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 xl:gap-x-16 h-full gap-y-5 md:gap-y-0">
                        {/* Left Column */}
                        <div className="space-y-4">
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-base lg:text-[19px] text-white"
                                >
                                    Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="h-12 block w-full rounded-md px-3 text-white outline-none border-[2px] border-light-green bg-transparent"
                                />
                            </div>
                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-base lg:text-[19px] text-white"
                                >
                                    Email
                                </label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="h-12 block w-full rounded-md px-3 text-white outline-none border-[2px] border-light-green bg-transparent"
                                />
                            </div>
                            {/* Telephone Field */}
                            <div>
                                <label
                                    htmlFor="telephone"
                                    className="block text-base lg:text-[19px] text-white"
                                >
                                    Telephone
                                </label>
                                <input
                                    required
                                    type="tel"
                                    id="telephone"
                                    name="telephone"
                                    className="h-12 block w-full rounded-md px-3 text-white outline-none border-[2px] border-light-green bg-transparent"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col h-full">
                            {/* Message Field */}
                            <div className="flex-1">
                                <label
                                    htmlFor="message"
                                    className="block text-base lg:text-[19px] text-white"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="h-[235px] block w-full rounded-md p-3 text-white outline-none border-[2px] border-light-green bg-transparent"
                                    defaultValue={""}
                                />
                            </div>
                            {/* Submit Button */}
                            <div className="flex justify-end mt-2.5">
                                <button
                                    type="submit"
                                    className="bg-light-green text-[19px] font-extrabold text-dark-green px-9 pt-2.5 pb-2 rounded-[9px] hover:bg-light-green"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between py-20 max-w-[1720px] mx-auto items-center 2xl:px-0 px-5 gap-y-6 lg:gap-y-0'>
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="main_logo"
                        width={373}
                        height={82}
                        className="h-auto w-1/2 2xl:w-[373px] object-cover mx-auto lg:mx-0"
                    />
                </Link>
                <div className='flex flex-col gap-y-6'>
                    <div className='flex flex-wrap lg:flex-nowrap justify-center gap-y-3 lg:gap-y-0 gap-x-6 xl:gap-x-16 2xl:gap-x-28'>
                        {
                            navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-white text-base xl:text-[19px]"
                                >
                                    {item.name}
                                </Link>
                            ))
                        }
                    </div>
                    <div className='flex flex-col md:flex-row gap-y-3 md:gap-y-0 md:justify-self-end items-center gap-x-6 xl:gap-x-14 justify-end'>
                        <div className='flex gap-x-2 items-center'>
                            <BiSolidEnvelope className='text-[#22B674] text-xl' />
                            <Link href="mailto:info@greenlight-digital.co.uk" className='text-sm xl:text-base text-white'>
                                info@greenlight-digital.co.uk
                            </Link>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                            <MdPhone className='text-[#22B674] text-xl' />
                            <Link href="tel:01234 567 890" className='text-sm xl:text-base text-white'>
                                01234 567 890
                            </Link>
                        </div>
                        <div className='flex flex-row gap-x-3 items-center'>
                            <Link href="#"><FaFacebookF className='text-white text-base xl:text-lg' /></Link>
                            <Link href="#"><FaLinkedinIn className='text-white text-lg xl:text-xl' /></Link>
                            <Link href="#"><FaInstagram className='text-white text-lg xl:text-xl' /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#011010] max-w-[1920px] mx-auto py-6'>
                <div className='flex flex-col  md:flex-row justify-between max-w-[1720px] mx-auto px-5 2xl:px-0'>
                    <div className='flex flex-row justify-between md:justify-normal md:gap-x-16'>
                        <Link href="#" className='text-base text-white'>Privacy Policy</Link>
                        <Link href="#" className='text-base text-white'>Terms & Conditions</Link>
                    </div>
                    <p className='text-base text-white text-center md:text-right pt-5 md:pt-0'>
                        Green Light Digital 2024
                    </p>
                </div>
            </div>
        </main>
    )
}
