import Image from "next/image";
import aboutpg1 from "@/app/images/aboutpg1.png";
import aboutpg2 from "@/app/images/aboutpg2.png";
import aboutpg3 from "@/app/images/aboutpg3.png";
import aboutpg4 from "@/app/images/aboutpg4.png";
import { IoPlayOutline } from "react-icons/io5";
import student from '@/app/images/Student.png';
import coffee from '@/app/images/Coffee.png';
import person from '@/app/images/Person.png';
import Navbar from "../menu/header";
import Link from "next/link";
export default function About() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className='w-full signup-bg-image py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
              About Us
            </h1>
            <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
              <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                Home
              </Link>
              <span className='text-white'>/</span>
              <Link href="/menu" className='text-[#FF9F0D]'>
                About
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* 2 Section */}
      <section className="text-white body-font">
  <div className="container mx-auto flex px-5 py-2 flex-wrap md:flex-nowrap">
    
    {/* Left Hero Image */}
    <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
      <Image
        className="object-cover object-center w-[250px] h-[400px] md:w-[336px] md:h-[536px] mt-2 md:mt-0 radius-6px"
        alt="hero"
        src={aboutpg1}
      />
    </div>
    
    {/* Right Images - stacked on smaller devices */}
    <div className="flex flex-col space-y-2 space-x-0 md:space-x-4 mt-2 ml-2">
      <Image
        className="object-cover object-center w-[220px] h-[200px] md:w-[309px] md:h-[271px] radius-6px"
        alt="image2"
        src={aboutpg2}
        width={309}
        height={271}
      />
      <Image
        className="object-cover object-center w-[220px] h-[250px] md:w-[309px] md:h-[382px] radius-6px"
        alt="image3"
        src={aboutpg3}
        width={309}
        height={382}
      />
    </div>
    
    {/* Text Content Section */}
    <div className="pt-8 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="text-lg mb-2 md:text-xl font-bold text-[#FF9F0D]">
        About us
      </h1>
      <p className="text-black title-font text-xl md:text-3xl font-bold">
        Food is an important part of a balanced Diet
      </p>
      <p className="mb-6 leading-relaxed mt-4 text-[#333333] text-sm md:text-base md:leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        diam pellentesque bibendum non dui volutpat fringilla bibendum.
        Urna, elit augue urna, vitae feugiat pretium donec id elementum.
        Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
        velit in consequat.
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {/* Button 1 */}
        <button className="inline-flex text-white bg-[#FF9F0D] border-0 py-2 px-4 focus:outline-none rounded text-lg">
          Show More
        </button>
        {/* Button 2 */}
        <button className="inline-flex text-black bg-white border-0 py-2 px-4 focus:outline-none rounded text-lg">
          <IoPlayOutline className="mr-2 w-5 h-5" />
          Watch Video
        </button>
      </div>
    </div>
    
  </div>
</section>


      {/* 3 Section */}
      <section className="text-white">
        <div className="mx-auto flex px-5 items-center justify-center flex-col">
          <h1 className="text-3xl text-white text-bold mt-3">Why Choose Us</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br />
          pellentesque bibendum non dui volutpat fringilla bibendum.
          <Image
            className="mb-10 object-cover object-center w-1320px h-386px mt-1552px ml-300px mt-10"
            alt="hero"
            src={aboutpg4}
          />
        </div>
      </section>
      {/* 4 section */}
      <section className="relative text-white">
        {/* Content */}
        <div className="relative px-5 py-24 mx-[50px]">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/3 w-1/2 flex flex-col items-center">
              {/* Image */}
              <div className=" w-20 h-20 flex items-center justify-center rounded-md mb-4">
                <Image src={student} alt='' />
              </div>

              {/* Text */}
              <h2 className="font-bold sm:text-xl text-2xl text-black">BEST CHEF</h2>
              <p className="leading-relaxed text-black text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
            </div>

            <div className="p-4 sm:w-1/3 w-1/2 flex flex-col items-center">
              {/* Image */}
              <div className=" w-20 h-20 flex items-center justify-center rounded-md mb-4">
                <Image src={coffee} alt='' />
              </div>

              {/* Text */}
              <h2 className="font-bold sm:text-xl text-2xl text-black">120 Item food</h2>
              <p className="leading-relaxed text-black text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
            </div>

            <div className="p-4 sm:w-1/3 w-1/2 flex flex-col items-center">
              {/* Image */}
              <div className=" w-20 h-20 flex items-center justify-center rounded-md mb-4">
                <Image src={person} alt='' />
              </div>

              {/* Text */}
              <h2 className="font-bold sm:text-xl text-2xl text-black">Clean Environment</h2>
              <p className="leading-relaxed text-black text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}