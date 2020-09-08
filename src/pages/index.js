import React, {useRef, useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../images/codeblur.png"
import {gsap} from "gsap"

function IndexPage() {

    useEffect(()=>{
        gsap.from(".intro", {
            opacity: 0,
            y: 100,
            duration: 2
        });
        gsap.from(".build", {
            opacity: 0,
            y: 100,
            duration: 2,
            delay: 1
        });
    })

    return (
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
            <h1 className="intro" style={{textAlign: 'center', color: 'whitesmoke', marginBottom: '1.45rem'}}>Software
                Engineering To The Next Level
            </h1>
            <h2 className="build" style={{textAlign: 'center', color: 'whitesmoke', marginBottom: '1.45rem'}}>Let's Build Something</h2>
        </Layout>
    )
}
export default IndexPage
