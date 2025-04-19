'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slideData = [
  {
    id: 1,
    text: '테스트1',
    image: '/images/banner1.jpg',
  },
  {
    id: 2,
    text: '테스트2',
    image: '/images/banner2.jpg',
  },
  {
    id: 3,
    text: '테스트3',
    image: '/images/banner3.jpg',
  },
  {
    id: 4,
    text: '테스트4',
    image: '/images/banner4.jpg',
  },
  {
    id: 5,
    text: '테스트5',
    image: '/images/banner5.jpg',
  },
];

export default function BannerSlider() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay, Pagination]);
  return (
    <div className="swiper-container w-full h-64 bg-gray-200">
      <Swiper
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className='relative'
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="flex justify-center items-center">
                <div className="w-full h-48 relative">
                  <Image
                    src={slide.image}
                    alt={`banner-${slide.id}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-2 text-center text-sm font-medium mb-4">{slide.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
