import React, { useState } from 'react'
import { BsGithub } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaReact } from "react-icons/fa"



const NavBar = () => {
  const [navLanding, setNavLanding] = useState(false);


  const handleNavLanding = () => {
    setNavLanding(!navLanding);
  };


  return (
    <div>
      <nav className="bg-dark">
        <div className=" max-w-screen-xl flex flex-wrap items-center justify-evenly mx-auto xl:justify-between p-7   leading-4 md:p-7 relative transition duration-300 ease-out">
          <div className="flex justify-between items-center w-full md:w-auto">
            <div className='rotateIcon'>
              <FaReact size={45} />

            </div>
            <button
              onClick={handleNavLanding}
              data-collapse-toggle="navbar-default"
              type="button"
              className="flex justify-end items-center pr-5 w-10 h-10 text-sm rounded-lg md:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <GiHamburgerMenu size={40} />
            </button>
          </div>
          <div
            className={`${navLanding
              ? "translate-y-0 top-[100%]  duration-500"
              : "translate-y-[-100%] top-0"
              } w-full absolute left-0 mx-auto z-[100] bg-dark md:w-auto md:translate-y-0 md:relative p-4 rounded-b-lg`}
            id="navbar-default"
          >
            <ul className={`text-2xl font-medium flex flex-col items-center md:p-0 rounded-lg bg-gray-50 xl:text-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-dark`}>
              <div className='pb-2'>Sobre mi</div>
              <div className='pb-2'>Proyectos</div>
              <div className='pb-2'>Experiencia</div>
              <div className='pb-2'>Educacion</div>
              <div className="flex items-center">
                <a className='p-2'>
                  <AiFillLinkedin size={37} />
                </a>
                <a className='p-2'>
                  <BsGithub size={35} />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
