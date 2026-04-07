import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#0c0c0c] ml-64 text-gray-400 py-6 border-t border-white/10">

            <div className="max-w-6xl mx-auto text-center space-y-3 px-4">

                {/* Copyright */}
                <p className="text-sm">
                    Copyright © {new Date().getFullYear()}{" "}
                    <span className="text-purple-400 font-medium">
                        Afsana Jannat
                    </span>. All Rights Reserved.
                </p>

                {/* Links */}
                <div className="flex justify-center items-center gap-3 text-sm">
                    <span className="hover:text-purple-400 cursor-pointer transition">
                        Terms & Policy
                    </span>

                    <span className="text-gray-600">|</span>

                    <span className="hover:text-purple-400 cursor-pointer transition">
                        Disclaimer
                    </span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;