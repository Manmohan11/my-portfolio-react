import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 font-semibold py-4 max-w-md">
          I am <span className="font-bold text-gray-400">Manmohan Dwivedi,</span> a Web Developer and a graphic designer.
          I am comfortable with <span className="font-bold text-gray-400">Java, github, Html, Css & JavaScript. </span>
            I have done my last project in <span className="font-bold text-gray-400">MERN Stack. </span>Currently, I love to work on web application using technologies like 
             <span className="font-bold text-gray-400"> React, Tailwind & Next JS.</span>
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
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
            className="rounded-2xl mx-auto w-2/3 md:w-1/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
