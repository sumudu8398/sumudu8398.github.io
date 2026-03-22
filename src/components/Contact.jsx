import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_dpxl3zd",
            "template_6a5xh8a",
            form.current,
            "vZsMqlOC9P7HKPPZp"
        )
            .then(() => {
                alert("Message sent successfully 🚀");
            })
            .catch(() => {
                alert("Failed to send message ❌");
            });
    };

    return (
        <section id="contact" className="max-w-4xl mx-auto p-10">
            <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>

            <motion.form
                ref={form}
                onSubmit={sendEmail}
                className="bg-slate-800/60 p-8 rounded-2xl shadow-lg space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none"
                />

                <button
                    type="submit"
                    className="bg-blue-600 px-6 py-3 rounded-lg w-full hover:scale-105 transition"
                >
                    Send Message
                </button>
            </motion.form>
        </section>
    );
}