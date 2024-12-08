import Image from 'next/image'
import React from 'react'
import hero1 from "@/app/images/hero1.png";
import hero2 from "@/app/images/hero2.png";
import hero3 from "@/app/images/hero3.png";
import hero4 from "@/app/images/hero4.png";
import leaf from "@/app/images/leaf.png";

export default function Hero() {
  return (
    <>
    {/* Hero Content */}
    <section className="bg-black text-[#FFFFFF]">
        <div className="container mx-auto flex items-center justify-between py-12">
          {/* Left Content */}
          <div className="max-w-md">
            <h2 className="text-[#FF9F0D] text-lg font-bold font-Great Vibes">
              It's Quick & Amusing!
            </h2>
            <h1 className="text-5xl font-extrabold text-[#FFFFFF] mt-2 leading-tight">
              <span className="text-[#FF9F0D]">Th</span>e Art of Speed <br /> Food Quality
            </h1>
            <p className="text-[#FFFFFF] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
              pharetra dictum neque massa congue.
            </p>
            <button className="mt-6 px-6 py-2 bg-[#FF9F0D] text-[#FFFFFF]  rounded-full font-semibold hover:bg-[#FF9F0D] transition">
              See Menu
            </button>
          </div>

          {/* Right Content (Hero Image Section) */}
          <div className="relative w-[50%]">
            {/* Main Dish Image */}
            <div className="relative z-10 left-[23%] right-0 w-fit">
              <Image
                src={hero1}
                alt="Main Dish"
                width={410}
                height={410}
                className="rounded-full"
              />
            </div>

            {/* Decorative Leaf */}
            <div className="absolute -right-10 -bottom-[2%] z-0">
              <Image
                src={leaf}
                alt="Decorative Leaf"
                width={300}
                height={300}
                className="opacity-80"
              />
            </div>

            {/* Circular Small Images */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="relative w-[400px] h-[400px] rounded-full border border-[#FFFFFF]">
                <div className="absolute top-0 left-[10%]">
                  <Image
                    src={hero2}
                    alt="Small Image 1"
                    width={70}
                    height={70}
                    className="rounded-full"
                  />
                </div>
                <div className="absolute -left-[7%] top-[30%]">
                  <Image
                    src={hero3}
                    alt="Small Image 2"
                    width={70}
                    height={70}
                    className="rounded-full"
                  />
                </div>
                <div className="absolute bottom-[10%] -left-[0%]">
                  <Image
                    src={hero4}
                    alt="Small Image 3"
                    width={80}
                    height={70}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

