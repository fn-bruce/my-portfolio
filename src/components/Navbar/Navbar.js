import React from "react"
import "./style.scss";

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#intro">BRUCE</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="#intro">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#about-me">About Me</a>
                    <a class="nav-item nav-link" href="#technologies">Technologies</a>
                    <a class="nav-item nav-link" href="#projects">Projects</a>
                    <a class="nav-item nav-link" href="#contact-me">Contact Me</a>
                </div>
                </div>
            </nav>
        </>
    )
}