"use client";
import { FC, CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const SwiperComponent: FC = () => {
  const swiperStyles: CSSProperties = {
    "--swiper-navigation-color": "#ffffff",
    "--swiper-pagination-color": "#ffffff",
    "--swiper-pagination-bottom": "0px",
  } as CSSProperties & Record<string, string>;

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
      style={swiperStyles}
    >
      <SwiperSlide>
        <Image
          src="/img/img-1.jpg"
          width={300}
          height={200}
          layout="responsive"
          alt="Image 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/img/img-2.jpg"
          width={300}
          height={200}
          layout="responsive"
          alt="Image 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/img/img-3.jpg"
          width={300}
          height={200}
          layout="responsive"
          alt="Image 3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/img/img-4.jpg"
          width={300}
          height={200}
          layout="responsive"
          alt="Image 4"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/img/img-5.jpg"
          width={300}
          height={200}
          layout="responsive"
          alt="Image 5"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
