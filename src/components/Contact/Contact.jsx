

// import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";

// const Contact = () => {
//     const form = useRef();

//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState("");
//     const [error, setError] = useState("");

//     const sendEmail = (e) => {
//         e.preventDefault();

//         setLoading(true);
//         setSuccess("");
//         setError("");

//         emailjs
//             .sendForm(
//                 "service_six49lq",
//                 "template_0wtvvgs",
//                 form.current,
//                 "e8Z45O-_XOj6xbt2W"
//             )
//             .then(
//                 () => {
//                     setLoading(false);
//                     setSuccess("Message sent successfully ✅");
//                     form.current.reset();
//                 },
//                 () => {
//                     setLoading(false);
//                     setError("Failed to send the message. Please try again.");
//                 }
//             );
//     };

//     return (
//         <section className="bg-[#0c0c0c] md:ml-64 text-white py-14 px-4">

//             {/* TITLE */}
//             <div className="relative flex justify-center items-center mb-16">
//                 <h2 className="md:text-7xl text-6xl md:text-[110px] font-extrabold text-[#1a1a1a] select-none">
//                     CONTACT
//                 </h2>

//                 <h2 className="absolute text-2xl md:text-4xl font-bold text-white">
//                     Get In Touch
//                 </h2>
//             </div>

//             {/* CONTENT */}
//             <div className="max-w-6xl px-6 mx-auto grid md:grid-cols-2 gap-12 items-center">

//                 {/* LEFT */}
//                 <div className="space-y-6">
//                     <h3 className="text-3xl font-semibold">
//                         Let’s <span className="text-purple-400">Connect</span>
//                     </h3>

//                     <p className="text-gray-400 leading-relaxed">
//                         Have an idea, project, or just want to say hi?
//                         I’m always open to discussing new opportunities.
//                     </p>

//                     <div className="space-y-3 text-gray-300">
//                         <p>📍 Barishal, Bangladesh</p>
//                         <p>📧 afsanajannat205@gmail.com</p>
//                         <p>📞 +8801890545497</p>
//                     </div>
//                 </div>

//                 {/* FORM */}
//                 <div className="bg-white/5 backdrop-blur-lg p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl">

//                     <form ref={form} onSubmit={sendEmail} className="space-y-5">

//                         {/* Name */}
//                         <div className="flex items-center bg-black/40 border border-gray-700 rounded-lg px-3
//                         focus-within:border-purple-400
//                         focus-within:ring-2 focus-within:ring-purple-400/40
//                         focus-within:shadow-[0_0_15px_rgba(168,85,247,0.6)]
//                         hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]
//                         transition duration-300">
//                             <FaUser className="text-gray-400 mr-2" />
//                             <input
//                                 type="text"
//                                 name="from_name"
//                                 placeholder="Your Name"
//                                 required
//                                 className="w-full p-3 bg-transparent outline-none"
//                             />
//                         </div>

//                         {/* Email */}
//                         <div className="flex items-center bg-black/40 border border-gray-700 rounded-lg px-3
//                         focus-within:border-purple-400
//                         focus-within:ring-2 focus-within:ring-purple-400/40
//                         focus-within:shadow-[0_0_15px_rgba(168,85,247,0.6)]
//                         hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]
//                         transition duration-300">
//                             <FaEnvelope className="text-gray-400 mr-2" />
//                             <input
//                                 type="email"
//                                 name="email_id"
//                                 placeholder="Your Email"
//                                 required
//                                 className="w-full p-3 bg-transparent outline-none"
//                             />
//                         </div>

//                         {/* Message */}
//                         <div className="flex items-start bg-black/40 border border-gray-700 rounded-lg px-3
//                         focus-within:border-purple-400
//                         focus-within:ring-2 focus-within:ring-purple-400/40
//                         focus-within:shadow-[0_0_15px_rgba(168,85,247,0.6)]
//                         hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]
//                         transition duration-300">
//                             <FaCommentDots className="text-gray-400 mr-2 mt-4" />
//                             <textarea
//                                 name="message"
//                                 rows="5"
//                                 placeholder="Your Message"
//                                 required
//                                 className="w-full p-3 bg-transparent outline-none resize-none"
//                             />
//                         </div>

//                         {/* Button */}
//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="w-full py-3 rounded-lg font-semibold text-white
//                             bg-gradient-to-r from-purple-500 to-purple-800
//                             hover:scale-[1.03]
//                             hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
//                             transition duration-300"
//                         >
//                             {loading ? "Sending Message..." : "Send Message"}
//                         </button>

