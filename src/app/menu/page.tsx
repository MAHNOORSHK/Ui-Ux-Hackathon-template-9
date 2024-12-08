import React from 'react'
import Navbar from './header'
import Link from 'next/link'
import { BiCoffee } from 'react-icons/bi'
import Image from 'next/image'
import menupage1 from "@/app/images/menupage1.png";
import menupage2 from "@/app/images/menupage2.png";
import menupage3 from "@/app/images/menupage3.png";
import menupage4 from "@/app/images/menupage4.png";
import Client from '../components/client'

export default function Menu() {
    interface MenuItem {
        name: string
        description: string
        calories: number
        price: number
        highlight?: boolean
      }
      
        const menuItems: MenuItem[] = [
        {
          name: "Alder Grilled Chinook Salmon",
          description: "Toasted French bread topped with romano, cheddar",
          calories: 560,
          price: 32
        },
        {
          name: "Berries and creme tart",
          description: "Gorgonzola, ricotta, mozzarella, taleggio",
          calories: 700,
          price: 43,
          highlight: true
        },
        {
          name: "Tormentoso Bush Pizza Pintoage",
          description: "Ground cumin, avocados, peeled and cubed",
          calories: 1000,
          price: 14
        },
        {
          name: "Spicy Vegan Potato Curry",
          description: "Spreadable cream cheese, crumbled blue cheese",
          calories: 560,
          price: 35
        }
      ]
  return (
    <>
    <Navbar/>
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
            <h1 className='text-[38px] font-bold'>Starter Menu</h1>
          </div>
          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-xl sm:text-2xl font-bold ${item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'}`}>
                    {item.name}
                  </h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm sm:text-[16px] text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="w-full mx-auto  px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-16 flex flex-col lg:flex-row gap-12">
        {/* Menu Content */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex flex-col mb-8">
            <BiCoffee className="ml-2 text-[#FF9F0D]" size={24} />
            <h1 className='text-[38px] font-bold'>Main Course</h1>
          </div>
          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-xl sm:text-2xl font-bold ${item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'}`}>
                    {item.name}
                  </h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm sm:text-[16px] text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
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

    <Client/>

    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-16 flex flex-col lg:flex-row gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-[448px] mb-8 lg:mb-0">
          <Image
            src={menupage3}
            alt="Desserts dish" 
            width={448}
            height={626}
            className="w-full h-auto max-w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Menu Content */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex flex-col mb-8">
            <BiCoffee className="ml-2 text-[#FF9F0D]" size={24} />
            <h1 className='text-[38px] font-bold'>Desserts</h1>
          </div>
          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-xl sm:text-2xl font-bold ${item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'}`}>
                    {item.name}
                  </h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm sm:text-[16px] text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="w-full mx-auto  px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-16 flex flex-col lg:flex-row gap-12">
        {/* Menu Content */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex flex-col mb-8">
            <BiCoffee className="ml-2 text-[#FF9F0D]" size={24} />
            <h1 className='text-[38px] font-bold'>Drinks</h1>
          </div>
          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-xl sm:text-2xl font-bold ${item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'}`}>
                    {item.name}
                  </h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm sm:text-[16px] text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-[448px] mb-8 lg:mb-0">
          <Image
            src={menupage4} 
            alt="Drinks Dish" 
            width={448}
            height={626}
            className="w-full h-auto max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
    </>
  )
}
