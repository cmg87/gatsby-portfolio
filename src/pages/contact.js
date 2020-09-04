import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import axios from "axios"

export default class ContactPage extends React.Component {
  state = {
    email: "",
    subject: "",
    name: "",
    message: "",
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, subject, name, message } = this.state
    const body = {
      name: name,
      subject: subject,
      email: email,
      message: message,
    }
    console.log(body)
    axios
      .post("http://localhost:3000/contact", body)
      .then(res => console.log(res.status))
    this.setState({ name: "", email: "", message: "", subject: "" })
  }

  handleChange = e => {
    const { name, value } = e.target
    console.log(`name: ${name} value: ${value}`)
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Layout>
        <SEO title="Portfolio"/>
        <div id="contactBackground"></div>


        <div className="form-style">
          <form
            style={{
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div className={"row"}>
              <div className="column"><label style={{ display: "block" }}>Name</label></div>
              <div className="column"><input
                type="text"
                name="name"
                id="name"
                placeholder={"Name"}
                value={this.state.name}
                onChange={this.handleChange}
              /></div>
            </div>

            <div className="row">
              <div className="column"><label>
                Email</label></div>
              <div className="column"><input
                type="email"
                name="email"
                id="email"
                placeholder={"Email"}
                value={this.state.email}
                onChange={this.handleChange}
              /></div>
            </div>
            <div className="row">
              <div className="column"><label>
                Subject</label></div>
              <div className="column"><input
                type="text"
                name="subject"
                id="subject"
                placeholder={"Subject"}
                value={this.state.subject}
                onChange={this.handleChange}
              /></div>
            </div>
            <div className="row">
              <div className="column"><label>
                Message</label></div>
              <div className="column"><textarea
                name="message"
                id="message"
                rows="4"
                placeholder={"Message"}
                value={this.state.message}
                onChange={this.handleChange}
              /></div>
            </div>
            <div className="row">
              <button
                className="button"
                type="submit"
                onClick={this.handleSubmit}
              >
                Send
              </button>
              <button className="button" type="reset">Clear</button></div>


          </form>
        </div>
        <div className="brand-icon-container">
          <a href="https://github.com/cmg87" className={"brand-link"} target={"blank"}>
            <FontAwesomeIcon className={"brand-icon"} icon={faGithub}/>
          </a>
          <a
            href="https://www.linkedin.com/in/chrisgoerler/"
            className={"brand-link"}
            target={"blank"}
          >
            <FontAwesomeIcon className={"brand-icon"} icon={faLinkedin}/>
          </a></div>
      </Layout>
    )
  }
}
