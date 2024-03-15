import React from "react";
import Hero from "../assets/hero2.png";
import Typewriter from "typewriter-effect";
import SocialIcons from "./SocialIcons";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section id="home" className="h-[100svh] w-11/12">
      <div className="w-full h-full flex justify-center items-center relative">
        <div className="flex flex-col w-full justify-center items-center gap-2">
          <img src={Hero} alt="hero" className="w-[90%] border-2 border-[#173B6C] rounded-full md:w-1/4"/>

          <h1 className="text-2xl flex">Hello ,I am </h1>
          <h2 className="text-3xl font-bold text-[#173B6C] z-10">
            <Typewriter
              options={{
                strings: [
                  "Bharat Chavhan",
                  "Web Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "MERN Developer",
                ],
                autoStart: true,
                loop: true,
                
              }}
            />
          </h2>
          <div className="text-[#173B6C] z-10">
          <SocialIcons/>

          </div>
     <Link to="contact" smooth={true} duration={1000} className="border-[1px] px-6 py-2 bg-blue-400 rounded-md text-white text-bold z-10 cursor-pointer">Hire me</Link>
        </div>
     
      </div>
    </section>
  );
};

export default Home;
