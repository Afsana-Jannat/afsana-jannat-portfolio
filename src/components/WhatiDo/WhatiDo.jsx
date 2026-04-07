import React from 'react';
import { FaCode, FaPaintBrush, FaLink, FaMobileAlt, FaBug, FaBolt } from "react-icons/fa";

const WhatiDo = () => {
    return (
        <div className="ml-64 bg-[#0b0a0a] text-white py-20 px-10">

            {/* Section Title */}
            <div className='relative flex justify-center items-center mb-6'>
                <h2 className='text-8xl font-extrabold text-[#1f1f1f] tracking-widest'>
                    SERVICES
                </h2>

                <h2 className='absolute text-3xl font-bold'>
                    WHAT I DO?
                </h2>
            </div>

            {/* Description */}
            <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
                I offer a range of services to build modern, responsive and user-friendly web applications.
            </p>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8">

                {/* Card 1 */}
                <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
                    <div className="text-purple-400 text-4xl mb-4 flex justify-center">
                        <FaCode />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                    <p>I build responsive web apps using React & Tailwind.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
                    <div className="text-purple-400 text-4xl mb-4 flex justify-center">
                        <FaPaintBrush />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">UI Implementation</h3>
                    <p>Convert design into pixel-perfect websites.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
                    <div className="text-purple-400 text-4xl mb-4 flex justify-center">
                        <FaLink />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">API Integration</h3>
                    <p>Connect frontend with backend APIs.</p>
                </div>

                {/* Card 4 */}
                <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
                    <div className="text-purple-400 text-4xl mb-4 flex justify-center">
                        <FaMobileAlt />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                    <p>Make websites look perfect on all devices.</p>
                </div>

                {/* Card 5 */}
                <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
                    <div className="text-purple-400 text-4xl mb-4 flex justify-center">
                        <FaBug />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Bug Fixing</h3>
                    <p>Identify and fix issues to improve performance.</p>
                </div>

                {/* Card 6 */}
                <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition duration-300">
                    <div className="text-purple-400 text-4xl mb-4 flex justify-center">
                        <FaBolt />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                    <p>Improve speed and efficiency of web apps.</p>
                </div>

            </div>
        </div>
    );
};

export default WhatiDo;