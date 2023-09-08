import React from 'react';
import ProjectCard from './ProyectsCard'; // Asegúrate de importar el componente adecuadamente.
import accesbank from "../../assets/accesbank.png"
import raw from "../../assets/raw.png"
import jigma from "../../assets/jigma.png"
import task from "../../assets/tasks.png"
const projects = [
    {
        "title": "Acces Bank",
        "description": "Work done in the internship contract of the No-Country company, Technologies: JavaScript React React Router NodeJS MySQL Express.js Tailwindcss Example User: 42645001,Password: byga, PIN: 123456789  ",
        "deployLink": "https://c12-accessbank.vercel.app/",
        "githubLink": "https://github.com/No-Country/c12-41-m-react-agregarback",
        "infoLink": "https://www.linkedin.com/feed/update/urn:li:activity:7091227382266626048/",
        "imageSrc": accesbank,
    },

    {
        "title": "Raw E-commerce",
        "description": "Freelance Work, Technologies: JavaScript React React Router Firebase Boostrap",
        "deployLink": "https://ecommerce-8ktzs1kfp-aronresni.vercel.app/",
        "githubLink": "https://github.com/aronresni/Ecommerce-Raw",
        "imageSrc": raw
    },
    {
        "title": "Task App",
        "description": "Technologies: JavaScript React Redux Tailwind Css",
        "deployLink": "https://task-app-taupe.vercel.app/",
        "githubLink": "https://github.com/aronresni/redux-crud",
        "imageSrc": task,
    },
    {
        "title": "Jigma.io Landing",
        "description": "Freelance Work, Technologies: JavaScript React Tailwind Css",
        "deployLink": "https://jigmaio.vercel.app/",
        "githubLink": "https://github.com/aronresni/jigmaio",
        "imageSrc": jigma,
    },
];

const ProjectList = () => {
    return (
        <div id="proyectos">

            <h1 className='p-5 tittle text-4xl md:text-4xl sm:text-4xl font-bold'>Proyectos</h1>
            <div className='flex flex-wrap justify-center'>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
