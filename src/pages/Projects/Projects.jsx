
import React, { useEffect, useState } from 'react';
import DeptProjects from "./components/DeptProjects";
import Hero from "./components/Hero";
const host = process.env.REACT_APP_BACKEND

const Projects = () => {
  const [projects, setprojects]= useState([])
  const fetchprojects = async () => {
    
    const res = await fetch(`${host}/projects/all`, {
        method: "GET",
        headers: {
            token: localStorage.getItem("AdminToken")
        }
    })
    const resdata = await res.json()
    console.log(resdata)
    setprojects(resdata)
}
useEffect(()=>{
    fetchprojects()
},[])
const [dept, setdept]= useState(["Software", "ML" , "Graphics"])
  return (
    <div>
        <Hero/>
        {
          dept.map((e)=>{
            const deptprojectsarray= projects.filter((project)=>{return (project.department===e)})
            return <DeptProjects dept={e} key={e} projects={deptprojectsarray}/>
          })
        }
 
    </div>
  )
}

export default Projects