import {
    Code2,
    Database,
    Layers3,
    MonitorSmartphone,
    ArrowUpRight,
} from "lucide-react";

function Expertise() {
    const expertiseCards = [
        {
            number: "01",
            icon: Code2,
            title: "Frontend Development",
            description:
                "Building modern, responsive interfaces with clean component-based architecture and smooth user experiences.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind CSS",
            ],
            className: "expertise-card-large",
        },
        {
            number: "02",
            icon: Layers3,
            title: "Backend Development",
            description:
                "Creating practical server-side applications, REST APIs and backend systems with a focus on clean architecture.",
            technologies: [
                "Node.js",
                "Express.js",
                "REST APIs",
            ],
            className: "",
        },
        {
            number: "03",
            icon: Database,
            title: "Database & APIs",
            description:
                "Working with structured application data and connecting frontend experiences with reliable backend services.",
            technologies: [
                "MongoDB",
                "Mongoose",
                "API Integration",
            ],
            className: "",
        },
        {
            number: "04",
            icon: MonitorSmartphone,
            title: "Responsive Development",
            description:
                "Designing experiences that remain clean, usable and consistent across desktop, tablet and mobile screens.",
            technologies: [
                "Responsive UI",
                "Mobile First",
                "Performance",
            ],
            className: "expertise-card-wide",
        },
    ];

    return (
        <section id="skills" className="expertise-section">
            <div className="expertise-container">

                {/* =================================
            SECTION HEADER
        ================================= */}

                <div className="expertise-heading">
                    <div className="expertise-heading-left">
                        <span className="section-eyebrow">
                            02 / EXPERTISE
                        </span>

                        <h2>
                            What I
                            <span> build.</span>
                        </h2>
                    </div>

                    <p>
                        A practical full stack approach focused on clean
                        interfaces, reliable functionality and scalable
                        web experiences.
                    </p>
                </div>


                {/* =================================
            EXPERTISE GRID
        ================================= */}

                <div className="expertise-grid">
                    {expertiseCards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <article
                                className={`expertise-card ${card.className}`}
                                key={card.number}
                            >
                                <div className="expertise-card-glow" />

                                {/* Card Top */}
                                <div className="expertise-card-top">
                                    <span className="expertise-number">
                                        {card.number}
                                    </span>

                                    <span className="expertise-icon">
                                        <Icon size={19} strokeWidth={1.6} />
                                    </span>
                                </div>


                                {/* Card Content */}
                                <div className="expertise-card-content">
                                    <h3>{card.title}</h3>

                                    <p>{card.description}</p>
                                </div>


                                {/* Technologies */}
                                <div className="expertise-technologies">
                                    {card.technologies.map((technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    ))}
                                </div>


                                {/* Hover Arrow */}
                                <span className="expertise-arrow">
                                    <ArrowUpRight size={17} />
                                </span>
                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default Expertise;