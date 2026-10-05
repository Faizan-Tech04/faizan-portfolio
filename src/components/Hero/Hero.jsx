import HeroContent from "./HeroContent";
import HeroCanvas from "./HeroCanvas";

function Hero() {
    return (
        <section
            id="home"
            className="hero-section"
        >
            <div className="hero-container">

                {/* Left Content */}
                <HeroContent />

                {/* Right 3D Crystal */}
                <div className="hero-visual">
                    <HeroCanvas />
                </div>

            </div>
        </section>
    );
}

export default Hero;