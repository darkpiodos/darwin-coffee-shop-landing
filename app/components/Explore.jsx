import React from "react";
import Image from "next/image";

const Card = ({ title, description, imgSrc }) => {
  return (
    <div className="md:max-w-xs bg-white border border-gray-100 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-lg">
      <a href="#">
        <Image
          className="rounded-t-lg w-screen"
          src={imgSrc}
          alt={title}
          width={500}
          height={300}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
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

export const Explore = () => {
  return (
    <div className=" p-8 sm:py-10 md:py-24">
      <div className="grid grid-cols-1 py-10  w-full md:max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Explore Our Menu{" "}
        </h1>

        <p className="text-lg text-gray-400 w-full md:max-w-3xl mx-auto">
          Delight in every sip and bite with our carefully curated menu options,
          crafted to perfection.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:max-w-7xl mx-auto justify-items-center md:mt-20">
        <Card
          title="Our Catering"
          description="Elevate your events with our bespoke catering services, to delight your guests."
          imgSrc="/assets/cater2.png"
        />
        <Card
          title="Our Snacks"
          description="Indulge in our savory and sweet snack selections, perfect for any time of day."
          imgSrc="/assets/cater1.png"
        />
        <Card
          title="Our Desserts"
          description="Treat yourself to our decadent desserts, crafted to satisfy your sweetest cravings."
          imgSrc="/assets/cater3.png"
        />
      </div>
    </div>
  );
};
