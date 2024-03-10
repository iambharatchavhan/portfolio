import React from 'react'

export default function ProjectCard({projects}) {
  return (
     <>
      {projects.map((project) => (
          <div className="project-card flex justify-center items-start" key={project.id}>
            <div className="project-picture p-2 shadow-[0px_0px_8px_2px_#00000024] relative">
            
                <img src={project.img} alt="projectImg"  className='w-[300px] lg:w-[400px]'/>
              <a href={project.link} target="_blank" >
              <h3 className="project-title top-0 right-1 absolute text-xl font-bold w-full h-full text-transparent flex justify-center items-center rounded-md hover:bg-[#0000009c] hover:text-white transition-all duration-700">{project.title}</h3>
              </a>
            </div>
          </div>
        ))}
     </>
  )
}