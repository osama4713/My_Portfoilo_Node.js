import { FaLinkedinIn, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const index = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between">
            <div>
                <span className="self-center text-5xl italic font-bold whitespace-nowrap text-white">Portfolio</span>
            </div>
            <div>
                <div className="flex justify-around	w-[160px] ml-auto">
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
                <h2 className="text-xl sm:text-1xl md:text-1xl lg:w-full text-gray-400">--copyrights 2023-- All Reserved Here By Osama Tamer.</h2>

            </div>
        </div>
    )
}

export default index
