import React from "react";
import { VscGithub, VscTwitter } from "react-icons/vsc";
import { SiHashnode, SiLinkedin } from "react-icons/si";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SocialIcons from "./SocialIcons";
import { useForm, ValidationError } from "@formspree/react";
import Greetings from "./Greetings";

const Contact = () => {
  const [state, handleSubmit] = useForm("xgegzzgo");
  if (state.succeeded) {
    return(<Greetings/>);
  }

  return (
    <section id="contact" className="min-h-[100svh] ">
      <div className="antialiased bg-gray-100">
        <div className="flex w-full min-h-screen justify-center items-center">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-blue-700 w-full max-w-4xl p-5 sm:p-8 rounded-lg shadow-lg text-white overflow-hidden">
            <div className="flex flex-col md:flex-1 space-y-8 justify-between">
              <div>
                <h1 className="font-bold text-4xl tracking-wide">Contact Me</h1>
                <p className="pt-2 text-blue-100 text-sm">
                  "Are you currently accepting applications for the open
                  position?"
                </p>
              </div>
              <div className="flex flex-col space-y-4 sm:space-y-6">
                <div className="inline-flex space-x-2 items-center">
                  <FaPhone />
                  <span>+91 7066360068</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <MdEmail />
                  <span>bharat.chavhan.2001@gmail.com</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <FaLocationDot />
                  <span>Pune, Maharashtra</span>
                </div>
              </div>
              <SocialIcons />
            </div>
            <div className="relative">
              <div className="absolute invisible md:visible z-0 w-40 h-40 bg-blue-400 rounded-full -right-28 -top-28"></div>
              <div className="absolute invisible md:visible z-0 w-40 h-40 bg-blue-400 rounded-full -left-28 -bottom-16"></div>
              <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-full">
                <form
                  className="flex flex-col space-y-4"
                  onSubmit={handleSubmit}
                  method="POST"
                >
                  <div>
                    <label className="text-sm">Your Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="name"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                  <div>
                    <label className="text-sm">Your Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />

                  <div>
                    <label className="text-sm">Your Message</label>
                    <textarea
                      type="email"
                      placeholder="Message"
                      name="message"
                      rows="4"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
                    ></textarea>
                  </div>

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-block self-end bg-blue-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
