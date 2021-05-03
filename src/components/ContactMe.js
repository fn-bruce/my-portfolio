import React from "react"

export default function ContactMe() {
    return (
        <>
            <section id="contact-me" className="contact-me d-flex justify-content-around align-items-center w-75 mx-auto my-5">
            <div className="container d-flex justify-content-around flex-wrap">
                <div className="my-auto">
                <h1>Lets talk <span role="img" aria-label="think-bubble">💬</span></h1>
                <a href="mailto:bruceleenguyen95@gmail.com">
                    <span>bruceleenguyen95@gmail.com </span>
                    <svg width="35" height="19" viewBox="0 0 35 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.2 1.7998L33 9.4998L24.2 17.1998" stroke="#F5BA4F" stroke-width="2.2" />
                    <line x1="33" y1="9.4999" x2="9.61651e-08" y2="9.49991" stroke="#F5BA4F" stroke-width="2.2" />
                    </svg>
                </a>
                </div>
                <form className="my-auto" action="https://getform.io/f/587ae21e-cb3b-4e46-a1d8-2c62dd2edd5f" method="POST">
                <h2>Get In Touch</h2>
                <label>What's your full name?
                    <input type="text" name="fullName" required />
                </label>

                <label>Your fancy email
                    <input type="email" name="email" required />
                </label>

                <label>What did you want to talk about?
                    <input type="text" name="message" required />
                </label>

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
        </>
    )
}