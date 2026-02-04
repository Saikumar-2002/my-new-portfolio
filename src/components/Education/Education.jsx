/**
 * Education Component
 * Displays educational background in a timeline format
 */
import './Education.css';

const Education = () => {
    // Education data
    const educationData = [
        {
            id: 1,
            degree: "Bachelor of Technology (B.Tech)",
            institution: "Vaageswari Engineering College",
            location: "Karimnagar, Telangana",
            specialization: "Computer Science & Engineering(AI and ML)",
            duration: "2020 - 2024",
            grade: "CGPA: 7.9/10",
            highlights: [
                "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management,NLP,Cloud Computing,Artificial Intelligence,Machine Learning",
                "Participated in various coding competitions and hackathons",
                "Served as an NSS Volunteer Leader, conducting digital literacy classes and social awareness sessions on topics including Artificial Intelligence for school students."
            ]
        },
        {
            id: 2,
            degree: "Higher Secondary Certificate (XII)",
            institution: "SR Boy's Junior College",
            location: "Karimnagar, Telangana",
            specialization: "MPC",
            duration: "2018 - 2020",
            grade: "Percentage: 95%",
            highlights: [
                "Secured a high percentage in the first year and was recognized as a merit list candidate."
            ]
        },
        {
            id: 3,
            degree: "Secondary School Certificate (X)",
            institution: "ST Mary's E/M High School",
            location: "Sulthanabad, Telangana",
            specialization: "General",
            duration: "2017 - 2018",
            grade: "Percentage: 91%",
            highlights: [
                "Excellent academic performance",
                "Active participant in extracurricular activities"
            ]
        }
    ];

    return (
        <section id="education" className="education">
            <div className="education__container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-header__subtitle">My Academic Background</span>
                    <h2 className="section-header__title">Education</h2>
                </div>

                {/* Timeline */}
                <div className="education__timeline">
                    {educationData.map((edu, index) => (
                        <div key={edu.id} className="education__item">
                            {/* Timeline connector */}
                            <div className="education__timeline-line">
                                <div className="education__timeline-dot"></div>
                            </div>

                            {/* Education Card */}
                            <div className="education__card">
                                <div className="education__card-header">
                                    <div className="education__duration-badge">{edu.duration}</div>
                                    <span className="education__grade">{edu.grade}</span>
                                </div>

                                <h3 className="education__degree">{edu.degree}</h3>
                                <h4 className="education__institution">{edu.institution}</h4>
                                <p className="education__location">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                    {edu.location}
                                </p>
                                <p className="education__specialization">
                                    <strong>Specialization:</strong> {edu.specialization}
                                </p>

                                {/* Highlights */}
                                <ul className="education__highlights">
                                    {edu.highlights.map((highlight, idx) => (
                                        <li key={idx} className="education__highlight">
                                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                            </svg>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
