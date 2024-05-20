import React from 'react'
import logo from '../../public/assests/image/logo.png'
import Image from "next/image"
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
  <header>

    <div className="container mx-auto">
    <IoIosSearch />
<Image src = {logo} alt="" height = {35} />
    </div>
  </header>
  )
}

export default Header
