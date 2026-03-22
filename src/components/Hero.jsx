import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center relative">

            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-20"></div>

            <motion.img
                src="/profile.jpg"
                className="w-44 rounded-full border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.7)] z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
            />

            <motion.h1
                className="text-5xl md:text-6xl font-bold mt-6 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Sumudu Dahanayake
            </motion.h1>

            <p className="text-gray-300 mt-3 text-lg z-10">
                Senior QA Engineer • Automation • AI Driven Testing
            </p>

            {/* Highlight badges */}
            <div className="flex gap-4 mt-6 flex-wrap justify-center z-10">
                <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">5+ Years Experience</span>
                <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">Automation Expert</span>
                <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">CI/CD Specialist</span>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4 z-10">
                <a
                    href="/Sumudu_Dahanayake_CV.pdf"
                    className="bg-blue-600 px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition"
                >
                    Download CV
                </a>

                <a
                    href="https://github.com/sumudu8398"
                    target="_blank"
                    className="border px-5 py-2 rounded-lg hover:bg-white/10 transition"
                >
                    GitHub
                </a>
            </div>

        </section>
    );
}