import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <main className='max-w-[1920px] mx-auto pt-20 lg:pt-48'>
            <div className='flex flex-row relative h-[800px] lg:h-[984px]'>
                <div className='bg-light-green w-1/5'>

                </div>
                <div className='w-4/5'>
                    <Image
                        src="/images/about-bg.jpg"
                        alt="about-bg"
                        width={1500}
                        height={984}
                        className="w-auto h-full object-right object-cover"
                    />
                </div>
                <div className='bg-white rounded-[43px] pt-10 md:pt-20 lg:pt-24 pl-10 md:pl-20 pr-10 md:pr-20 pb-14 md:pb-20 lg:w-[824px] absolute top-24 lg:top-28 inset-x-4 lg:inset-x-0 lg:left-20'>
                    <h1 className='text-2xl md:text-4xl lg:text-[70px] text-purples lg:!leading-[85px] font-extrabold '>We&apos;re all about simplicity, speed and results</h1>
                    <p className='text-base md:text-[19px] text-mine-shaft pr-10 lg:pr-24 pt-6 lg:pt-3'>Our unique approach combines pre-designed templates with customisation options to match your brand&apos;s unique identity. This means you get a beautifully designed, fully responsive, and optimised website faster than ever, with the confidence that everything is crafted with intention and expertise.<br /><br />
                        We&apos;re not just building websites; we&apos;re powering up your online presence <span className='font-bold'>so you can focus on what you do best.</span></p>
                    <div className='flex flex-row gap-x-5 pt-5 md:pt-16 lg:pt-20'>
                        <Link href="#" className='bg-purples rounded-xl  font-extrabold text-sm border-[5px] border-purples md:text-base lg:text-[19px] text-white px-4 pt-2.5 pb-1.5'>Find Out More</Link>

                        <Link href="#" className='hover:bg-light-green font-extrabold hover:text-[#032727] bg-transparent border-[5px] border-light-green rounded-xl text-sm md:text-base lg:text-[19px]  text-mine-shaft px-7 pt-2.5 pb-1.5'>Talk to us</Link>
                    </div>
                </div>
                {/* <div className='bg-[url(/images/about-bg.jpg)] bg-cover bg-no-repeat bg-center '>
                
                    <div className='bg-white rounded-[43px] pt-24 pl-20 pr-6 pb-20 w-[824px]'>
                        <h1 className='text-[70px] text-purples !leading-[85px]'>We&apos;re all about simplicity, speed and results</h1>
                        <p className='text-[19px] text-mine-shaft'>Our unique approach combines pre-designed templates with customisation options to match your brand&apos;s unique identity. This means you get a beautifully designed, fully responsive, and optimised website faster than ever, with the confidence that everything is crafted with intention and expertise.
                            We&apos;re not just building websites; we&apos;re powering up your online presence<br /> <span className='font-bold'>so you can focus on what you do best.</span></p>
                            <div className='flex flex-row gap-x-5'>
                        <Link href="#" className='bg-purples rounded-xl px-9 font-neue text-sm md:text-base lg:text-[19px] pt-2.5 pb-1.5 md:pt-2 md:pb-1 lg:pt-3.5 lg:pb-2.5 text-white'>Find Out More</Link>

                        <Link href="#" className='hover:bg-light-green hover:text-[#032727] bg-transparent border-[5px] border-light-green rounded-xl px-9 font-neue text-sm md:text-base lg:text-[19px] pt-2.5 pb-1.5 md:pt-2 md:pb-1 lg:pt-3.5 lg:pb-2.5 text-mine-shaft'>Talk to us</Link>
                    </div>
                    </div>
                    
                </div> */}
            </div>
        </main>
    )
}
