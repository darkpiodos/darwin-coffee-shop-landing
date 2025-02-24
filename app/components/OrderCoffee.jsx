import Image from "next/image";
import React from "react";

export const OrderCoffee = () => {
  return (
    <div className="bg-[#eeeff1]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 sm:py-10 md:py-24 max-w-7xl mx-auto ">
        {/* First Column */}

        <div className="flex justify-center items-center relative mt-10 md:mt-0">
          <Image
            src="/assets/coffeeseller.PNG"
            alt="Darwin Coffee Shop Banner"
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>
        {/* Second Column */}
        <div className="flex flex-col justify-center relative">
          <div className="">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Order Your Favorite Coffee
            </h1>
          </div>
          <p className="text-lg mb-6">
            Satisfy your coffee cravings with a click and indulge in the rich
            flavors of your favorite brews.
          </p>
          <div className="w-full flex justify-start group items-center mt-6">
            <button
              type="button"
              className=" w-full sm:w-[50%] md:w-[30%] inline-flex items-center justify-center px-6 py-3 overflow-hidden text-md font-medium text-white bg-black/90 rounded-md shadow-xl transition-transform transform group-hover:scale-105"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
