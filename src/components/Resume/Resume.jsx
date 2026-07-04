import React from "react";
import {
    FaGraduationCap,
    FaBriefcase,
    FaCode,
    FaDownload,
} from "react-icons/fa";

const Resume = () => {
    return (
        <section className="md:ml-64 bg-[#0f1014] text-white px-4 sm:px-6 md:px-10 lg:px-14 py-12 md:py-14">

            {/* ===== TITLE ===== */}
            <div className="text-center mb-14">
                <div className="relative flex justify-center items-center mb-6">
                    <h2 className="text-5xl md:text-8xl sm:text-6xl font-extrabold text-[#1f1f1f] tracking-widest select-none">
                        SUMMARY
                    </h2>
                    <h2 className="absolute md:text-5xl text-4xl font-bold">
                        Resume
                    </h2>
                </div>
                <p className="text-gray-400">
                    Education • Experience • Technical Skills
                </p>
            </div>

            {/* ===== EDUCATION & EXPERIENCE ===== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 max-w-6xl mx-auto">

                {/* ===== EDUCATION ===== */}
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 hover:border-purple-400 transition">
                    <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                        <FaGraduationCap className="text-purple-400 text-3xl" />
                        Education
                    </h3>

                    <div className="relative border-l border-purple-400 pl-8">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 bg-purple-400 rounded-full"></span>

                        <p className="text-purple-400 text-sm">2021 – 2025</p>
                        <h4 className="text-xl font-bold mt-1">
                            BSc in Software Engineering
                        </h4>
                        <p className="text-gray-400 mt-1">
                            Daffodil International University
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                            Undergraduate • Graduated 2025
                        </p>
                    </div>
                </div>

                {/* ===== EXPERIENCE ===== */}
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-400 transition">
                    <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                        <FaBriefcase className="text-purple-400 text-3xl" />
                        Experience
                    </h3>

                    <div className="relative border-l border-purple-400 pl-8">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 bg-purple-400 rounded-full"></span>

                        <p className="text-purple-400 text-sm">
                            6 Months • Paid Internship
                        </p>
                        <h4 className="text-xl font-bold mt-1">
                            Frontend Developer Intern
                        </h4>
                        <p className="text-gray-400 mb-4">
                            Niyamat IT
                        </p>

                        <ul className="text-sm text-gray-300 space-y-2 list-disc pl-4">
                            <li>Built responsive and reusable UI using React.js</li>
                            <li>Integrated REST APIs with frontend components</li>
                            <li>Worked collaboratively using Git & GitHub</li>
                            <li>Improved performance, accessibility, and UX</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ===== SKILLS ===== */}
            <div className="mt-20">
                <h3 className="text-3xl font-semibold text-center mb-3 flex justify-center items-center gap-3">
                    <FaCode className="text-purple-400" />
                    Skills
                </h3>

                <p className="text-gray-400 text-sm text-center mb-10">
                    Some backend technologies are currently being learned
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                        { name: "HTML / CSS", value: 90 },
                        { name: "JavaScript", value: 80 },
                        { name: "TypeScript", value: 65 },
                        { name: "React", value: 75 },
                        { name: "Tailwind CSS", value: 85 },
                        { name: "Node.js", value: 70 },
                        { name: "Next.js", value: 75 },
                        { name: "MongoDB", value: 75 },
                        { name: "Prisma ORM (Learning)", value: 60 },
                        { name: "PostgreSQL (Learning)", value: 60 },
                    ].map((skill, i) => (
                        <div
                            key={i}
                            className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] transition"
                        >
                            <div className="flex justify-between mb-2 text-sm">
                                <span>{skill.name}</span>
                                <span>{skill.value}%</span>
                            </div>

                            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-purple-500 to-pink-400 h-2 rounded-full transition-all duration-700"
                                    style={{ width: `${skill.value}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== DOWNLOAD RESUME ===== */}
            <div className="flex justify-center mt-16">
                <a
                    href="https://drive.google.com/file/d/15ldZBUDi4iSxBYv4yzLiqfWTvVRKmxnh/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 sm:px-7 py-3 rounded-full border border-purple-400 hover:bg-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition font-semibold"
                >
                    <FaDownload />
                    Download Resume
                </a>
            </div>
        </section>
    );
};

export default Resume;