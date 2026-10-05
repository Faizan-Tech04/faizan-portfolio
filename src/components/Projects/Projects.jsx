import {
    ArrowUpRight,
    ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";

function Projects() {
    const projects = [
        {
            number: "01",
            type: "FULL STACK",
            title: "MERN E-Commerce",
            description:
                "A full stack e-commerce platform built with React, Node.js, Express and MongoDB, focused on modern UI, authentication, product management and practical shopping functionality.",
            technologies: [
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
            ],
            liveUrl:
                "https://mern-ecommerce-project-faizan.onrender.com",
            githubUrl:
                "https://github.com/Faizan-Tech04/Mern-ecommerce-project.git",
            featured: true,
        },

        {
            number: "02",
            type: "REACT PROJECT",
            title: "News 24/7",
            description:
                "A React-based news application that brings daily news into a clean and responsive interface with category-based browsing and a practical user experience.",
            technologies: [
                "React",
                "JavaScript",
                "News API",
            ],
            liveUrl:
                "https://news-24-7-react-app.vercel.app/",
            githubUrl:
                "https://github.com/Faizan-Tech04/News-24-7-React-app.git",
            featured: false,
        },

        {
            number: "03",
            type: "REACT PROJECT",
            title: "MovieVerse",
            description:
                "A movie discovery React application designed to explore movies through a modern interface with responsive layouts and API-powered content.",
            technologies: [
                "React",
                "JavaScript",
                "API",
            ],
            liveUrl:
                "https://movieverse-react-app-ixu3.vercel.app/",
            githubUrl:
                "https://github.com/Faizan-Tech04/Movieverse-react-app.git",
            featured: false,
        },
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">

                {/* SECTION HEADER */}

                <div className="projects-heading">
                    <div>
                        <span className="section-eyebrow">
                            03 / SELECTED PROJECTS
                        </span>

                        <h2>
                            Selected
                            <span> work.</span>
                        </h2>
                    </div>

                    <p>
                        A selection of projects where I focused on
                        functionality, responsive design and clean
                        development.
                    </p>
                </div>


                {/* PROJECTS */}

                <div className="projects-list">

                    {projects.map((project) => (
                        <article
                            key={project.number}
                            className={`project-card ${project.featured
                                    ? "project-card-featured"
                                    : ""
                                }`}
                        >

                            {/* PROJECT VISUAL */}

                            <div className="project-visual">

                                <div className="project-visual-grid" />

                                <div className="project-visual-glow" />

                                <div className="project-preview-label">
                                    PROJECT / {project.number}
                                </div>

                                <div className="project-preview-title">
                                    {project.title}
                                </div>

                                <div className="project-preview-corner">
                                    <ArrowUpRight size={20} />
                                </div>

                            </div>


                            {/* PROJECT INFORMATION */}

                            <div className="project-info">

                                <div className="project-info-top">

                                    <div>
                                        <span className="project-type">
                                            {project.type}
                                        </span>

                                        <h3>
                                            {project.title}
                                        </h3>
                                    </div>

                                    <span className="project-number">
                                        {project.number}
                                    </span>

                                </div>


                                <p className="project-description">
                                    {project.description}
                                </p>


                                <div className="project-bottom">

                                    <div className="project-technologies">
                                        {project.technologies.map(
                                            (technology) => (
                                                <span key={technology}>
                                                    {technology}
                                                </span>
                                            )
                                        )}
                                    </div>


                                    {/* PROJECT LINKS */}

                                    <div className="project-links">

                                        {/* GITHUB */}

                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${project.title} GitHub repository`}
                                        >
                                            <FaGithub size={17} />
                                        </a>


                                        {/* LIVE DEMO */}

                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${project.title} live demo`}
                                        >
                                            <ExternalLink size={16} />
                                        </a>

                                    </div>

                                </div>

                            </div>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;