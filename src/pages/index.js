import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../images/codeblur.jpeg"


const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio"/>
    <img src={Background} alt={'background'} style={{
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "fixed",
      top: 0,
      zIndex: "-100",
      margin: "0 auto",
      width: "100%",
      height: "100%",
    }}/>
    <div className="overlay" style={{
      position: "fixed",
      width: "100%",
      height: "100%",
      top: 0,
      backgroundColor: "#333",
      zIndex: "-50",
      opacity: .5,
      margin: "0 auto",
    }}></div>
    <h1 style={{textAlign:'center', color:'whitesmoke', marginBottom:'1.45rem'}}>Software Engineering To The Next Level</h1>
  </Layout>
)

export default IndexPage
