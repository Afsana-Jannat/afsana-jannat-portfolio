

import React from 'react';

const AboutMe = () => {

    const onButtonClick = () => {
        const pdfUrl = "https://drive.google.com/file/d/1mp6xAa_cQSXGAxKKjVGtzGcF0ha-HT02/view?usp=sharing";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div className='ml-64 bg-black py-8'>

            {/* Title */}
            <div className='relative pt-5 mb-4 flex justify-center items-center'>
                <h2 className='text-8xl font-extrabold text-[#161414]'>
                    ABOUT ME
                </h2>

                <h2 className='absolute text-3xl text-white font-bold'>
                    Know Me More
                </h2>
            </div>

            {/* Intro Section */}
            <div className='flex flex-col md:flex-row justify-between gap-16 p-12'>

                <div className='md:w-1/2'>
                    <h2 className='pb-6 text-2xl font-bold'>
                        I'm <span className='text-purple-400'>Afsana Jannat</span>, a Web Developer
                    </h2>

                    <p className='text-gray-300 leading-7'>
                        I am a passionate web developer focused on building modern,
                        responsive, and user-friendly web applications. I enjoy turning
                        ideas into real-world products using clean and efficient code.
                    </p>
                </div>

                <div className='md:w-1/2 space-y-4 text-gray-300'>
                    <p><span className='font-semibold text-white'>Name:</span> Afsana Jannat</p>
                    <hr />
                    <p><span className='font-semibold text-white'>Email:</span> afsanajannat205@gmail.com</p>
                    <hr />
                    <button className="btn rounded-full p-6 text-xl mb-6 border-purple-400 bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition duration-300 text-white" onClick={onButtonClick}>
                        Download CV
                    </button>
                </div>
            </div>

            {/* Skills + Education + Projects */}
            <div className='grid md:grid-cols-3 mt-6 gap-10 px-12 pb-16'>

                {/* Skills */}
                <div className='bg-[#1c1c1c] p-6 rounded-xl shadow-lg'>
                    <h3 className='text-xl font-bold text-white mb-6'>Skills</h3>

                    {/* Skill Item */}
                    <div className='mb-4'>
                        <div className='flex justify-between text-sm text-gray-300'>
                            <span>HTML / CSS</span>
                            <span>90%</span>
                        </div>
                        <div className='w-full bg-gray-700 h-2 rounded'>
                            <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded w-[90%]'></div>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <div className='flex justify-between text-sm text-gray-300'>
                            <span>JavaScript</span>
                            <span>80%</span>
                        </div>
                        <div className='w-full bg-gray-700 h-2 rounded'>
                            <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded w-[80%]'></div>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <div className='flex justify-between text-sm text-gray-300'>
                            <span>React</span>
                            <span>75%</span>
                        </div>
                        <div className='w-full bg-gray-700 h-2 rounded'>
                            <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded w-[75%]'></div>
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-between text-sm text-gray-300'>
                            <span>Git & GitHub</span>
                            <span>70%</span>
                        </div>
                        <div className='w-full bg-gray-700 h-2 rounded'>
                            <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded w-[90%]'></div>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <div className='bg-[#1c1c1c] p-6 rounded-xl shadow-lg'>
                    <h3 className='text-xl font-bold text-white mb-6'>Projects</h3>

                    <div className='space-y-4 text-gray-300'>
                        <div>
                            <h4 className='text-white font-semibold'>Portfolio Website</h4>
                            <p className='text-sm'>Personal responsive portfolio using React & Tailwind.</p>
                        </div>

                        <div>
                            <h4 className='text-white font-semibold'>GoDeliver</h4>
                            <p className='text-sm'>
                                Delivery management web application with order tracking, user dashboard, and real-time updates.
                            </p>
                        </div>

                        <div className='space-y-4 text-gray-300'>


                            <div>
                                <h4 className='text-white font-semibold'>Try It Together</h4>
                                <p className='text-sm'>Collaborative shopping experience with real-time features.</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className='bg-[#1c1c1c] p-6 rounded-xl shadow-lg'>
                    <h3 className='text-xl font-bold text-white mb-6'>Education</h3>

                    <div className='space-y-4 text-gray-300'>
                        <div>
                            <h4 className='text-white font-semibold'>BSc in Software Engineering</h4>
                            <p className='text-sm'>Daffodil International University</p>
                        </div>

                        <div>
                            <h4 className='text-white font-semibold'>Web Development</h4>
                            <p className='text-sm'>Self Learning & Online Courses</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;