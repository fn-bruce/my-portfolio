import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import IntroParallax from "../components/IntroParallax";

export default function Home() {
  return (
    <main>
      <section>
        <div className="intro d-flex justify-content-center align-items-center">
          <div>
            <StaticImage
              className="m-auto"
              src="../images/avatar1.png"
              alt="My Avatar"
              layout="fixed"
              width={115}
            />
            <h1>Bruce Nguyen</h1>
            <p>Software Engineer</p>
            <button>Contact Me</button>
          </div>
        </div>
        <IntroParallax />
      </section>
      <section className="about-me d-flex justify-content-center w-75 mx-auto my-5">
        <StaticImage
          className="m-auto"
          src="../images/avatar1.png"
          alt="My Avatar"
          layout="fixed"
          width={115}
        />
        <div className="m-auto">
          <h1>My Story</h1>
          <p>I am Bruce Nguyen, software developer from Utah, United States. I have professional experience in data engineering using Python, Redis, Docker, AWS to ingest data and transform into readable format. On the side, I like to create web applications using React and Django. I'm also self motivated to learn about new technologies to help create efficient solutions that could be applied programmatically.</p>
        </div>
      </section>
      {/* <section className="technologies d-flex justify-content-center w-75 m-auto"> */}
      {/*   <div className="container"> */}
      {/*     <h2>Technologies</h2> */}
      {/*     <h3>Programming Languages</h3> */}
      {/*     <h3>Web Frameworks</h3> */}
      {/*     <h3>Tools/Services</h3> */}
      {/*   </div> */}
      {/* </section> */}
    </main>
  )
}
