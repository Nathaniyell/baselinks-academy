"use client"
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialCard from './TestimonialCard'; 
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const testimonials = [
  { name: 'John Doe', image: '', testimonial: 'This platform is amazing!', role: "photographer" },
  { name: 'Jane Smith', image: '', testimonial: 'I learned so much from these courses.', role: "developer" },
  { name: 'Sam Wilson', image: '', testimonial: 'Highly recommend to everyone!', role: "programmer" },
];

const Testimonials: React.FC = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <h2 className="text-3xl text-center font-bold mb-6 md:mb-10 text-titles">Testimonials</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
      <aside className="flex gap-6 xs:gap-8 items-center justify-center my-4">
        <div className="space-x-3 shrink-0">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="bg-transparent p-2 rounded-full text-titles hover:bg-titles border hover:text-white border-primary active:scale-105 transition-all duration-300"
          >
            <IoIosArrowRoundBack className="size-7 xs:size-4" />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="bg-transparent p-2 rounded-full text-titles hover:bg-titles border hover:text-white border-primary active:scale-105 transition-all duration-300"
          >
            <IoIosArrowRoundForward className="size-7 xs:size-4" />
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Testimonials;
