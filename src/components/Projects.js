import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import Popup from 'reactjs-popup';


export default function Projects() {
    const project1 = (
        <Popup
        trigger={
            <div className="project-container card img-fluid">
            <StaticImage
                className="project-img"
                src="../images/hansoloyang-website.png"
                alt="hansoloyang-website"
                layout="fixed"
                style={{ width: "100%" }}
            />
            </div>
        }
        modal
        nested
        >
        <div className="project-modal">
            <div className="header">hansoloyang.com</div>
            <div className="content">
            <StaticImage
                className="project-img"
                src="../images/hansoloyang-website.png"
                alt="html-css-js"
                style={{ borderRadius: "5px" }}
            />
            <p className="description">This was a website that I built for a friend who specializes in photography and videography. It's built using <b>HTML</b>, <b>CSS</b>, & <b>JavaScript</b>. The design was created using <b>Figma</b>. This was also the time I used an <b>NPM</b> package, which is <b>photoswipe</b>.</p>
            <a href="https://hansoloyang.com" target="_blank" rel="noreferrer">
                <button>Visit Website</button>
            </a>
            </div>
        </div>
        </Popup>

    )

    const project2 = (
        <Popup
        trigger={
            <div className="project-container card img-fluid">
            <StaticImage
                className="project-img"
                src="../images/bboyaid-website.png"
                alt="bboyaid-website"
                layout="fixed"
                style={{ width: "100%" }}
            />
            </div>
        }
        modal
        nested
        >
        <div className="project-modal">
            <div className="header">BboyAid</div>
            <div className="content">
            <StaticImage
                className="project-img"
                src="../images/bboyaid-website.png"
                alt="html-css-js"
                style={{ borderRadius: "5px" }}
            />
                <p className="description">This website was built to help new Bboy's (breakdancers) become exposed to a wide variety of dance moves. I used <b>React</b> as my frontend and <b>Firebase Realtime Database</b> cloud service. This application follows the <b>CRUD</b> achitectural style. Includes an <b>authentication system</b> using the <b>Firebase API</b></p>
            <a href="https://bboyaid.com" target="_blank" rel="noreferrer">
                <button>Visit Website</button>
            </a>
            </div>
        </div>
        </Popup>
    )

    return (
        <>
            <section id="projects" className="projects d-flex justify-content-center w-75 mx-auto my-5">
            <div className="container w-100">
                <div className="header">Projects</div>
                <div className="projects-container d-flex flex-wrap h-100">
                {project1}
                {project2}
                </div>
            </div>
            </section>
        </>
    )
}