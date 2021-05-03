import React from "react"
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import AboutMe from "../components/AboutMe";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import EndPage from "../components/EndPage";

export default function Home() {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bruce Nguyen</title>
      </Helmet>
      <Navbar />
      <main className="content">
        <LandingPage />
        <AboutMe />
        <Technologies />
        <Projects />
        <ContactMe />
        <EndPage />
      </main>
    </>
  )
}
