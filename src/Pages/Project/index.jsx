import { useState } from "react";
import ImageProject from "../../components/Project/ImageProject";
import Contact from "../../components/Contact/Contact1/index";

const Index = () => {

    const [activeSection, setActiveSection] = useState('first');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div>
            <h2 className="text-white text-5xl sm:text-3xl md:text-5xl font-bold text-center mt-4">
                My Project
            </h2>
            <div className="w-[12%] h-[4px] bg-gradient-to-r from-indigo-900 to-indigo-400 m-auto mt-5"></div>

            <div className="flex items-center justify-center mt-10">
                <div className="inline-flex flex-wrap rounded-full shadow-sm" role="group">
                    <button
                        type="button"
                        className={`w-full sm:w-[200px] lg:w-[300px] h-[60px] px-4 py-2 text-xl font-bold text-white ${activeSection === 'first' ? 'bg-blue-700' : 'bg-zinc-900'} border border-gray-200 rounded-l-full `}
                        onClick={() => handleSectionChange('first')}
                    >
                        1st Section
                    </button>
                    <button
                        type="button"
                        className={`w-full sm:w-[200px] lg:w-[300px] h-[60px] px-4 py-2 text-xl font-bold text-white ${activeSection === 'second' ? 'bg-blue-700' : 'bg-zinc-900'} border-t border-b border-gray-200 `}
                        onClick={() => handleSectionChange('second')}
                    >
                        2nd Section
                    </button>
                    <button
                        type="button"
                        className={`w-full sm:w-[200px] lg:w-[300px] h-[60px] px-4 py-2 text-xl font-bold text-white ${activeSection === 'third' ? 'bg-blue-700' : 'bg-zinc-900'} border border-gray-200 rounded-r-full `}
                        onClick={() => handleSectionChange('third')}
                    >
                        3rd Section
                    </button>
                </div>
            </div>

            {activeSection === 'first' && (
                <div className="w-[80%] mx-auto h-full mt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <ImageProject linkImage="image/Project1.PNG" altImage="project_1" ProjectName="Educational Project" ProjectDescription="The programming languages ​​used are (HTML, CSS)" ProjectLink="https://osama4713.github.io/Educational_Project/Index" ProjectCode="https://github.com/osama4713/Educational_Project" />
                        <ImageProject linkImage="image/Project2.PNG" altImage="project_2" ProjectName="Coffee Machines" ProjectDescription="The programming languages ​​used are (HTML, HTML5, CSS3, CSS)" ProjectLink="https://osama4713.github.io/project-about-coffee-machines-HTML-HTML5-CSS-CSS3-" ProjectCode="https://github.com/osama4713/project-about-coffee-machines-HTML-HTML5-CSS-CSS3-" />
                        <ImageProject linkImage="image/Project3.PNG" altImage="project_3" ProjectName="Temples" ProjectDescription="The programming languages ​​used are (HTML, CSS, HTML5, CSS3, BOOTSTRAP)" ProjectLink="https://osama4713.github.io/Project-about-Temples-HTML-CSS-HTML5-CSS3-BOOTSTRAP-/" ProjectCode="https://github.com/osama4713/Project-about-Temples-HTML-CSS-HTML5-CSS3-BOOTSTRAP-" />
                        <ImageProject linkImage="image/Project4.PNG" altImage="project_4" ProjectName="Shopping Hours" ProjectDescription="The programming languages ​​used are (HTML, CSS, HTML5, CSS3, BOOTSTRAP, JS)" ProjectLink="https://osama4713.github.io/Task-js-/" ProjectCode="https://github.com/osama4713/Task-js-" />
                        <ImageProject linkImage="image/Project5.PNG" altImage="project_5" ProjectName="Shopping" ProjectDescription="The programming languages ​​used are (HTML, CSS, HTML5, CSS3, BOOTSTRAP, JS)" ProjectLink="https://osama4713.github.io/project-Shopping-by_JS/" ProjectCode="https://github.com/osama4713/project-Shopping-by_JS" />
                        <ImageProject linkImage="image/Project6.PNG" altImage="project_6" ProjectName="Educational Project" ProjectDescription="The programming languages ​​used are (HTML, CSS)" ProjectLink="https://university-xli8.onrender.com/" ProjectCode="https://github.com/MinaSeiffen/university-frontend/tree/main/src" />
                    </div>
                </div>
            )}

            {activeSection === 'second' && (
                <div className="w-[80%] mx-auto h-full mt-10">
                    {/* Add your second section content here */}
                </div>
            )}

            {activeSection === 'third' && (
                <div className="w-[80%] mx-auto h-full mt-10">
                    <p className="text-gray-400 text-lg sm:text-xl md:text-2xl text-center mx-auto mt-4 max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
                        My name is Osama, I live in New Cairo, this is the 2nd project in React Dev.
                    </p>
                </div>
            )}

            <div id="contact" className="w-full h-[135vh] mt-20 bg-gradient-to-r from-sky-400 to-indigo-700 flex justify-center relative">
                <div className="max-w-6xl w-full mx-4 lg:mx-auto py-8 lg:py-12">
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default Index;
