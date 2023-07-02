import React from "react";
import Airform from "react-airform";
import {LuGithub, LuTwitter,LuLinkedin,LuInstagram} from 'react-icons/lu'
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section className="py-6 bg-white/10 rounded-2xl text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl lg:text-7xl text-transparent font-black  bg-clip-text bg-gradient-to-br from-pink-400 text-center md:text-left  to-red-400 ">Get in touch</h1>
            <p className="pt-2 md:text-left text-center pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4  z-10">
              <p className="flex gap-x-4 justify-center md:justify-start items-center hover:scale-105 transition-all ">
              <LuGithub size={30}/>
                  
                
            <Link to="https://github.com/narinderkmaurya" >
            Github
            </Link>
              </p>
              <p className="flex justify-center md:justify-start items-center">
              <p className="flex gap-x-4 items-center hover:scale-105 transition-all ">
              <LuTwitter size={30}/>
                  
                
            <Link to="https://twitter.com/narinderkmaurya" >
            Twitter
            </Link>
              </p>
              </p>
              <p className="flex justify-center md:justify-start items-center">
              <p className="flex gap-x-4 items-center hover:scale-105 transition-all ">
              <LuLinkedin size={30}/>
                  
                
            <Link to="https://www.linkedin.com/in/narinder-maurya-141848228/" >
            LinkedIn
            </Link>
              </p>
              </p>
              <p className="flex justify-center md:justify-start items-center">
              <p className="flex gap-x-4 items-center hover:scale-105 transition-all ">
              <LuInstagram size={30}/>
                  
                
            <Link to="https://www.linkedin.com/in/narinder-maurya-141848228/" >
            Instagram
            </Link>
              </p>
              </p>
              
            </div>
          </div>
          <Airform email="feedback.ma7i2@8shield.net" method="POST"
            className="flex flex-col py-6 space-y-8 md:py-2 md:px-6"
          >
            <label for="name" className="block  lg:items-center lg:gap-x-4 lg:flex">
              <span className="mb-1    text-transparent  bg-clip-text bg-gradient-to-br from-pink-400  to-red-400"> Name</span>
              <input
                type="text"
                placeholder="John Doe" id="name"
                name="User Name" required
                className="block p-4  w-full bg-white/10 rounded-md shadow-sm focus:ring focus:ri focus:ri "
              />
            </label>
            <label for="mail" className="block  lg:items-center lg:gap-x-5 lg:flex">
              <span className="mb-1 text-transparent  bg-clip-text bg-gradient-to-br from-pink-400  to-red-400">Email </span>
              <input
                type="email" name="User Email" id="mail" 
                placeholder="johndoe@pm.me" required
                className="block p-4  w-full bg-white/10 rounded-md shadow-sm focus:ring focus:ri focus:ri "
              />
            </label>
            <label for="message"  className="block lg:items-center lg:gap-x-4 lg:flex">
              <span className="mb-1 text-transparent  bg-clip-text  bg-gradient-to-br from-pink-400  to-red-400">Message</span>
              <textarea required id="message" name="message"
                rows="5" placeholder="Write your message here"
                className="block w-full bg-white/10 p-4  rounded-md focus:ring focus:ri focus:ri "
              ></textarea>
            </label>
            <button
              type="submit" value="send"
              className="self-center px-8 py-3 text-lg rounded bg-pink-900 focus:ring ring-pink-900  hover:ring focus:ri  focus:ri hover:ri"
            >
              Submit
            </button>
          </Airform>
        </div>
      </section>
    </>
  );
};

export default Contact;
