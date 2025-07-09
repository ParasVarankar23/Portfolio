"use client";
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTelegram,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";

export default function Contact() {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-4xl font-bold text-center mb-10 tracking-wide">
                Contact Me
            </h2>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
                {[
                    {
                        icon: <FaLinkedin size={40} color="#0A66C2" />,
                        label: "LinkedIn",
                        href: "https://linkedin.com/in/paras-varankar-8232872aa",
                        color: "#0A66C2",
                    },
                    {
                        icon: <FaInstagram size={40} color="#E4405F" />,
                        label: "Instagram",
                        href: "https://instagram.com/paras__2301",
                        color: "#E4405F",
                    },
                    {
                        icon: <FaWhatsapp size={40} color="#25D366" />,
                        label: "WhatsApp",
                        href: "https://wa.me/919309940782",
                        color: "#25D366",
                    },
                    {
                        icon: <FaGithub size={40} className="dark:text-white" />,
                        label: "GitHub",
                        href: "https://github.com/ParasVarankar23",
                    },
                    {
                        icon: <FaYoutube size={40} color="#FF0000" />,
                        label: "YouTube",
                        href: "https://www.youtube.com/@ParasVarankar",
                        color: "#FF0000",
                    },
                    {
                        icon: <FaTelegram size={40} color="#229ED9" />,
                        label: "Telegram",
                        href: "https://t.me/https://t.me/+xdk3gDWa6_YwMzI1",
                        color: "#229ED9",
                    },
                ].map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group w-20"
                    >
                        <div className="transition-transform duration-300 transform group-hover:scale-110">
                            {item.icon}
                        </div>
                        <span
                            className="mt-1 text-sm font-medium text-center"
                            style={{ color: item.color || "var(--foreground)" }}
                        >
                            {item.label}
                        </span>
                    </a>
                ))}
            </div>

            {/* Contact Form */}
            <h3 className="text-xl font-semibold text-center mb-6 mt-6 dark:text-white">
                Reach Out to Me
            </h3>

            <form
                className="rounded-xl shadow-lg p-10 flex flex-col gap-4 transition-colors duration-300"
                style={{
                    background: "var(--background)",
                    color: "var(--foreground)",
                    border: "1px solid #e5e7eb",
                }}
            >
                <div>
                    <label
                        className="block mb-1 font-medium"
                        style={{ color: "var(--foreground)" }}
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        style={{
                            background: "var(--background)",
                            color: "var(--foreground)",
                            borderColor: "var(--foreground)",
                        }}
                    />
                </div>
                <div>
                    <label
                        className="block mb-1 font-medium"
                        style={{ color: "var(--foreground)" }}
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        style={{
                            background: "var(--background)",
                            color: "var(--foreground)",
                            borderColor: "var(--foreground)",
                        }}
                    />
                </div>
                <div>
                    <label
                        className="block mb-1 font-medium"
                        style={{ color: "var(--foreground)" }}
                    >
                        Message
                    </label>
                    <textarea
                        placeholder="Write your message"
                        rows={4}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        style={{
                            background: "var(--background)",
                            color: "var(--foreground)",
                            borderColor: "var(--foreground)",
                        }}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full font-semibold py-3 rounded-lg mt-2 
          bg-white text-black hover:bg-gray-200 
          dark:bg-black dark:text-white dark:hover:bg-gray-800
          transition-colors duration-200 border border-black dark:border-white"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
