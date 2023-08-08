import React from 'react'
import logoNoCountry from "../assets/logoNoCountry.jpeg"

const Experiencia = () => {
    return (
        <div className='h-[70vh] bg-dark'>
            <div>
                <h1 className='p-5 tittle text-4xl md:text-4xl sm:text-4xl font-bold'>Experiencia</h1>
            </div>
            <div className='flex'>
                <div className='row align-center mx-auto max-w-lg'>
                    <img src={logoNoCountry} className=" w-20 h-20"></img>
                    <h3 className="tittle">
                        Entry date : Jun/2023
                        Currently work here.
                    </h3>
                </div>
                <div className='flex items-center justify-center container mx-auto max-w-lg' >

                    <div className='mt-2 '>
                        <h3 className='p-3  leading-relaxed text-muted   font-bold text-center'>I am currently working as a React Trainee Developer at No-Country, where I am gaining hands-on experience in web application development. As part of the team, I am actively involved in building and enhancing web applications like AccesBank. My role as a Trainee Developer involves collaborating with cross-functional teams using the Scrum methodology. This includes contributing to the development process, participating in code reviews, and continuously learning and improving my skills. It's an exciting opportunity that allows me to apply my React knowledge and work in a dynamic and agile environment."
                        </h3>

                    </div>


                    <div />
                </div>
            </div>
        </div >
    )
}

export default Experiencia


