
/* eslint-disable react/prop-types */
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa6";


const ImageProject = ({ linkImage, altImage, ProjectName, ProjectDescription, ProjectLink, ProjectCode }) => {
  return (
    <div className="group w-full h-[300px] rounded-[30px] img-home relative overflow-hidden">
      <img className="w-full h-full rounded-[30px]" src={linkImage} alt={altImage} />

      <div className="absolute z-40 inset-0 flex flex-col items-center justify-center rounded-[30px] opacity-0 group-hover:opacity-100">
        <h2 className="text-white text-3xl text-center p-1 font-bold">
          {ProjectName}
        </h2>
        <p className="text-white text-xl text-center  p-2 font-bold">
          {ProjectDescription}
        </p>

        <div className="flex space-x-6 mt-2">
          <a href={ProjectLink} target="_blank" className="text-1xl text-white border font-bold rounded-full p-3 bg-slate-800 icon-NB">
            <SiGithub className="inline" /> Preview
          </a>
          <a href={ProjectCode} target="_blank" className="text-1xl text-white border font-bold rounded-full p-3 bg-slate-800 icon-NB">
            <FaLink className="inline" /> GitHub
          </a>
        </div>

      </div>
    </div>
  )
}

export default ImageProject