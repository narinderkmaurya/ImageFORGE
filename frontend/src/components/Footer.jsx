import React from "react";
import { Link } from "react-router-dom";
import {LuGithub, LuTwitter,LuLinkedin,LuInstagram} from 'react-icons/lu'
const Footer = () => {
  return <>
  <footer className=" text-white ">
	<div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
		<ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
		
			<li className="hover:scale-105 lg:text-2xl  transition-all">  <Link to='/contact'>
           Contact
            </Link></li>
			<li className="hover:scale-105 lg:text-2xl  transition-all">  <Link to='/create-post'>
           Create Post
            </Link></li>
		</ul>
		<div className="flex flex-col justify-center pt-6 lg:pt-0">
			<div className="flex justify-center items-center space-x-4">
				<a rel="noopener noreferrer" href="https://twitter.com/narinderkmaurya" target="_blank" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 ">

                <LuTwitter size={30}/>
				</a>
				
				<a rel="noopener noreferrer" href="https://instagram.com/narinderkmaurya" target="_blank" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 ">
                <LuInstagram size={30}/>
				</a>
				
				<a rel="noopener noreferrer" href="https://www.linkedin.com/in/narinder-maurya-141848228/" target="_blank" title="LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 ">
                <LuLinkedin size={30}/>
				</a>
				
				<a rel="noopener noreferrer" href="https://github.com/narinderkmaurya" target="_blank" title="Github" className="flex items-center  justify-center w-8 h-8 rounded-full sm:w-12 sm:h-12 bg-white">
                <LuGithub size={30} color="black"/>
				</a>
				
			</div>
		</div>
	</div>
</footer>
  </>;
};

export default Footer;
