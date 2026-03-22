import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

export default function Education() {
    return (
        <section id="education" className="max-w-5xl mx-auto pt-10 pb-12 px-6">

            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Education & Certifications
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

                {/* Education Card */}
                <motion.div
                    className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >

                    {/* Top Row */}
                    <div className="flex items-start justify-between gap-4">

                        {/* Left side (Title + icon) */}
                        <div className="flex items-center gap-3">
                            <FaGraduationCap className="text-blue-400 text-xl" />
                            <h3 className="text-xl font-semibold text-blue-400 leading-tight">
                                BEng (Hons) Software Engineering
                            </h3>
                        </div>

                        {/* Badge */}
                        <div className="bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full border border-yellow-400/30 whitespace-nowrap">
                            🏆 First Class Honours
                        </div>

                    </div>

                    {/* University */}
                    <p className="text-gray-300 mt-4">
                        University of Westminster
                    </p>

                    {/* Year */}
                    <p className="text-sm text-gray-400 mt-1">
                        2022
                    </p>

                </motion.div>

                {/* Certification Card */}
                <motion.div
                    className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <FaCertificate className="text-blue-400 text-xl" />
                        <h3 className="text-xl font-semibold text-blue-400">
                            ISTQB Certification
                        </h3>
                    </div>

                    <p className="text-gray-300">
                        ISTQB Certified Tester – Foundation Level
                    </p>

                    <p className="text-sm text-gray-400 mt-1">
                        International Software Testing Qualifications Board
                    </p>
                </motion.div>

            </div>
        </section>
    );
}