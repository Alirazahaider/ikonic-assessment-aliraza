import Image from 'next/image'
import FounderMessage from "@/app/components/FoundersMessage";
export default function WhatToExpect() {
  return (
    <main className='max-w-[1920px] mx-auto bg-purples'>
        <div className='py-24 lg:py-44 pl-10 lg:pl-24'>
            <h1 className='text-base md:text-xl lg:text-2xl 2xl:text-[29px] text-white'>HERE&apos;S WHAT TO EXPECT:</h1>
            <div className='pt-9 space-y-9'>
                <div className='space-y-3 md:space-y-0 flex flex-col lg:flex-row gap-x-11 p-7 items-center rounded-l-[20px] shadow-custom' >
                    <Image src='/images/fast.svg' alt='fast' width={120} height={103}  className='w-[10%] lg:w-auto h-auto mr-auto md:mr-0'/>
                    <div className='md:space-y-2 lg:space-y-5'>
                        <h2 className='text-2xl md:text-3xl lg:text-5xl xl:text-[70px] text-light-green font-extrabold md:!leading-[55px] xl:!leading-[70px]'>Fast Turnarounds</h2>
                        <p className='text-base md:text-xl lg:text-[25px] !leading-8 lg:!leading-10 xl:!leading-normal text-white'>Get your website live in record time without compromising on quality.</p>
                    </div>
                </div>
                <div className='space-y-3 md:space-y-0 flex flex-col lg:flex-row gap-x-11 p-7 items-center rounded-l-[20px] shadow-custom' >
                    <Image src='/images/affordable.svg' alt='fast' width={120} height={103}  className='w-[10%] lg:w-auto h-auto lg:pl-10 mr-auto md:mr-0'/>
                    <div className='md:space-y-2 lg:space-y-5'>
                        <h2 className='text-2xl md:text-3xl lg:text-5xl xl:text-[70px] text-light-green font-extrabold md:!leading-[55px] xl:!leading-[70px]'>Affordable options</h2>
                        <p className='text-base md:text-xl lg:text-[25px] !leading-8 lg:!leading-10 xl:!leading-normal text-white'>High-end designs at prices that won&apos;t break the bank.</p>
                    </div>
                </div>
                <div className='space-y-3 md:space-y-0 flex flex-col lg:flex-row gap-x-11 p-7 items-center rounded-l-[20px] shadow-custom' >
                    <Image src='/images/clear.svg' alt='fast' width={120} height={103}  className='w-[10%] lg:w-auto h-auto mr-auto md:mr-0'/>
                    <div className='md:space-y-2 lg:space-y-5'>
                        <h2 className='text-2xl md:text-3xl lg:text-5xl xl:text-[70px] text-light-green font-extrabold md:!leading-[55px] xl:!leading-[70px]'>Clear and honest deliverables</h2>
                        <p className='text-base md:text-xl lg:text-[25px] !leading-8 lg:!leading-10 xl:!leading-normal text-white'>No jargon, no surprises—just exactly what you need.</p>
                    </div>
                </div>
            </div>
        </div>
        <FounderMessage/>
    </main>
  )
}
