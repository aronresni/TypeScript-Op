import React from 'react';
import logo from "../../assets/accesbank.png"


const ProjectCard = ({ project }) => {
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-dark flex hover:animate-pulse'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                <img src={logo} alt={project.title} className='w-full' />
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>{project.title}</div>
                    <p className='text-gray-700 text-base'>{project.description}</p>
                </div>
                <div className='px-6 pt-4 pb-2'>
                    <a href={project.deployLink} target='_blank' rel='noopener noreferrer'>
                        <span className='inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Deploy</span>
                    </a>
                    <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                        <span className='inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Github</span>
                    </a>
                    <a href={project.infoLink} target='_blank' rel='noopener noreferrer'>
                        <span className='inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Mas Info</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;