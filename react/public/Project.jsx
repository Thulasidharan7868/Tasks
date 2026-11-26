
import React from "react";
import "./Project.css";

function Project() {

    const projects = [
        {
            id: 1,
            title: "Line Follower Robot",
            description:
                "Follows a predefined path using sensors and motors for automated navigation."
        },
        {
            id: 2,
            title: "Smart Bed using Blynk IoT",
            description:
                "Monitors health and comfort parameters using sensors and sends data to the Blynk app. Enables remote control of bed adjustments and smart home features."
        },
        {
            id: 3,
            title: "Air Quality Monitoring System",
            description:
                "Measures pollutants and environmental parameters using sensors. Provides real-time air quality data and alerts for health and safety."
        },
        {
            id: 4,
            title: "Vehicle Tracking Accident Alert System",
            description:
                "Uses GPS and sensors to track vehicle location and detect accidents. Sends alerts with location details to emergency contacts."
        },
        {
            id: 5,
            title: "Smart Home Automation",
            description:
                "Detects movement to control lights, appliances and security features automatically. Enhances convenience, energy efficiency and safety."
        }
    ];

    return (
        <section className="projects" id="Projects">

            <h2 className="section-title">PROJECTS</h2>

            <div className="Works">

                {projects.map((project) => (

                    <article
                        className="work-card"
                        key={project.id}
                    >

                        <div className="project-number">
                            {String(project.id).padStart(2, "0")}
                        </div>

                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                    </article>

                ))}

            </div>

        </section>
    );
}

export default Project;
