export default function About() {
    return (
        <section id="about" className="max-w-4xl mx-auto pt-6 pb-12 px-6 text-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Me
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I am a <span className="text-blue-400 font-semibold">Senior QA Engineer</span> with over
                <span className="text-blue-400 font-semibold"> 5 years of experience</span> specializing in
                automation frameworks, CI/CD pipelines, and scalable quality engineering solutions.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4">
                I focus on building reliable, efficient testing systems using tools like
                <span className="text-blue-400 font-semibold"> Selenium, Playwright, and REST Assured</span>,
                while continuously exploring AI-driven approaches to improve software quality.
            </p>

        </section>
    );
}