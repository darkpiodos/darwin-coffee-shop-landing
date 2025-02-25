import React from "react";
import Image from "next/image";

const Card = ({ title, description, imgSrc, seller }) => {
  return (
    <div
      className="md:max-w-xs pt-12 pb-3 mt-32 bg-white border-b border-gray-100 rounded-lg  shadow-lg relative"
      data-aos="zoom-in-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <Image
        className="absolute right-7 md:right-4 top-[-100px] md:top-[-90px]"
        src={imgSrc}
        alt={title}
        width={150}
        height={100}
      />
      <div className="p-5">
        <p className="text-lg text-gray-400 w-full md:max-w-3xl mx-auto">
          {seller}
        </p>
        <h5 className="mb-2 text-xl md:text-3xl font-bold tracking-tight text-gray-900 ">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">{description}</p>
        <div className="w-full flex justify-start  items-center mt-6">
          <button
            type="button"
            className="w-full relative inline-flex items-center justify-center py-3 overflow-hidden text-xl text-black font-bold  rounded-md transition-transform transform group-hover:scale-105 "
          >
            ₱ 39.99
          </button>
          <div className="w-full group">
            <button
              type="button"
              className="w-full relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-sm md:text-md font-medium text-white bg-black/90 rounded-md shadow-xl transition-transform transform group-hover:scale-105"
            >
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BestSeller = () => {
  return (
    <div className=" p-8 sm:py-10 md:py-24">
      <div
        className="grid grid-cols-1 py-10 w-full md:max-w-7xl mx-auto text-center"
        data-aos="fade-down"
        data-aos-delay="20"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Best Selling Coffee
        </h1>

        <p className="text-lg text-gray-400 w-full md:max-w-3xl mx-auto">
          Discover the ultimate favorites that our customers can't get enough
          of, each cup crafted to perfection.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:max-w-7xl mx-auto justify-items-center">
        <Card
          title="Hazelnut"
          description="Elevate your events with our bespoke catering services, to delight your guests."
          imgSrc="/assets/seller1.PNG"
          seller="#1 Best Seller"
        />
        <Card
          title="Mocha"
          description="Indulge in our savory and sweet snack selections, perfect for any time of day."
          imgSrc="/assets/seller2.PNG"
          seller="#2 Best Seller"
        />
        <Card
          title="Caramel"
          description="Treat yourself to our decadent desserts, crafted to satisfy your sweetest cravings."
          imgSrc="/assets/seller3.PNG"
          seller="#3 Best Seller"
        />
      </div>
    </div>
  );
};
