'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slideData = [
  {
    id: 1,
    text: 'Shazam',
    image: '/images/banner1.jpeg',
    link: 'https://www.shazam.com/',
  },
  {
    id: 2,
    text: 'Melon',
    image: '/images/banner2.jpg',
    link: 'https://www.melon.com/',
  },
  {
    id: 3,
    text: 'Youtube Music',
    image: '/images/banner3.png',
    link: 'https://music.youtube.com/',
  },
  {
    id: 4,
    text: 'Spotify',
    image: '/images/banner4.png',
    link: 'https://open.spotify.com/',
  },
  {
    id: 5,
    text: 'Bugs',
    image: '/images/banner5.jpeg',
    link: 'https://music.bugs.co.kr/',
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
            <Link href={slide.link}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition">
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
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
