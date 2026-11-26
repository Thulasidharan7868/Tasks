
import React from "react";

import "./App.css";

import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
import About from "./About/About";
import Skill from "./Skill/Skill";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";

function App() {
    return (
        <>
            <Navigation />

            <main>
                <Home />
                <About />
                <Skill />
                <Project />
                <Contact />
            </main>

            <footer className="footer">
                <p>
                    © {new Date().getFullYear()} Thulasidharan Moorthy.
                    All Rights Reserved.
                </p>
            </footer>
        </>
    );
}

export default App;
