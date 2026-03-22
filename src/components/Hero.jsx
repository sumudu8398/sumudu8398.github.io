import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

export default function Hero() {
    return (
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center relative px-6">

            {/* Background Glow */}
            <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-3xl rounded-full top-20"></div>

            {/* Profile Image */}
            <motion.img
                src="/profile.jpg"
                alt="Sumudu Dahanayake"
                className="w-64 md:w-80 lg:w-[360px] rounded-full border-4 border-blue-500
        shadow-[0_0_60px_rgba(59,130,246,0.7)] z-10 mb-6"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
            />

            {/* Name */}
            <motion.h1
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Sumudu Dahanayake
            </motion.h1>

            {/* Tagline */}
            <p className="text-gray-300 mt-4 text-lg max-w-xl z-10">
                Building scalable automation frameworks and delivering high-quality
                software through AI-driven testing solutions.
            </p>

            {/* Highlight badges */}
            <div className="flex gap-3 mt-6 flex-wrap justify-center z-10">
                <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">5+ Years Experience</span>
                <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">Automation Expert</span>
                <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">CI/CD Specialist</span>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap justify-center z-10">
                <a
                    href="/Sumudu_Dahanayake_CV.pdf"
                    className="bg-blue-600 px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition"
                >
                    Download CV
                </a>

                <a
                    href="https://github.com/sumudu8398"
                    target="_blank"
                    className="flex items-center gap-2 border px-6 py-3 rounded-lg hover:bg-white/10 transition"
                >
                    <FaGithub /> GitHub
                </a>

                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="flex items-center gap-2 border px-6 py-3 rounded-lg hover:bg-white/10 transition"
                >
                    <FaLinkedin /> LinkedIn
                </a>
            </div>

            {/* Contact Info (FIXED SIZE + SPACING) */}
            <div className="mt-4 text-base md:text-lg text-gray-300 z-10 space-y-2">

                <div className="flex items-center justify-center gap-2">
                    <FaEnvelope className="text-blue-400" />
                    <a href="mailto:sumu8398@gmail.com" className="hover:text-blue-400">
                        sumu8398@gmail.com
                    </a>
                </div>

                <div className="flex items-center justify-center gap-3">
                    <FaPhone className="text-blue-400" />
                    <a href="tel:+94777257746" className="hover:text-blue-400">
                        +94 777 257 746
                    </a>

                    <SiWhatsapp className="text-green-400 ml-2" />
                    <a
                        href="https://wa.me/94777257746"
                        target="_blank"
                        className="hover:text-green-400"
                    >
                        WhatsApp
                    </a>
                </div>

            </div>

        </section>
    );
}