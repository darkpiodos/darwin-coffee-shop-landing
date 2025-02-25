import Image from "next/image";
import React from "react";
export const Banner = () => {
  return (
    <div className="bg-[#eeeff1]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 sm:py-10 md:py-24 max-w-7xl mx-auto ">
        {/* First Column */}
        <div
          className="flex flex-col justify-center relative order-2 md:order-1"
          data-aos="fade-right"
        >
          <div className="">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-4">
              Darwin's Exquisite Brews
              <Image
                src="/assets/goldaward.PNG"
                alt="Gold Award"
                width={60}
                height={60}
                className="rounded-md inline-flex ml-3 md:ml-5 md:ml-10 h-10 w-10 md:h-24 md:w-24"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              />
            </h1>
          </div>
          <p className="text-lg mb-6">
            Experience the finest flavors of our artisanal coffee, crafted with
            passion and precision. Join us for a journey that delights the
            senses and warms the soul.
          </p>
          <div
            className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 w-full mt-8"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <button
              type="button"
              className="relative inline-flex items-center justify-center px-8 py-2 md:py-4 text-lg font-medium text-white bg-black/90 rounded-full md:rounded-md shadow-lg transition-transform transform group-hover:scale-105 w-full md:w-auto hover:bg-black/85 hover:shadow-xl"
            >
              Download App
            </button>
            <button
              type="button"
              className="relative inline-flex items-center justify-center px-8 py-2 md:py-4 text-lg font-medium text-black bg-white/90 rounded-full md:rounded-md shadow-lg hover:bg-neutral-100 hover:shadow-xl transition-transform transform group-hover:scale-105 w-full md:w-auto "
            >
              Shop Coffee
            </button>
          </div>
        </div>

        {/* Second Column */}
        <div
          className="flex justify-center items-center relative md:mt-10 md:mt-0 order-1 md:order-2"
          data-aos="fade-left"
        >
          <Image
            src="/assets/banner.png"
            alt="Darwin Coffee Shop Banner"
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
