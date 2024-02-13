import React from 'react';
import DeptProjects from "./components/DeptProjects";
import Hero from "./components/Hero";

const Projects = () => {
  return (
    <div>
        <Hero/>
        <DeptProjects dept="Software Department"/>
        <DeptProjects dept="Machine Learning Department"/>
        <DeptProjects dept="Artificial Intelligence Department"/>
        <DeptProjects dept="Graphics Department"/>
    </div>
  )
}

export default Projects