
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaLinkedin, FaGithub } from "react-icons/fa";


// const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About Me", path: "/about" },
//     { name: "What I Do", path: "/whatido" },
//     { name: "Resume", path: "/resume" },
//     { name: "Project", path: "/project" },
//     { name: "Contact", path: "/contact" },
// ];

// const Sidebar = () => {
//     const navigate = useNavigate();
//     const [active, setActive] = useState("/");

//     const handleClick = (path) => {
//         setActive(path);
//         navigate(path);
//     };

//     return (
//         <div className="fixed top-0 left-0 h-screen w-64 z-50 bg-[#111827] text-white flex flex-col items-center py-12">

//             <div className="text-center">
//                 <img
//                     src="/pppp.jpeg"
//                     className="w-35 h-35 rounded-full border-4 border-gray-600 mx-auto object-cover"
//                 />
//                 <h2 className="mt-4 text-2xl font-bold">Afsana Jannat</h2>
//             </div>

//             <nav className="mt-10 w-full pt-12 text-center">
//                 <ul className="space-y-4 font-semibold">
//                     {menuItems.map((item) => (
//                         <li
//                             key={item.path}
//                             onClick={() => handleClick(item.path)}
//                             className={`cursor-pointer transition ${active === item.path
//                                 ? "text-purple-400"
//                                 : "text-gray-200 hover:text-purple-400"
//                                 }`}
//                         >
//                             {item.name}
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//             <div className="mt-auto mb-6 flex gap-4 text-xl text-white">

//                 {/* LinkedIn */}
//                 <a
//                     href="https://www.linkedin.com/in/afsana-jannat-8484343b6/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-purple-400 transition"
//                 >
//                     <FaLinkedin />
//                 </a>

//                 {/* GitHub */}
//                 <a
//                     href="https://github.com/Afsana-Jannat"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-purple-400 transition"
//                 >
//                     <FaGithub />
//                 </a>

//             </div>
//         </div>
//     );
// };

// export default Sidebar;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const [active, setActive] = useState("/");
    const [open, setOpen] = useState(false);

    const handleClick = (path) => {
        setActive(path);
        navigate(path);
        setOpen(false); // close menu on mobile after click
    };

    return (
        <>
            {/* ===== MOBILE TOP BAR ===== */}
            <div className="md:hidden flex items-center justify-between p-4 bg-[#111827] text-white fixed top-0 left-0 w-full z-50">
                <h2 className="font-bold text-lg">Afsana Jannat</h2>
                <button onClick={() => setOpen(true)}>
                    <FaBars size={22} />
                </button>
            </div>

            {/* ===== SIDEBAR ===== */}
            <div
                className={`fixed top-0 left-0 h-screen w-64 z-50 bg-[#111827] text-white flex flex-col items-center py-12 transform transition-transform duration-300
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
                        src="/pppp.jpeg"
                        className="w-28 h-28 md:w-35 md:h-35 rounded-full border-4 border-gray-600 mx-auto object-cover"
                    />
                    <h2 className="mt-4 text-xl md:text-2xl font-bold">
                        Afsana Jannat
                    </h2>
                </div>

                <nav className="mt-10 w-full pt-10 text-center">
                    <ul className="space-y-4 font-semibold">
                        {menuItems.map((item) => (
                            <li
                                key={item.path}
                                onClick={() => handleClick(item.path)}
                                className={`cursor-pointer transition ${active === item.path
                                        ? "text-purple-400"
                                        : "text-gray-200 hover:text-purple-400"
                                    }`}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mt-auto mb-6 flex gap-4 text-xl">
                    <a
                        href="https://www.linkedin.com/in/afsana-jannat-8484343b6/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/Afsana-Jannat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Sidebar;