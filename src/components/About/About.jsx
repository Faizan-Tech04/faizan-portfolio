function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">

                {/* =================================
            SECTION HEADER
        ================================= */}

                <div className="about-heading">
                    <span className="section-eyebrow">
                        01 / ABOUT
                    </span>

                    <h2>
                        Building digital
                        <span> experiences </span>
                        that matter.
                    </h2>
                </div>


                {/* =================================
            MAIN ABOUT GRID
        ================================= */}

                <div className="about-grid">

                    {/* =================================
              LEFT CONTENT
          ================================= */}

                    <div className="about-content">

                        <p className="about-lead">
                            I’m Faizan, a Full Stack Web Developer focused on
                            building modern, responsive and practical web
                            experiences.
                        </p>

                        <p className="about-description">
                            I enjoy turning ideas into clean, functional products
                            using modern frontend technologies and full stack
                            development. My focus is on writing maintainable code,
                            creating thoughtful interfaces and building experiences
                            that feel fast, simple and polished.
                        </p>


                        {/* =================================
                STATS
            ================================= */}

                        <div className="about-stats">

                            <div className="about-stat">
                                <strong>03+</strong>

                                <span>
                                    Featured
                                    <br />
                                    Projects
                                </span>
                            </div>

                            <div className="about-stat">
                                <strong>02+</strong>

                                <span>
                                    Years
                                    <br />
                                    Learning
                                </span>
                            </div>

                            <div className="about-stat">
                                <strong>BCA</strong>

                                <span>
                                    Computer
                                    <br />
                                    Applications
                                </span>
                            </div>

                        </div>

                    </div>


                    {/* =================================
              RIGHT PROFILE CARD
          ================================= */}

                    <div className="about-profile-card">

                        <div className="about-card-glow" />

                        <div className="about-card-top">
                            <span>DEVELOPER PROFILE</span>

                            <span className="about-card-status">
                                <i />
                                ONLINE
                            </span>
                        </div>


                        <div className="about-card-center">

                            <div className="about-card-number">
                                01
                            </div>

                            <div className="about-card-title">
                                FULL STACK
                                <br />
                                DEVELOPER
                            </div>

                            <div className="about-card-line" />

                            <p>
                                React · Node.js · MongoDB
                            </p>

                        </div>


                        <div className="about-card-bottom">

                            <span>BASED IN INDIA</span>

                            <span>2026</span>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;