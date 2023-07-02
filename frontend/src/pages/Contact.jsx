import React from "react";

import {LuGithub, LuTwitter,LuLinkedin,LuInstagram} from 'react-icons/lu'
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section className="py-6 :bg-gray-800 text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl lg:text-7xl text-transparent font-black  bg-clip-text bg-gradient-to-br from-pink-400  to-red-400 ">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex gap-x-4 items-center hover:scale-105 transition-all ">
              <LuGithub size={30}/>
                  
                
            <Link to="https://github.com/narinderkmaurya" className="animate-pulse">
            Github
            </Link>
              </p>
              <p className="flex items-center">
              <p className="flex gap-x-4 items-center hover:scale-105 transition-all ">
              <LuTwitter size={30}/>
                  
                
            <Link to="https://twitter.com/narinderkmaurya" className="animate-pulse">
            Twitter
            </Link>
              </p>
              </p>
              <p className="flex items-center">
              <p className="flex gap-x-4 items-center hover:scale-105 transition-all ">
              <LuLinkedin size={30}/>
                  
                
            <Link to="https://www.linkedin.com/in/narinder-maurya-141848228/" className="animate-pulse">
            LinkedIn
            </Link>
              </p>
              </p>
              <p className="flex items-center">
              <p className="flex gap-x-4 items-center hover:scale-105 transition-all ">
              <LuInstagram size={30}/>
                  
                
            <Link to="https://www.linkedin.com/in/narinder-maurya-141848228/" className="animate-pulse">
            Instagram
            </Link>
              </p>
              </p>
              
            </div>
          </div>
          <form
            novalidate=""
            className="flex flex-col py-6 space-y-6 md:py-2 md:px-6"
          >
            <label className="block lg:items-center lg:gap-x-4 lg:flex">
              <span className="mb-1    text-transparent  bg-clip-text bg-gradient-to-br from-pink-400  to-red-400"> Name</span>
              <input
                type="text"
                placeholder="John Doe"
                className="block lg:p-4 w-full bg-white/10 rounded-md shadow-sm focus:ring focus:ri focus:ri "
              />
            </label>
            <label className="block lg:items-center lg:gap-x-5 lg:flex">
              <span className="mb-1 text-transparent  bg-clip-text bg-gradient-to-br from-pink-400  to-red-400">Email </span>
              <input
                type="email"
                placeholder="johndoe@pm.me"
                className="block lg:p-4 w-full bg-white/10 rounded-md shadow-sm focus:ring focus:ri focus:ri "
              />
            </label>
            <label className="block lg:items-center lg:gap-x-4 lg:flex">
              <span className="mb-1 text-transparent  bg-clip-text bg-gradient-to-br from-pink-400  to-red-400">Message</span>
              <textarea
                rows="3"
                className="block w-full bg-white/10   rounded-md focus:ring focus:ri focus:ri "
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded focus:ring ring-pink-900  hover:ring focus:ri  focus:ri hover:ri"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
