import React from 'react'
import { VscGithub,VscTwitter  } from "react-icons/vsc";
import { SiHashnode,SiLinkedin } from "react-icons/si";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 text-lg z-10">
          <a href="https://twitter.com/bharatc76747072">
          <VscTwitter/>
          </a>
          <a href="https://github.com/iambharatchavhan">
            <VscGithub/>
          </a>
          <a href="https://www.linkedin.com/in/bharat-chavhan-563a881ba/">
           <SiLinkedin/>
          </a>
          <a href="https://hashnode.com/@iambharat">
           <SiHashnode/>
          </a>
        </div>
  )
}

export default SocialIcons