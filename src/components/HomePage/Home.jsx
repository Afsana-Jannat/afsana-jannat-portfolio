import React from 'react';
import Sidebar from './Sidebar';
import { TypeAnimation } from 'react-type-animation';
import AboutMe from '../AboutMe/AboutMe';
import WhatiDo from '../WhatiDo/WhatiDo';
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
                            <h2 className='text-3xl font-bold'>WELCOME</h2>
                            <h1 className="text-5xl md:text-6xl font-bold mb-4">
                                I'm{" "}
                                <span className="text-green-400 border-r-2 border-green-400 pr-2">
                                    <TypeAnimation
                                        sequence={[
                                            "Afsana Jannat", 2000,
                                            "Developer", 2000,
                                        ]}
                                        speed={50}
                                        repeat={Infinity}
                                    />
                                </span>
                            </h1>
                            <p className="mb-6">
                                I build modern and responsive web applications
                            </p>
                            <button className="border border-green-400 px-6 py-2 rounded-full hover:bg-green-400 hover:text-black transition">
                                Hire Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* jksj */}

            <div className="">

                <section id="about" className="h-screen bg-black pt-12">
                    <AboutMe></AboutMe>
                </section>

                <section id="whatido" className=" bg-gray-950">
                    <WhatiDo />
                </section>

                <section id="resume" className="h-screen bg-gray-600">
                    Resume
                </section>

                <section id="portfolio" className="h-screen bg-gray-500">
                    Portfolio
                </section>

                <section id="testimonial" className="h-screen bg-gray-400">
                    Testimonial
                </section>

                <section id="contact" className="h-screen bg-gray-300 text-black">
                    Contact
                </section>
            </div>
        </div>
    );
};

export default Home;

