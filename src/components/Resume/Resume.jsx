import React from "react";
import {
    FaGraduationCap,
    FaBriefcase,
    FaCode,
    FaExternalLinkAlt,
    FaDownload,
} from "react-icons/fa";

const Resume = () => {
    return (
        <section className="ml-64 bg-[#0f1014] text-white px-10 py-12">

            {/* ===== TITLE ===== */}
            <div className="text-center mb-12">
                <div className='relative flex justify-center items-center mb-6'>
                    <h2 className='text-8xl font-extrabold text-[#1f1f1f] tracking-widest'>
                        SUMMARY
                    </h2>

                    <h2 className='absolute text-3xl font-bold'>
                        Resume
                    </h2>
                </div>
                <p className="text-gray-400">Education • Experience • Skills</p>
            </div>

            {/* ===== EDUCATION & EXPERIENCE ===== */}
            <div className="grid md:grid-cols-2 gap-16">

                {/* ===== EDUCATION ===== */}
                <div>
                    <h3 className="text-2xl ml-8 font-semibold mb-10 flex items-center gap-3">
                        <FaGraduationCap className="text-purple-400 text-3xl" />
                        Education
                    </h3>

                    <div className="relative ml-8 border-l border-purple-400 pl-8">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 bg-purple-400 rounded-full"></span>

                        <p className="text-purple-400 text-sm">2021 – 2025</p>
                        <h4 className="text-xl font-bold mt-1">
                            BSc in Software Engineering
                        </h4>
                        <p className="text-gray-400 mt-1">
                            Daffodil International University
                        </p>
                    </div>
                </div>

                {/* ===== EXPERIENCE ===== */}
                <div>
                    <h3 className="text-2xl font-semibold mb-10 flex items-center gap-3">
                        <FaBriefcase className="text-purple-400 text-3xl" />
                        Experience
                    </h3>

                    <div className="relative border-l border-purple-400 pl-8">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 bg-purple-400 rounded-full"></span>

                        <p className="text-purple-400 text-sm">6 Months</p>
                        <h4 className="text-xl font-bold mt-1">
                            Frontend Developer Intern
                        </h4>
                        <p className="text-gray-400 mb-4">Niyamat IT</p>

                        <ul className="text-sm text-gray-300 space-y-2 list-disc pl-4">
                            <li>Built responsive UI using React.js</li>
                            <li>Integrated REST APIs</li>
                            <li>Collaborated using Git & GitHub</li>
                            <li>Improved performance and UX</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ===== SKILLS ===== */}
            <div className="mt-14">
                <h3 className="text-3xl font-semibold text-center mb-10 flex justify-center items-center gap-3">
                    <FaCode className="text-purple-400" />
                    Skills
                </h3>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                        { name: "HTML / CSS", value: 90 },
                        { name: "JavaScript", value: 80 },
                        { name: "React", value: 75 },
                        { name: "Tailwind CSS", value: 85 },
                        { name: "Node.js", value: 70 },
                        { name: "MongoDB", value: 65 },
                    ].map((skill, i) => (
                        <div
                            key={i}
                            className="bg-white/5 backdrop-blur rounded-xl p-5 hover:scale-[1.02] transition"
                        >
                            <div className="flex justify-between mb-2 text-sm">
                                <span>{skill.name}</span>
                                <span>{skill.value}%</span>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-purple-500 to-pink-400 h-2 rounded-full transition-all duration-700"
                                    style={{ width: `${skill.value}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== PROJECTS ===== */}
            {/* <div className="mt-10">
                <h3 className="text-3xl font-semibold text-center mb-10">
                    Featured Projects
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "MedCareHub",
                            desc: "Medicine booking, doctor appointment & admin dashboard.",
                        },
                        {
                            title: "GoDeliver",
                            desc: "Parcel delivery system with authentication & dashboards.",
                        },
                        {
                            title: "Hostel Management",
                            desc: "MERN-based hostel system with JWT authentication.",
                        },
                    ].map((project, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-purple-400 hover:-translate-y-2 transition duration-300"
                        >
                            <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                            <p className="text-gray-400 text-sm mb-5">
                                {project.desc}
                            </p>
                            <button className="text-purple-400 text-sm flex items-center gap-2 hover:underline">
                                View Project <FaExternalLinkAlt />
                            </button>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* ===== DOWNLOAD CV ===== */}
            <div className="flex justify-center mt-12">
                <a
                    href="https://drive.google.com/file/d/1mp6xAa_cQSXGAxKKjVGtzGcF0ha-HT02/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3  px-6 py-3 rounded-full border border-purple-400 hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition duration-300 font-semibold"
                >
                    <FaDownload />
                    Download CV
                </a>
            </div>

        </section>
    );
};

export default Resume;

