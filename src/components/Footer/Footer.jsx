import {
    ArrowUpRight,
    ArrowUp,
    Mail,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer-section">
            <div className="footer-container">

                {/* =================================
            TOP
        ================================= */}

                <div className="footer-top">

                    <div className="footer-brand">

                        <a href="#home" className="footer-logo">
                            FAIZAN<span>.</span>
                        </a>

                        <p>
                            Full Stack Web Developer building
                            modern digital experiences with clean
                            code and thoughtful interfaces.
                        </p>

                    </div>


                    <div className="footer-cta">

                        <span>
                            HAVE A PROJECT IN MIND?
                        </span>

                        <a href="#contact">
                            LET'S TALK
                            <ArrowUpRight size={15} />
                        </a>

                    </div>

                </div>


                {/* =================================
            DIVIDER
        ================================= */}

                <div className="footer-divider" />


                {/* =================================
            MIDDLE
        ================================= */}

                <div className="footer-middle">

                    {/* NAVIGATION */}

                    <div className="footer-nav">

                        <span className="footer-label">
                            NAVIGATION
                        </span>

                        <div className="footer-nav-links">

                            <a href="#home">
                                Home
                            </a>

                            <a href="#about">
                                About
                            </a>

                            <a href="#projects">
                                Projects
                            </a>

                            <a href="#skills">
                                Skills
                            </a>

                            <a href="#contact">
                                Contact
                            </a>

                        </div>

                    </div>


                    {/* SOCIALS */}

                    <div className="footer-socials">

                        <span className="footer-label">
                            CONNECT
                        </span>

                        <div className="footer-social-links">

                            {/* GITHUB */}

                            <a
                                href="https://github.com/Faizan-Tech04"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub size={16} />
                            </a>


                            {/* EMAIL */}

                            <a
                                href="mailto:faizanchougle03@gmail.com"
                                aria-label="Email"
                            >
                                <Mail size={16} />
                            </a>


                            {/* LINKEDIN */}

                            <a
                                href="https://www.linkedin.com/in/faizan-chougule-71650526b"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn size={16} />
                            </a>

                        </div>

                    </div>


                    {/* BACK TO TOP */}

                    <button
                        type="button"
                        className="footer-top-button"
                        onClick={handleBackToTop}
                        aria-label="Back to top"
                    >
                        <ArrowUp size={16} />
                    </button>

                </div>


                {/* =================================
            BOTTOM
        ================================= */}

                <div className="footer-bottom">

                    <span>
                        © {new Date().getFullYear()} Faizan.
                        All rights reserved.
                    </span>

                    <span>
                        DESIGNED & BUILT WITH PRECISION
                    </span>

                </div>

            </div>
        </footer>
    );
}

export default Footer;