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
      className={`transition-all duration-300 text-sm ${theme}`}
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        borderTop: "1px solid #ccc",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
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
          <h3 className="font-bold text-lg mb-4">Follow Me</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { Icon: FaLinkedin, color: "#0A66C2", label: "LinkedIn", href: "https://linkedin.com/in/parasvarankar" },
              { Icon: FaInstagram, color: "#E4405F", label: "Instagram", href: "https://instagram.com/parasvarankar" },
              { Icon: FaWhatsapp, color: "#25D366", label: "WhatsApp", href: "https://wa.me/919309940782" },
              { Icon: FaGithub, color: theme === "dark" ? "#ededed" : "#171717", label: "GitHub", href: "https://github.com/parasvarankar" },
              { Icon: FaYoutube, color: "#FF0000", label: "YouTube", href: "https://youtube.com/@parasvarankar" },
              { Icon: FaTelegram, color: "#229ED9", label: "Telegram", href: "https://t.me/parasvarankar" },
            ].map(({ Icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:scale-105 transition-transform w-20"
              >
                <Icon size={26} color={color} />
                <p className="mt-1">{label}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
          <p className="mb-3">
            Subscribe to my newsletter for updates.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-[var(--background)] text-[var(--foreground)]"
            />
            <button
              type="submit"
              className="py-2 px-4 rounded font-semibold bg-white text-black hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800 border border-black dark:border-white transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <p className="mb-4">
            Reach out for collaborations, queries or coffee ☕
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-lg" />
              <span>parasvarankar235@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-lg" />
              <span>+91 93099 40782</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-lg" />
              <span>Navi Mumbai, Panvel, India</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-300" />

      <div className="text-center py-4 text-xs tracking-wide">
        © {new Date().getFullYear()} <b>Paras Varankar</b>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
