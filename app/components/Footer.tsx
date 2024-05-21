import React from 'react';
import logo from '../../public/assests/image/logo.png';
import iconspayment from '../../public/assests/image/iconspayment.png';
import { FaArrowUp } from 'react-icons/fa';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto mt-16 lg:mt-24">
        <div className='lg:flex justify-between flex-wrap gap-8 lg:gap-12'>
          <div className="lg:w-1/3">
            <Image src={logo} alt="" height={35} />
            <p className='pt-4 text-base lg:text-lg text-gray-500 leading-7'>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et
              Dolore Magna Aliqua
            </p>
            <div className='flex gap-4 pt-4 lg:pt-6'>
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>

          <div className="lg:w-1/6">
            <p className='font-bold'>CATALOG</p>
            <p className='text-gray-500 pt-3'>Necklaces</p>
            <p className='text-gray-500 pt-3'>Hoodies</p>
            <p className='text-gray-500 pt-3'>Jewelry Box</p>
            <p className='text-gray-500 pt-3'>T-Shirt</p>
            <p className='text-gray-500 pt-3'>Jacket</p>
          </div>

          <div className="lg:w-1/6">
            <p className='font-bold'>ABOUT US</p>
            <p className='text-gray-500 pt-3'>Our Producers</p>
            <p className='text-gray-500 pt-3'>Sitemap</p>
            <p className='text-gray-500 pt-3'>FAQ</p>
            <p className='text-gray-500 pt-3'>About Us</p>
            <p className='text-gray-500 pt-3'>Terms & Conditions</p>
          </div>

          <div className="lg:w-1/6">
            <p className='font-bold'>CUSTOMER SERVICES</p>
            <p className='text-gray-500 pt-3'>Contact Us</p>
            <p className='text-gray-500 pt-3'>Track Your Order</p>
            <p className='text-gray-500 pt-3'>Product Care & Repair</p>
            <p className='text-gray-500 pt-3'>Book an Appointment</p>
            <p className='text-gray-500 pt-3'>Shipping & Returns</p>
          </div>
        </div>
</div>

<div className='pt-16 lg:pt-24'>
          <div className='bg-[#1E2832] py-4 lg:py-6 flex justify-between flex-wrap pl-8 lg:pl-12 pr-8 lg:pr-12'>
            <p className='text-white'>&copy; 2022 Coral , Inc.</p>
            <Image src={iconspayment} alt="" />
            <p className='text-white flex items-center'>Scroll to top <FaArrowUp className="text-white ml-1 h-5 w-5" /></p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
