import HomeComponent from "./HomeComponent"
import About from "./About"
import Skills from "./Skills"
import Project from "./Project"
import Footer from "../components/Footer";
import Contact2 from "../components/Contact/Contact2";

const Home = () => {

    return (
        <>
            <section className="relative h-[100vh] w-full" id="home">
                <HomeComponent />
            </section>

            <section className="w-[81vw] h-auto m-auto py-12" id="about">
                <About />
            </section>

            <section className="w-full h-[60vh]" id="skills">
                <Skills />
            </section>

            <section className="w-full h-full lg:mt-52" id="projects">
                <Project />
            </section>

            <section className="w-full h-[60vh] py-16">

                <Contact2 />

                <div className="w-[90%] h-[10vh] lg:w-[80%] mx-auto mt-32">
                    <Footer />
                </div>
            </section>

        </>
    );
};

export default Home; 
