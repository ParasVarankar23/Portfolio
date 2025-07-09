import { FaChartBar, FaGlobe, FaGraduationCap, FaHospital, FaUserShield } from "react-icons/fa";

const projectsData = [
    {
        icon: <FaHospital size={32} color="#2563eb" />,
        title: "Hospital Management System",
        description:
            "A full-stack web application for hospital administration, patient management, and appointment scheduling. Built with MERN stack, featuring secure authentication and responsive UI.",
        stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
        link: "#",
    },
    {
        icon: <FaGraduationCap size={32} color="#f59e42" />,
        title: "Student Result Management System",
        description:
            "A platform for schools to manage student results, generate report cards, and analyze academic performance. Includes admin and teacher dashboards.",
        stack: ["MySQL", "Express.js", "React.js", "Node.js", "Bootstrap"],
        link: "#",
    },
    {
        icon: <FaGlobe size={32} color="#22c55e" />,
        title: "Siddhi Resort Website",
        description:
            "A modern, SEO-optimized website for a resort, featuring booking forms, gallery, and Google Analytics integration. Mobile-first and fast-loading.",
        stack: ["Next.js", "React.js", "Tailwind CSS", "Google Analytics", "SEO"],
        link: "#",
    },
    {
        icon: <FaUserShield size={32} color="#facc15" />,
        title: "Cybersecurity Awareness Portal",
        description:
            "A portal to educate users about cybersecurity best practices, phishing detection, and safe browsing. Includes interactive quizzes and resources.",
        stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
        link: "#",
    },
    {
        icon: <FaChartBar size={32} color="#0ea5e9" />,
        title: "AI-Powered Analytics Dashboard",
        description:
            "A dashboard for visualizing business KPIs using AI-driven insights and dynamic charts. Supports user authentication and role-based access.",
        stack: ["React.js", "Node.js", "PostgreSQL", "Chart.js", "AI APIs"],
        link: "#",
    },
];

export default function Projects() {
    return (
        <section className="py-8 px-2 md:px-8">
            <h2
                className="text-3xl font-bold text-center mb-6 dark:text-white"
            >
                Projects
            </h2>
            <div className="flex flex-col gap-8">
                {projectsData.map((project, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl shadow-md p-6 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
                        style={{ boxShadow: "0 4px 16px 0 rgba(0,0,0,0.07)" }}
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <span>{project.icon}</span>
                            <h3 className="text-xl font-bold flex-1">{project.title}</h3>
                        </div>
                        <div className="mb-2 text-base font-normal">{project.description}</div>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {project.stack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 text-xs rounded bg-black/10 dark:bg-white/10 dark:text-white font-semibold"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {project.link && (
                            <a
                                href={project.link}
                                className="inline-block mt-2 dark:text-white hover:underline text-sm font-medium"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
