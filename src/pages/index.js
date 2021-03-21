import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import IntroParallax from "../components/IntroParallax";
import Popup from 'reactjs-popup';

export default function Home() {
  const iconHeight = 60;

  const project = (
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

          {/* <div className="title">hansoloyang.com</div> */}
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
          <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="https://hansoloyang.com" target="_blank">
            <button>Visit Website</button>
          </a>
        </div>
      </div>
    </Popup>

  )

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
      <section className="about-me d-flex justify-content-center w-75 mx-auto my-4">
        <StaticImage
          className="my-auto"
          src="../images/avatar1.png"
          alt="My Avatar"
          layout="fixed"
          width={115}
        />
        <div className="ml-auto">
          <h1>My Story</h1>
          <p>I am Bruce Nguyen, software developer from Utah, United States. I have professional experience in data engineering using Python, Redis, Docker, AWS to ingest data and transform into readable format. On the side, I like to create web applications using React and Django. I'm also self motivated to learn about new technologies to help create efficient solutions that could be applied programmatically.</p>
        </div>
      </section>
      <section className="technologies d-flex justify-content-center w-75 mx-auto my-4">
        <div className="container w-100">
          <div className="programming-icons d-flex justify-content-between w-100">
            <StaticImage className="my-3"
              src="../images/python.png"
              alt="python"
              layout="fixed"
              height={iconHeight}
            />
            <StaticImage className="my-3"
              src="../images/aws.png"
              alt="aws"
              layout="fixed"
              height={iconHeight}
            />
            <StaticImage className="my-3"
              src="../images/mysql.png"
              alt="mysql"
              layout="fixed"
              height={iconHeight}
            />
            <StaticImage className="my-3"
              src="../images/scrapy.png"
              alt="scrapy"
              layout="fixed"
              height={iconHeight}
            />
          </div>
          <div className="programming-icons d-flex justify-content-around w-100">
            <StaticImage className="my-3"
              src="../images/spark.png"
              alt="spark"
              layout="fixed"
              height={iconHeight}
            />
            <StaticImage className="my-3"
              src="../images/redis.png"
              alt="redis"
              layout="fixed"
              height={iconHeight}
            />
            <StaticImage className="my-3"
              src="../images/docker.png"
              alt="docker"
              layout="fixed"
              height={iconHeight}
            />
          </div>
          <div className="programming-icons d-flex justify-content-between w-100">
            <StaticImage className="my-3"
              src="../images/react.png"
              alt="react"
              layout="fixed"
              height={iconHeight}
            />
            <StaticImage className="my-3"
              src="../images/django.png"
              alt="django"
              layout="fixed"
              height={iconHeight}
            />
            <StaticImage className="my-3"
              src="../images/nodejs.png"
              alt="nodejs"
              layout="fixed"
              height={iconHeight}
            />
            <StaticImage className="my-3"
              src="../images/html-css-js.png"
              alt="html-css-js"
              layout="fixed"
              height={iconHeight}
            />
          </div>
        </div>
      </section>
      <section className="projects d-flex justify-content-center w-75 mx-auto mb-5">
        <div className="container">
          <div className="header">Projects</div>
          <div className="projects-container d-flex flex-wrap justify-content-between h-100">
            {project}
            {project}
            {project}
          </div>
        </div>
      </section>
    </main>
  )
}
