import Link from 'next/link'
import Image from 'next/image'

const cards = [
    {
        image: "/images/family-in-action.png",
        title: "Family in Action",
        description: "We donate 1% of our profits to this vital charity, helping families in need.",
    },
    {
        image: "/images/learning-support.png",
        title: "Learning Support",
        description: "We train and employ young adults with disabilities to build confidence, develop web skills, and earn a meaningful income.",
    },
    {
        image: "/images/community-support.png",
        title: "Community support",
        description: "We create free websites for businesses in need, keeping them online and operational during challenging times.",
    }
]

export default function GivingBack() {
    return (
        <main className='max-w-[1722px] mx-auto pt-16 md:pt-32 2xl:pt-52 2xl:px-0 px-3'>
            <div className='flex flex-col md:flex-row  justify-between items-center'>
                <div className='space-y-2.5 md:space-y-5 md:w-[65%]'>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px] font-extrabold text-purples'>Greenlight giving back</h1>
                    <p className='text-base md:text-xl lg:text-[25px] text-purples md:!leading-8'>First and foremost, we are business, but we are also doing our bit to be the good guys! Here&apos;s how we&apos;re supporting the local community.</p>
                </div>
                <div className="md:w-[35%] grid mr-auto md:mr-0 justify-start md:justify-end mt-3.5 md:mt-0">
                    <Link href="#" className=' bg-purples rounded-xl  font-extrabold text-sm border-[5px] border-purples md:text-base lg:text-[19px] text-white px-4 pt-2.5 pb-1.5'>Find Out More</Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-0 gap-x-7 xl:gap-x-16 mt-10'>
                {
                    cards.map((card, index) => (
                        <div key={index} className=''>
                            <Image src={card.image} alt={card.title} width={524} height={368} className='w-auto h-auto rounded-[10px]' />
                            <h2 className='text-base md:text-xl 2xl:text-[25px] font-extrabold text-purples pb-3 pt-5'>{card.title}</h2>
                            <p className='text-base md:text-xl 2xl:text-[25px] text-purples md:!leading-8'>{card.description}</p>
                        </div>
                    ))
                }
            </div>

        </main>
    )
}
