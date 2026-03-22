import { motion } from "framer-motion";

const jobs = [
    { title: "Senior QA Engineer", company: "IGT1 Lanka", period: "2024 - Present" },
    { title: "Senior QA Engineer", company: "IFS", period: "2024" },
    { title: "Quality Engineer", company: "Sysco LABS", period: "2022 - 2024" },
    { title: "Associate QA Engineer", company: "Wiley", period: "2021 - 2022" }
];

export default function Experience() {
    return (
        <section id="experience" className="max-w-5xl mx-auto p-10">
            <h2 className="text-3xl font-bold mb-10">Experience</h2>

            <div className="border-l-2 border-blue-500 pl-6">
                {jobs.map((job, i) => (
                    <motion.div
                        key={i}
                        className="mb-10"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p className="text-blue-400">{job.company}</p>
                        <span className="text-sm text-gray-400">{job.period}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}