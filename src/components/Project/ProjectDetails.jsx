import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// ===== SAME PROJECT DATA (COPIED) =====
import med1 from "../../assets/medi1.png";
import med2 from "../../assets/medi2.png";
import med3 from "../../assets/medi3.png";

import del1 from "../../assets/del1.png";
import del2 from "../../assets/del2.png";
import del3 from "../../assets/del3.png";
import del4 from "../../assets/del4.png";

import ag1 from "../../assets/cl1.png";
import ag2 from "../../assets/cl2.png";
import ag3 from "../../assets/cl3.png";

const projects = [
    {
        id: "medcarehub",
        title: "MedcareHub",
        label: "Healthcare Platform",
        desc:
            "A full-stack healthcare web application that enables users to book medicines and doctor appointments with role-based dashboards and secure online payments.",
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
            "Stripe payment integration",
            "Optimizing MongoDB queries",
        ],
        future: [
            "Video consultation system",
            "Advanced admin analytics",
            "Improved appointment scheduling",
        ],
    },
    {
        id: "godeliver",
        title: "GoDeliver",
        label: "Parcel Delivery System",
        desc:
            "A parcel delivery management system with user, rider, and admin roles, authentication and order tracking.",
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
            "Handling multiple roles",
            "Route protection",
            "Scalable backend logic",
        ],
        future: [
            "Live map tracking",
            "Push notifications",
            "Performance improvements",
        ],
    },
    {
        id: "creative-agency",
        title: "Creative Agency Landing Page",
        label: "UI / Landing Page",
        desc:
            "A creative agency inspired landing page showcasing premium UI, smooth animations and responsive design.",
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
            "Maintaining smooth animations",
            "Pixel-perfect responsiveness",
        ],
        future: [
            "CMS integration",
            "Dark / light mode",
            "SEO optimization",
        ],
    },
];

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center">
                Project not found
            </div>
        );
    }

    return (
        <section className="md:ml-64 bg-black px-12 lg:px-24 pt-24 pb-10 md:pt-8 md:pb-8">
            {/* BACK BUTTON */}
            <Link
                to="/project"
                className="inline-block mb-10 text-purple-400 hover:text-purple-300 transition"
            >
                ← Back to Projects
            </Link>

            {/* TITLE */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-4"
            >
                {project.title}
            </motion.h1>

            <p className="text-purple-400 uppercase tracking-widest text-sm mb-6">
                {project.label}
            </p>

            <p className="text-gray-400 max-w-3xl leading-relaxed mb-10">
                {project.desc}
            </p>

            {/* IMAGES */}
            <div className="grid md:grid-cols-2 gap-6 mb-14">
                {project.images.map((img, i) => (
                    <motion.img
                        key={i}
                        src={img}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-xl border border-white/10 shadow-xl"
                    />
                ))}
            </div>

            {/* TECH STACK */}
            <h3 className="text-2xl font-semibold mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-3 mb-12">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="px-4 py-1 rounded-full text-sm bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                        {t}
                    </span>
                ))}
            </div>

            {/* CHALLENGES */}
            <h3 className="text-2xl font-semibold mb-4">Challenges Faced</h3>
            <ul className="list-disc list-inside text-gray-400 mb-12 space-y-2">
                {project.challenges.map((c) => (
                    <li key={c}>{c}</li>
                ))}
            </ul>

            {/* FUTURE */}
            <h3 className="text-2xl font-semibold mb-4">Future Improvements</h3>
            <ul className="list-disc list-inside text-gray-400 mb-12 space-y-2">
                {project.future.map((f) => (
                    <li key={f}>{f}</li>
                ))}
            </ul>

            {/* LINKS */}
            <div className="flex flex-wrap gap-4">
                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition font-medium"
                    >
                        Live Site
                    </a>
                )}
                {project.githubClient && (
                    <a
                        href={project.githubClient}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2 rounded-lg border border-white/20 hover:border-white/40 transition font-medium"
                    >
                        GitHub Client
                    </a>
                )}
            </div>
        </section>
    );
};

export default ProjectDetails;

