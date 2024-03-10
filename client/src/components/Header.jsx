import React, { useState } from 'react';
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';
import Logo from "../assets/mern_icon.png"


const Header = () => {
    let Links =[
        {name:"HOME",link:"home"},
        {name:"ABOUT",link:"about"},
        {name:"PROJECT",link:"projects"},
        {name:"HIRE ME",link:"contact"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          
            <div className='cursor-pointer '>
               <img src={Logo} alt='logo-header'  className='w-1/4 md:w-[35%]'/>
            </div>
    
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <RxCross2 className='text-2xl'/> : <HiBars3BottomRight className='text-2xl' />
                }
            </div>
  
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link,i) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold' key={i}>
                        <Link to={link.link} smooth={true} duration={1000} className='text-[#173B6C] hover:text-blue-400 duration-500'>{link.name}</Link>
                    </li>))
                }
            </ul>
           </div>
        </div>
    );
};

export default Header;