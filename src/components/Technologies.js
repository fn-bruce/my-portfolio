import React from "react"
import { StaticImage } from "gatsby-plugin-image";


export default function Technologies() {
    const iconHeight = 60;
    return (
        <>
            <section id="technologies" className="technologies d-flex justify-content-center w-75 mx-auto my-5">
            <div className="container w-100">
                <div className="header">Technologies</div>
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
        </>
    )
}