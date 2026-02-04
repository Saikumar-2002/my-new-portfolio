/**
 * Skills Component
 * Display technical skills organized by category as simple lists
 */
import './Skills.css';

const Skills = () => {
    // Skills data organized by category - simple list format
    const skillsData = {
        frontend: {
            title: "Frontend Development",
            icon: "🎨",
            skills: [
                "HTML5",
                "CSS3 / SASS",
                "JavaScript (ES6+)",
                "React.js",
                "Responsive Design"
            ]
        },
        backend: {
            title: "Backend Development",
            icon: "⚙️",
            skills: [
                "Node.js",
                "Express.js",
                "Python",
                "RESTful APIs",
                "MongoDB",
                "SQL"
            ]
        },
        tools: {
            title: "Tools & Technologies",
            icon: "🛠️",
            skills: [
                "Git & GitHub",
                "VS Code",
                "npm / Yarn",
                "Chrome DevTools",
                "Postman"
            ]
        }
    };

    return (
        <section id="skills" className="skills">
            <div className="skills__container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-header__subtitle">What I Know</span>
                    <h2 className="section-header__title">Skills</h2>
                </div>

                {/* Skills Categories */}
                <div className="skills__categories">
                    {Object.entries(skillsData).map(([key, category]) => (
                        <div key={key} className="skills__category">
                            <div className="skills__category-header">
                                <span className="skills__category-icon">{category.icon}</span>
                                <h3 className="skills__category-title">{category.title}</h3>
                            </div>

                            <ul className="skills__list">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="skills__item">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Badges */}
                <div className="skills__badges">
                    <h3 className="skills__badges-title">Also Familiar With</h3>
                    <div className="skills__badges-grid">
                        {[
                            "Redux", "Next.js", "Vite", "Jest", "Bootstrap",
                            "Material UI", "Firebase", "Vercel", "Netlify",
                            "Docker", "Linux", "Agile/Scrum"
                        ].map((skill, idx) => (
                            <span key={idx} className="skills__badge">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
