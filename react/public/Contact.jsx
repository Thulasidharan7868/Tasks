
import React, { useState } from "react";
import "./Contact.css";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    }

    function handleSubmit(event) {

        event.preventDefault();

        const recipient = "thulasidharanmoorthy42@gmail.com";

        const subject = encodeURIComponent(formData.subject);

        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );

        window.location.href =
            `mailto:${recipient}?subject=${subject}&body=${body}`;
    }

    return (
        <section className="contact" id="Contact">

            <h2 className="section-title">CONTACT ME</h2>

            <div className="contact-container">

                <div className="con-tact">

                    <div className="contact-icon">
                        ✉
                    </div>

                    <div className="contact-content">

                        <h2>Let's work together!</h2>

                        <p>
                            I'm currently available for freelance work.
                        </p>

                        <p>Feel free to contact me.</p>

                        <a
                            href="mailto:thulasidharanmoorthy42@gmail.com"
                            className="contact-email"
                        >
                            thulasidharanmoorthy42@gmail.com
                        </a>

                    </div>
                </div>

                <div className="conc-form">

                    <form onSubmit={handleSubmit}>

                        <div className="form-row">

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                aria-label="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                aria-label="Your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            aria-label="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            aria-label="Your message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <button
                            type="submit"
                            className="btn-sub"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}

export default Contact;
