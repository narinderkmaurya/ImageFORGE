import React from "react";
import Typed from "react-typed";
import { IoCreate } from "react-icons/io5";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const hero = () => {
  return (
    <div className="text-white hero">
      
      <div className=" pt-[2vh] sm:pt-[10vh] md:pt-[4vh] w-full mx-auto px-2  flex-col text-center  lg:h-1/2 items-center  font-bold text-3xl  md:text-5xl lg:text-8xl body">
        Where{" "}
        <span className="font-black text-transparent  bg-clip-text bg-gradient-to-br from-pink-400  to-red-400">
          Art
        </span>{" "}
        meets{" "}
        <span className="text-transparent  bg-clip-text bg-gradient-to-br from-red-400  to-pink-400">
          {" "}
          AI
        </span>
        <p className="pt-4 pb-4 font-thin text-lg  lg:text-2xl text-gray-100 font-manrope">
          Unlock limitless creative possibilities and revolutionize your visual
          design <br className="hidden sm:block" />
          with the power of AI-generated images
        </p>
        <div className="flex flex-col font-light  justify-center items-center">
          <Link to="/create-post">
            <button className="bg-white/10 md:text-xl  rounded-lg font-manrope flex text-sm gap-2 items-center hover:scale-110 transition-all hover:bg-white/40 p-2  mx-auto sm:pt-4 sm:pb-2 md:px-4 md:py-2  text-white">
              Create Now <IoCreate />{" "}
            </button>
          </Link>

          <p className="truncate ">
            <Typed
              className="md:text-xl pt-2 lg:text-3xl md:pt-4  font-light mx-auto sm:text-4xl text-sm lg:pt-6 lg:font-semibold truncate  md:pl-4 pl-2"
              strings={[
                "Newton catching the apple in the backyard of Disneyland",
                " A giraffe with a top hat and a monocle riding a unicycle",
                "  Picture of a mermaid sitting on a cloud, fishing for stars in the sky",
                "  Robot serving breakfast in bed to a human",
                " A tree with branches made of colorful umbrellas",
                " Jellyfish with a clown nose and big shoes",
                " Giant octopus taking a bath in a bathtub with rubber duckies",
              ]}
              typeSpeed={30}
              backSpeed={20}
              loop
            />
          </p>
          <span className="flex lg:text-2xl items-center  lg:animate-bounce transition-all  p-6 md:p-6 lg:p-16 gap-4">
            {" "}
            <BsChevronDoubleDown size={30} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default hero;
