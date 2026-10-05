function TechMarquee() {
    const technologies = [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "HTML5",
        "CSS3",
    ];

    return (
        <section className="tech-marquee-section">
            <div className="tech-marquee-header">
                <span className="tech-marquee-line" />

                <span className="tech-marquee-label">
                    TECHNOLOGIES I WORK WITH
                </span>

                <span className="tech-marquee-line" />
            </div>

            <div className="tech-marquee-wrapper">
                <div className="tech-marquee-track">
                    {[...technologies, ...technologies].map(
                        (technology, index) => (
                            <div
                                className="tech-marquee-item"
                                key={`${technology}-${index}`}
                            >
                                <span className="tech-marquee-dot" />

                                <span>{technology}</span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default TechMarquee;