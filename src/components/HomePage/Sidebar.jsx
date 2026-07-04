

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "What I Do", path: "/whatido" },
    { name: "Resume", path: "/resume" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
];

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // const [active, setActive] = useState("/");
    const [open, setOpen] = useState(false);

    const handleClick = (path) => {
        // setActive(path);
        navigate(path);
        setOpen(false); // close menu on mobile after click
    };

    return (
        <>
            {open && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 md:hidden"
                    onClick={() => setOpen(false)}
                ></div>
            )}
            {/* ===== MOBILE TOP BAR ===== */}
            <div className="md:hidden flex items-center justify-between p-4 bg-[#111827] text-white fixed top-0 left-0 w-full z-50">
                <h2 className="font-bold text-lg">Afsana Jannat</h2>
                <button onClick={() => setOpen(true)}>
                    <FaBars size={22} />
                </button>
            </div>

            {/* ===== SIDEBAR ===== */}
            <div
                className={`fixed top-0 left-0 h-screen w-72 z-50 bg-[#0B0B0B] border-r border-gray-800 text-white flex flex-col items-center py-12 transform transition-transform duration-300
${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                {/* Close button (mobile only) */}
                <div className="md:hidden absolute top-4 right-4">
                    <button onClick={() => setOpen(false)}>
                        <FaTimes size={20} />
                    </button>
                </div>

                <div className="text-center">
                    <img
                        src="/afsana.png"
                        className="w-28 h-28 md:w-35 md:h-35 rounded-full border-4 border-gray-600 mx-auto object-cover"
                    />
                    <p className="text-gray-400 text-sm mt-2">
                        Frontend Developer
                    </p>
                </div>

                <nav className="mt-10 w-full pt-10 px-8">
                    <ul className="space-y-2 font-semibold w-full px-8">
                        {menuItems.map((item) => (
                            <li
                                key={item.path}
                                onClick={() => handleClick(item.path)}
                                className={`relative flex items-center py-3 pl-10 rounded-lg cursor-pointer transition-all duration-300
    ${location.pathname === item.path
                                        ? " text-purple-400"
                                        : "text-gray-300 hover:bg-gray-800 hover:text-purple-400"
                                    }`}
                            >
                                {location.pathname === item.path && (
                                    <span className="absolute left-4 w-2 h-2 rounded-full bg-purple-500"></span>
                                )}

                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mt-auto mb-8 flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/afsana-jannat-8484343b6/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-500 hover:scale-110 transition"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/Afsana-Jannat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-500 hover:scale-110 transition"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
