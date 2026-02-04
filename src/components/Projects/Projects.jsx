/**
 * Projects Component
 * Showcase portfolio projects with descriptions, technologies, and links
 */
import './Projects.css';

const Projects = () => {
    // Projects data
    const projectsData = [
        {
            id: 1,
            title: "E-Commerce Web Application",
            description: "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment integration. Features responsive design and smooth user experience.",
            image: null,
            technologies: ["React.js", "Node.js", "MongoDB", "Express", "Stripe API"],
            category: "Full Stack",
            github: "https://github.com",
            demo: "https://demo.com",
            featured: true
        },
        {
            id: 2,
            title: "Task Management Dashboard",
            description: "A productivity application for managing tasks and projects. Includes drag-and-drop functionality, team collaboration features, and progress tracking with visual charts.",
            image: null,
            technologies: ["React.js", "Redux", "CSS3", "Firebase"],
            category: "Frontend",
            github: "https://github.com",
            demo: "https://demo.com",
            featured: true
        },
        {
            id: 3,
            title: "Weather Forecast App",
            description: "Real-time weather application that displays current conditions and 7-day forecasts. Uses geolocation API and features beautiful weather animations.",
            image: null,
            technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeather API"],
            category: "Frontend",
            github: "https://github.com",
            demo: "https://demo.com",
            featured: false
        },
        {
            id: 4,
            title: "Personal Blog Platform",
            description: "A modern blogging platform with markdown support, categories, comments section, and an admin dashboard for content management.",
            image: null,
            technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
            category: "Full Stack",
            github: "https://github.com",
            demo: null,
            featured: false
        },
        {
            id: 5,
            title: "Portfolio Website Template",
            description: "A customizable portfolio website template with smooth animations, dark mode support, and fully responsive design.",
            image: null,
            technologies: ["React.js", "CSS3", "Framer Motion"],
            category: "Frontend",
            github: "https://github.com",
            demo: "https://demo.com",
            featured: false
        },
        {
            id: 6,
            title: "Recipe Finder Application",
            description: "Search and discover recipes from around the world. Features include saving favorites, nutritional information, and step-by-step cooking instructions.",
            image: null,
            technologies: ["React.js", "Spoonacular API", "CSS Modules"],
            category: "Frontend",
            github: "https://github.com",
            demo: "https://demo.com",
            featured: false
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects__container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-header__subtitle">My Recent Work</span>
                    <h2 className="section-header__title">Projects</h2>
                </div>

                {/* Projects Grid */}
                <div className="projects__grid">
                    {projectsData.map((project) => (
                        <div key={project.id} className={`projects__card ${project.featured ? 'projects__card--featured' : ''}`}>
                            {/* Project Image Placeholder */}
                            <div className="projects__image">
                                <div className="projects__image-placeholder">
                                    <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                                        <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h16V6H4zm2 2h2v2H6V8zm0 4h12v4H6v-4z" />
                                    </svg>
                                    <span>{project.title}</span>
                                </div>
                                {/* Category Badge */}
                                <span className="projects__category">{project.category}</span>
                                {/* Featured Badge */}
                                {project.featured && <span className="projects__featured-badge">⭐ Featured</span>}
                            </div>

                            {/* Project Content */}
                            <div className="projects__content">
                                <h3 className="projects__title">{project.title}</h3>
                                <p className="projects__description">{project.description}</p>

                                {/* Technologies */}
                                <div className="projects__tech">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="projects__tech-tag">{tech}</span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="projects__links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__link projects__link--github">
                                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        <span>Source Code</span>
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="projects__link projects__link--demo">
                                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                            </svg>
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
