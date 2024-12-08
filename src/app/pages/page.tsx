import React from "react";
import Navbar from "../menu/header";
import Link from "next/link";
import Image from "next/image";
import chefpg1 from "@/app/images/chefpg1.png"
import chefpg2 from "@/app/images/chefpg2.png"
import chefpg3 from "@/app/images/chefpg3.png"
import chefpg4 from "@/app/images/chefpg4.png"
import chefpg5 from "@/app/images/chefpg5.png"
import chefpg6 from "@/app/images/chefpg6.png"
import chefpg7 from "@/app/images/chefpg7.png"
import chefpg8 from "@/app/images/chefpg8.png"

export default function Pages(){
  return (
    <>
    <Navbar/>
    <section className='w-full signup-bg-image py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            Our Pages
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link href="/pages" className='text-[#FF9F0D]'>
              Pages
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8">
    <div className="p-6 mt-20 z-0">
      {/* Grid with responsive columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {/* card 1 */}
          <div className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl`}>
            {/* Chef Image */}
            <div className="flex-1">
              <Image src={chefpg1} alt=" " className="w-full h-full object-cover rounded-t-lg"/>
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-black font-bold text-lg">Tahmina Rumi</h3>
              <p className="text-black">Chef</p>
            </div>
          </div>

          {/* card 2 */}
          <div className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl`}>
            {/* Chef Image */}
            <div className="flex-1">
              <Image src={chefpg2} alt=" " className="w-full h-full object-cover rounded-t-lg"/>
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-black font-bold text-lg">Jorina Begum</h3>
              <p className="text-black">Chef</p>
            </div>
          </div>

        {/* card 3 */}
        <div className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl`}>
            {/* Chef Image */}
            <div className="flex-1">
              <Image src={chefpg3} alt=" " className="w-full h-full object-cover rounded-t-lg"/>
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-black font-bold text-lg">M. Mohammad</h3>
              <p className="text-black">Chef</p>
            </div>
          </div>

          {/* card 4 */}
          <div className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl`}>
            {/* Chef Image */}
            <div className="flex-1">
              <Image src={chefpg4} alt=" " className="w-full h-full object-cover rounded-t-lg"/>
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-black font-bold text-lg">Mahmud Kholil</h3>
              <p className="text-black">Chef</p>
            </div>
          </div>

           {/* card 5 */}
           <div className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl`}>
            {/* Chef Image */}
            <div className="flex-1">
              <Image src={chefpg5} alt=" " className="w-full h-full object-cover rounded-t-lg"/>
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-black font-bold text-lg">Tahmina Rumi</h3>
              <p className="text-black">Chef</p>
            </div>
          </div>

          {/* card 6 */}
          <div className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl`}>
            {/* Chef Image */}
            <div className="flex-1">
              <Image src={chefpg6} alt=" " className="w-full h-full object-cover rounded-t-lg"/>
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-black font-bold text-lg">Bisnu Devgon</h3>
              <p className="text-black">Chef</p>
            </div>
          </div>

        {/* card 7 */}
        <div className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl`}>
            {/* Chef Image */}
            <div className="flex-1">
              <Image src={chefpg7} alt=" " className="w-full h-full object-cover rounded-t-lg"/>
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-black font-bold text-lg">Motin Molladst</h3>
              <p className="text-black">Chef</p>
            </div>
          </div>

          {/* card 8 */}
          <div className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl`}>
            {/* Chef Image */}
            <div className="flex-1">
              <Image src={chefpg8} alt=" " className="w-full h-full object-cover rounded-t-lg"/>
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-black font-bold text-lg">William Rumi</h3>
              <p className="text-black">Chef</p>
            </div>
          </div>
          
      </div>
    </div>
    </section>
    </>
  );
};
