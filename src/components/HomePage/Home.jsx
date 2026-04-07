import { Link } from "react-router-dom";
import Sidebar from './Sidebar';
import { TypeAnimation } from 'react-type-animation';
import AboutMe from '../AboutMe/AboutMe';
import WhatiDo from '../WhatiDo/WhatiDo';
import Resume from '../Resume/Resume';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <div className="flex">

                {/* Sidebar */}
                <div className="fixed top-0 left-0 h-screen w-64 z-50">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="ml-64 w-full h-screen overflow-y-scroll scroll-smooth">

                    {/* Banner Section */}
                    <div
                        className="min-h-screen flex items-center justify-center bg-cover bg-center"
                        style={{
                            backgroundImage: "url(https://blog.dallascollege.edu/wp-content/uploads/2018/02/girl-working-at-computer-780x390.jpg)",
                        }}
                    >

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-60"></div>

                        {/* Content */}
                        <div className="relative text-white text-center px-4">
                            <h2 className='text-3xl text-purple-400 font-bold'>WELCOME</h2>
                            <h1 className="text-5xl md:text-6xl font-bold mb-4">
                                I'm{" "}
                                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent border-r-2 border-purple-400 pr-2 animate-pulse">
                                    <TypeAnimation
                                        sequence={[
                                            "Afsana Jannat", 2000,
                                            "Frontend Developer", 2000,
                                            "React Developer", 2000,
                                        ]}
                                        speed={60}
                                        deletionSpeed={40}
                                        repeat={Infinity}
                                    />
                                </span>
                            </h1>
                            <p className="mb-6">
                                I build modern and responsive web applications
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link to="/contact">
                                    <button className="px-6 py-3 rounded-full border border-purple-400 hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition duration-300">
                                        Hire Me
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* jksj */}

            <div className="">

                <section id="about" className=" bg-black pt-12">
                    <AboutMe></AboutMe>
                </section>

                <section id="whatido" className=" bg-gray-950">
                    <WhatiDo />
                </section>

                <section id="resume" className=" bg-gray-600">
                    <Resume />
                </section>

                <section id="project" className=" bg-gray-600">
                    <Project />
                </section>

                <section id="contact" className=" bg-gray-300 text-black">
                    <Contact />
                </section>
                <section id="footer" className=" bg-gray-300 text-black">
                    <Footer></Footer>
                </section>
            </div>
        </div>
    );
};

export default Home;
