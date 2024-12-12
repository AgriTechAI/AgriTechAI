'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { CarousalData } from '@/const/caraousals';
import Image from 'next/image';
import Link from 'next/link'

export default function Caraousal({ title, data, imgurl}: { title: string, data: CarousalData[], imgurl: string }) {

  return (
    <div className='bg-black text-black w-screen px-10'>
      <h1 className='text-white text-center text-4xl my-10'>{title}</h1>
      <Swiper
        slidesPerView={6}
        spaceBetween={50}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 20 },
          1440: { slidesPerView: 6, spaceBetween: 20 },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="w-full h-[45%] mt-[20px] mySwiper"
      >
        {data.map((item: CarousalData, index) => (
          <SwiperSlide className='text-center text-[18px] bg-white min-w-fit pb-2 flex items-center justify-center' key={index}>
            <div className="flex flex-col h-[350px] w-[350px]">
              <div className='h-[80%]'> 
              <Image width={350} height={250} src={imgurl} alt="img" className='h-full w-full block object-cover' />
              </div>
                <Link href = "/product/:id" >
                  <div>
                    <div className="text-2xl font-bold">{item.name}</div>
                    <div className="text-xl font-bold">{item.description.length > 50 ? item.description.slice(0, 50) + "..." : item.description}</div>
                    <div className="text-xl font-bold">${item.price_per_kg}</div>
                  </div>
                </Link>
              </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}