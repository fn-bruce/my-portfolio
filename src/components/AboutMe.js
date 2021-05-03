import React from "react"
import { StaticImage } from "gatsby-plugin-image";

export default function AboutMe() {
    return (
        <>
            <section id="about-me" className="about-me d-flex justify-content-between w-75 mx-auto my-5 flex-wrap">
            <StaticImage
                className="avatar mx-auto my-auto"
                src="../images/avatar1.png"
                alt="My Avatar"
                layout="fixed"
                width={115}
            />
            <div className="description ml-auto">
                <h1>My Story <span role="img" aria-label="books">📚</span></h1>
                <p>Hi! My name is Bruce, and I was born and raised in Utah. My current profession is doing cool data stuff using <b>Python</b>, <b>Redis</b>, <b>Docker</b>, <b>AWS</b> to ingest data and transform into human readable format. On the side, I like to create web apps using <b>React</b> and <b>Django</b>. I enjoy doing my tasks using the <b>Neovim</b> & <b>Tmux</b> workflow.</p>
            </div>
            </section>
        </>
    )
}