import { motion } from "framer-motion";

const experiences = [
    {
        title: "Senior QA Engineer",
        company: "IGT1 Lanka",
        period: "Nov 2024 - Present",
        project: "WorkWave",
        points: [
            "Automation framework design Using PlayWright",
            "Converted existing UI Smoke test cases from Selenium to PlayWright",
            "Reduced Flaky test case count",
            "CI/CD optimization",
        ]
    },
    {
        title: "Senior QA Engineer",
        company: "IFS",
        period: "Aug 2024 - Oct 2024",
        project: "WorkWave",
        points: [
            "End-to-end testing",
            "Regression testing",
            "UI Automation using Selenium + C#",
            "Stakeholder collaboration"
        ]
    },
    {
        title: "Test Automation Engineer",
        company: "Cloud Solutions International",
        period: "April 2024 - July 2024",
        points: [
            "API Automation Using Selenium with TestNG Framework"
        ]
    },
    {
        title: "Quality Engineer",
        company: "Sysco LABS",
        period: "Jun 2022 - Apr 2024",
        points: [
            "Mobile testing for both Android and iOS devices",
            "Cross device testing",
            "High level test design",
            "Mobile automation using APIUM"
        ]
    },
    {
        title: "Associate QA Engineer",
        company: "Wiley",
        period: "Sep 2021 - Jun 2022",
        points: [
            "Conducted API Automation Using REST-ASSURED",
            "Performance Testing using LoadRunner and Gatling",
            "Performance Test Result Analyzing",
            "Performance Test Designs"
        ]
    },
    {
        title: "Intern QE",
        company: "Wiley",
        period: "Sep 2020 - Sep 2021",
        points: [
            "WebDriverIO automation",
            "Cypress testing",
            "E2E Functional Testing"
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="max-w-4xl mx-auto p-10">
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>

            <div className="relative border-l border-blue-500">

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="mb-10 ml-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        {/* Dot */}
                        <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 mt-2 shadow-lg"></div>

                        {/* Card */}
                        <div className="bg-slate-800/60 p-5 rounded-xl shadow-md hover:shadow-blue-500/20 transition">

                            <h3 className="text-lg font-bold">
                                {exp.title} — {exp.company}
                            </h3>

                            <span className="text-sm text-gray-400">{exp.period}</span>

                            {exp.project && (
                                <p className="text-sm text-blue-400 mt-1">
                                    Project: {exp.project}
                                </p>
                            )}

                            <ul className="mt-3 text-gray-300 text-sm space-y-1">
                                {exp.points.map((point, i) => (
                                    <li key={i}>• {point}</li>
                                ))}
                            </ul>

                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}