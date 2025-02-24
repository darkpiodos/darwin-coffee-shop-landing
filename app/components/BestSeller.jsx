import React from "react";
import Image from "next/image";

const Card = ({ title, description, imgSrc }) => {
  return (
    <div className="md:max-w-xs pt-24 mt-32 bg-white border-b border-gray-100 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-lg relative">
      <Image
        className="absolute right-4 top-[-90px]"
        src={imgSrc}
        alt={title}
        width={150}
        height={100}
      />
      <div className="p-5">
        <h5 className="mb-2 text-xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="w-full flex justify-start group items-center mt-6">
          <button
            type="button"
            className="w-full md:w-[70%] relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-md font-medium text-white bg-black/90 rounded-md shadow-xl transition-transform transform group-hover:scale-105"
          >
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export const BestSeller = () => {
  return (
    <div className=" p-8 sm:py-10 md:py-24">
      <div className="grid grid-cols-1 py-10 w-full md:max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Best Selling Coffee
        </h1>

        <p className="text-lg text-gray-400 w-full md:max-w-3xl mx-auto">
          Savor the exceptional flavors of our top-rated brews, crafted to
          perfection and loved by all.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:max-w-7xl mx-auto justify-items-center">
        <Card
          title="Hazelnut"
          description="Elevate your events with our bespoke catering services, to delight your guests."
          imgSrc="/assets/seller1.png"
        />
        <Card
          title="Mocha"
          description="Indulge in our savory and sweet snack selections, perfect for any time of day."
          imgSrc="/assets/seller2.png"
        />
        <Card
          title="Caramel"
          description="Treat yourself to our decadent desserts, crafted to satisfy your sweetest cravings."
          imgSrc="/assets/seller3.png"
        />
      </div>
    </div>
  );
};
