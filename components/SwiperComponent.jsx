"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-[80%]"
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Pagination, Navigation, Autoplay]}
      style={{
        "--swiper-navigation-color": "#ffffff",
        "--swiper-pagination-color": "#ffffff",
        "--swiper-pagination-bottom": "0px",
      }}
    >
      <SwiperSlide>
        <Image
          src="/img/img-1.jpg"
          width={300}
          height={200}
          layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/img/img-2.jpg"
          width={300}
          height={200}
          layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/img/img-3.jpg"
          width={300}
          height={200}
          layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/img/img-4.jpg"
          width={300}
          height={200}
          layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/img/img-5.jpg"
          width={300}
          height={200}
          layout="responsive"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
