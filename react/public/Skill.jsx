import React from "react";
import "./Skill.css";

import c from "../assets/images/c.png";
import cpp from "../assets/images/cpp.png";
import python from "../assets/images/python.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";

function Skill() {

    const skills = [
        {
            name: "C",
            image: c
        },
        {
            name: "C++",
            image: cpp
        },
        {
            name: "Python",
            image: python
        },
        {
            name: "HTML",
            image: html
        },
        {
            name: "CSS",
            image: css
        }
    ];

    return (
        <section className="skills" id="Skills">

            <h2 className="section-title">SKILLS</h2>

            <div className="skill-cards">

                {skills.map((skill) => (

                    <div className="skill-card" key={skill.name}>

                        <img
                            src={skill.image}
                            alt={skill.name}
                            className="card-image"
                        />

                        <p>{skill.name}</p>

                    </div>

                ))}

            </div>
        </section>
    );
}

export default Skill;