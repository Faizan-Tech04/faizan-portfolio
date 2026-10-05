import { useState } from "react";

import {
    ArrowUpRight,
    Mail,
    MessageCircle,
    MapPin,
} from "lucide-react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setFormStatus("");

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/contact`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Something went wrong."
                );
            }

            setFormStatus("Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                message: "",
            });

            setTimeout(() => {
                setFormStatus("");
            }, 3500);
        } catch (error) {
            console.error("Contact form error:", error);

            setFormStatus(
                "Failed to send message. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">

                {/* =================================
                    HEADER
                ================================= */}

                <div className="contact-heading">
                    <span className="section-eyebrow">
                        04 / CONTACT
                    </span>

                    <h2>
                        Let's build
                        <span> something.</span>
                    </h2>

                    <p>
                        Have a project, opportunity or idea in mind?
                        Let’s connect and turn it into something useful.
                    </p>
                </div>


                {/* =================================
                    CONTACT GRID
                ================================= */}

                <div className="contact-grid">

                    {/* =================================
                        CONTACT FORM
                    ================================= */}

                    <div className="contact-form-card">

                        <div className="contact-card-header">
                            <div>
                                <span className="contact-card-label">
                                    SEND A MESSAGE
                                </span>

                                <h3>
                                    Start a conversation.
                                </h3>
                            </div>

                            <div className="contact-card-icon">
                                <ArrowUpRight size={18} />
                            </div>
                        </div>


                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >

                            <div className="contact-form-row">

                                <div className="contact-field">
                                    <label htmlFor="name">
                                        NAME
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>


                                <div className="contact-field">
                                    <label htmlFor="email">
                                        EMAIL
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                            </div>


                            <div className="contact-field">
                                <label htmlFor="message">
                                    MESSAGE
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>


                            <button
                                type="submit"
                                className="contact-submit-button"
                                disabled={isSubmitting}
                            >
                                <span>
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                </span>

                                <ArrowUpRight size={17} />
                            </button>


                            {/* FORM STATUS */}

                            {formStatus && (
                                <p className="contact-form-status">
                                    {formStatus}
                                </p>
                            )}

                        </form>
                    </div>


                    {/* =================================
                        CONTACT INFO
                    ================================= */}

                    <div className="contact-info">

                        {/* EMAIL */}

                        <a
                            href="mailto:faizanchougle03@gmail.com"
                            className="contact-info-card"
                        >
                            <div className="contact-info-icon">
                                <Mail size={18} />
                            </div>

                            <div>
                                <span>EMAIL</span>

                                <strong>
                                    faizanchougle03@gmail.com
                                </strong>
                            </div>

                            <ArrowUpRight
                                className="contact-info-arrow"
                                size={17}
                            />
                        </a>


                        {/* WHATSAPP */}

                        <a
                            href="https://wa.me/919326885033"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-info-card"
                        >
                            <div className="contact-info-icon">
                                <MessageCircle size={18} />
                            </div>

                            <div>
                                <span>WHATSAPP</span>

                                <strong>
                                    +91 93268 85033
                                </strong>
                            </div>

                            <ArrowUpRight
                                className="contact-info-arrow"
                                size={17}
                            />
                        </a>


                        {/* LOCATION */}

                        <div className="contact-info-card">
                            <div className="contact-info-icon">
                                <MapPin size={18} />
                            </div>

                            <div>
                                <span>LOCATION</span>

                                <strong>
                                    India
                                </strong>
                            </div>
                        </div>


                        {/* AVAILABILITY */}

                        <div className="contact-availability">

                            <span className="contact-availability-dot" />

                            <div>
                                <strong>
                                    Available for opportunities
                                </strong>

                                <span>
                                    Open to freelance work, internships
                                    and full stack opportunities.
                                </span>
                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================
                    BOTTOM CTA
                ================================= */}

                <div className="contact-bottom">

                    <span>
                        HAVE AN IDEA?
                    </span>

                    <a href="mailto:faizanchougle03@gmail.com">
                        LET'S TALK
                        <ArrowUpRight size={15} />
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Contact;