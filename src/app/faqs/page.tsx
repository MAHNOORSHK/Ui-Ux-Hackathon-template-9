'use client';
import React, { useState } from 'react';
import Navbar from '../menu/header';
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    // If clicked card is already open, collapse it; otherwise, open it
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      
      {/* Page Header Section */}
      <section className='w-full signup-bg-image py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
              FAQ Page
            </h1>
            <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
              <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                Home
              </Link>
              <span className='text-white'>/</span>
              <Link href="/pages" className='text-[#FF9F0D]'>
                FAQS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="min-h-screen bg-gray-100">
        <main className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Questions Look Here</h2>
          <p className="text-center text-gray-600 mb-12">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>

          {/* Two Columns Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* First Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200">
              <div
                onClick={() => toggleFAQ(0)}
                className="cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-lg font-medium">How do we serve food?</h3>
                <span className="text-2xl">{openIndex === 0 ? '-' : '+'}</span>
              </div>
              {openIndex === 0 && (
                <p className="text-sm text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.
                </p>
              )}
            </div>

            {/* Second Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200">
              <div
                onClick={() => toggleFAQ(1)}
                className="cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-lg font-medium">How is our food quality?</h3>
                <span className="text-2xl">{openIndex === 1 ? '-' : '+'}</span>
              </div>
              {openIndex === 1 && (
                <p className="text-sm text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.
                </p>
              )}
            </div>

            {/* Third Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200">
              <div
                onClick={() => toggleFAQ(2)}
                className="cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-lg font-medium">How do we give home delivery?</h3>
                <span className="text-2xl">{openIndex === 2 ? '-' : '+'}</span>
              </div>
              {openIndex === 2 && (
                <p className="text-sm text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.
                </p>
              )}
            </div>

            {/* Fourth Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200">
              <div
                onClick={() => toggleFAQ(3)}
                className="cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-lg font-medium">How can we get in touch with you?</h3>
                <span className="text-2xl">{openIndex === 3 ? '-' : '+'}</span>
              </div>
              {openIndex === 3 && (
                <p className="text-sm text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.
                </p>
              )}
            </div>

            {/* Fifth Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200">
              <div
                onClick={() => toggleFAQ(4)}
                className="cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-lg font-medium">What will be delivered? And when?</h3>
                <span className="text-2xl">{openIndex === 4 ? '-' : '+'}</span>
              </div>
              {openIndex === 4 && (
                <p className="text-sm text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.
                </p>
              )}
            </div>

            {/* Sixth Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200">
              <div
                onClick={() => toggleFAQ(5)}
                className="cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-lg font-medium">What will be delivered? And when?</h3>
                <span className="text-2xl">{openIndex === 4 ? '-' : '+'}</span>
              </div>
              {openIndex === 5 && (
                <p className="text-sm text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.
                </p>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
