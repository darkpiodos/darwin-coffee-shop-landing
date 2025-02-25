"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { RiStarSLine } from "react-icons/ri";
const Card = ({ title, description, imgSrc }) => {
  return (
    <div
      className="group  flex items-center  justify-center mt-10"
      data-aos="zoom-in-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="md:max-w-xs bg-white border border-gray-100 rounded-lg shadow-lg transition-transform transform group-hover:scale-105 transition duration-500 ease-in-out">
        <div className="overflow-hidden h-[230px]">
          <Image
            className="rounded-t-lg w-screen relative"
            src={imgSrc}
            alt={title}
            width={500}
            height={200}
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            {" "}
            <h5 className=" text-xl md:text-xl font-bold tracking-tight text-gray-900 ">
              {title}
            </h5>
            <div className=" flex group items-center text-yellow-500">
              <RiStarSLine size={20} />
              <RiStarSLine size={20} /> <RiStarSLine size={20} />{" "}
              <RiStarSLine size={20} /> <RiStarSLine size={20} />
            </div>
          </div>

          <p className="mb-3 font-normal text-gray-500 text-start text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function SlideFeedback() {
  return (
    <div className=" w-full md:h-[60vh] flex">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper w-full md:max-w-7xl mx-auto md:mt-8 flex"
      >
        <SwiperSlide>
          <Card
            title="Maria Santos"
            description="Darwin Coffee's brews are exceptional! The flavors are rich and aromatic, making every cup a delightful."
            imgSrc="/assets/testimony1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card
            title="Ana Bautista"
            description="The attention to detail in crafting each coffee is evident in every sip. Darwin Coffee never fails to impress."
            imgSrc="/assets/testimony2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Juan Dela Cruz"
            description="I love the smooth and balanced taste of Darwin Coffee. It's become my go-to choice every morning!"
            imgSrc="/assets/testimony3.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Kevin Garcia"
            description="Darwin Coffee has truly transformed my mornings! The delightful aroma of their brews make each cup a moment of pure joy. "
            imgSrc="/assets/testimony4.PNG"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
