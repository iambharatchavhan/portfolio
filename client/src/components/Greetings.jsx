import React from "react";
import { Link } from "react-scroll";

const Greetings = () => {
  return (
    <div
      id="contact"
      className="flex justify-center items-center min-h-[50svh]"
    >
      <div className=" px-4 md:px-8 py-12 bg-gray-100 rounded-lg shadow-2xl max-w-xl">
        <h1 className="text-lg mb-4">
          Hi, Greetings<span className="mx-2" id="demo"></span>😇,
          <br />
          <span className="text-3xl font-semibold">
            "Thank you for your email."
          </span>
          <br />
          <span className="text-3xl font-semibold text-blue-700">
            I will get back to you soon.
          </span>
        </h1>

        <div className="flex flex-col justify-center w-full text-center mt-8 gap-6 sm:flex-row text-lg font-semibold">
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className="bg-blue-600 w-full sm:w-40 py-4 rounded-lg text-white hover:bg-blue-700 shadow-lg"
          >
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Greetings;
