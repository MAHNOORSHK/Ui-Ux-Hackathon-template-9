import React from 'react';
import { TiTick } from "react-icons/ti";
import restu1 from "@/app/images/restu1.png";
import restu2 from "@/app/images/restu2.png";
import restu3 from "@/app/images/restu3.png";
import Image from 'next/image';

export default function AboutUs() {
  return (
    <>
      <div className="bg-black text-[#FFFFFF] min-h-screen flex items-center justify-center px-4">
        <div className="max-w-[1250px] flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">
          {/* Left Content */}
          <div className="lg:w-[50%] space-y-4">
            <p className="text-[#FF9F0D] text-[24px] font-mono">
              About us
            </p>
            <p className="text-[28px] md:text-[38px] leading-[38px] font-bold">
              <span className="text-[#FF9F0D]">We</span> Create the best foody product
            </p>
            <p className="text-base pt-5 leading-6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <TiTick className="text-lg mt-1" />
                <p className="text-lg leading-7">
                  Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <TiTick className="text-lg mt-1" />
                <p className="text-lg leading-7">
                  Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <TiTick className="text-lg mt-1" />
                <p className="text-lg leading-7">
                  Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>
              </div>
            </div>
            <button className="mt-6 px-6 py-2 bg-[#FF9F0D] text-[#FFFFFF] rounded-full font-semibold hover:bg-[#FF9F0D] transition">
              Read More
            </button>
          </div>

          {/* Right Content */}
          <div className="lg:w-[50%] space-y-2">
            {/* First Image */}
            <div className="w-full">
              <Image
                src={restu1}
                alt="restaurant1"
                className="w-full h-[200px] md:h-[300px] object-cover rounded-md"
              />
            </div>

            {/* Second and Third Image in a Row */}
            <div className="flex gap-2">
              <div className="flex-1">
                <Image
                  src={restu2}
                  alt="restaurant2"
                  className="w-full h-[100px] md:h-[150px] lg:h-[180px] object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <Image
                  src={restu3}
                  alt="restaurant3"
                  className="w-full h-[100px] md:h-[150px] lg:h-[180px] object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
