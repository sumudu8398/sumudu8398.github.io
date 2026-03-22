import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiSelenium } from "react-icons/si";
import { DiDotnet } from "react-icons/di";

export default function Skills() {

    const automation = [
        { name: "Selenium", level: 90, icon: <SiSelenium /> },
        { name: "Playwright", level: 85, icon: "⚡" },
        { name: "RestAssured", level: 85, icon: "🔗" },
        { name: "WebDriverIO", level: 80, icon: "🌐" },
        { name: "Gatling", level: 75, icon: "🚀" }
    ];

    const languages = [
        { name: "Java", level: 90, icon: <FaJava /> },
        { name: "JavaScript", level: 85, icon: <SiJavascript /> },
        { name: "C#", level: 80, icon: <DiDotnet /> },
        { name: "TypeScript", level: 75, icon: <SiTypescript /> }
    ];

    const renderSkills = (skills) => (
        <div className="space-y-4">
            {skills.map((skill, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-800/60 p-4 rounded-xl shadow-md hover:shadow-blue-500/20 transition"
                >
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2 text-lg">
                            <span className="text-blue-400">{skill.icon}</span>
                            {skill.name}
                        </div>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1 }}
                            className="bg-blue-500 h-2 rounded-full"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );

    return (
        <section id="skills" className="max-w-6xl mx-auto p-10">
            <h2 className="text-3xl font-bold mb-10">Technical Skills</h2>

            <div className="grid md:grid-cols-2 gap-10">

                {/* Automation Frameworks */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-blue-400">
                        Automation Frameworks
                    </h3>
                    {renderSkills(automation)}
                </div>

                {/* Programming Languages */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-blue-400">
                        Programming Languages
                    </h3>
                    {renderSkills(languages)}
                </div>

            </div>
        </section>
    );
}