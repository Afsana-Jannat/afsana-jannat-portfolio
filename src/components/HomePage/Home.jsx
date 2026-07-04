import Sidebar from "./Sidebar";
import { TypeAnimation } from "react-type-animation";
import AboutMe from "../AboutMe/AboutMe";
import WhatiDo from "../WhatiDo/WhatiDo";
import Resume from "../Resume/Resume";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Home = () => {
    return (
        <div className="w-full overflow-x-hidden">

            {/* ===== LAYOUT ===== */}
            <div className="flex">

                {/* Sidebar */}
                <div className="hidden md:block md:fixed md:top-0 md:left-0 md:h-screen md:w-64 z-50">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="w-full md:ml-64">

                    {/* ===== HERO / BANNER ===== */}
                    <motion.section
                        className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
                        style={{
                            backgroundImage:
                                "url(https://i.pinimg.com/736x/3a/61/d8/3a61d803b23fc77c5df360a8c0a2fe8a.jpg)",
                        }}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/75"></div>

                        {/* Content */}
                        <div className="relative text-white text-center px-4 max-w-4xl mx-auto">
                            <h2 className="text-purple-400 font-bold text-lg md:text-2xl mb-2">
                                WELCOME
                            </h2>

                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5">
                                I'm{" "}
                                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                    <TypeAnimation
                                        sequence={[
                                            "Afsana Jannat",
                                            2000,
                                            "Frontend Developer | Learning Full-Stack",
                                            2000,
                                            "React & Next.js Developer",
                                            2000,
                                        ]}
                                        speed={60}
                                        deletionSpeed={40}
                                        repeat={Infinity}
                                    />
                                </span>
                            </h1>

                            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                                I build fast, responsive, and scalable web applications using
                                React, Next.js, TypeScript, Node.js, MongoDB, and Prisma.
                                Passionate about creating clean UI and smooth user experiences.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap justify-center gap-4 mt-8">
                                <a
                                    href="https://drive.google.com/uc?export=download&id=15ldZBUDi4iSxBYv4yzLiqfWTvVRKmxnh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2 rounded-full border border-purple-400 hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition duration-300"
                                >
                                    <FaDownload />
                                    Resume
                                </a>

                                <a href="#project">
                                    <button className="px-5 py-2 rounded-full border border-purple-400 hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition duration-300">
                                        View Projects
                                    </button>
                                </a>

                                <a href="#contact">
                                    <button className="px-5 py-2 rounded-full border border-purple-400 hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition duration-300">
                                        Hire Me
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Scroll Indicator */}
                        <motion.a
                            href="#about"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-300 hover:text-purple-400 flex flex-col items-center"
                        >
                            <div className="w-7 h-12 border-2 border-purple-400 rounded-full flex justify-center">
                                <div className="w-1.5 h-3 bg-purple-400 rounded-full mt-2"></div>
                            </div>
                            <span className="mt-2 text-xs tracking-widest">SCROLL</span>
                            <HiOutlineChevronDoubleDown className="text-xl mt-1" />
                        </motion.a>
                    </motion.section>
                </div>
            </div>

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