import Image from 'next/image'
import Link from 'next/link'

export default function FoundersMessage() {
  return (
    <main className='max-w-[1920px] mx-auto pb-44'>
      <div className='max-w-[1724px] mx-auto bg-white rounded-[26px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 2xl:gap-x-0'>
          <div className=''>
            <Image
              src="/images/founder.png"
              alt="founder"
              width={948}
              height={1048}
              className='w-full lg:h-[700px] xl:h-[750px] 2xl:h-[980px] object-contain lg:object-cover rounded-[26px]'
            />
          </div>
          <div className='pt-10 2xl:pt-28 pb-10 lg:pb-0 px-3 md:px-0 md:pr-10 2xl:pr-60'>


            <div className='md:-ml-40 lg:-ml-52 xl:-ml-64 2xl:-ml-80 space-y-3.5 xl:space-y-6'>
              <span className='bg-light-green text-lg xl:text-[23px] text-purples px-6 rounded-[9px]'>
                A message from our founder
              </span>
              <h1 className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-[70px] font-extrabold text-purples 2xl:!leading-[70px]'>
                Greenlight was created to fix the pitfalls I&apos;ve seen over my 20 year career
              </h1>
            </div>


            <div className='space-y-6 pt-3  2xl:pt-10'>
              <p className='text-base xl:text-[19px] text-mine-shaft'>When I started this journey, I had one goal in mind: to simplify the process of building high-quality websites for businesses like yours. I&apos;ve seen too many people overwhelmed by complicated tech, overblown costs, and endless delays—and I knew there had to be a better way.</p>
              <p className='text-base xl:text-[19px] text-mine-shaft'>At Green Light Digital, we believe every business deserves a professional online presence without the stress. That&apos;s why we focus on speed, affordability, and transparency, delivering websites that not only look amazing but are ready to drive results.</p>
              <p className='text-base xl:text-[19px] text-mine-shaft font-bold'>Thank you for trusting us with your vision. We&apos;re excited to help you bring it to life!</p>
            </div>

            <Image
              src="/images/founder-sign.svg"
              alt="founder-sign"
              width={270}
              height={60}
              className='w-52 xl:w-56 2xl:w-64 h-auto object-contain py-5 -ml-4'
            />
            <div className='flex flex-row justify-between items-center'>
              <div>
                <p className='text-base lg:text-[19px] text-mine-shaft font-extrabold'>Daniel Brown</p>
                <p className='text-base lg:text-[19px] text-mine-shaft'>Founder & Director</p>
              </div>
              <Link href="#" className='bg-purples rounded-xl  font-extrabold text-sm border-[5px] border-purples md:text-base lg:text-[19px] text-white px-6 pt-2.5 pb-1.5'>Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
