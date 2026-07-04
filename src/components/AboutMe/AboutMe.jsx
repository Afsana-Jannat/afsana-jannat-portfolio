
import React from 'react';
import { motion } from "framer-motion";

const AboutMe = () => {

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.div
            className='md:ml-64 px-4 bg-black md:py-8 py-10'
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >

            {/* Title */}
            <motion.div
                className='relative pt-5 mb-4 flex justify-center items-center'
                variants={fadeUp}
            >
                <h2 className='text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#161414]'>
                    ABOUT ME
                </h2>

                <h2 className='absolute md:text-4xl text-2xl text-white font-bold'>
                    Know Me More
                </h2>
            </motion.div>

            {/* Intro Section */}
            <motion.div
                className='flex flex-col lg:flex-row items-start gap-10 lg:gap-16 p-12'
                variants={fadeUp}
            >

                <div className='md:w-1/lg:w-3/5 w-full'>
                    <h2 className='pb-6 text-2xl font-bold'>
                        I'm <span className='text-purple-400'>Afsana Jannat</span>, a Frontend Developer
                    </h2>

                    <p className='text-gray-300 leading-7'>
                        I'm Afsana Jannat, a passionate Frontend Developer who loves building modern, responsive, and user-friendly web applications.
                        <br /> <br />
                        My programming journey started with HTML and CSS, and gradually I explored JavaScript, React, Next.js, TypeScript, Node.js, MongoDB, and Prisma. I enjoy transforming ideas into interactive digital experiences through clean, maintainable, and scalable code.
                        <br /> <br />
                        I particularly enjoy working on responsive user interfaces, solving real-world problems, and continuously learning new technologies.
                        <br /> <br />
                        Outside programming, I enjoy watching football, exploring new technologies, reading about web development, and spending time improving my problem-solving skills.
                    </p>
                </div>

                <div className="lg:w-2/5 w-full bg-[#181818] rounded-2xl p-8 border border-gray-800 shadow-lg">

                    <div className="space-y-5 text-gray-300">

                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                            <span className="font-semibold text-white">Name</span>
                            <span>Afsana Jannat</span>
                        </div>

                        <hr className="border-gray-700" />

                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                            <span className="font-semibold text-white">Email</span>
                            <span>afsanajannat205@gmail.com</span>
                        </div>

                        <hr className="border-gray-700" />

                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                            <span className="font-semibold text-white">Phone</span>
                            <span>+8801890545497</span>
                        </div>

                        <hr className="border-gray-700" />

                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                            <span className="font-semibold text-white">Location</span>
                            <span>Barishal, Bangladesh</span>
                        </div>

                        <hr className="border-gray-700" />

                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                            <span className="font-semibold text-white">Availability</span>
                            <span className="text-green-400">
                                Open to Internship
                            </span>
                        </div>

                    </div>

                    <a
                        href="https://drive.google.com/uc?export=download&id=15ldZBUDi4iSxBYv4yzLiqfWTvVRKmxnh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-block w-full text-center bg-purple-500 hover:bg-purple-600 hover:scale-105 transition duration-300 py-3 rounded-full text-white font-semibold"
                    >
                        Download Resume
                    </a>

                </div>
            </motion.div>

            {/* Cards Section */}
            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-6 md:px-10 lg:px-12 pb-16 mt-8'
                variants={container}
            >

                {/* Skills */}
                <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -10 }}
                    className='bg-[#171717] border border-gray-800 rounded-2xl p-7 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 transition duration-300'
                >
                    <h3 className='text-xl font-bold text-white mb-6'>Currently Learning</h3>

                    {[
                        { name: "Next.js", value: "80%" },
                        { name: "Prisma ORM", value: "->Learning" },
                        { name: "System Design", value: "50%" },
                        { name: "Git & GitHub", value: "70%" }
                    ].map((skill, i) => (
                        <div key={i} className='mb-4'>
                            <div className='flex justify-between text-sm text-gray-300'>
                                <span>{skill.name}</span>
                                <span>{skill.value}</span>
                            </div>
                            <div className='w-full bg-gray-700 h-2 rounded'>
                                <div
                                    className='bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded'
                                    style={{ width: skill.value }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Experience */}
                <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -10 }}
                    className='bg-[#171717] border border-gray-800 rounded-2xl p-7 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 transition duration-300'
                >
                    <h3 className='text-xl font-bold text-white mb-6'>Experience</h3>

                    <div className='space-y-4 text-gray-300'>
                        <div>
                            <h4 className='text-white font-semibold'>✔ 8+ Personal Projects</h4>
                        </div>

                        <div>
                            <h4 className='text-white font-semibold'>✔ Responsive Web Applications</h4>
                        </div>

                        <div>
                            <h4 className='text-white font-semibold'>✔ REST API Integration</h4>
                        </div>
                        <div>
                            <h4 className='text-white font-semibold'>✔ Git & GitHub Collaboration</h4>
                        </div>
                        <div>
                            <h4 className='text-white font-semibold'>✔ API Integration & Authentication</h4>
                        </div>

                    </div>
                </motion.div>

                {/* Education */}
                <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -10 }}
                    className='bg-[#171717] border border-gray-800 rounded-2xl p-7 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 transition duration-300'
                >
                    <h3 className="text-xl font-bold text-white mb-6">
                        Education
                    </h3>

                    <div className="space-y-5 text-gray-300">

                        <div>
                            <h4 className="text-white font-semibold">
                                Bachelor of Science (B.Sc.) in Software Engineering
                            </h4>
                            <p className="text-sm">
                                Daffodil International University
                            </p>
                            <p className="text-sm text-gray-400">
                                Graduated
                            </p>
                        </div>

                        <hr className="border-gray-700" />

                        <div>
                            <h4 className="text-white font-semibold">
                                Continuous Learning
                            </h4>
                            <p className="text-sm">
                                Modern Web Development, Next.js, TypeScript, Prisma, System Design
                            </p>
                        </div>

                    </div>
                </motion.div>

            </motion.div>

        </motion.div>
    );
};

export default AboutMe;