import React from 'react'
import { TiTick } from "react-icons/ti";
import restu1 from "@/app/images/restu1.png";
import restu2 from "@/app/images/restu2.png";
import restu3 from "@/app/images/restu3.png";
import Image from 'next/image';

export default function AboutUs() {
    return (
        <>
            <div className="bg-black text-[#FFFFFF] h-screen flex items-center justify-center relative">
                <div className="w-[1250px] h-[450px] flex flex-row justify-between">
                    <div className=' w-[590px]'>
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

                    <div className="w-[590px]">
                        {/* First Image in its own Row */}
                        <div className="w-full mb-2">
                            <Image
                                src={restu1}
                                alt="restaurant1"
                               
                                className="w-full h-[300px] object-cover"
                            />
                        </div>

                        {/* Second and Third Image in a row side-by-side */}
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <Image
                                    src={restu2}
                                    alt="restaurant2"
                                    
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <Image
                                    src={restu3}
                                    alt="restaurant3"
                                   
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

