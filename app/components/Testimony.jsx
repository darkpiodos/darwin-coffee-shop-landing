import React from "react";
import Image from "next/image";
import { RiStarSLine } from "react-icons/ri";
import { Feedbacks } from "./Feedbacks";

export const Testimony = () => {
  return (
    <div className=" p-8 sm:py-10 md:py-24">
      <div className="grid grid-cols-1 py-10  w-full md:max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          What Our Clients Say
        </h1>

        <p className="text-lg text-gray-400 w-full md:max-w-3xl mx-auto">
          Hear from our delighted customers and discover why they love our
          exceptional coffee experience.
        </p>
      </div>

      <div className=" py-10 w-full md:max-w-7xl mx-auto text-center flex justify-center items-center ">
        <div className="flex justify-center">
          <div className="relative -ml-3">
            <Image
              className="rounded-full border border-2 border-neutral-100 w-8 md:w-14"
              src="/assets/man1.PNG"
              alt="MAN1"
              width={50}
              height={50}
            />
          </div>
          <div className="relative -ml-3">
            <Image
              className="rounded-full border border-2 border-neutral-100 w-8 md:w-14"
              src="/assets/man2.PNG"
              alt="MAN1"
              width={50}
              height={50}
            />
          </div>
          <div className="relative -ml-3">
            <Image
              className="rounded-full border border-2 border-neutral-100 w-8 md:w-14"
              src="/assets/man3.PNG"
              alt="MAN1"
              width={50}
              height={50}
            />
          </div>
          <div className="relative -ml-3">
            <Image
              className="rounded-full border border-2 border-neutral-100 w-8 md:w-14"
              src="/assets/man4.PNG"
              alt="MAN1"
              width={50}
              height={50}
            />
          </div>
          <div className="relative -ml-3">
            <Image
              className="rounded-full border border-2 border-neutral-100 w-8 md:w-14"
              src="/assets/man5.PNG"
              alt="MAN1"
              width={50}
              height={50}
            />
          </div>
        </div>

        <div className="border-l-2 border-black/60 ml-3 pl-3 md:ml-6 md:pl-6">
          <div className="flex items-center">
            <h1 className="md:text-2xl font-bold mr-2">5.0</h1>{" "}
            <RiStarSLine size={22} className="text-yellow-500" />
          </div>
          <p className="text-xs md:text-sm text-neutral-700 text-start">
            Rated by 1000+ people on Google.
          </p>
        </div>
      </div>
      <Feedbacks />
    </div>
  );
};
