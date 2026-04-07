import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ===== IMAGES =====
import med1 from "../../assets/medi1.png";
import med2 from "../../assets/medi2.png";
import med3 from "../../assets/medi3.png";

import del1 from "../../assets/del1.png";
import del2 from "../../assets/del2.png";
import del3 from "../../assets/del3.png";
import del4 from "../../assets/del4.png";

// ===== PROJECT DATA =====
const projects = [
    {
        title: "MedcareHub",
        label: "Healthcare Platform",
        desc:
            "A full-stack healthcare solution for medicine booking, doctor appointments, dashboards and secure online payments.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        images: [med1, med2, med3],
        live: "#",
        githubClient: "#",
        githubServer: "#",
    },
    {
        title: "GoDeliver",
        label: "Parcel Delivery System",
        desc:
            "A smart parcel delivery platform with admin, rider and user roles, authentication and order tracking.",
        tech: ["React", "Node.js", "MongoDB"],
        images: [del1, del2, del3, del4],
        live: "#",
        githubClient: "#",
        githubServer: "#",
    },
];

// ===== IMAGE SLIDER =====
const ImageSlider = ({ images }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 3500);
        return () => clearInterval(id);
    }, [images.length]);

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-2xl shadow-2xl border border-white/10"
                />
            </AnimatePresence>
        </div>
    );
};

// ===== SINGLE PROJECT =====
const ProjectSection = ({ project, reverse, isActive, onActive }) => {
    return (
        <motion.section
            className="relative py-24 px-6 lg:px-20"
            onViewportEnter={onActive}
            viewport={{ amount: 0.65 }}
        >
            {/* TIMELINE DOT */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                    <div
                        className={`w-3 h-3 rounded-full border-2 transition-all duration-500
            ${isActive
                                ? "bg-purple-500 border-purple-300 shadow-[0_0_20px_6px_rgba(168,85,247,0.7)]"
                                : "bg-purple-500 border-[#0a0a0f] opacity-50"
                            }`}
                    />
                    {isActive && (
                        <div className="absolute inset-0 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-20" />
                    )}
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* TEXT */}
                <motion.div
                    className={reverse ? "lg:order-2 lg:pl-24" : "lg:order-1 lg:pr-24"}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <p
                        className={`text-purple-400 uppercase tracking-widest text-xs mb-3 transition-colors duration-500 ${isActive ? "text-purple-300" : ""
                            }`}
                    >
                        {project.label}
                    </p>

                    <h2
                        className={`text-3xl lg:text-4xl font-bold mb-5 transition-colors duration-500 ${isActive ? "text-white" : "text-gray-200"
                            }`}
                    >
                        {project.title}
                    </h2>

                    <p
                        className={`text-gray-400 leading-relaxed mb-6 max-w-xl transition-colors duration-500 ${isActive ? "text-gray-300" : ""
                            }`}
                    >
                        {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="px-4 py-1 rounded-full text-sm bg-purple-500/10 text-purple-300 border border-purple-500/20"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-4">
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className={`px-5 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition font-medium ${isActive ? "shadow-lg" : ""
                                    }`}
                            >
                                View Live
                            </a>
                        )}
                        {project.githubClient && (
                            <a
                                href={project.githubClient}
                                target="_blank"
                                rel="noreferrer"
                                className={`px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 transition font-medium ${isActive ? "shadow-lg" : ""
                                    }`}
                            >
                                GitHub Client
                            </a>
                        )}
                        {project.githubServer && (
                            <a
                                href={project.githubServer}
                                target="_blank"
                                rel="noreferrer"
                                className={`px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 transition font-medium ${isActive ? "shadow-lg" : ""
                                    }`}
                            >
                                GitHub Server
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* IMAGE */}
                <div className={reverse ? "lg:order-1" : "lg:order-2"}>
                    <ImageSlider images={project.images} />
                </div>
            </div>
        </motion.section>
    );
};

// ===== MAIN =====
const Project = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#0a0a0f] py-14 text-white">
            {/* HEADER */}
            <div className="text-center ml-64">
                <div className='relative flex justify-center items-center mb-6'>
                    <h2 className='text-8xl font-extrabold text-[#1f1f1f] tracking-widest'>
                        Project
                    </h2>

                    <h2 className='absolute text-3xl font-bold'>
                        My Work
                    </h2>
                </div>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Carefully crafted projects focusing on performance, scalability and
                    refined user experience.
                </p>
            </div>
            {/* TIMELINE WRAPPER */}
            <div className="relative ml-64">
                {/* CENTER LINE */}
                <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />

                {projects.map((project, i) => (
                    <ProjectSection
                        key={project.title}
                        project={project}
                        reverse={i % 2 !== 0}
                        isActive={activeIndex === i}
                        onActive={() => setActiveIndex(i)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Project;