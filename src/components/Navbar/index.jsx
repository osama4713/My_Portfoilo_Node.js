import { NavLink } from "react-router-dom";
import { FaLinkedinIn, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";
import './navbar.css'

const Navber = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="opacity-80 fixed w-full z-20 top-0 start-0 bg-gray-950">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-12 py-2">
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-4xl italic font-bold whitespace-nowrap text-white">Portfolio</span>
                </a>
                <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto`} id="navbar-sticky">
                    <ul className="flex flex-col font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <NavLink onClick={() => scrollToSection('home')} className="block py-2 px-3 text-white rounded hover:bg-gray-100 hover:text-black md:hover:bg-transparent md:hover:text-blue-700 md:p-0" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => scrollToSection('about')} className="block py-2 px-3 text-white rounded hover:bg-gray-100 hover:text-black md:hover:bg-transparent md:hover:text-blue-700 md:p-0" >About</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => scrollToSection('skills')} className="block py-2 px-3 text-white rounded hover:bg-gray-100 hover:text-black md:hover:bg-transparent md:hover:text-blue-700 md:p-0" >Skills</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => scrollToSection('projects')} className="block py-2 px-3 text-white rounded hover:bg-gray-100 hover:text-black md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => scrollToSection('contact')} className="block py-2 px-3 text-white rounded hover:bg-gray-100 hover:text-black md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact My</NavLink>
                        </li>
                    </ul>
                    <div className="flex justify-around	w-[160px] mx-7">
                        <a href="https://www.linkedin.com/in/osama-tamer-384378235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-1xl text-white border rounded-full p-3 bg-slate-800 icon-NB">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://github.com/osama4713" target="_blank" className="text-1xl text-white border rounded-full p-3 bg-slate-800 icon-NB">
                            <FaGithubSquare />
                        </a >
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=osamatamer.rizk.fahmy@gmail.com" target="_blank" className="text-1xl text-white border rounded-full p-3 bg-slate-800 icon-NB">
                            <SiGmail />
                        </a>
                    </div>

                    <button type="button" className="border px-8 py-3 text-white font-bold text-1xl bnt-NB relative">Let`s Connect</button>

                </div>
            </div>
        </nav>

    )
};

export default Navber;
