import { FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="max-w-xl mx-auto p-6">
            <h2
                className="text-3xl font-bold text-center mb-6 text-black dark:text-white"
                style={{ color: 'black', WebkitTextFillColor: 'white', WebkitTextStroke: '0.5px white' }}
            >
                Contact Us
            </h2>
            <div className="flex justify-center gap-10 mb-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                    <FaLinkedin size={40} color="#0A66C2" className="group-hover:scale-110 transition-transform" />
                    <span className="mt-1 text-base text-[#0A66C2]">LinkedIn</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                    <FaInstagram size={40} color="#E4405F" className="group-hover:scale-110 transition-transform" />
                    <span className="mt-1 text-base text-[#E4405F]">Instagram</span>
                </a>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                    <FaWhatsapp size={40} color="#25D366" className="group-hover:scale-110 transition-transform" />
                    <span className="mt-1 text-base text-[#25D366]">WhatsApp</span>
                </a>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                >
                    <FaGithub
                        size={40}
                        className="group-hover:scale-110 transition-transform dark:text-white"
                    />
                    <span className="mt-1 text-base  dark:text-white">GitHub</span>
                </a>

                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                    <FaYoutube size={40} color="#FF0000" className="group-hover:scale-110 transition-transform" />
                    <span className="mt-1 text-base text-[#FF0000]">YouTube</span>
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                    <FaTelegram size={40} color="#229ED9" className="group-hover:scale-110 transition-transform" />
                    <span className="mt-1 text-base text-[#229ED9]">Telegram</span>
                </a>
            </div>
            <h3 className="text-xl font-semibold text-center mb-6 mt-8 text-black dark:text-white">Reach Out to Me</h3>
            <form
                className="rounded-xl shadow-lg p-6 flex flex-col gap-4 transition-colors duration-300"
                style={{
                    background: "var(--background)",
                    color: "var(--foreground)",
                    border: "1px solid #e5e7eb"
                }}
            >
                <div>
                    <label className="block mb-1 font-medium" style={{ color: "var(--foreground)" }}>Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        style={{
                            background: "var(--background)",
                            color: "var(--foreground)",
                            borderColor: "var(--foreground)"
                        }}
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium" style={{ color: "var(--foreground)" }}>Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        style={{
                            background: "var(--background)",
                            color: "var(--foreground)",
                            borderColor: "var(--foreground)"
                        }}
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium" style={{ color: "var(--foreground)" }}>Message</label>
                    <textarea
                        placeholder="Write your message"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        rows={4}
                        style={{
                            background: "var(--background)",
                            color: "var(--foreground)",
                            borderColor: "var(--foreground)"
                        }}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-black text-white font-semibold py-3 rounded-lg mt-2 hover:bg-black/80 transition-colors duration-200 dark:bg-white dark:text-black dark:hover:bg-white/80 dark:hover:text-black"
                    style={{ backgroundColor: 'white', color: 'black' }}
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
