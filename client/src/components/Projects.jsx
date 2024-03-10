import React, { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../utils/contant";
import { filtersArray } from "../utils/contant";

export default function Projects() {
  const [filter, setFilter] = useState(null);

  const filteredData = useMemo(() => {
    if (!filter) return projects;
    return projects.filter((project) => project.type === filter);
  }, [filter]);

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <section
      id="projects"
      className="my-4 md:p-4 flex flex-col justify-center items-center"
    >
      <p className="text-3xl text-[#173B6C] font-bold mt-16 text-left w-[350px] md:w-[800px] lg:w-[1300px] lg:mt-20">
        <span className="border-b-4 border-blue-400">Proj</span>ects
      </p>

      <div className="filters flex flex-wrap justify-center items-center gap-4 py-8 md:p-8">
        {filtersArray.map((item, i) => (
          <button
            key={i}
            onClick={() => handleFilter(item.type)}
            className={`border-[1px] border-gray-800 rounded-lg px-3 py-2 text-gray-400 cursor-pointer ${filter === item.type
                ? "bg-gray-800 text-gray-200"
                : "hover:bg-gray-800 hover:text-gray-200"
              }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="card-container flex flex-wrap justify-around item-start gap-4">
        <ProjectCard projects={filteredData} />
      </div>
    </section>
  );
}
