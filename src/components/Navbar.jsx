export default function Navbar() {
    return (
        <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
            <div className="max-w-6xl mx-auto flex justify-center gap-8 p-4 text-sm">
                <a href="#about" className="hover:text-blue-400">About</a>
                <a href="#skills" className="hover:text-blue-400">Skills</a>
                <a href="#tools" className="hover:text-blue-400">Tools</a>
                <a href="https://github.com/sumudu8398" target="_blank">
                    GitHub
                </a>
                <a href="#experience" className="hover:text-blue-400">Experience</a>
                <a href="#education" className="hover:text-blue-400">Education</a>
                <a href="#contact" className="hover:text-blue-400">Contact</a>
            </div>
        </div>
    );
}