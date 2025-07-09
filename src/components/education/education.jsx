
import { FaBookOpen, FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

const educationData = [
    {
        icon: <FaUniversity size={36} color="#2563eb" />,
        title: "Bachelor of Science in Information Technology",
        subtitle:
            "Pillai College of Arts, Commerce & Science (Autonomous), Panvel, Mumbai, Maharashtra",
        duration: "2023 - 2026 | Ongoing",
    },
    {
        icon: <FaGraduationCap size={36} color="#f59e42" />,
        title: "Higher Secondary School Certificate (Science)",
        subtitle:
            "Shri Nanasaheb Kulkarni Junior College, Borli Panchatan, Shrivardhan, Raigad, Maharashtra",
        duration: "2021 - 2023 | 74.17%",
    },
    {
        icon: <FaSchool size={36} color="#22c55e" />,
        title: "Secondary School Certificate",
        subtitle:
            "Shri Mohanlal Soni Vidyalaya, Borli Panchatan, Shrivardhan, Raigad, Maharashtra",
        duration: "2016 - 2021 | 89.2%",
    },
    {
        icon: <FaBookOpen size={36} color="#facc15" />,
        title: "Primary Education",
        subtitle:
            "Janata Shikshan Sanstha English Medium School, Borli Panchatan, Shrivardhan, Raigad, Maharashtra",
        duration: "2010 - 2016 | 95%",
    },
];

export default function Education() {
    return (
        <section className="py-8 px-2 md:px-8">
            <h2
                className="text-3xl font-bold text-center mb-6 dark:text-white"
            >
                Education
            </h2>
            <div className="flex flex-col gap-8">
                {educationData.map((edu, idx) => (
                    <div
                        key={idx}
                        className="flex items-start gap-4 rounded-xl shadow-md p-6 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
                        style={{ boxShadow: "0 4px 16px 0 rgba(0,0,0,0.07)" }}
                    >
                        <div className="pt-1">{edu.icon}</div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">{edu.title}</h3>
                            <div className="mb-1 text-base font-normal">{edu.subtitle}</div>
                            <div className="text-sm font-medium opacity-80">{edu.duration}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
