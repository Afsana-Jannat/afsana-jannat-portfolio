import React from 'react';

const WhatiDo = () => {
    return (
        <div className='ml-64'>
            <section id="services" className=" text-white py-20 px-10">
                <div className='relative pt-5 mb-4 flex justify-center items-center'>
                    <h2 className='text-8xl font-extrabold text-[#161414]'>
                        SERVICES
                    </h2>

                    <h2 className='absolute text-3xl text-white font-bold'>
                        WHAT I DO?
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-12">

                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                        <p>I build responsive web apps using React & Tailwind.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">UI Implementation</h3>
                        <p>Convert design into pixel-perfect websites.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">API Integration</h3>
                        <p>Connect frontend with backend APIs.</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default WhatiDo;