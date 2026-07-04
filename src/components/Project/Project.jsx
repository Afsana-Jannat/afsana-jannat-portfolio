
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// ===== IMAGES =====
// MedcareHub
import med1 from "../../assets/medi1.png";
import med2 from "../../assets/medi2.png";
import med3 from "../../assets/medi3.png";

// GoDeliver
import del1 from "../../assets/del1.png";
import del2 from "../../assets/del2.png";
import del3 from "../../assets/del3.png";
import del4 from "../../assets/del4.png";

// Creative Agency
import ag1 from "../../assets/cl1.png";
import ag2 from "../../assets/cl2.png";
import ag3 from "../../assets/cl3.png";

// ===== PROJECT DATA =====
const projects = [
    {
        id: "medcarehub",
        title: "MedcareHub",
        label: "Healthcare Platform",
        desc:
            "A full-stack healthcare web application that enables users to book medicines and doctor appointments with role-based dashboards and secure online payments. Built with scalability, security, and performance in mind.",
        tech: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Stripe",
            "JWT",
            "Tailwind CSS",
        ],
        images: [med1, med2, med3],
        live: "https://medcarehub.vercel.app/",
        githubClient: "https://github.com/Mohammadarifcoding/MedcareHubClient",
        githubServer: "https://github.com/Mohammadarifcoding/MedCareHub-server",
        challenges: [
            "Implementing secure role-based authentication",
            "Stripe payment gateway integration",
            "Optimizing database queries for performance",
        ],
        future: [
            "Doctor video consultation system",
            "Advanced admin analytics dashboard",
            "Improved appointment scheduling logic",
        ],
    },
    {
        id: "godeliver",
        title: "GoDeliver",
        label: "Parcel Delivery System",
        desc:
            "A parcel delivery management system featuring user, rider, and admin roles with authentication, order tracking, and a clean dashboard experience.",
        tech: [
            "React",
            "Node.js",
            "MongoDB",
            "Firebase Authentication",
            "Tailwind CSS",
        ],
        images: [del1, del2, del3, del4],
        live: "https://go-deliver-2408f.web.app/",
        githubClient: "https://github.com/Afsana-Jannat/go-deliver-client",
        githubServer: "https://github.com/Afsana-Jannat/go-deliver-server",
        challenges: [
            "Managing multiple user roles",
            "Authentication and route protection",
            "Designing scalable backend logic",
        ],
        future: [
            "Real-time parcel tracking with maps",
            "Push notification support",
            "Performance optimization",
        ],
    },
    {
        id: "creative-agency",
        title: "Creative Agency Landing Page",
        label: "UI / Landing Page",
        desc:
            "A creative agency-inspired landing page showcasing premium UI design, smooth animations, and a fully responsive layout to highlight branding and design skills.",
        tech: [
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "GSAP",
            "Responsive Design",
        ],
        images: [ag1, ag2, ag3],
        live: "YOUR_LIVE_LINK",
        githubClient: "YOUR_GITHUB_LINK",
        challenges: [
            "Maintaining smooth animations across devices",
            "Achieving pixel-perfect responsiveness",
        ],
        future: [
            "CMS integration",
            "Dark / light mode toggle",
            "SEO optimization",
        ],
    },
];
// ===== IMAGE SLIDER =====
const ImageSlider = ({ images }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(
            () => setIndex((i) => (i + 1) % images.length),
            3500
        );
        return () => clearInterval(id);
    }, [images.length]);

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    alt="project preview"
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
            className="relative py-10 md:py-16 px-6 md:px-10 lg:px-16"
            onViewportEnter={onActive}
            viewport={{ amount: 0.6 }}
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

            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                {/* TEXT */}
                <motion.div
                    className={reverse ? "lg:order-2 lg:pl-20" : "lg:order-1 lg:pr-20"}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <p className="text-purple-400 uppercase tracking-widest text-xs mb-3">
                        {project.label}
                    </p>

                    <h2 className="text-3xl lg:text-4xl font-bold mb-5">
                        {project.title}
                    </h2>

                    <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
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
                    <div className="flex flex-wrap gap-4">
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-lg border border-white/20 hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition duration-300 font-medium"
                            >
                                View Live
                            </a>
                        )}
                        {project.githubClient && (
                            <a
                                href={project.githubClient}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-lg border border-white/20 hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition duration-300 font-medium"
                            >
                                GitHub Client
                            </a>
                        )}
                        {project.githubServer && (
                            <a
                                href={project.githubServer}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-lg border border-white/20 hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition duration-300 transition font-medium"
                            >
                                GitHub Server
                            </a>
                        )}

                        <Link
                            to={`/projects/${project.id}`}
                            className="px-5 py-2 rounded-lg hover:bg-transparent
    hover:shadow-none
    hover:border
    hover:border-white/20 bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.7)] transition duration-300 font-medium"
                        >
                            View Details
                        </Link>
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
        <section className="bg-[#0a0a0f] py-16 text-white">
            {/* HEADER */}
            <div className="text-center md:ml-64 mb-6">
                <div className="relative flex justify-center items-center mb-6">
                    <h2 className="md:text-7xl lg:text-8xl text-6xl font-extrabold text-[#1f1f1f] tracking-widest">
                        PROJECTS
                    </h2>
                    <h2 className="absolute md:text-4xl text-3xl font-bold">
                        My Work
                    </h2>
                </div>
                <p className="text-gray-400 md:px-8 max-w-2xl mx-auto text-sm md:text-lg">
                    Carefully crafted projects focusing on modern UI, performance,
                    scalability and user experience.
                </p>
            </div>

            {/* TIMELINE */}
            <div className="relative md:ml-64">
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