import React from "react"
import { graphql } from "gatsby";
import Img from "gatsby-image";

export default function Home({ data }) {
  return (
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
