// import React from 'react';
// import { FaCode, FaPaintBrush, FaLink, FaMobileAlt, FaBug, FaBolt } from "react-icons/fa";

// const WhatiDo = () => {
//     return (
//         <div className="md:ml-64 bg-[#0b0a0a] text-white md:py-20 px-10">

//             {/* Section Title */}
//             <div className='relative flex justify-center items-center mb-6'>
//                 <h2 className='md:text-8xl text-6xl font-extrabold text-[#1f1f1f] tracking-widest'>
//                     SERVICES
//                 </h2>

//                 <h2 className='absolute md:text-3xl text-2xl font-bold'>
//                     WHAT I DO?
//                 </h2>
//             </div>

//             {/* Description */}
//             <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
//                 I offer a range of services to build modern, responsive and user-friendly web applications.
//             </p>

//             {/* Services Grid */}
//             <div className="grid md:grid-cols-3 gap-8">

//                 {/* Card 1 */}
//                 <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
//                     <div className="text-purple-400 text-4xl mb-4 flex justify-center">
//                         <FaCode />
//                     </div>
//                     <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
//                     <p>I build responsive web apps using React & Tailwind.</p>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
//                     <div className="text-purple-400 text-4xl mb-4 flex justify-center">
//                         <FaPaintBrush />
//                     </div>
//                     <h3 className="text-xl font-semibold mb-2">UI Implementation</h3>
//                     <p>Convert design into pixel-perfect websites.</p>
//                 </div>

//                 {/* Card 3 */}
//                 <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
//                     <div className="text-purple-400 text-4xl mb-4 flex justify-center">
//                         <FaLink />
//                     </div>
//                     <h3 className="text-xl font-semibold mb-2">API Integration</h3>
//                     <p>Connect frontend with backend APIs.</p>
//                 </div>

//                 {/* Card 4 */}
//                 <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
//                     <div className="text-purple-400 text-4xl mb-4 flex justify-center">
//                         <FaMobileAlt />
//                     </div>
//                     <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
//                     <p>Make websites look perfect on all devices.</p>
//                 </div>

//                 {/* Card 5 */}
//                 <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
//                     <div className="text-purple-400 text-4xl mb-4 flex justify-center">
//                         <FaBug />
//                     </div>
//                     <h3 className="text-xl font-semibold mb-2">Bug Fixing</h3>
//                     <p>Identify and fix issues to improve performance.</p>
//                 </div>

//                 {/* Card 6 */}
//                 <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
//                     <div className="text-purple-400 text-4xl mb-4 flex justify-center">
//                         <FaBolt />
//                     </div>
//                     <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
//                     <p>Improve speed and efficiency of web apps.</p>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default WhatiDo;

import React from "react";
import {
    FaCode,
    FaPaintBrush,
    FaLink,
    FaMobileAlt,
    FaBolt,
    FaDatabase,
} from "react-icons/fa";
import { motion } from "framer-motion";

const WhatiDo = () => {
    return (
        <div className="md:ml-64 bg-[#0b0a0a] text-white md:py-24 py-16 px-6 md:px-12">

            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex justify-center items-center mb-6"
            >
                <h2 className="md:text-8xl text-6xl font-extrabold text-[#1f1f1f] tracking-widest">
                    SERVICES
                </h2>

                <h2 className="absolute md:text-3xl text-2xl font-bold">
                    WHAT I DO?
                </h2>
            </motion.div>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center text-gray-400 max-w-2xl mx-auto mb-14 leading-7"
            >
                I specialize in building modern, responsive, and high-performance web
                applications with a strong focus on clean UI and great user experience.
            </motion.p>

            {/* Services Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {[
                    {
                        icon: <FaCode />,
                        title: "Frontend Development",
                        desc: "Develop modern, scalable, and maintainable web applications using React and Tailwind CSS.",
                    },
                    {
                        icon: <FaPaintBrush />,
                        title: "UI Implementation",
                        desc: "Convert Figma or design mockups into pixel-perfect, responsive user interfaces.",
                    },
                    {
                        icon: <FaLink />,
                        title: "API Integration",
                        desc: "Integrate REST APIs and manage data flow between frontend and backend, with hands-on experience using Prisma ORM and PostgreSQL.",
                    },
                    {
                        icon: <FaMobileAlt />,
                        title: "Responsive Design",
                        desc: "Ensure flawless performance and appearance across desktop, tablet, and mobile devices.",
                    },
                    {
                        icon: <FaDatabase />,
                        title: "Backend Development (Learning)",
                        desc: "Building backend features using Node.js, Prisma ORM, PostgreSQL, and TypeScript while focusing on clean architecture and data modeling.",
                    },
                    {
                        icon: <FaBolt />,
                        title: "Performance Optimization",
                        desc: "Improve application performance through efficient component rendering, API optimization, and database-aware design practices.",
                    },
                ].map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="relative bg-[#161616] border border-gray-800 rounded-2xl p-7 text-center 
                       hover:border-purple-500 hover:shadow-purple-500/30 hover:shadow-2xl 
                       transition-all duration-300"
                    >
                        <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center 
                            rounded-full bg-purple-500/10 text-purple-400 text-3xl">
                            {service.icon}
                        </div>

                        <h3 className="text-xl font-semibold mb-3">
                            {service.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-6">
                            {service.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhatiDo;