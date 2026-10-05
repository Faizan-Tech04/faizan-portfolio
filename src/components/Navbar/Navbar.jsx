import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "Skills",
        href: "#skills",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="site-navbar">
            <nav className={`navbar-shell ${scrolled ? "navbar-scrolled" : ""}`}>

                {/* Logo */}
                <a
                    href="#home"
                    className="navbar-logo"
                    onClick={closeMenu}
                >
                    FAIZAN<span>.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="navbar-link"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <a
                    href="#contact"
                    className="navbar-cta"
                >
                    <span>Let's Talk</span>

                    <ArrowUpRight
                        size={16}
                        strokeWidth={1.8}
                    />
                </a>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="navbar-menu-button"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        <X size={21} strokeWidth={1.8} />
                    ) : (
                        <Menu size={21} strokeWidth={1.8} />
                    )}
                </button>

                {/* Mobile Navigation */}
                <div
                    className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""
                        }`}
                >
                    <div className="mobile-menu-inner">

                        {navLinks.map((link, index) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={closeMenu}
                            >
                                <span>
                                    <small>
                                        0{index + 1}
                                    </small>

                                    {link.label}
                                </span>

                                <ArrowUpRight
                                    size={17}
                                    strokeWidth={1.8}
                                />
                            </a>
                        ))}

                        {/* Mobile CTA */}
                        <a
                            href="#contact"
                            className="mobile-cta"
                            onClick={closeMenu}
                        >
                            <span>Let's Talk</span>

                            <ArrowUpRight
                                size={17}
                                strokeWidth={1.8}
                            />
                        </a>

                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;