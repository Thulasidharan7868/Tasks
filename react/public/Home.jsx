
import React from "react";
import "./Home.css";
import profileImage from "../assets/images/Thulassidharan.jpeg";

function Home() {
    return (
        <section className="personal" id="Home">

            <div className="content">

                <p className="per">Hi, I'm</p>

                <h1 className="name">
                    Thulasidharan Moorthy
                </h1>

                <p className="role">
                    Java Web Developer
                </p>

                <p className="desc">
                    I am a passionate web developer with a knack for creating dynamic and user-friendly websites.
                </p>

                <div className="button">

                    <a href="#Projects" className="btn1">
                        View Projects
                    </a>

                    <a
                        href={`${import.meta.env.BASE_URL}Resume.pdf`}
                        download="Thulasidharan_Resume.pdf"
                        className="btn2"
                    >
                        ↓ Download CV
                    </a>

                </div>
            </div>

            <div className="image">

                <img
                    src={profileImage}
                    alt="Thulasidharan Moorthy"
                    className="profile-image"
                />

            </div>

        </section>
    );
}

export default Home;
