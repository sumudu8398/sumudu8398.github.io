import { motion } from "framer-motion";
import { SiJenkins, SiJira, SiPostman, SiGithub } from "react-icons/si";
import { FaTools } from "react-icons/fa";

export default function Tools() {

    const tools = [
        { name: "Jenkins", icon: <SiJenkins /> },
        { name: "Azure DevOps", icon: "⚙️" },
        { name: "JIRA", icon: <SiJira /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "TestRail", icon: "📊" },
        { name: "Bitrise", icon: "🚀" }
    ];

    return (
        <section id="tools" className="max-w-6xl mx-auto p-10">
            <h2 className="text-3xl font-bold mb-10">Tools & Platforms</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {tools.map((tool, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl text-center shadow-lg hover:shadow-blue-500/30 transition"
                    >
                        <div className="text-3xl text-blue-400 mb-3 flex justify-center">
                            {tool.icon}
                        </div>

                        <p className="text-sm font-medium">{tool.name}</p>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}