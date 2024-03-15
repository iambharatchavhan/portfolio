import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import SimpleMap from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
  <div className="flex flex-col justify-center items-center bg-[#F3F4F6]">
  <Header/>
  <Home/>
  <About/>
  <Projects/>
  <Contact/>
  <Footer/>
  </div>
  
       
  
  );
}

export default App;
