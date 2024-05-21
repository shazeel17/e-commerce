"use client";
import React, { useState } from 'react';
import logo from '../../public/assests/image/logo.png';
import Image from 'next/image';
import imageproduct from '../../public/assests/image/imageproduct.png';
import { IoIosSearch } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="container mx-auto pt-[31px]">
        <div className="flex justify-between ">
          <div className='lg:w-[189.24px]'>
            <IoIosSearch className="h-[25px] w-[25px]" />
          </div>
          <div className="mx-auto">
            <Image src={logo} alt=""  />
          </div>
          <div className="lg:flex hidden">
            <div className="flex ">
              <FaUser className="text-xl pr-[5px]" />
              <span>Account</span>
            </div>
            <div className="flex ml-[15px]">
              <FaShoppingBag className="text-xl pr-[5px]" />
              <span>Shopping</span>
            </div>
          </div>
          <div className="block lg:hidden">
            <button onClick={toggleNav}>
              {isNavOpen ? <IoMenu /> : <IoMenu />}
            </button>
          </div>
        </div>
        <div>
          <hr className="border-t border-gray-200 my-5" />
        </div>
        <div className={`pt-[10px] ${isNavOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="lg:flex justify-between">
            <li className="hover:text-red-500 text-[#00000080] transition-colors duration-300 ease-in-out">
              <Link href={'#'}>Jewelry & Accessories</Link>
            </li>
            <li className="hover:text-red-500 text-[#00000080] transition-colors duration-300 ease-in-out">
              <Link href={'#'}>Clothing & Shoes</Link>
            </li>
            <li className="hover:text-red-500 text-[#00000080] transition-colors duration-300 ease-in-out">
              <Link href={'#'}>Home & Living</Link>
            </li>
            <li className="hover:text-red-500 text-[#00000080] transition-colors duration-300 ease-in-out">
              <Link href={'#'}>Wedding & Party</Link>
            </li>
            <li className="hover:text-red-500 text-[#00000080] transition-colors duration-300 ease-in-out">
              <Link href={'#'}>Toys & Entertainment</Link>
            </li>
            <li className="hover:text-red-500 text-[#00000080] transition-colors duration-300 ease-in-out">
              <Link href={'#'}>Art & Collectibles</Link>
            </li>
          </ul>
        </div>
        <div className='flex justify-between  flex-col md:flex-row items-center'>
          <div className='pt-[155px] md:pt-0'>
            <p className='text-[76px] md:text-6xl'>Collections</p>
            <p className='text-[30px] leading-[55px] w-[682px]  font-normal md:text-2xl md:leading-loose pt-[52px] md:w-96'>You Can Explore Ans Shop Many Differnt Collection
From Various Barands Here.</p>
<button className="flex md:h-6 items-center md:mt-8  py-[30px] px-[26px] w-[250px]  justify-center mt-[66px]  bg-black hover:bg-gray-600 text-white font-semibold rounded-sm shadow-md ">
<FaShoppingBag className="h-[20px] w-[20px] pr-[5px]" />
  <span>Shop Now</span>
</button>

          </div>
          <div className=' md:pr-4 mt-[81px] mr-[112px]'>
          <Image className="md:pt-0" src={imageproduct} alt="" />
          </div>
        </div> 
      </div>
    </header>
  );
};

export default Header;

