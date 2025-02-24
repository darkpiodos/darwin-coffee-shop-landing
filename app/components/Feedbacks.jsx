"use client";

import Image from "next/image";
import { RiStarSLine } from "react-icons/ri";
const Card = ({ title, description, imgSrc }) => {
  return (
    <div className="md:max-w-xs bg-white border border-gray-100 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-lg">
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
          <h5 className=" text-xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <div className=" flex group items-center text-yellow-500">
            <RiStarSLine size={20} />
            <RiStarSLine size={20} /> <RiStarSLine size={20} />{" "}
            <RiStarSLine size={20} /> <RiStarSLine size={20} />
          </div>
        </div>

        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export const Feedbacks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:max-w-7xl mx-auto justify-items-center md:mt-20">
      <Card
        title="Maria Santos"
        description="Earwin Coffee's brews are exceptional! The flavors are rich and aromatic, making every cup a delightful experience."
        imgSrc="/assets/testimony1.png"
      />
      <Card
        title="Ana Bautista"
        description="The attention to detail in crafting each coffee is evident in every sip. Darwin Coffee never fails to impress."
        imgSrc="/assets/testimony2.png"
      />
      <Card
        title="Juan Dela Cruz"
        description="Treat yourself to our decadent desserts, crafted to satisfy your sweetest cravings."
        imgSrc="/assets/testimony3.png"
      />
    </div>
  );
};
