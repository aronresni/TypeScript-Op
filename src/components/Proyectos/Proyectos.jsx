import React from 'react'
import ProjectCard from './ProyectsCard';
import projectsData from "./projectsData.json"



const Proyects = () => {

    return (
        <>
            <h1 className='p-5 tittle text-4xl md:text-5xl sm:text-4xl font-bold'>Proyectos</h1>
            <div className='flex flex-wrap justify-center items-center'>
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </>
    );
};

export default Proyects;

