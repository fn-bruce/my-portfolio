import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import IntroParallax from "./LandingPageParallax";
import { ScrollTo } from "react-scroll-to";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import "./style.scss";


export default function LandingPage() {
    return (
        <>
            <section id="intro">
                <div className="intro d-flex justify-content-center align-items-center">
                    <div>
                    <StaticImage
                        className="m-auto"
                        src="../images/avatar2.png"
                        alt="My Avatar"
                        layout="fixed"
                        width={115}
                    />
                    <h1>Bruce Nguyen</h1>
                    <p>Software Engineer</p>
                    <div className="social-links mb-4">
                        <a href="https://www.linkedin.com/in/brucelee-nguyen/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
                        </a>
                        <a className="ml-1" href="https://www.github.com/fn-bruce" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
                        </a>

                    </div>
                    <ScrollTo>
                        {({ scroll }) => {
                        return <a href="#contact-me">
                            <button>Contact Me</button>
                        </a>
                        }}
                    </ScrollTo>
                    </div>
                </div>
                <IntroParallax />
            </section>
        </>
    )
}
