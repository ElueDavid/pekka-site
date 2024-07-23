import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide><img src="/path/to/image1.jpg" alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src="/path/to/image2.jpg" alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src="/path/to/image3.jpg" alt="Slide 3" /></SwiperSlide>
    </Swiper>
  );
};

export default Carousel;

