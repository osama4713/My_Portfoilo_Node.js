import { useRef } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import SkillCircle from "../../components/Skills/SkillCircle";

const Index = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const scrollAmount = scrollRef.current.clientWidth / 1.2; // Adjust scrolling amount for responsiveness
        if (direction === 'left') {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-[80%] mx-auto pb-16 rounded-[60px] bg-zinc-950 z-10">
            <div className="p-12">
                <h2 className="text-5xl font-bold text-white text-center">My Skills</h2>
                <div className="w-[12%] h-[4px] bg-gradient-to-r from-indigo-900 to-indigo-400 m-auto mt-4"></div>

                <h2 className="text-2xl text-gray-400 text-center mt-5">You Can See My Skills Here </h2>
            </div>

            <div className="skill-carousel-container relative">
                <button
                    onClick={() => scroll('left')}
                    className="left-arrow absolute left-2 top-[50%] transform -translate-y-1/2 z-10 bg-gray-700 text-white p-2 rounded-full"
                >
                    <FaAngleLeft className="text-[22px]" />
                </button>
                <div className="skill-carousel flex overflow-x-auto mx-auto" ref={scrollRef}>
                    <SkillCircle percentage={95} skillName="HTML" />
                    <SkillCircle percentage={95} skillName="CSS" />
                    <SkillCircle percentage={95} skillName="HTML5" />
                    <SkillCircle percentage={95} skillName="CSS3" />
                    <SkillCircle percentage={90} skillName="BOOTSTRAP" />
                    <SkillCircle percentage={90} skillName="TAILWIND" />
                    <SkillCircle percentage={80} skillName="JS" />
                    <SkillCircle percentage={85} skillName="REACT" />
                    <SkillCircle percentage={85} skillName="NODEJS" />
                    <SkillCircle percentage={90} skillName="MONGODB" />
                    <SkillCircle percentage={85} skillName="EXPRESSJS" />
                    <SkillCircle percentage={80} skillName="GIT & GITHUB" />
                </div>
                <button
                    onClick={() => scroll('right')}
                    className="right-arrow absolute right-2 top-[50%] transform -translate-y-1/2 z-10 bg-gray-700 text-white p-2 rounded-full"
                >
                    <FaAngleRight className="text-[22px]" />
                </button>
            </div>
        </div>
    )
}

export default Index;