//                         {/* Messages */}
//                         {success && (
//                             <p className="text-purple-400 text-center text-sm">
//                                 {success}
//                             </p>
//                         )}

//                         {error && (
//                             <p className="text-pink-400 text-center text-sm">
//                                 {error}
//                             </p>
//                         )}
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;


import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
    FaEnvelope,
    FaUser,
    FaCommentDots,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

const Contact = () => {
    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);
        setSuccess("");
        setError("");

        emailjs
            .sendForm(
                "service_six49lq",
                "template_0wtvvgs",
                form.current,
                "e8Z45O-_XOj6xbt2W"
            )
            .then(
                () => {
                    setLoading(false);
                    setSuccess("Message sent successfully ✅");
                    form.current.reset();
                },
                () => {
                    setLoading(false);
                    setError("Failed to send the message. Please try again.");
                }
            );
    };

    return (
        <section className="bg-[#0c0c0c] md:ml-64 text-white py-14 px-4">

            {/* TITLE */}
            <div className="relative flex justify-center items-center mb-16">
                <h2 className="md:text-7xl text-6xl md:text-[110px] font-extrabold text-[#1a1a1a] select-none">
                    CONTACT
                </h2>
                <h2 className="absolute text-2xl md:text-4xl font-bold text-white">
                    Get In Touch
                </h2>
            </div>

            {/* CONTENT */}
            <div className="max-w-6xl px-6 mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT SIDE (UPDATED ONLY) */}
                <div className="space-y-6">
                    <h3 className="text-3xl font-semibold">
                        Let’s <span className="text-purple-400">Connect</span>
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                        Have an idea, project, or just want to say hi?
                        I’m always open to discussing new opportunities.
                    </p>

                    {/* CONTACT INFO */}
                    <div className="space-y-4 text-gray-300">
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-purple-400" />
                            <span>Barishal, Bangladesh</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-purple-400" />
                            <span>afsanajannat205@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-purple-400" />
                            <span>+8801890545497</span>
                        </div>
                    </div>

                    {/* SOCIAL LINKS */}
                    <div className="flex gap-6 pt-3">
                        <a
                            href="https://github.com/Afsana-Jannat"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition"
                        >
                            <FaGithub />
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/afsana-jannat-8484343b6/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* FORM (UNCHANGED) */}
                <div className="bg-white/5 backdrop-blur-lg p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl">
                    <form ref={form} onSubmit={sendEmail} className="space-y-5">

                        {/* Name */}
                        <div className="flex items-center bg-black/40 border border-gray-700 rounded-lg px-3
                        focus-within:border-purple-400
                        focus-within:ring-2 focus-within:ring-purple-400/40
                        focus-within:shadow-[0_0_15px_rgba(168,85,247,0.6)]
                        hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]
                        transition duration-300">
                            <FaUser className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Your Name"
                                required
                                className="w-full p-3 bg-transparent outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex items-center bg-black/40 border border-gray-700 rounded-lg px-3
                        focus-within:border-purple-400
                        focus-within:ring-2 focus-within:ring-purple-400/40
                        focus-within:shadow-[0_0_15px_rgba(168,85,247,0.6)]
                        hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]
                        transition duration-300">
                            <FaEnvelope className="text-gray-400 mr-2" />
                            <input
                                type="email"
                                name="email_id"
                                placeholder="Your Email"
                                required
                                className="w-full p-3 bg-transparent outline-none"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex items-start bg-black/40 border border-gray-700 rounded-lg px-3
                        focus-within:border-purple-400
                        focus-within:ring-2 focus-within:ring-purple-400/40
                        focus-within:shadow-[0_0_15px_rgba(168,85,247,0.6)]
                        hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]
                        transition duration-300">
                            <FaCommentDots className="text-gray-400 mr-2 mt-4" />
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                required
                                className="w-full p-3 bg-transparent outline-none resize-none"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-lg font-semibold text-white
                            bg-gradient-to-r from-purple-500 to-purple-800
                            hover:scale-[1.03]
                            hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
                            transition duration-300"
                        >
                            {loading ? "Sending Message..." : "Send Message"}
                        </button>

                        {/* Messages */}
                        {success && (
                            <p className="text-purple-400 text-center text-sm">
                                {success}
                            </p>
                        )}

                        {error && (
                            <p className="text-pink-400 text-center text-sm">
                                {error}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;