import React  from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"


 export default class ContactPage extends React.Component {

   state = {
     email: '',
     subject: '',
     name:'',
     message:'',
   }

   handleSubmit = (e) =>{
     e.preventDefault();
     
   }

   handleChange = (e)=>{
    const {name , value} = e.target
     console.log(`name: ${name} value: ${value}`)
    this.setState({[name]: value})
  }

  render(){
    return (
      <Layout>
        <SEO title="Portfolio"/>
        <div id="contactBackground"></div>
        <a href="https://github.com/cmg87" className={'brand-link'} ><FontAwesomeIcon icon={faGithub}/></a>
        <a href="https://www.linkedin.com/in/chrisgoerler/" className={'brand-link'}><FontAwesomeIcon icon={faLinkedin} /></a>
        <div className="form-style">
          <form className={"column"}
            // method={"POST"}
            // action={"http://localhost:3000/contact"}
                onSubmit={this.handleSubmit}
                style={{ backgroundColor: "#333", justifyContent: "center", textAlign: "center" }}
          >
            <label>

              <input type="text" name="name" id="name" placeholder={'Name'} value={this.state.name} onChange={this.handleChange}/>
            </label>
            <label>

              <input type="email" name="email" id="email" placeholder={'Email'} value={this.state.email} onChange={this.handleChange}/>
            </label>
            <label>

              <input type="text" name="subject" id="subject" placeholder={'Subject'} value={this.state.subject} onChange={this.handleChange}/>
            </label>
            <label>

              <textarea name="message" id="message" rows="4" placeholder={'Message'} value={this.state.message} onChange={this.handleChange}/>
            </label>
            <button type='submit'>Send</button>
            <input type="reset" value="Clear"/>
          </form>
        </div>
      </Layout>
    )
  }
  }

