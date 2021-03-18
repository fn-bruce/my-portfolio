import React from "react"
import { graphql } from "gatsby";
import Img from "gatsby-image";

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
      <div className="parallax">
        <svg
          className="layer s1"
          width="55"
          height="47"
          xmlns="http://www.w3.org/2000/svg"
        >

          // Row 1
          <circle cx="4" cy="4" r="2.5" fill="white" />
          <circle cx="13" cy="4" r="2.5" fill="white" />
          <circle cx="22" cy="4" r="2.5" fill="white" />
          <circle cx="31" cy="4" r="2.5" fill="white" />
          <circle cx="40" cy="4" r="2.5" fill="white" />
          <circle cx="49" cy="4" r="2.5" fill="white" />

          // Row 2
          <circle cx="4" cy="13" r="2.5" fill="white" />
          <circle cx="13" cy="13" r="2.5" fill="white" />
          <circle cx="22" cy="13" r="2.5" fill="white" />
          <circle cx="31" cy="13" r="2.5" fill="white" />
          <circle cx="40" cy="13" r="2.5" fill="white" />
          <circle cx="49" cy="13" r="2.5" fill="white" />

          // Row 3
          <circle cx="4" cy="22" r="2.5" fill="white" />
          <circle cx="13" cy="22" r="2.5" fill="white" />
          <circle cx="22" cy="22" r="2.5" fill="white" />
          <circle cx="31" cy="22" r="2.5" fill="white" />
          <circle cx="40" cy="22" r="2.5" fill="white" />
          <circle cx="49" cy="22" r="2.5" fill="white" />

          // Row 4
          <circle cx="4" cy="31" r="2.5" fill="white" />
          <circle cx="13" cy="31" r="2.5" fill="white" />
          <circle cx="22" cy="31" r="2.5" fill="white" />
          <circle cx="31" cy="31" r="2.5" fill="white" />
          <circle cx="40" cy="31" r="2.5" fill="white" />
          <circle cx="49" cy="31" r="2.5" fill="white" />

          // Row 5
          <circle cx="4" cy="41" r="2.5" fill="white" />
          <circle cx="13" cy="41" r="2.5" fill="white" />
          <circle cx="22" cy="41" r="2.5" fill="white" />
          <circle cx="31" cy="41" r="2.5" fill="white" />
          <circle cx="40" cy="41" r="2.5" fill="white" />
          <circle cx="49" cy="41" r="2.5" fill="white" />
        </svg>
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
