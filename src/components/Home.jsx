import React from "react";
import HeroImage from "../assets/HeroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
// import Typed from "react-typed";
import { ReactTyped } from "react-typed";
const Home = () => {

  return (
    <div
      name="home"
      className="h-auto w-full bg-gradient-to-b from-black via-black to-gray-800 pt-16 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-auto px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full pl-4">
          <p className="font-bold text-gray-500 py-4 max-w-md text-4xl mt-16 "> I'm a</p>
          <ReactTyped className="text-2xl sm:text-3xl font-bold text-white w-96"
            strings={[
              "Full Stack Developer",
              "Blockchain Developer",
              "ML Enthusiast",
            ]}
            typeSpeed={60}
            backSpeed={80}
            loop>
          </ReactTyped>
          <p className="text-gray-500 py-4 max-w-md leading-loose tracking-wider">
            I am a B.Tech CSE student from MANIT Bhopal.
            Currently, I love to work on web application using technologies like
            React JS, Tailwind, Node, and Solidity.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer animate-bounce"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className=" h-[450px] mt-16 rounded-2xl mx-auto w-[450px] md:w-full slow-bounce "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
