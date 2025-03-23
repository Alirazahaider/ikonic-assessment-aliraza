import Image from 'next/image'
import Link from 'next/link'

export default function GetYourWebsite() {
    return (
        <main className='pt-44 max-w-[1920px] mx-auto'>
            <div className='flex flex-col lg:flex-row gap-y-16 lg:gap-y-0 lg:gap-x-16 relative items-center'>
                {/* Left Column */}
                <div className='bg-light-green rounded-[67px] lg:rounded-none lg:rounded-r-[67px] w-full lg:w-[43.48%] h-[450px] xl:h-[600px] 2xl:h-[822px] -ml-0 '>
                    <Image
                        src='/images/phones.png'
                        alt='phones'
                        width={1040}
                        height={1020}
                        className='w-full  lg:w-[45%] 2xl:w-auto h-[600px] lg:h-[950px] 2xl:h-[1020px] object-contain absolute left-0 -top-20 2xl:-top-24 '
                    />
                </div>

                {/* Right Column */}
                <div className='bg-[#F5F5F5] grid items-center rounded-[67px] lg:rounded-none lg:rounded-l-[67px] w-full lg:w-[56.52%] md:h-[822px] relative overflow-hidden pt-10 md:pt-20 xl:pt-24 pb-12 xl:pb-16 pl-8 md:pl-12 xl:pl-20'>
                    <div>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px] font-extrabold text-purples'>Get your website in </h1>
                        <p className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px] font-extrabold text-mid-light-green md:pt-3'>three easy steps</p>
                    </div>
                    <div className='pt-10 '>
                        {/* select */}
                        <div className='flex flex-row gap-x-5 '>
                            <div className='flex flex-col items-center'>
                                <div className='bg-mid-light-green rounded-full md:py-4 md:px-5 w-12 md:w-[78px] h-12 md:h-[78px] grid items-center'>
                                    <Image
                                        src='/images/select.svg'
                                        alt='select'
                                        width={36}
                                        height={42}
                                        className='w-1/2 md:w-auto h-auto object-contain m-auto'
                                    />

                                </div>
                                <hr className='w-[2px] h-8 bg-purples my-3' />
                            </div>
                            <div className='pt-2 '>
                                <h1 className='text-base md:text-xl lg:text-2xl 2xl:text-[29px] text-purples font-extrabold'>Select</h1>
                                <p className='text-sm md:text-[19px] text-dark-green'>From our library of professional-grade templates, </p>
                            </div>
                        </div>
                        {/* customize */}
                        <div className='flex flex-row gap-x-5 '>
                            <div className='flex flex-col items-center'>
                                <div className='bg-mid-light-green rounded-full md:py-4 md:px-5 w-12 md:w-[78px] h-12 md:h-[78px] grid items-center'>
                                    <Image
                                        src='/images/customize.svg'
                                        alt='select'
                                        width={36}
                                        height={42}
                                        className='w-1/2 md:w-auto h-auto object-contain m-auto '
                                    />

                                </div>
                                <hr className='w-[2px] h-8 bg-purples my-3' />
                            </div>
                            <div className='pt-2 '>
                                <h1 className='text-base md:text-xl lg:text-2xl 2xl:text-[29px] text-purples font-extrabold'>Customise</h1>
                                <p className='text-sm md:text-[19px] text-dark-green 2xl:pr-96'>With brand-specific colors, fonts, and images to
                                    make the site uniquely yours.</p>
                            </div>
                        </div>
                        {/* Launch */}
                        <div className='flex flex-row gap-x-5 '>
                            <div className="flex flex-col items-center">
                                <div className="bg-mid-light-green rounded-full md:py-4 md:px-5 w-12 md:w-[78px] h-12 md:h-[78px] grid items-center">
                                    <Image
                                        src="/images/launch.svg"
                                        alt="select"
                                        width={36}
                                        height={42}
                                        className="w-1/2 md:w-auto h-auto object-contain m-auto"
                                    />
                                </div>

                                {/* L Shape pushed to the right */}
                                <div className="relative w-[35px] h-[50px] self-end my-4 left-3 md:left-0 md:right-1">  {/* or use `ml-auto` */}
                                    <div className="absolute top-0 left-0 w-[2px] h-full bg-purples"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-purples"></div>
                                </div>

                                {/* <hr className="w-[2px] h-8 bg-purples my-3" /> */}
                            </div>

                            <div className='pt-2 '>
                                <h1 className='text-base md:text-xl lg:text-2xl 2xl:text-[29px] text-purples font-extrabold'>Launch</h1>
                                <p className='text-sm md:text-[19px] text-dark-green'>A website that’s ready to go live and drive results.</p>
                            </div>
                        </div>
                        <div className='w-fit ml-24 -mt-7'>
                            <Link href="#" className='hover:bg-light-green hover:text-[#032727] bg-transparent border-[5px] border-light-green rounded-xl px-9  text-sm md:text-base lg:text-[19px] pt-2.5 pb-1.5 md:pt-2 md:pb-1 lg:pt-3.5 lg:pb-2.5 text-mine-shaft font-extrabold'>Talk to us</Link>

                        </div>


                        {/* <div className='grid'>
                            <div className='flex flex-row gap-x-5 items-center'>
                                <div className='bg-mid-light-green rounded-full py-4 px-5 w-[78px] h-[78px'>
                                    <Image
                                        src='/images/select.svg'
                                        alt='select'
                                        width={36}
                                        height={42}
                                        className='w-auto h-auto object-contain '
                                    />

                                </div>
                                <div>
                                    <h1 className='text-base md:text-xl lg:text-2xl 2xl:text-[29px] text-purples font-extrabold'>Select</h1>
                                    <p className='text-[19px] text-dark-green'>From our library of professional-grade templates, </p>
                                </div>
                            </div>
                            <hr className='w-[2px] h-8 bg-purples ' />
                        </div>
                         */}
                    </div>
                    <Image
                        src='/images/green-light-digital-logo.png'
                        alt='green-light-digital-logo'
                        width={295}
                        height={395}
                        className='w-1/4 lg:w-1/3 xl:w-1/5 2xl:w-1/4 h-auto absolute -bottom-20 right-0 '
                    />
                </div>
            </div>
        </main>
    )
}
