import Image from 'next/image'
import React from 'react'
import chef1 from "@/app/images/chef1.png";
import chef2 from "@/app/images/chef2.png";
import chef3 from "@/app/images/chef3.png";
import chef4 from "@/app/images/chef4.png";

export default function MeetOurChef() {
    return (
        <section className="text-[#FFFFFF] bg-black">
            <div className="px-8 py-24 mx-auto ">
                <div className="flex flex-col text-center w-full ">
                    <h1 className="text-2xl font-medium text-[#FF9F0D]">Chefs</h1>
                    <p className='text-[38px] font-bold'><span className="text-[#FF9F0D]">Me</span>et Our Chef</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/4 md:w-1/2 relative ">
                        {/* Wrapper for image */}
                        <div className="h-[300px] relative">
                            {/* The image */}
                            <Image
                                src={chef1}
                                alt="chef1"
                                className="rounded-lg w-full h-[300px] object-cover object-center"
                            />

                            {/* Left-aligned text */}
                            <div className=" w-[200px] h-[46px] absolute  top-[93%] transform -translate-y-1/2 bg-[#FFFFFF] text-black px-3 py-1 rounded-bl-md flex flex-col items-start justify-center font-bold">
                                <p className='text-[18px]'>D.Estwood</p>
                                <p className='text-[14px]'>Chief Chef</p> 
                            </div>
                        </div>
                    </div>

                    <div className="p-4 lg:w-1/4 md:w-1/2 relative ">
                        {/* Wrapper for image */}
                        <div className="h-[300px] relative">
                            {/* The image */}
                            <Image
                                src={chef2}
                                alt="chef2"
                                className="rounded-lg w-full h-[300px] object-cover object-center"
                            />

                            {/* Left-aligned text */}
                            <div className=" w-[200px] h-[46px] absolute  top-[93%] transform -translate-y-1/2 bg-[#FFFFFF] text-black px-3 py-1 rounded-bl-md flex flex-col items-start justify-center font-bold">
                                <p className='text-[18px]'>D.Scoriesh</p>
                                <p className='text-[14px]'>Assistant Chef</p> 
                            </div>
                        </div>
                    </div>

                    <div className="p-4 lg:w-1/4 md:w-1/2 relative ">
                        {/* Wrapper for image */}
                        <div className="h-[300px] relative">
                            {/* The image */}
                            <Image
                                src={chef3}
                                alt="chef3"
                                className="rounded-lg w-full h-[300px] object-cover object-center"
                            />

                            {/* Left-aligned text */}
                            <div className=" w-[200px] h-[46px] absolute  top-[93%] transform -translate-y-1/2 bg-[#FFFFFF] text-black px-3 py-1 rounded-bl-md flex flex-col items-start justify-center font-bold">
                                <p className='text-[18px]'>M. William</p>
                                <p className='text-[14px]'>Advertising Chef</p> 
                            </div>
                        </div>
                    </div>

                    <div className="p-4 lg:w-1/4 md:w-1/2 relative ">
                        {/* Wrapper for image */}
                        <div className="h-[300px] relative">
                            {/* The image */}
                            <Image
                                src={chef4}
                                alt="chef4"
                                className="rounded-lg w-full h-[300px] object-cover object-center"
                            />

                            {/* Left-aligned text */}
                            <div className=" w-[200px] h-[46px] absolute  top-[93%] transform -translate-y-1/2 bg-[#FFFFFF] text-black px-3 py-1 rounded-bl-md flex flex-col items-start justify-center font-bold">
                                <p className='text-[18px]'>W.Readfroad</p>
                                <p className='text-[14px]'>Chef</p> 
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

