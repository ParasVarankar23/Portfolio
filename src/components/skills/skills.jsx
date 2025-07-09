
import { FaChartLine, FaDatabase, FaHtml5, FaJava, FaLock, FaNodeJs, FaPython, FaReact } from "react-icons/fa";

const skillsData = [
    {
        icon: <FaHtml5 size={28} color="#e34c26" />, // Frontend
        title: "Frontend Development (HTML, CSS, JS)",
        description:
            "Strong skills in building interactive and responsive web UIs using HTML5, CSS3, and JavaScript.",
        rating: 95,
    },
    {
        icon: <FaReact size={28} color="#61dafb" />, // React/Next
        title: "React.js & Next.js",
        description:
            "Building reusable components and SSR/static web apps with React and Next.js.",
        rating: 85,
    },
    {
        icon: <FaNodeJs size={28} color="#3c873a" />, // Backend
        title: "Backend Development (Node.js, Express.js)",
        description:
            "Creating APIs and server-side logic using Node.js and Express.js.",
        rating: 70,
    },
    {
        icon: <FaJava size={28} color="#e76f00" />, // Java
        title: "Java Programming",
        description:
            "Hands-on experience in Java programming for software development.",
        rating: 70,
    },
    {
        icon: <FaDatabase size={28} color="#4db33d" />, // Databases
        title: "Databases (MongoDB, MySQL, SQL Plus, PostgreSQL)",
        description:
            "Efficient in handling NoSQL and relational databases for backend support.",
        rating: 85,
    },
    {
        icon: <FaLock size={28} color="#6366f1" />, // Cybersecurity
        title: "Cybersecurity Tools",
        description:
            "Basic understanding of tools and practices for securing web apps.",
        rating: 70,
    },
    {
        icon: <FaPython size={28} color="#3776ab" />, // Python
        title: "Python & DSA",
        description:
            "Proficient in Python scripting and solving problems using Data Structures and Algorithms.",
        rating: 80,
    },
    {
        icon: <FaChartLine size={28} color="#0ea5e9" />, // SEO/Analytics
        title: "SEO, Google Analytics & SLO",
        description:
            "Knowledge of SEO strategies, website performance tracking and setting SLOs.",
        rating: 80,
    },
];

export default function Skills() {
    return (
        <section className="py-8 px-2 md:px-8">
            <h2
                className="text-3xl font-bold text-center mb-6 dark:text-white"
            >
                Skills
            </h2>
            <div className="flex flex-col gap-8">
                {skillsData.map((skill, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl shadow-md p-6 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
                        style={{ boxShadow: "0 4px 16px 0 rgba(0,0,0,0.07)" }}
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <span>{skill.icon}</span>
                            <h3 className="text-xl font-bold flex-1">{skill.title}</h3>
                            <span className="text-lg font-semibold dark:text-white">{skill.rating}%</span>
                        </div>
                        <div className="mb-2 text-base font-normal">{skill.description}</div>
                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-3 bg-black dark:bg-white rounded-full transition-all duration-300"
                                style={{ width: `${skill.rating}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
