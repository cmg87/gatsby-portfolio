import React from "react"
import "./about.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons"
import selfie from "../images/selfie.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="about-container">
      <div className={"column about-content"}>
        I am a freelance Fullstack Developer specializing in the MERN stack. I
        love going through the design and development process with my clients
        and bringing their ideas to life. I also use my knowledge of DevOps and
        Blockchain to push the bounds of technology.
      </div>
      <div className="column selfie-wrapper">
        <img className={"selfie"} alt={"selfie"} src={selfie} />
      </div>
    </div>
    <div className="row brand-icon-container">
      <FontAwesomeIcon className={"brand-icon"} icon={faHtml5} />
      <FontAwesomeIcon className={"brand-icon"} icon={faCss3} />
      <FontAwesomeIcon className={"brand-icon"} icon={faJs} />
    </div>

    <div className="column projects">
      <div
        style={{
          fontSize: "2.4rem",
          fontWeight: "700",
          textDecoration: "underline",
        }}
      >
        Projects
      </div>
      <br />
      <div style={{ fontSize: "1.5rem", fontWeight: "700" }}>coming soon!</div>
    </div>
  </Layout>
)

export default About
