"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

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
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
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
            <li><Link href="/experience">Experience</Link></li>
          </ul>
        </div>

        {/* Follow Me */}
        <div>
          <h3 className="font-bold text-xl mb-3">Follow Me</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <a
              href="https://linkedin.com/in/parasvarankar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin size={28} className="mx-auto" color="#0A66C2" />
              <p className="text-sm mt-1">LinkedIn</p>
            </a>
            <a
              href="https://instagram.com/parasvarankar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram size={28} className="mx-auto" color="#E4405F" />
              <p className="text-sm mt-1">Instagram</p>
            </a>
            <a
              href="https://wa.me/919309940782"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaWhatsapp size={28} className="mx-auto" color="#25D366" />
              <p className="text-sm mt-1">WhatsApp</p>
            </a>
            <a
              href="https://github.com/parasvarankar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub
                size={28}
                className="mx-auto"
                color={theme === "dark" ? "#ededed" : "#171717"}
              />
              <p className="text-sm mt-1">GitHub</p>
            </a>
            <a
              href="https://youtube.com/@parasvarankar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaYoutube size={28} className="mx-auto" color="#FF0000" />
              <p className="text-sm mt-1">YouTube</p>
            </a>
            <a
              href="https://t.me/parasvarankar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaTelegram size={28} className="mx-auto" color="#229ED9" />
              <p className="text-sm mt-1">Telegram</p>
            </a>
          </div>
        </div>

        {/* Stay Updated */}
        <div>
          <h3 className="font-bold text-xl mb-3">Stay Updated</h3>
          <p className="mb-3">
            Sign up for my newsletter to get the latest updates directly in your
            inbox.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded px-3 py-2 border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-black 
                         dark:focus:ring-white bg-[var(--background)] text-[var(--foreground)]"
              style={{ transition: "background 0.3s, color 0.3s" }}
            />
            <button
              type="submit"
              className="w-full font-semibold py-3 rounded-lg mt-2 
                         bg-white text-black hover:bg-gray-200 
                         dark:bg-black dark:text-white dark:hover:bg-gray-800 
                         border border-black dark:border-white 
                         transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-xl mb-3">Contact</h3>
          <p className="mb-3">
            Feel free to reach out to me for any collaborations or queries.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope />
            <span>parasvarankar235@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt />
            <span>+91 93099 40782</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Navi Mumbai, Panvel, India</span>
          </div>
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
