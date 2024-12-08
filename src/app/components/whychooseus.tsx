import React from 'react'
import { TiTick } from "react-icons/ti";
import whychooseus1 from "@/app/images/whychooseus1.png";
import whychooseus2 from "@/app/images/whychooseus2.png";
import whychooseus3 from "@/app/images/whychooseus3.png";
import whychooseus4 from "@/app/images/whychooseus4.png";
import whychooseus5 from "@/app/images/whychooseus5.png";
import whychooseus6 from "@/app/images/whychooseus6.png";
import Image from 'next/image';

export default function WhyChooseUs() {
    return (
        <div className="bg-black border-2 border-red-500 text-[#FFFFFF] h-screen flex items-center justify-center relative">
            <div className="grid grid-cols-1 gap-6">
  {/* First Item */}
  <div className="border-2 border-red-500 w-full h-[300px] flex flex-col justify-between">
    <div className="border-2 border-red-500 w-full h-[300px] flex flex-row justify-between">
      {/* Left Image */}
      <Image
        src={whychooseus1}
        alt="why choose us 1"
        className="h-[300px] w-[400px]"
      />
      {/* Right Image */}
      <Image
        src={whychooseus1}
        alt="why choose us 1"
        className="h-[250px] w-[270px] self-end"
      />
    </div>
  </div>

  {/* Second Item */}
  <div className="border-2 border-red-500 w-full h-[300px] flex flex-col justify-between">
    <div className="border-2 border-red-500 w-full h-[300px] flex flex-row justify-between">
      {/* Left Image */}
      <Image
        src={whychooseus1}
        alt="why choose us 1"
        className="h-[300px] w-[400px]"
      />
      {/* Right Image */}
      <Image
        src={whychooseus1}
        alt="why choose us 1"
        className="h-[250px] w-[270px] self-end"
      />
    </div>
  </div>
</div>


            

            <div className=" border-2 border-red-500 w-[800px] h-[550px] m-6  flex flex-row justify-between">
                <div className=' w-[550px] border-2 border-red-500 p-2'>
                    <p className='text-[#FF9F0D] text-[24px] font-mono '>About us</p>
                    <p className='text-[38px] leading-[38px] font-bold'><span className="text-[#FF9F0D]">We</span> Create  the best foody product</p>
                    <p className='text-base pt-5 leading-6 text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </p>
                    <div className='flex p-1'>
                        <span><TiTick className='text-lg' /></span>
                        <h1 className='text-lg ml-1 leading-7'> Lacus nisi, et ac dapibus sit eu velit in consequat.</h1>
                    </div>
                    <div className='flex p-1'>
                        <span><TiTick className='text-lg' /></span>
                        <h1 className='text-lg ml-1 leading-7'> Lacus nisi, et ac dapibus sit eu velit in consequat.</h1>
                    </div>
                    <div className='flex p-1'>
                        <span><TiTick className='text-lg' /></span>
                        <h1 className='text-lg ml-1 leading-7'> Lacus nisi, et ac dapibus sit eu velit in consequat.</h1>
                    </div>
                    <button className="mt-6 px-6 py-2 bg-[#FF9F0D] text-[#FFFFFF] rounded-full font-semibold hover:bg-[#FF9F0D] transition">
                        Read More
                    </button>
                </div>



            </div>
        </div>

    )
}

