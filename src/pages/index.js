import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image";
import IntroParallax from "../components/IntroParallax";
import Popup from 'reactjs-popup';
import WOW from 'wowjs';
import { ScrollTo } from "react-scroll-to";

export default function Home() {
  const iconHeight = 60;

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  });

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
    <>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#intro">BRUCE</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#intro">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#about-me">About Me</a>
            <a class="nav-item nav-link" href="#technologies">Technologies</a>
            <a class="nav-item nav-link" href="#contact-me">Contact Me</a>
          </div>
        </div>
      </nav>
      <main className="content">
        <section id="intro">
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
              <div className="social-links mb-4">
                <a href="https://www.linkedin.com/in/brucelee-nguyen/">
                  <svg className="mr-1" width="20" height="20" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                      <path d="M40.9233 0.62915H3.26281C1.45877 0.62915 0 2.05339 0 3.81428V41.6301C0 43.391 1.45877 44.8239 3.26281 44.8239H40.9233C42.7273 44.8239 44.1947 43.391 44.1947 41.6387V3.81428C44.1947 2.05339 42.7273 0.62915 40.9233 0.62915ZM13.1117 38.2896H6.55152V17.1935H13.1117V38.2896ZM9.8316 14.3192C7.72545 14.3192 6.02498 12.6187 6.02498 10.5212C6.02498 8.42365 7.72545 6.72319 9.8316 6.72319C11.9291 6.72319 13.6296 8.42365 13.6296 10.5212C13.6296 12.6101 11.9291 14.3192 9.8316 14.3192ZM37.6605 38.2896H31.1089V28.0351C31.1089 25.5923 31.0658 22.4417 27.6994 22.4417C24.2898 22.4417 23.7719 25.1089 23.7719 27.8624V38.2896H17.229V17.1935H23.513V20.0766H23.5993C24.4711 18.4193 26.6118 16.667 29.7969 16.667C36.4348 16.667 37.6605 21.0347 37.6605 26.7144V38.2896Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="44.1947" height="44.1947" fill="white" transform="translate(0 0.62915)" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                <a className="ml-1" href="https://www.github.com/fn-bruce">
                  <svg width="20" height="20" viewBox="0 0 60 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.0741808 27.3765C0.213539 26.4056 0.335903 25.4314 0.493956 24.4623C1.07688 20.8958 2.3617 17.5852 4.21925 14.4915C6.80588 10.1795 10.2695 6.73844 14.5947 4.16313C17.873 2.21132 21.3961 0.921971 25.174 0.361164C30.5495 -0.436842 35.7942 0.0646653 40.8485 2.09441C46.6726 4.43421 51.3361 8.22262 54.7877 13.4647C56.8815 16.6466 58.3278 20.0995 59.0569 23.8405C59.667 26.9681 59.7605 30.1127 59.407 33.2844C58.9345 37.5201 57.5902 41.4508 55.3554 45.0631C52.2215 50.129 48.0322 54.0698 42.5735 56.5842C41.5215 57.0687 40.4389 57.4974 39.3427 57.8735C38.1463 58.2852 37.271 57.6651 37.1572 56.4029C37.1402 56.2114 37.1453 56.0166 37.1453 55.8234C37.1453 53.4091 37.1674 50.9947 37.1334 48.5821C37.1215 47.6807 37.0314 46.7726 36.8819 45.8831C36.7034 44.814 36.1987 43.8805 35.4271 43.1028C35.3625 43.0367 35.3132 42.9554 35.1841 42.7842C35.8027 42.6894 36.3431 42.6063 36.8819 42.5233C39.8866 42.0676 42.6482 41.0527 44.9545 39.0043C46.5605 37.5777 47.4391 35.7259 48.0271 33.7148C48.6407 31.6206 48.8446 29.4689 48.7171 27.3002C48.5744 24.8876 47.7688 22.6969 46.1832 20.8399C45.8178 20.413 45.7362 20.0656 45.9147 19.5031C46.6472 17.1989 46.3396 14.932 45.5102 12.704C45.3878 12.377 45.1618 12.3397 44.878 12.3228C43.8617 12.2601 42.9066 12.5312 42.0143 12.9531C40.5851 13.6308 39.183 14.3729 37.7962 15.1353C37.4087 15.3488 37.0773 15.4284 36.6558 15.3098C34.5179 14.7117 32.3221 14.4762 30.1145 14.4474C27.7284 14.4169 25.361 14.6711 23.048 15.2912C22.584 15.4148 22.2152 15.3742 21.8039 15.0997C19.9702 13.8832 17.992 12.9717 15.854 12.4211C15.8166 12.4109 15.7792 12.3973 15.7418 12.3889C14.4502 12.1161 14.1732 12.2889 13.8112 13.5477C13.2045 15.6554 13.077 17.7648 13.8384 19.8589C13.9998 20.3028 13.7126 20.5062 13.5019 20.7586C12.0998 22.4359 11.279 24.3556 11.0121 26.5209C10.7657 28.515 10.9153 30.4922 11.3078 32.4474C11.6511 34.1604 12.2477 35.7886 13.2062 37.2694C14.5454 39.3381 16.5287 40.5698 18.7499 41.4864C20.2829 42.1184 21.8974 42.4115 23.5306 42.6352C23.7957 42.6707 24.0575 42.7283 24.3685 42.7842C24.2886 42.93 24.2546 43.0435 24.1815 43.1214C23.3267 44.0211 22.8593 45.1071 22.6588 46.3117C22.5976 46.6794 22.4412 46.8929 22.0843 47.0183C20.4443 47.5943 18.7754 47.8789 17.0878 47.3198C15.7486 46.8759 14.7782 45.9221 14.0661 44.7293C13.3353 43.506 12.4108 42.4962 11.1124 41.8643C10.3017 41.4695 9.46729 41.1815 8.54277 41.3983C7.96494 41.5339 7.88336 41.7101 8.24196 42.1845C8.45949 42.4725 8.71612 42.7707 9.02372 42.9469C10.5669 43.8313 11.4336 45.2511 12.1746 46.7794C12.2664 46.9708 12.3513 47.1657 12.4261 47.3639C13.2861 49.6139 15.028 50.6694 17.3292 50.9761C19.0066 51.1997 20.6806 51.1862 22.4158 50.8778C22.448 51.1421 22.4939 51.3624 22.4956 51.581C22.5092 53.1058 22.5211 54.6324 22.5194 56.1572C22.5194 57.6211 21.5507 58.314 20.1639 57.8396C13.9302 55.7014 8.97614 51.891 5.22875 46.4947C3.21315 43.5907 1.73459 40.4428 0.906934 37.0118C0.565335 35.592 0.402183 34.1282 0.157456 32.6846C0.131964 32.5339 0.0979737 32.3848 0.0673828 32.2357C0.0741808 30.621 0.0741808 28.9996 0.0741808 27.3765Z" fill="white" />
                  </svg>
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
        <section id="about-me" className="about-me d-flex justify-content-center w-75 mx-auto my-4">
          <StaticImage
            className="my-auto wow fadeInUp"
            src="../images/avatar1.png"
            alt="My Avatar"
            layout="fixed"
            width={115}
          />
          <div className="ml-auto">
            <h1 className="wow fadeInUp">My Story</h1>
            <p className="wow fadeInUp">I am Bruce Nguyen, software developer from Utah, United States. I have professional experience in data engineering using Python, Redis, Docker, AWS to ingest data and transform into readable format. On the side, I like to create web applications using React and Django. I'm also self motivated to learn about new technologies to help create efficient solutions that could be applied programmatically.</p>
          </div>
        </section>
        <section id="technologies" className="technologies d-flex justify-content-center w-75 mx-auto my-4">
          <div className="container w-100">
            <div className="programming-icons d-flex justify-content-between w-100 wow fadeInUp">
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
            <div className="programming-icons d-flex justify-content-around w-100 wow fadeInUp">
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
            <div className="programming-icons d-flex justify-content-between w-100 wow fadeInUp">
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
        <section id="projects" className="projects d-flex justify-content-center w-75 mx-auto mb-5">
          <div className="container">
            <div className="header wow fadeInUp">Projects</div>
            <div className="projects-container d-flex flex-wrap justify-content-between h-100 wow fadeInUp">
              {project}
              {project}
              {project}
            </div>
          </div>
        </section>
        <section id="contact-me" className="contact-me d-flex justify-content-around align-items-center w-75 mx-auto">
          <div className="container d-flex justify-content-around">
            <div className="my-auto">
              <h1 className="wow fadeInUp">Lets talk</h1>
              <a className="wow fadeInUp" href="mailto:bruceleenguyen95@gmail.com">
                <span>bruceleenguyen95@gmail.com </span>
                <svg width="35" height="19" viewBox="0 0 35 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.2 1.7998L33 9.4998L24.2 17.1998" stroke="#F5BA4F" stroke-width="2.2" />
                  <line x1="33" y1="9.4999" x2="9.61651e-08" y2="9.49991" stroke="#F5BA4F" stroke-width="2.2" />
                </svg>
              </a>
            </div>
            <form className="my-auto wow fadeInUp" action="https://getform.io/f/587ae21e-cb3b-4e46-a1d8-2c62dd2edd5f" method="POST">
              <h2>Get In Touch</h2>
              <label>What's your full name?</label>
              <input className="noselect" type="text" name="fullName" required />

              <label>Your fancy email</label>
              <input type="email" name="email" required />

              <label>What did you want to talk about?</label>
              <input type="text" name="message" required />

              <label style={{ width: "100%", textAlign: "right" }}>
                <input type="submit" />
                <svg width="35" height="19" viewBox="0 0 35 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.2 1.7998L33 9.4998L24.2 17.1998" stroke="#F5BA4F" stroke-width="2.2" />
                  <line x1="33" y1="9.4999" x2="9.61651e-08" y2="9.49991" stroke="#F5BA4F" stroke-width="2.2" />
                </svg>
              </label>
            </form>
          </div>
        </section>
        <section className="end d-flex justify-content-center align-items-center w-100 mb-5">
          <div className="container wow fadeInUp">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4108 12.5L18.3549 11.9727C14.757 10.1895 12.4863 6.51547 12.5004 2.5C12.5004 1.11929 13.6196 0 15.0004 0C16.3811 0 17.5004 1.11929 17.5004 2.5C17.4929 4.61936 18.6911 6.55858 20.59 7.5L21.6459 8.02735C25.2437 9.81055 27.5144 13.4845 27.5003 17.5C27.5003 18.8807 26.3811 20 25.0004 20C23.6196 20 22.5004 18.8807 22.5004 17.5C22.5078 15.3806 21.3096 13.4414 19.4108 12.5ZM34.4108 12.5L33.3549 11.9727C29.757 10.1895 27.4863 6.51547 27.5004 2.5C27.5004 1.11929 28.6196 0 30.0004 0C31.3811 0 32.5004 1.11929 32.5004 2.5C32.4929 4.61936 33.6911 6.55858 35.59 7.5L36.6459 8.02735C40.2437 9.81055 42.5144 13.4845 42.5004 17.5C42.5004 18.8807 41.3811 20 40.0004 20C38.6196 20 37.5004 18.8807 37.5004 17.5C37.5078 15.3806 36.3096 13.4414 34.4108 12.5ZM57.5 24.9997H2.5C1.11929 24.9997 0 26.119 0 27.4997C0 28.8804 1.11929 29.9997 2.5 29.9997H57.5C58.8807 29.9997 60 28.8804 60 27.4997C60 26.119 58.8807 24.9997 57.5 24.9997ZM14.9997 60.0003V53.0319C8.70405 48.9152 4.37056 42.3983 3.00939 35.0003H56.99C55.6289 42.3983 51.2954 48.9152 44.9997 53.0319V60.0003H14.9997Z" fill="white" />
            </svg>
            <p>Thanks for scrollin this far</p>
            <div className="social-links d-flex justify-content-around">
              <a href="https://www.linkedin.com/in/brucelee-nguyen/">
                <svg width="40" height="40" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <path d="M40.9233 0.62915H3.26281C1.45877 0.62915 0 2.05339 0 3.81428V41.6301C0 43.391 1.45877 44.8239 3.26281 44.8239H40.9233C42.7273 44.8239 44.1947 43.391 44.1947 41.6387V3.81428C44.1947 2.05339 42.7273 0.62915 40.9233 0.62915ZM13.1117 38.2896H6.55152V17.1935H13.1117V38.2896ZM9.8316 14.3192C7.72545 14.3192 6.02498 12.6187 6.02498 10.5212C6.02498 8.42365 7.72545 6.72319 9.8316 6.72319C11.9291 6.72319 13.6296 8.42365 13.6296 10.5212C13.6296 12.6101 11.9291 14.3192 9.8316 14.3192ZM37.6605 38.2896H31.1089V28.0351C31.1089 25.5923 31.0658 22.4417 27.6994 22.4417C24.2898 22.4417 23.7719 25.1089 23.7719 27.8624V38.2896H17.229V17.1935H23.513V20.0766H23.5993C24.4711 18.4193 26.6118 16.667 29.7969 16.667C36.4348 16.667 37.6605 21.0347 37.6605 26.7144V38.2896Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="44.1947" height="44.1947" fill="white" transform="translate(0 0.62915)" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a href="https://www.github.com/fn-bruce">
                <svg width="40" height="40" viewBox="0 0 60 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.0741808 27.3765C0.213539 26.4056 0.335903 25.4314 0.493956 24.4623C1.07688 20.8958 2.3617 17.5852 4.21925 14.4915C6.80588 10.1795 10.2695 6.73844 14.5947 4.16313C17.873 2.21132 21.3961 0.921971 25.174 0.361164C30.5495 -0.436842 35.7942 0.0646653 40.8485 2.09441C46.6726 4.43421 51.3361 8.22262 54.7877 13.4647C56.8815 16.6466 58.3278 20.0995 59.0569 23.8405C59.667 26.9681 59.7605 30.1127 59.407 33.2844C58.9345 37.5201 57.5902 41.4508 55.3554 45.0631C52.2215 50.129 48.0322 54.0698 42.5735 56.5842C41.5215 57.0687 40.4389 57.4974 39.3427 57.8735C38.1463 58.2852 37.271 57.6651 37.1572 56.4029C37.1402 56.2114 37.1453 56.0166 37.1453 55.8234C37.1453 53.4091 37.1674 50.9947 37.1334 48.5821C37.1215 47.6807 37.0314 46.7726 36.8819 45.8831C36.7034 44.814 36.1987 43.8805 35.4271 43.1028C35.3625 43.0367 35.3132 42.9554 35.1841 42.7842C35.8027 42.6894 36.3431 42.6063 36.8819 42.5233C39.8866 42.0676 42.6482 41.0527 44.9545 39.0043C46.5605 37.5777 47.4391 35.7259 48.0271 33.7148C48.6407 31.6206 48.8446 29.4689 48.7171 27.3002C48.5744 24.8876 47.7688 22.6969 46.1832 20.8399C45.8178 20.413 45.7362 20.0656 45.9147 19.5031C46.6472 17.1989 46.3396 14.932 45.5102 12.704C45.3878 12.377 45.1618 12.3397 44.878 12.3228C43.8617 12.2601 42.9066 12.5312 42.0143 12.9531C40.5851 13.6308 39.183 14.3729 37.7962 15.1353C37.4087 15.3488 37.0773 15.4284 36.6558 15.3098C34.5179 14.7117 32.3221 14.4762 30.1145 14.4474C27.7284 14.4169 25.361 14.6711 23.048 15.2912C22.584 15.4148 22.2152 15.3742 21.8039 15.0997C19.9702 13.8832 17.992 12.9717 15.854 12.4211C15.8166 12.4109 15.7792 12.3973 15.7418 12.3889C14.4502 12.1161 14.1732 12.2889 13.8112 13.5477C13.2045 15.6554 13.077 17.7648 13.8384 19.8589C13.9998 20.3028 13.7126 20.5062 13.5019 20.7586C12.0998 22.4359 11.279 24.3556 11.0121 26.5209C10.7657 28.515 10.9153 30.4922 11.3078 32.4474C11.6511 34.1604 12.2477 35.7886 13.2062 37.2694C14.5454 39.3381 16.5287 40.5698 18.7499 41.4864C20.2829 42.1184 21.8974 42.4115 23.5306 42.6352C23.7957 42.6707 24.0575 42.7283 24.3685 42.7842C24.2886 42.93 24.2546 43.0435 24.1815 43.1214C23.3267 44.0211 22.8593 45.1071 22.6588 46.3117C22.5976 46.6794 22.4412 46.8929 22.0843 47.0183C20.4443 47.5943 18.7754 47.8789 17.0878 47.3198C15.7486 46.8759 14.7782 45.9221 14.0661 44.7293C13.3353 43.506 12.4108 42.4962 11.1124 41.8643C10.3017 41.4695 9.46729 41.1815 8.54277 41.3983C7.96494 41.5339 7.88336 41.7101 8.24196 42.1845C8.45949 42.4725 8.71612 42.7707 9.02372 42.9469C10.5669 43.8313 11.4336 45.2511 12.1746 46.7794C12.2664 46.9708 12.3513 47.1657 12.4261 47.3639C13.2861 49.6139 15.028 50.6694 17.3292 50.9761C19.0066 51.1997 20.6806 51.1862 22.4158 50.8778C22.448 51.1421 22.4939 51.3624 22.4956 51.581C22.5092 53.1058 22.5211 54.6324 22.5194 56.1572C22.5194 57.6211 21.5507 58.314 20.1639 57.8396C13.9302 55.7014 8.97614 51.891 5.22875 46.4947C3.21315 43.5907 1.73459 40.4428 0.906934 37.0118C0.565335 35.592 0.402183 34.1282 0.157456 32.6846C0.131964 32.5339 0.0979737 32.3848 0.0673828 32.2357C0.0741808 30.621 0.0741808 28.9996 0.0741808 27.3765Z" fill="white" />
                </svg>
              </a>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
