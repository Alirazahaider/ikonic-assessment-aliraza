import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'

export default function FollowUs() {
    return (
        <main className='max-w-[1732px] mx-auto pt-24 lg:pt-56 2xl:px-0 px-3'>
            <div className='flex flex-col md:flex-row justify-between md:items-center gap-y-3 md:gap-y-0'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-[70px] font-extrabold text-purples'>Follow us on social media</h1>
                <div className='flex flex-row gap-x-3 items-center '>
                    <Link href="#" className='bg-purples w-10 md:w-12 lg:w-16 h-10 md:h-12 lg:h-16 rounded-[14px] md:m-auto grid'>
                        <FaFacebookF className='text-light-green text-xl md:text-3xl lg:text-4xl self-center mx-auto' />
                    </Link>
                    <Link href="#" className='bg-purples w-10 md:w-12 lg:w-16 h-10 md:h-12 lg:h-16 rounded-[14px] md:m-auto grid'>
                        <FaLinkedinIn className='text-light-green text-xl md:text-3xl lg:text-5xl self-center mx-auto' />
                    </Link>
                    <Link href="#" className='bg-purples w-10 md:w-12 lg:w-16 h-10 md:h-12 lg:h-16 rounded-[14px] md:m-auto grid'>
                        <FaInstagram className='text-light-green text-xl md:text-3xl lg:text-5xl self-center mx-auto' />
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 justify-between mt-11 gap-2 lg:gap-5'>
                <Image
                    src="/images/social-img-1.png"
                    alt="social-img-1"
                    width={415}
                    height={415}
                    className='w-full h-auto object-cover'
                />
                <Image
                    src="/images/social-img-2.png"
                    alt="social-img-2"
                    width={415}
                    height={415}
                    className='w-full h-auto object-cover'
                />
                <Image
                    src="/images/social-img-3.png"
                    alt="social-img-3"
                    width={415}
                    height={415}
                    className='w-full h-auto object-cover'
                />
                <Image
                    src="/images/social-img-4.png"
                    alt="social-img-4"
                    width={415}
                    height={415}
                    className='w-full h-auto object-cover'
                />
            </div>
        </main>
    )
}
