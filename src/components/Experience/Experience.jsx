/**
 * Experience Component
 * Display internship and work experience with detailed descriptions
 */
import './Experience.css';

const Experience = () => {
    // Experience data
    const experienceData = [
        {
            id: 1,
            role: "Associate Software Engineer",
            company: "Unykloud Technologies",
            companyLogo: "UNY",
            location: "Nanakramguda,Hyderabad",
            duration: "Mar 2025 - Mar 2026",
            type: "Full-Time",
            description: "Worked on developing responsive web applications using React.js and participated in agile development processes.",
            responsibilities: [
                "Developed and maintained responsive UI components using React.js and CSS3",
                "Collaborated with the design team to implement pixel-perfect interfaces",
                "Participated in code reviews and implemented feedback for code quality improvement",
                "Integrated REST APIs and managed application state using React hooks",
                "Contributed to 20% improvement in page load performance through optimization"
            ],
            technologies: ["React.js", "JavaScript", "CSS3", "Git", "REST APIs"]
        },
        {
            id: 2,
            role: "Web Development Intern",
            company: "Digital Innovators Hub",
            companyLogo: "DI",
            location: "New Delhi, India",
            duration: "Jan 2023 - Mar 2023",
            type: "Internship",
            description: "Gained hands-on experience in full-stack web development and learned industry best practices.",
            responsibilities: [
                "Built responsive landing pages using HTML, CSS, and JavaScript",
                "Assisted in developing backend APIs using Node.js and Express",
                "Managed databases using MongoDB and performed CRUD operations",
                "Worked with version control (Git) and followed branching strategies"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB", "Git"]
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="experience__container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-header__subtitle">What I've Done</span>
                    <h2 className="section-header__title">Experience</h2>
                </div>

                {/* Experience Cards */}
                <div className="experience__grid">
                    {experienceData.map((exp) => (
                        <div key={exp.id} className="experience__card">
                            {/* Card Header */}
                            <div className="experience__card-header">
                                <div className="experience__company-logo">
                                    {exp.companyLogo}
                                </div>
                                <div className="experience__header-info">
                                    <span className="experience__duration">{exp.duration}</span>
                                    <span className="experience__type">{exp.type}</span>
                                </div>
                            </div>

                            {/* Role & Company */}
                            <h3 className="experience__role">{exp.role}</h3>
                            <h4 className="experience__company">{exp.company}</h4>
                            <p className="experience__location">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                {exp.location}
                            </p>

                            {/* Description */}
                            <p className="experience__description">{exp.description}</p>

                            {/* Responsibilities */}
                            <div className="experience__responsibilities">
                                <h5>Key Responsibilities:</h5>
                                <ul>
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx}>{resp}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div className="experience__tech">
                                <h5>Technologies Used:</h5>
                                <div className="experience__tech-tags">
                                    {exp.technologies.map((tech, idx) => (
                                        <span key={idx} className="experience__tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
