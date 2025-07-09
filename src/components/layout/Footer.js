"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";
    import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`footer ${theme}`}
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        borderTop: "1px solid #ccc",
        marginTop: "2rem",
        padding: 0,
        transition: "background 0.3s, color 0.3s"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xl mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/project">Projects</Link></li>
            <li><Link href="/education">Education</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        {/* Follow Me */}
        <div>
          <h3 className="font-bold text-xl mb-3">Follow Me</h3>
          <div className="flex items-center space-x-4 text-2xl">
            <a href="https://linkedin.com/in/parasvarankar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin color="#0A66C2" /></a>
            <a href="https://instagram.com/parasvarankar" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram color="#E4405F" /></a>
            <a href="https://wa.me/919309940782" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp color="#25D366" /></a>
            <a href="https://github.com/parasvarankar" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub color={theme === 'dark' ? '#ededed' : '#171717'} /></a>
            <a href="https://youtube.com/@parasvarankar" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube color="#FF0000" /></a>
            <a href="https://t.me/parasvarankar" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><FaTelegram color="#229ED9" /></a>
          </div>
        </div>
        {/* Stay Updated */}
        <div>
          <h3 className="font-bold text-xl mb-3">Stay Updated</h3>
          <p className="mb-3">Sign up for my newsletter to get the latest updates directly in your inbox.</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-[var(--background)] text-[var(--foreground)]"
              style={{ transition: "background 0.3s, color 0.3s" }}
            />
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 rounded-lg mt-2 hover:bg-black/80 transition-colors duration-200 dark:bg-white dark:text-black dark:hover:bg-white/80 dark:hover:text-black"
              style={{ backgroundColor: 'white', color: 'black' }} >
              Subscribe
            </button>
          </form>
        </div>
        {/* Contact */}
        <div>
          <h3 className="font-bold text-xl mb-3">Contact</h3>
          <p className="mb-3">Feel free to reach out to me for any collaborations or queries.</p>
          <div className="flex items-center gap-2 mb-2"><FaEnvelope /><span>parasvarankar235@gmail.com</span></div>
          <div className="flex items-center gap-2 mb-2"><FaPhoneAlt /><span>+91 93099 40782</span></div>
          <div className="flex items-center gap-2"><FaMapMarkerAlt /><span>Navi Mumbai, Panvel, India</span></div>
        </div>
      </div>
      <hr className="border-t border-gray-300 mx-4" />
      <div className="text-center py-4 text-sm">
        © {new Date().getFullYear()} <b>Paras Varankar</b>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
