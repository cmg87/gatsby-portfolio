import { Link } from "gatsby"
import React from "react"
import "./overlay.css"
import Resume from "../files/resume.pdf"

export default function Overlay(props) {

  return (
    <div className={"overlay2"} style={{
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      zIndex: "1",
      position: "fixed",
      margin: "0 auto",
      transitionDelay: "1000",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      opacity: 0,
      animationName: "showOverlay",
      animationFillMode: "forwards",
      animationDuration: "2s",
    }}>
      <Link className={"link"} to={"/"}>Home</Link>
      <Link className={"link"} to={"/about"}>About</Link>
      <Link className={"link"} to={"/contact"}>Contact</Link>
      <a className={"link"} href={Resume} target={"/blank"}>Resume</a>
    </div>
  )

}