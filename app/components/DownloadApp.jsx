import Image from "next/image";
import React from "react";

export const DownloadApp = () => {
  return (
    <div className="bg-[#eeeff1]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 sm:py-10 md:py-24 max-w-7xl mx-auto ">
        {/* First Column */}

        {/* Second Column */}
        <div
          className="flex flex-col justify-center relative"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <div className="">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Instant Coffee At Your Home{" "}
            </h1>
          </div>
          <p className="text-lg mb-6">
            Enjoy the convenience of premium instant coffee delivered to your
            doorstep, perfect for any time of day
          </p>
          <div className="w-full flex justify-start group items-center mt-6">
            <button
              type="button"
              className=" w-full sm:w-[50%] md:w-[30%] inline-flex items-center justify-center px-6 py-3 overflow-hidden text-md font-medium text-white bg-black/90 rounded-md shadow-xl transition-transform transform group-hover:scale-105"
            >
              Download App
            </button>
          </div>
        </div>
        <div
          className="flex justify-center items-center relative mt-10 md:mt-0"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <Image
            src="/assets/coffeeseller2.png"
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
