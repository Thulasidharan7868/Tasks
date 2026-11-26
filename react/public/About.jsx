
import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about" id="About">

            <h2 className="section-title">ABOUT ME</h2>

            <div className="about-box">

                <div className="abtcon">

                    <div className="abtcon1">
                        <svg
                            className="human"
                            viewBox="0 0 100 100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="5"
                            aria-hidden="true"
                        >
                            <circle cx="50" cy="28" r="20" />
                            <path d="M12 90V80C12 44 88 44 88 80V90Z" />
                        </svg>
                    </div>

                    <div className="abtcon2">
                        <p className="thulasi">
                            I am a passionate Java web developer
                            with a knack for creating dynamic and
                            user-friendly websites.
                        </p>
                    </div>

                </div>

                <div className="abtbd">

                    <p>
                        <strong>Name:</strong> Thulasidharan Moorthy
                    </p>

                    <p>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:thulasidharanmoorthy42@gmail.com">
                            thulasidharanmoorthy42@gmail.com
                        </a>
                    </p>

                    <p>
                        <strong>Location:</strong> Tamil Nadu, India
                    </p>

                    <p>
                        <strong>Role:</strong> Java Web Developer
                    </p>

                </div>

            </div>
        </section>
    );
}

export default About;
    