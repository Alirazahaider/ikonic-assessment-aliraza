"use client";
import Link from 'next/link'
import React from 'react'
import { TfiArrowDown } from "react-icons/tfi";
import Image from 'next/image'

export default function Hero() {
    const handleScroll = (id:any) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <main className='max-w-full  bg-purples -mt-40'>
            <section className='grid  grid-cols-1 md:grid-cols-2 max-w-[1920px] mx-auto pb-16'>
                {/* Left Column */}
                <div className='order-last md:order-none pt-16 md:pt-56 lg:pt-64 2xl:pl-[90px] pl-3'>

                    <h1 className='font-extrabold text-4xl lg:text-6xl 2xl:text-[131px] text-white'>Ready To Go</h1>
                    <p className='text-lg lg:text-3xl 2xl:text-[42px] font-bold text-light-green mt-3 lg:mt-6'>Smart and efficient websites</p>
                    <p className='text-base lg:text-lg text-white pt-3 lg:pt-8'>We specialize in building high-quality, template-based websites that save you time, energy, and money without sacrificing design or functionality.</p>
                    <p className='text-white text-lg 2xl:text-xl font-bold pt-3'>Talk to us and we&apos;ll get you up and running!</p>
                    <div className='flex flex-row gap-x-4 md:gap-x-7 mt-7 2xl:mt-12'>
                        <Link href="#" className='bg-light-green rounded-xl border-[5px] border-transparent px-7 font-neue text-sm md:text-base lg:text-[19px] pt-2.5 pb-1.5 md:pt-2 md:pb-1 lg:pt-2.5 lg:pb-1.5 text-[#032727]'>Our Websites</Link>
                        <Link href="#" className='hover:bg-light-green hover:text-[#032727] bg-transparent border-[5px] border-light-green rounded-xl px-9 font-neue text-sm md:text-base lg:text-[19px] pt-2.5 pb-1.5 md:pt-2 md:pb-1 lg:pt-2.5 lg:pb-1.5 text-white'>Talk to us</Link>
                    </div>

                    <div className='flex flex-row gap-x-7 lg:gap-x-14 items-center pt-10 lg:pt-20 2xl:pt-32'>
                        <Link
                            href="#"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent the default anchor behavior
                                handleScroll('our-websites-section');
                            }}
                        >
                            <TfiArrowDown className='text-3xl lg:text-5xl text-white' />
                        </Link>
                        <p className='text-lg lg:text-[22px] font-extrabold text-white'>Affordable options</p>
                    </div>
                </div>

                {/* Right Column */}
                <div className='order-first md:order-none bg-light-purples items-end grid rounded-bl-[200px]  md:rounded-bl-[180px] lg:rounded-bl-[240px] xl:rounded-bl-[300px] 2xl:rounded-bl-[380px] md:ml-12 pb-10 2xl:pb-0 pt-48 md:pt-16 lg:pt-40 '>

                    <Image
                        src='/images/hero-green-light-digital.png'
                        alt='hero-green-light-digital'
                        width={680}
                        height={680}
                        className='w-4/5 md:w-[90%] 2xl:w-[680px] object-contain mx-auto md:mx-0 2xl:pb-10 pl-2'
                    />
                </div>
            </section>
        </main>
    )
}
