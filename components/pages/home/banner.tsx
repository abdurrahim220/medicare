"use client";

import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

interface BannerProps {
  collections: {
    images: {
      desktop: string;
    };
  }[];
}

export default function Banner({ collections }: BannerProps) {
  return (
    <div className="relative overflow-hidden tf-slideshow slider-effect-fade">
      <Swiper
        dir="ltr"
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={1000}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true, el: ".spd300" }}
        className="tf-sw-slideshow"
      >
        {collections?.length > 0 &&
          collections.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full wrap-slider">
                <Image
                  src={slide.images.desktop}
                  alt={slide.images.desktop}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
     
    </div>
  );
}
