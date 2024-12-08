'use client';
import Image from 'next/image';
import blogpage1 from "@/app/images/blogpage1.png";
import blogpage2 from "@/app/images/blogpage2.png";
import blogpage3 from "@/app/images/blogpage3.png";
import blogpage4 from "@/app/images/blogpage4.png";
import recent1 from "@/app/images/recent1.png";
import recent2 from "@/app/images/recent2.png";
import recent3 from "@/app/images/recent3.png";
import { SlCalender } from "react-icons/sl";
import { TiMessages } from "react-icons/ti";
import { PiUserCirclePlus } from "react-icons/pi";
import { FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import Link from 'next/link';
import Navbar from '../menu/header';

export default function BlogPage() {
  return (
    <>
    <Navbar/>
    <section className='w-full signup-bg-image py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            Blog List
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link href="/pages" className='text-[#FF9F0D]'>
              Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
      {/* Blog Page Container */}
      <div className="flex flex-wrap bg-white">

        {/* Left Section */}
        <div className="w-full lg:w-[70%] px-6 py-12 bg-white">
          {/* Blog Post 1 */}
          <div className="mb-12">
            <Image
              src={blogpage1}
              alt="Blog Image 1"
              width={872}
              height={530}
              className="rounded-lg"
            />
            <div className="flex items-center gap-3 mt-3 text-gray-500">
              <SlCalender />
              <TiMessages />
              <PiUserCirclePlus />
            </div>
            <h2 className="font-bold text-2xl text-gray-900 mt-4">
              10 Reasons To Do A Digital Detox Challenge
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </p>
            <button className="w-40 mt-6 py-2 px-4 border border-orange-400 text-orange-400 rounded hover:bg-orange-400 hover:text-white transition ease-in-out duration-300">
              Read More
            </button>
          </div>

          {/* Blog Post 2 */}
          <div className="mb-12">
            <Image
              src={blogpage2}
              alt="Blog Image 2"
              width={872}
              height={530}
              className="rounded-lg"
            />
            <div className="flex items-center gap-3 mt-3 text-gray-500">
              <SlCalender />
              <TiMessages />
              <PiUserCirclePlus />
            </div>
            <h2 className="font-bold text-2xl text-gray-900 mt-4">
              10 Reasons To Do A Digital Detox Challenge
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </p>
            <button className="w-40 mt-6 py-2 px-4 border border-orange-400 text-orange-400 rounded hover:bg-orange-400 hover:text-white transition ease-in-out duration-300">
              Read More
            </button>
          </div>

          {/* Blog Post 3 */}
          <div className="mb-12">
            <Image
              src={blogpage3}
              alt="Blog Image 3"
              width={872}
              height={530}
              className="rounded-lg"
            />
            <div className="flex items-center gap-3 mt-3 text-gray-500">
              <SlCalender />
              <TiMessages />
              <PiUserCirclePlus />
            </div>
            <h2 className="font-bold text-2xl text-gray-900 mt-4">
              The Ultimate Hangover Burger: Egg in a Hole Burger
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </p>
            <button className="w-40 mt-6 py-2 px-4 border border-orange-400 text-orange-400 rounded hover:bg-orange-400 hover:text-white transition ease-in-out duration-300">
              Read More
            </button>
          </div>

          {/* Blog Post 4 */}
          <div className="mb-12">
            <Image
              src={blogpage4}
              alt="Blog Image 4"
              width={872}
              height={530}
              className="rounded-lg"
            />
            <div className="flex items-center gap-3 mt-3 text-gray-500">
              <SlCalender />
              <TiMessages />
              <PiUserCirclePlus />
            </div>
            <h2 className="font-bold text-2xl text-gray-900 mt-4">
              10 Reasons To Do A Digital Detox Challenge
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </p>
            <button className="w-40 mt-6 py-2 px-4 border border-orange-400 text-orange-400 rounded hover:bg-orange-400 hover:text-white transition ease-in-out duration-300">
              Read More
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[30%] px-6 py-12 space-y-8 bg-gray-100">
          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search Your Keyword"
              className="w-full px-4 py-2 border border-gray-300 rounded-l bg-gray-50"
            />

          </div>

          {/* Recent Posts */}
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold text-black">
              Recent Post
            </h2>
            <ul className="text-black  font-medium gap-[14px]">
              <li className="flex gap-[16.5px]">
                <Image src={recent1} alt="Fod" />

                <div className="ml-1">
                  <h2 className="text-[16px] text-black font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[18px] font-normal text-black">
                    Keep Your Business
                  </h3>
                </div>
              </li>

              <li className="flex gap-[16.5px] mt-[14px]">
                <Image src={recent2} alt="Fod" />

                <div className="ml-1">
                  <h2 className="text-[16px] text-black font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[18px] font-normal text-black">
                    Keep Your Business
                  </h3>
                </div>
              </li>

              <li className="flex gap-[16.5px] mt-[14px]">
                <Image src={recent3} alt="Fod" />

                <div className="ml-1">
                  <h2 className="text-[16px] text-black font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[18px] font-normal text-black">
                    Keep Your Business
                  </h3>
                </div>
              </li>
            </ul>
          </div>

          {/* Filter By Menu */}
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold text-black">
              Recent Post
            </h2>
            <ul className="text-black  font-medium gap-[14px]">
              <li className="flex gap-[16.5px]">
                <Image src={recent1} alt="Fod" />

                <div className="ml-1">
                  <h2 className="text-[16px] text-black font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[18px] font-normal text-black">
                    Keep Your Business
                  </h3>
                </div>
              </li>

              <li className="flex gap-[16.5px] mt-[14px]">
                <Image src={recent2} alt="Fod" />

                <div className="ml-1">
                  <h2 className="text-[16px] text-black font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[18px] font-normal text-black">
                    Keep Your Business
                  </h3>
                </div>
              </li>

              <li className="flex gap-[16.5px] mt-[14px]">
                <Image src={recent3} alt="Fod" />

                <div className="ml-1">
                  <h2 className="text-[16px] text-black font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[18px] font-normal text-black">
                    Keep Your Business
                  </h3>
                </div>
              </li>
            </ul>
          </div>

          {/* Promo Section */}
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold text-black">
              Recent Post
            </h2>
            <ul className="text-black  font-medium gap-[14px]">
              <li className="flex gap-[16.5px]">
                <Image src={recent1} alt="Fod" />

                <div className="ml-1">
                  <h2 className="text-[16px] text-black font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[18px] font-normal text-black">
                    Keep Your Business
                  </h3>
                </div>
              </li>

              <li className="flex gap-[16.5px] mt-[14px]">
                <Image src={recent2} alt="Fod" />

                <div className="ml-1">
                  <h2 className="text-[16px] text-black font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[18px] font-normal text-black">
                    Keep Your Business
                  </h3>
                </div>
              </li>

              <li className="flex gap-[16.5px] mt-[14px]">
                <Image src={recent3} alt="Fod" />

                <div className="ml-1">
                  <h2 className="text-[16px] text-black font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[18px] font-normal text-black">
                    Keep Your Business
                  </h3>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex justify-center gap-[14px]">
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaFacebookF/></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaTwitter /></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaInstagram /></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaYoutube /></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaPinterest /></div>
          </div>        
            </div>
        </div>
      </div>
    </>
  );
}
