import Image from 'next/image'
import React from 'react'
import catg1 from "@/app/images/catg1.png";
import catg2 from "@/app/images/catg2.png";
import catg3 from "@/app/images/catg3.png";
import catg4 from "@/app/images/catg4.png";

export default function FoodCategory() {
    return (
        <section className="text-[#FFFFFF] bg-black ">
            <div className="px-5 py-24 mx-auto ">
                <div className="flex flex-col text-center w-full">
                    <h1 className="text-2xl font-medium text-[#FF9F0D]"> Food Category</h1>
                    <p className='text-[38px] font-bold'><span className="text-[#FF9F0D]">Ch</span>oose Food Item</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/4 md:w-1/2 relative">
                        {/* Wrapper for image */}
                        <div className="h-56 relative">
                            {/* The image */}
                            <Image
                                src={catg1}
                                alt="team"
                                className="rounded-lg w-full h-56 object-cover object-center"
                            />

                            {/* Centered text */}
                            <div className="w-[125px] h-[40px] left-[75px] top-[35%] absolute inset-0 flex items-center justify-center rounded-md text-[#FF9F0D] bg-white text-lg font-bold">
                                Save 30%
                            </div>

                            {/* Left-aligned text */}
                            <div className=" w-[200px] h-[46px] absolute  top-[65%] transform -translate-y-1/2 bg-[#FF9F0D] text-white px-3 py-1 rounded-md flex items-center justify-center text-xl font-bold">
                                Fast Food Dish
                            </div>
                        </div>
                    </div>

                    <div className="p-4 lg:w-1/4 md:w-1/2 relative">
                        {/* Wrapper for image */}
                        <div className="h-56 relative">
                            {/* The image */}
                            <Image
                                src={catg2}
                                alt="team"
                                className="rounded-lg w-full h-56 object-cover object-center"
                            />
                        </div>
                    </div>

                    <div className="p-4 lg:w-1/4 md:w-1/2 relative">
                        {/* Wrapper for image */}
                        <div className="h-56 relative">
                            {/* The image */}
                            <Image
                                src={catg3}
                                alt="team"
                                className="rounded-lg w-full h-56 object-cover object-center"
                            />
                        </div>
                    </div>

                    <div className="p-4 lg:w-1/4 md:w-1/2 relative">
                        {/* Wrapper for image */}
                        <div className="h-56 relative">
                            {/* The image */}
                            <Image
                                src={catg4}
                                alt="team"
                                className="rounded-lg w-full h-56 object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

