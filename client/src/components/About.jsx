import React from "react";
import aboutBg from "../assets/hero4.png";
import Skills from "./Skills";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[100svh] flex flex-col justify-normal items-center p-4 gap-2"
    >
      <p className="text-3xl  text-[#173B6C] font-bold mt-16 text-left w-[350px] md:w-[800px] lg:w-[1300px] lg:mt-32">
        <span className="border-b-4 border-blue-400">Ab</span>out
      </p>
      <p className="md:w-[800px] lg:w-[1300px]">
        Embarking on a dynamic journey as a full-stack developer, my passion
        lies in meticulously crafting seamless, user-centric web experiences.
        With an unwavering commitment to innovation, I thrive on pushing the
        boundaries of what's possible in every line of code. Join me on this
        exciting quest to redefine the digital landscape and elevate the art of
        full-stack development.
      </p>
      <div className="flex flex-col justify-center items-center flex-wrap md:w-[800px]   md:flex-row md:gap-4 lg:w-[1300px] lg:flex-nowrap lg:gap-10">
        <div className="shadow-xl">
          <img src={aboutBg} alt="aboutBg" className=" w-[350px] md:w-[600px] lg:w-[1300px]" />

          
        </div>
        <div className="flex flex-col gap-7 md:justify-center md:items-center lg:items-start">
          <p className="py-4 font-bold text-[#173B6C] text-2xl font-sans">
            Full Stack Developer | MERN Stack Enthusiast
          </p>
          <p className="font-sm font-serif italic">
            Passionately pursuing mastery in website-building, I am dedicated to
            continuous learning for success in development. Eager to expand
            skills and contribute to innovative projects, I strive for
            excellence in web development.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:gap-10">
            <div className="flex flex-col gap-4 md:flex md:flex-col md:gap-10">
              <p className="text-lg">
                <span className="font-bold  text-lg">Full Name : </span>
                Bharat Chavhan
              </p>
              <p className="text-lg">
                <span className="font-bold  text-lg">Date Of Birth : </span>
                26-October-1995
              </p>

              <p className="text-lg">
                <span className="font-bold text-lg">City : </span>Pune,
                Maharashtra-411062
              </p>
              <p className="text-lg">
                <span className="font-bold text-lg">Degree : </span>Bachelors Of
                Computer Science
              </p>
            </div>
            <div className="flex flex-col gap-4   md:flex md:flex-col md:gap-10">
              <p className="text-lg">
                <span className="font-bold text-lg">Email : </span>
                bharat.chavhan.2001@gmail.com
              </p>
              <p className="text-lg">
                <span className="font-bold text-lg">Phone : </span>+91 7066 3600
                68
              </p>

              <p className="text-lg">
                <span className="font-bold text-lg">Freelance: </span> Available
              </p>
              <p className="text-lg">
                <span className="font-bold text-lg">Experience: </span> Fresher
              </p>
            </div>

          </div>
          <p className="">As a future-focused full-stack developer, my goals encompass mastering versatile technologies, crafting intuitive user experiences, and actively contributing to groundbreaking projects, fostering innovation and excellence in the ever-evolving realm of web development.</p>
        </div>
      </div>
      <Skills/>
    </section>
  );
};

export default About;
