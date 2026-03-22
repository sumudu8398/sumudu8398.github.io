import { motion } from "framer-motion";

const projects = [
    {
        title: "Insurance Claim Automation",
        desc: "AI-based vehicle damage detection with automated quotation system"
    },
    {
        title: "Automation Framework",
        desc: "Scalable UI + API testing with CI/CD integration"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="max-w-6xl mx-auto p-10">
            <h2 className="text-3xl font-bold mb-10">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition"
                    >
                        <h3 className="text-xl font-bold">{p.title}</h3>
                        <p className="text-gray-400 mt-2">{p.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}