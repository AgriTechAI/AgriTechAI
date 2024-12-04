'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slidersample.css';
import { Autoplay, Navigation } from 'swiper/modules';

export default function Caraousal({ data, imgurl}: { data: object[], imgurl: string }) {

  return (
    <div className='bg-black text-black'>
      <h1>Carousel</h1>
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
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col h-[350px] w-[350px]">
              <div className='h-[80%]'> 
              <img src={imgurl} alt="img" className='h-full' />
              </div>
              <div>
                <div className="text-2xl font-bold">{item.name}</div>
                <div className="text-xl font-bold">{item.description.length > 50 ? item.description.slice(0, 50) + "..." : item.description}</div>
                <div className="text-xl font-bold">${item.price_per_kg}</div>
              </div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}