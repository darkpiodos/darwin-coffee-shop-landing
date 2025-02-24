import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#eeeff1]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 sm:py-10 md:py-24 max-w-7xl mx-auto ">
        {/* First Column */}
        <div className="flex flex-col justify-start relative ">
          <div className="">
            <h1 className="text-5xl md:text-8xl font-bold mb-4">
              <Image
                src="/assets/logo/darwincoffee.png"
                alt="Gold Award"
                width={200}
                height={100}
                className="w-[120px] sm:w-[130px] md:w-[140px] lg:w-[180px] h-auto"
              />
            </h1>
          </div>
          <div className="flex flex-row flex-wrap justify-start space-x-8 font-medium mt-3">
            <a href="#cafe-menu" className="text-black/90 hover:underline">
              Cafe Menu
            </a>
            <a href="#about-us" className="text-black/90 hover:underline">
              About Us
            </a>
            <a href="#find-us" className="text-black/90 hover:underline">
              Find Us
            </a>
            <a
              href="#darwin-catering"
              className="text-black/90 hover:underline"
            >
              Darwin Catering
            </a>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col justify-start relative mt-4 md:mt-0">
          <div className="w-full max-w-sm mx-auto  rounded-lg ">
            <h2 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
              Subscribe to our Newsletter
            </h2>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-700 dark:text-white"
                required
              />
              <div className="flex flex-wrap md:flex-nowrap gap-4 w-full justify-end">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center px-8 py-2 text-lg font-medium text-white bg-black/90 rounded-md shadow-lg transition-transform transform group-hover:scale-105 w-full md:w-auto hover:bg-black/85 hover:shadow-xl"
                >
                  Subscribe{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="  max-w-7xl mx-auto ">
        <hr />
        <p className="flex justify-center p-2 md:py-4 text-sm">
          © Copyright {new Date().getFullYear()} Darwin Piodos. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};
