import React from "react"
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";
import LandingPage from "../components/LandingPage/LandingPage";
import AboutMe from "../components/AboutMe/AboutMe";
import Technologies from "../components//Technologies/Technologies";
import Projects from "../components/Projects/Projects";
import ContactMe from "../components/ContactMe/ContactMe";
import EndPage from "../components/EndPage/EndPage";

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
