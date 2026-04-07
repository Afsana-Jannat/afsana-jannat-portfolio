// import { useState } from "react";

// const menuItems = [
//     { name: "Home", id: "" },
//     { name: "About Me", id: "about" },
//     { name: "What I Do", id: "services" },
//     { name: "Resume", id: "resume" },
//     { name: "Portfolio", id: "portfolio" },
//     { name: "Testimonial", id: "testimonial" },
//     { name: "Contact", id: "contact" },
// ];

// const Sidebar = () => {
//     const [active, setActive] = useState("home");

//     const handleClick = (id) => {
//         setActive(id);
//         document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     };

//     return (
//         <div className="fixed top-0 left-0 h-screen w-64 z-50 bg-[#111827] text-white flex flex-col items-center py-8">

//             {/* Profile */}
//             <div className="text-center">
//                 <img
//                     src="/pppp.jpeg"
//                     className="w-35 h-35 rounded-full border-4 border-gray-600 mx-auto object-cover"
//                 />
//                 <h2 className="mt-4 text-lg font-semibold">Afsana Jannat</h2>
//             </div>

//             {/* Menu */}
//             <nav className="mt-10 w-full px-6">
//                 <ul className="space-y-4 text-sm">
//                     {menuItems.map((item) => (
//                         <li
//                             key={item.id}
//                             onClick={() => handleClick(item.id)}
//                             className={`cursor-pointer transition ${active === item.id
//                                 ? "text-green-400"
//                                 : "text-gray-400 hover:text-green-400"
//                                 }`}
//                         >
//                             {item.name}
//                         </li>
//                     ))}
//                 </ul>
//             </nav>

//             {/* Social */}
//             <div className="mt-auto flex gap-4 text-gray-400 text-sm">
//                 <span>Fb</span>
//                 <span>Tw</span>
//                 <span>Gh</span>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";


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

    const handleClick = (path) => {
        setActive(path);
        navigate(path);
    };

    return (
        <div className="fixed top-0 left-0 h-screen w-64 z-50 bg-[#111827] text-white flex flex-col items-center py-12">

            <div className="text-center">
                <img
                    src="/pppp.jpeg"
                    className="w-35 h-35 rounded-full border-4 border-gray-600 mx-auto object-cover"
                />
                <h2 className="mt-4 text-2xl font-bold">Afsana Jannat</h2>
            </div>

            <nav className="mt-10 w-full pt-12 text-center">
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
            <div className="mt-auto mb-6 flex gap-4 text-xl text-white">

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/afsana-jannat-8484343b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition"
                >
                    <FaLinkedin />
                </a>

                {/* GitHub */}
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
    );
};

export default Sidebar;