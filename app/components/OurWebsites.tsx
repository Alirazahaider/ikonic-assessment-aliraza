"use client";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowLeft,HiArrowRight  } from "react-icons/hi";

const ourWebsites = [
  {
    title: "Cagney’s",
    image: "/images/cagney.png",
    category: "Booking System  |  Hospitality"
  },
  {
    title: "FPC Solutions",
    image: "/images/fpc-solutions.png",
    category: "E-Commerce   |   Industrial "
  },
  {
    title: "Mamma Post Natal",
    image: "/images/mamma.png",
    category: "Brochure  |   Fitness"
  },
  {
    title: "Cagney’s",
    image: "/images/cagney.png",
    category: "Booking System  |  Hospitality"
  },
  {
    title: "FPC Solutions",
    image: "/images/fpc-solutions.png",
    category: "E-Commerce   |   Industrial "
  },
  {
    title: "Cagney’s",
    image: "/images/cagney.png",
    category: "Booking System  |  Hospitality"
  },
];

function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="absolute -top-[22%] md:-top-[37%] xl:-top-[30%] 2xl:-top-[41%] right-[80%] md:right-[56%] xl:right-[60%] 2xl:right-[64%] transform -translate-y-1/2 cursor-pointer"
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
        className="absolute -top-[22%] md:-top-[37%] xl:-top-[30%] 2xl:-top-[41%]  md:left-[35%] xl:left-[33%] 2xl:left-[30.7%] transform -translate-y-1/2 cursor-pointer"
        onClick={onClick}
      >
        <div className="bg-[#89D991] rounded-full w-7 lg:w-10 h-7 lg:h-10 flex items-center justify-center">
          <HiArrowLeft className="text-dark-green text-lg md:text-xl lg:text-2xl" />
        </div>
      </div>
    );
  }


export default function OurWebsites() {
  const slickSettings = {
    slidesToShow: 3,
    dots: false,
    centerMode: true,
    centerpadding: '0px',
    arrows: true,
    padding: '0px',
    margin: '0px',
    autoPlay: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidestoScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className='max-w-[1718px] mx-auto 2xl:px-0 px-3 pt-10 md:pt-20 lg:pt-28 xl:pt-40' id="our-websites-section">
        <div>
            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px] font-extrabold text-purples'>Our Websites</h1>
                <Link href="#" className=' bg-mid-light-green rounded-xl font-extrabold text-xs md:text-base lg:text-[19px] py-3 md:pt-4 md:pb-3 px-3 md:px-8 text-dark-green'>See more websites</Link>
            </div>

            {/* slider */}
            <div className='mt-16 2xl:mt-28'>
                <Slider {...slickSettings}>
                    {ourWebsites.map((item, index) => (
                        <div key={index} className='flex flex-row items-center'>
                            <div className='w-full 2xl:w-[460px] h-auto 2xl:h-[260px]'>
                                <Image src={item.image} alt={item.title} width={500} height={260} />
                            </div>
                            <h2 className='text-base md:text-xl lg:text-2xl 2xl:text-[29px] font-black text-mine-shaft mt-7'>{item.title}</h2>
                            <p className='text-sm text-mine-shaft mt-0 lg:mt-2'>{item.category}</p>
                        </div>
                    ))}
                </Slider>
                </div>
        </div>
    </main>
  );
}
