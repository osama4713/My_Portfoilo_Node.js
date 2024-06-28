import { useEffect } from "react";
import Typed from 'typed.js';

const Index = () => {

    useEffect(() => {
        const myElement = document.querySelector("#description");

        const typed = new Typed(myElement, {
            showCursor: true,
            backDelay: 1200,
            backSpeed: 80,
            loop: true,
            strings: [
                " Full Stack Web Developer",
                " Frontend Web Developer",
                " Backend Web Developer"
            ]
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <img className="absolute contrast-200 z-0 w-full h-full object-cover" src="image/Home_img.jpg" alt="Background" />
            <img className="absolute contrast-125 h-[70%] lg:h-[95%] sm:h-[60%] md:h-[70%] lg:h-[80%] bottom-0 right-8 transform translate-y-1/2 animate-moveUpDown" src="image/Osama.png" alt="Overlay" />

            <div className="absolute w-[90%] sm:w-[80%] md:w-[60%] lg:w-[500px] mt-20 sm:mt-28 md:mt-28 lg:ml-28 mx-5 sm:mx-10">
                <div>
                    <h2 className="text-center text-white text-xl sm:text-2xl font-bold border p-3 bg-gradient-to-r from-indigo-900 to-indigo-400">
                        Welcome All In My Portfolio
                    </h2>
                    <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-4">
                        Hi! I’m Osama Tamer Rizk, <span id="description"></span>
                    </p>
                </div>

                <div className="mt-5">
                    <span className="block text-gray-400 text-lg sm:text-xl md:text-2xl font-bold">
                        Hello everyone, I have 1 year of experience in web development
                    </span>

                    <a
                        href="Osama Tamer Rizk Fahmy (CV).pdf"
                        className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-5 inline-block border p-4 rounded-[25px] bg-gradient-to-r from-indigo-900 to-indigo-400 hover:bg-violet-600 hover:from-indigo-400 hover:to-indigo-900 transition duration-300 ease-in-out"
                        target="_blank"
                        rel="noreferrer"
                        download
                    >
                        Download Resume
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Index;
