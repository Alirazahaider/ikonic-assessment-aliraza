"use client";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { LiaStarSolid } from "react-icons/lia";

const reviews = [
    {
        review: "Green Light Digital took my website to the next level in record time! The design options were fantastic, and the customization process was so smooth. Now, my site looks polished and professional, and I didn’t have to break the bank. Highly recommend!",
        title: "Alex P, Small Business Owner",
    },
    {
        review: "The Green Light team is incredible! They guided me through every step of the process, from selecting a template to launching my site. I now have a beautiful, functional website that perfectly represents my brand. Couldn’t be happier!",
        title: "Jenna R, Small Business Owner",
    },
    {
        review: "Working with Green Light Digital was the best decision for my business. They made web design easy, fast, and affordable, while still giving me a custom feel. My site is stylish and efficient, and the customer support was outstanding!",
        title: "Ray T, Small Business Owner",
    },
    {
        review: "Green Light Digital took my website to the next level in record time! The design options were fantastic, and the customization process was so smooth. Now, my site looks polished and professional, and I didn’t have to break the bank. Highly recommend!",
        title: "Alex P, Small Business Owner",
    },
];

function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="absolute -top-[16%] md:-top-[22%] lg:-top-[13%] xl:-top-[18%] 2xl:-top-[24%] right-[10%]  md:right-[36%] xl:right-[53%] 2xl:right-[49%] transform -translate-y-1/2 cursor-pointer"
            onClick={onClick}
        >
            <div className="bg-[#89D991] rounded-full w-7 lg:w-10 h-7 lg:h-10 flex items-center justify-center">
                <HiArrowRight className="text-dark-green text-lg md:text-xl lg:text-2xl" />
            </div>
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="absolute -top-[16%] md:-top-[22%] lg:-top-[13%] xl:-top-[18%] 2xl:-top-[24%] left-[73%] md:left-[54%] xl:left-[40%] 2xl:left-[46%] transform -translate-y-1/2 cursor-pointer"
            onClick={onClick}
        >
            <div className="bg-[#89D991] rounded-full w-7 lg:w-10 h-7 lg:h-10 flex items-center justify-center">
                <HiArrowLeft className="text-dark-green text-lg md:text-xl lg:text-2xl" />
            </div>
        </div>
    );
}


export default function ClientSays() {
    const slickSettings = {
        slidesToShow: 3,
        dots: false,
        centerMode: false,
        centerpadding: '0px',
        arrows: true,
        padding: '0px',
        margin: '0px',
        autoPlay: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1, // Fix the typo here
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,

                }
              },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <main className='max-w-[1798px] mx-auto 2xl:px-0 px-3 pt-10 md:pt-20 lg:pt-28 xl:pt-40'>
            <div>
                <div className='max-w-[1718px] md:mx-auto  gap-y-5 md:gap-y-0 flex flex-col md:flex-row self-start md:justify-between md:items-center'>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-[70px] font-extrabold text-purples'>What our clients say</h1>
                    <Link href="#" className=' bg-purples rounded-xl w-fit font-extrabold text-sm border-[5px] border-purples md:text-base lg:text-[19px] text-white px-4 pt-2.5 pb-1.5'>Read More Reviews</Link>
                </div>

                {/* slider */}
                <div className='mt-16' id="client-slider">
                    <Slider {...slickSettings}>
                        {reviews.map((item, index) => (
                            <div key={index} className=' items-center bg-purples rounded-[38px] py-10 md:py-16 px-10 md:px-14 xl:h-[500px] 2xl:h-[402px] 2xl:w-[524px]'>

                                <Image
                                    src="/images/start-rating.svg"
                                    alt="quote"
                                    width={100}
                                    height={42}
                                    className='w-auto h-auto object-contain'
                                />
                                <p className='text-[19px] text-white pt-7 pb-10'>{item.review}</p>
                                <h2 className='text-[19px] text-white'>-{item.title}</h2>

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </main>
    );
}
