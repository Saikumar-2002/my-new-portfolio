/**
 * Interests Component
 * Display areas of interest with animated cards
 */
import './Interests.css';

const Interests = () => {
    // Interests data
    const interestsData = [
        {
            id: 6,
            title: "Artificial Intelligence",
            description: "Exploring the latest trends and advancements in AI and machine learning.",
            icon: (< svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" >
                <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7M9 21v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1m3-17a5 5 0 0 0-5 5c0 2.05 1.23 3.81 3 4.58V16h4v-2.42c1.77-.77 3-2.53 3-4.58a5 5 0 0 0-5-5z" />
            </svg >)
        },
        {
            id: 1,
            title: "Web Development",
            description: "Building responsive, user-friendly web applications with modern technologies and best practices.",
            icon: (
                <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Cloud Computing",
            description: "Exploring cloud platforms like AWS, Azure, and GCP for scalable and efficient solutions.",
            icon: (
                <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Problem Solving",
            description: "Tackling complex challenges with algorithmic thinking and data structures.",
            icon: (
                <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Learning New Technologies",
            description: "Always curious about emerging technologies and frameworks in the tech landscape.",
            icon: (
                <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
            )
        },
        {
            id: 5,
            title: "UI/UX Design",
            description: "Creating intuitive and visually appealing user interfaces that enhance user experience.",
            icon: (
                <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>
            )
        },

    ];

    return (
        <section id="interests" className="interests">
            <div className="interests__container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-header__subtitle">What Excites Me</span>
                    <h2 className="section-header__title">Areas of Interest</h2>
                </div>

                {/* Interests Grid */}
                <div className="interests__grid">
                    {interestsData.map((interest) => (
                        <div key={interest.id} className="interests__card">
                            <div className="interests__icon">
                                {interest.icon}
                            </div>
                            <h3 className="interests__title">{interest.title}</h3>
                            <p className="interests__description">{interest.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interests;
