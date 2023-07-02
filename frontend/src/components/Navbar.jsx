import React, { useState } from "react";

import { Link } from "react-router-dom";
import { logo } from "../assets";
import { VscGithubInverted } from "react-icons/vsc";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between sm:bg-transparent body items-center mx-auto px-8 py-4  text-white w-full">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-44 sm:w-64 object-contain hover:scale-110 transition-all duration-150"
        />
      </Link>

      <ul className="hidden gap-10 items-center md:flex">
        <Link to='/'>
        <li  className="sm:hover:animate-pulse sm:transition-all sm:hover:text-gray-300 sm:hover:scale-110 cursor-pointer text-xl hover:border-b-2 bg-purple- border-purple-400 ">
          Home
        </li></Link>
       
        <li className="sm:hover:animate-pulse sm:transition-all sm:hover:text-gray-300 sm:hover:scale-110 cursor-pointer text-xl hover:border-b-2 bg-purple- border-purple-400 ">
        <Link to='/contact'>
           Contact
            </Link>
        </li>
        <li className="flex gap-2 items-center bg-white/10 hover:bg-white/40 transition-all cursor-pointer hover:scale-110 p-4 rounded-lg">
          <span>
            <Link to='https://github.com/narinderkmaurya/ImageFORGE' target="_blank">
            Github
            </Link></span>
          <VscGithubInverted />
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <IoIosCloseCircleOutline size={40} /> : <HiMenuAlt3 size={40} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full border-r-2 border-b-2 border-gray-900 bg-gradient-to-b from-black to-zinc-900   transition-all ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div className="w-full m-4">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-44 sm:w-64 object-contain"
            />
          </Link>
        </div>
        <li className="p-4 text-white cursor-pointer  ">Home</li>
       

        <li className="p-4 text-white cursor-pointer  "> <Link to='https://github.com/narinderkmaurya/ImageFORGE' target="_blank">Contact</Link>     </li>
        <li className="p-4  cursor-pointer flex items-center gap-2 bg-transparent/30">
          <span>Github</span>
          <VscGithubInverted />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
