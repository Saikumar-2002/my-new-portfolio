/**
 * About Component
 * Brief introduction section with career objectives and passion for technology
 */
import './About.css';

const About = () => {
    // Key highlights to display
    const highlights = [
        { icon: '🎯', title: 'Goal-Oriented', desc: `Focused on delivering quality results` },
        { icon: '📚', title: 'Quick Learner', desc: 'Adapts rapidly to new technologies' },
        { icon: '🤝', title: 'Team Player', desc: 'Collaborative and communicative' },
        { icon: '💡', title: 'Problem Solver', desc: 'Creative approach to challenges' }
    ];

    return (
        <section id="about" className="about">
            <div className="about__container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-header__subtitle">Get To Know</span>
                    <h2 className="section-header__title">About Me</h2>
                </div>

                <div className="about__content">
                    {/* About Text */}
                    <div className="about__text">
                        <div className="about__intro">
                            <p>
                                Hello! I'm a passionate and dedicated <strong>Software Developer</strong> with
                                around <strong>11 months  of hands-on experience</strong> in building modern web
                                applications using popular frontend and full-stack technologies. I enjoy
                                creating scalable, user-friendly solutions and contributing to meaningful projects.
                            </p>
                            <p>
                                My professional journey started with a strong academic foundation and grew through
                                real-world application development, where I worked on responsive UIs, API integrations,
                                and performance-focused features. I believe in writing clean, maintainable code and
                                continuously improving my skills to stay aligned with evolving industry standards.
                            </p>
                        </div>

                        <div className="about__career-objective">
                            <h3>Career Objective</h3>
                            <p>
                                To work as a Software Developer in a growth-oriented organization where I can apply my
                                technical expertise, gain deeper hands-on experience, and contribute to building
                                high-quality applications while continuously advancing my professional skills.
                            </p>
                        </div>

                        <div className="about__passion">
                            <h3>What Drives Me</h3>
                            <p>
                                I am driven by the process of transforming ideas into functional digital products.
                                From developing interactive frontend interfaces to working with backend logic and
                                cloud-based solutions, I enjoy solving real-world problems through code. I am
                                particularly enthusiastic about full-stack development, system design, and learning
                                modern technologies.
                            </p>
                        </div>
                    </div>


                    {/* Highlights Grid */}
                    <div className="about__highlights">
                        {highlights.map((item, index) => (
                            <div key={index} className="about__highlight-card">
                                <span className="about__highlight-icon">{item.icon}</span>
                                <h4 className="about__highlight-title">{item.title}</h4>
                                <p className="about__highlight-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
