import { useEffect, useState } from "react";
import {
    ArrowDown,
    ArrowUpRight,
    Download,
} from "lucide-react";

function HeroContent() {
    const text = "FULL STACK WEB DEVELOPER";

    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;

        if (!isDeleting && displayText.length < text.length) {
            // Typing
            timeout = setTimeout(() => {
                setDisplayText(
                    text.slice(0, displayText.length + 1)
                );
            }, 85);
        } else if (
            !isDeleting &&
            displayText.length === text.length
        ) {
            // Pause after completing the text
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 900);
        } else if (
            isDeleting &&
            displayText.length > 0
        ) {
            // Deleting
            timeout = setTimeout(() => {
                setDisplayText(
                    text.slice(0, displayText.length - 1)
                );
            }, 45);
        } else if (
            isDeleting &&
            displayText.length === 0
        ) {
            // Start typing again
            timeout = setTimeout(() => {
                setIsDeleting(false);
            }, 250);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting]);

    return (
        <div className="hero-content">

            {/* Availability */}
            <div className="hero-availability">
                <span className="availability-dot" />

                <span>
                    AVAILABLE FOR OPPORTUNITIES
                </span>
            </div>

            {/* Animated Heading */}
            <h1 className="hero-title">
                {displayText}
                <span className="typing-cursor" />
            </h1>

            {/* Description */}
            <p className="hero-description">
                I build modern, responsive web experiences with clean code,
                thoughtful interfaces and practical full stack solutions.
            </p>

            {/* Buttons */}
            <div className="hero-actions">

                {/* View Projects */}
                <a
                    href="#projects"
                    className="hero-primary-button"
                >
                    <span>View Projects</span>

                    <ArrowUpRight size={17} />
                </a>

                {/* Contact */}
                <a
                    href="#contact"
                    className="hero-secondary-button"
                >
                    <span>Contact Me</span>

                    <ArrowUpRight size={17} />
                </a>

            </div>

            {/* Resume */}
            <a
                href="/Faizan-Chougule-Resume.pdf"
                download="Faizan-Chougule-Resume.pdf"
                className="hero-resume-button"
            >
                <span className="hero-resume-icon">
                    <Download size={15} />
                </span>

                <span>Download Resume</span>

                {/* <ArrowDown size={14} className="hero-resume-arrow" /> */}
            </a>
            {/* Tech Row */}
            <div className="hero-tech-row">

                <div className="hero-tech-list">
                    <span>React</span>

                    <i />

                    <span>Node.js</span>

                    <i />

                    <span>MongoDB</span>

                    <i />

                    <span>Tailwind CSS</span>
                </div>

                <a
                    href="#about"
                    className="hero-scroll"
                >
                    <span>SCROLL</span>

                    <ArrowDown size={14} />
                </a>

            </div>

        </div>
    );
}

export default HeroContent;