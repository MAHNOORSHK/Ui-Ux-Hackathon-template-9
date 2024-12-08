import React from 'react'
import Image from 'next/image'
import client1 from "@/app/images/client1.png";
import client2 from "@/app/images/client2.png";
import client3 from "@/app/images/client3.png";
import client4 from "@/app/images/client4.png";

export default function Client() {
    return (
        <section className="relative text-gray-600 client-bg-image">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            {/* Content */}
            <div className="relative px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2 flex flex-col items-center">
                        {/* Image */}
                        <div className=" w-20 h-20 flex items-center justify-center rounded-md mb-4">
                            <Image src={client1} alt='' />
                        </div>

                        {/* Text */}
                        <h2 className="font-bold sm:text-xl text-2xl text-white">Professional Chefs</h2>
                        <p className="leading-relaxed text-gray-300 text-[30px] font-bold">420</p>
                    </div>

                    <div className="p-4 sm:w-1/4 w-1/2 flex flex-col items-center">
                        {/* Image */}
                        <div className=" w-20 h-20 flex items-center justify-center rounded-md mb-4">
                            <Image src={client2} alt='' />
                        </div>

                        {/* Text */}
                        <h2 className="font-bold sm:text-xl text-2xl text-white">items of Food</h2>
                        <p className="leading-relaxed text-gray-300 text-[30px] font-bold">320</p>
                    </div>

                    <div className="p-4 sm:w-1/4 w-1/2 flex flex-col items-center">
                        {/* Image */}
                        <div className=" w-20 h-20 flex items-center justify-center rounded-md mb-4">
                            <Image src={client3} alt='' />
                        </div>

                        {/* Text */}
                        <h2 className="font-bold sm:text-xl text-2xl text-white">Years of Experienced</h2>
                        <p className="leading-relaxed text-gray-300 text-[30px] font-bold">30+</p>
                    </div>

                    <div className="p-4 sm:w-1/4 w-1/2 flex flex-col items-center">
                        {/* Image */}
                        <div className=" w-20 h-20 flex items-center justify-center rounded-md mb-4">
                            <Image src={client4} alt='' />
                        </div>

                        {/* Text */}
                        <h2 className="font-bold sm:text-xl text-2xl text-white">Happy Customers</h2>
                        <p className="leading-relaxed text-gray-300 text-[30px] font-bold">220</p>
                    </div>

                    
                </div>
            </div>
        </section>

    )
}

