
import React, { useState } from "react";
import "./Navigation.css";
import logo from "../assets/images/Thulasi-logo.png";

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Contact"
    ];

    return (
        <nav className="navbar">

            <a href="#Home" className="logo">
                <img
                    src={logo}
                    alt="Portfolio logo"
                    className="logo-image"
                />
                Thulasidharan
            </a>

            <div className="bar">

                <ul
                    id="navigation-links"
                    className={`ul ${menuOpen ? "active" : ""}`}
                >
                    {links.map((link) => (
                        <li className="li" key={link}>
                            <a
                                href={`#${link}`}
                                className="link"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    className="menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    aria-controls="navigation-links"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

            </div>
        </nav>
    );
}

export default Navigation;
