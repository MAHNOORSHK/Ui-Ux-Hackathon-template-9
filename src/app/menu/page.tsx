import React from 'react';
import Navbar from './header';
import Link from 'next/link';
import { BiCoffee } from 'react-icons/bi';
import Image from 'next/image';
import menupage1 from "@/app/images/menupage1.png";
import menupage2 from "@/app/images/menupage2.png";
import menupage3 from "@/app/images/menupage3.png";
import menupage4 from "@/app/images/menupage4.png";
import Client from '../components/client';

export default function Menu() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className='w-full signup-bg-image py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
              Our Menu
            </h1>
            <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
              <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                Home
              </Link>
              <span className='text-white'>/</span>
              <Link href="/menu" className='text-[#FF9F0D]'>
                Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Starters Menu Section */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-16 flex flex-col lg:flex-row gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-[448px] mb-8 lg:mb-0">
            <Image
              src={menupage1}
              alt="Starter dish"
              width={448}
              height={626}
              className="w-full h-auto max-w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Menu Content */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="flex flex-col mb-8">
              <BiCoffee className="ml-2 text-[#FF9F0D]" size={24} />
              <h1 className='text-[38px] font-bold'>Starters</h1>
            </div>
            {/* Manual menu items */}
            <div className="space-y-8">
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Alder Grilled Chinook Salmon</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">32$</span>
                </div>
                <p className="text-gray-600 mb-2">Toasted French bread topped with romano, cheddar</p>
                <p className="text-sm sm:text-[16px] text-gray-500">560 CAL</p>
              </div>
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Berries and Creme Tart</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">43$</span>
                </div>
                <p className="text-gray-600 mb-2">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-sm sm:text-[16px] text-gray-500">700 CAL</p>
              </div>
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Alder Grilled Chinook Salmon</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">32$</span>
                </div>
                <p className="text-gray-600 mb-2">Toasted French bread topped with romano, cheddar</p>
                <p className="text-sm sm:text-[16px] text-gray-500">560 CAL</p>
              </div>
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Berries and Creme Tart</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">43$</span>
                </div>
                <p className="text-gray-600 mb-2">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-sm sm:text-[16px] text-gray-500">700 CAL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Menu Section */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-16 flex flex-col lg:flex-row gap-12">
          {/* Menu Content */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="flex flex-col mb-8">
              <BiCoffee className="ml-2 text-[#FF9F0D]" size={24} />
              <h1 className='text-[38px] font-bold'>Main Course</h1>
            </div>
            {/* Manual menu items */}
            <div className="space-y-8">
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Tormentoso Bush Pizza Pintoage</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">14$</span>
                </div>
                <p className="text-gray-600 mb-2">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-sm sm:text-[16px] text-gray-500">1000 CAL</p>
              </div>
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Spicy Vegan Potato Curry</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">35$</span>
                </div>
                <p className="text-gray-600 mb-2">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-sm sm:text-[16px] text-gray-500">560 CAL</p>
              </div>
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Tormentoso Bush Pizza Pintoage</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">14$</span>
                </div>
                <p className="text-gray-600 mb-2">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-sm sm:text-[16px] text-gray-500">1000 CAL</p>
              </div>
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Spicy Vegan Potato Curry</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">35$</span>
                </div>
                <p className="text-gray-600 mb-2">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-sm sm:text-[16px] text-gray-500">560 CAL</p>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full lg:w-[448px] mb-8 lg:mb-0">
            <Image
              src={menupage2}
              alt="Main Course Dish"
              width={448}
              height={626}
              className="w-full h-auto max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Client Section */}
      <Client />

      
      {/* Drink Menu Section */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-16 flex flex-col lg:flex-row gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-[448px] mb-8 lg:mb-0">
            <Image
              src={menupage1}
              alt="Starter dish"
              width={448}
              height={626}
              className="w-full h-auto max-w-full rounded-lg shadow-lg"
            />
          </div>
          {/* Menu Content */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="flex flex-col mb-8">
              <BiCoffee className="ml-2 text-[#FF9F0D]" size={24} />
              <h1 className='text-[38px] font-bold'>Drinks</h1>
            </div>
            {/* Manual menu items */}
            <div className="space-y-8">
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Alder Grilled Chinook Salmon</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">32$</span>
                </div>
                <p className="text-gray-600 mb-2">Toasted French bread topped with romano, cheddar</p>
                <p className="text-sm sm:text-[16px] text-gray-500">560 CAL</p>
              </div>
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Berries and Creme Tart</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">43$</span>
                </div>
                <p className="text-gray-600 mb-2">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-sm sm:text-[16px] text-gray-500">700 CAL</p>
              </div>
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Alder Grilled Chinook Salmon</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">32$</span>
                </div>
                <p className="text-gray-600 mb-2">Toasted French bread topped with romano, cheddar</p>
                <p className="text-sm sm:text-[16px] text-gray-500">560 CAL</p>
              </div>
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Berries and Creme Tart</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">43$</span>
                </div>
                <p className="text-gray-600 mb-2">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-sm sm:text-[16px] text-gray-500">700 CAL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dessert Menu Section */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-16 flex flex-col lg:flex-row gap-12">
          {/* Menu Content */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="flex flex-col mb-8">
              <BiCoffee className="ml-2 text-[#FF9F0D]" size={24} />
              <h1 className='text-[38px] font-bold'>Dessert</h1>
            </div>
            {/* Manual menu items */}
            <div className="space-y-8">
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Tormentoso Bush Pizza Pintoage</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">14$</span>
                </div>
                <p className="text-gray-600 mb-2">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-sm sm:text-[16px] text-gray-500">1000 CAL</p>
              </div>
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Spicy Vegan Potato Curry</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">35$</span>
                </div>
                <p className="text-gray-600 mb-2">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-sm sm:text-[16px] text-gray-500">560 CAL</p>
              </div>
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Tormentoso Bush Pizza Pintoage</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">14$</span>
                </div>
                <p className="text-gray-600 mb-2">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-sm sm:text-[16px] text-gray-500">1000 CAL</p>
              </div>
              <div className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">Spicy Vegan Potato Curry</h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">35$</span>
                </div>
                <p className="text-gray-600 mb-2">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-sm sm:text-[16px] text-gray-500">560 CAL</p>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full lg:w-[448px] mb-8 lg:mb-0">
            <Image
              src={menupage2}
              alt="Main Course Dish"
              width={448}
              height={626}
              className="w-full h-auto max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      
      
    </>
  );
}
