/**
 * Hero Component
 * The main landing section with profile photo, name, title, and CTAs
 * Features animated text and smooth scroll navigation
 */
import './Hero.css';
// Import profile image from assets
import profileImage from '../../../public/sky.jpeg';

const Hero = () => {
    // Smooth scroll to section handler
    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            {/* Animated background elements */}
            <div className="hero__bg-shapes">
                <div className="hero__shape hero__shape--1"></div>
                <div className="hero__shape hero__shape--2"></div>
                <div className="hero__shape hero__shape--3"></div>
            </div>

            <div className="hero__container">
                {/* Profile Image */}
                <div className="hero__image-wrapper">
                    <div className="hero__image-border">
                        <div className="hero__image">
                            {/* Profile photo */}
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="hero__profile-img"
                            />
                        </div>
                    </div>
                    {/* Status indicator */}
                    <div className="hero__status">
                        <span className="hero__status-dot"></span>
                        Available for opportunities
                    </div>
                </div>

                {/* Hero Content */}
                <div className="hero__content">
                    <p className="hero__greeting">Hello, I'm</p>
                    <h1 className="hero__name">Saikumar Kalva</h1>
                    <h2 className="hero__title">
                        <span className="hero__title-static">An</span>
                        <span className="hero__title-dynamic">Associate Software Developer</span>
                    </h2>
                    <p className="hero__summary">
                        Results-driven Software Developer with 1 year of professional experience in developing web applications using industry-standard technologies. Skilled in frontend and full-stack development, with a strong focus on clean code, performance, and real-world problem solving.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="hero__cta">
                        <a
                            href="SAI_KUMAR_RESUME.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero__btn hero__btn--primary"
                            style={{ textDecoration: 'none' }}
                        >
                            <span>Resume</span>
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                        </a>
                        <button
                            className="hero__btn hero__btn--secondary"
                            onClick={() => scrollToSection('#contact')}
                        >
                            <span>Contact Me</span>
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="hero__social">
                        <a href="https://github.com/Saikumar-2002" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/saikumar1002" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href="mailto:saikumarkalva10@gmail.com" className="hero__social-link" aria-label="Email">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero__scroll-indicator" onClick={() => scrollToSection('#about')}>
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
};

export default Hero;
