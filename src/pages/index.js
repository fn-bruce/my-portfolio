import React from "react"
import { graphql } from "gatsby";
import Img from "gatsby-image";
import IntroParallax from "../components/IntroParallax";

export default function Home({ data }) {
  return (
    <section>
      <div className="intro d-flex justify-content-center align-items-center">
        <div>
          <Img
            className="avatar ml-auto mr-auto"
            fixed={data.file.childImageSharp.fixed}
            alt="Me"
          />
          <h1>Bruce Nguyen</h1>
          <p>Software Engineer</p>
          <button>Contact Me</button>
        </div>
      </div>
      <IntroParallax />
      <div className="about-me d-flex justify-content-center w-75 ml-auto mr-auto">
        <Img
          className="avatar d-flex mt-auto mb-auto"
          fixed={data.file.childImageSharp.fixed}
          alt="Me"
        />
        <div className="container mt-auto mb-auto">
          <h1>My Story</h1>
          <p>I am Bruce Nguyen, software developer from Utah, United States. I have professional experience in data engineering using Python, Redis, Docker, AWS to ingest data and transform into readable format. On the side, I like to create web applications using React and Django. I'm also self motivated to learn about new technologies to help create efficient solutions that could be applied programmatically.</p>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "avatar1.png" }) {
      childImageSharp {
        fixed(width: 115) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
