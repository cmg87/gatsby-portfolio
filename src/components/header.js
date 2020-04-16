import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./header.css"
import Overlay from "./overlay"


const Header = ({ siteTitle }) => {

  const [styleCondition, setStyleCondition] = useState(false)

  function handleClick(e) {
    e.preventDefault()
    setStyleCondition(!styleCondition)
  }

  return (
    <div id={"header"}>
      {styleCondition ? <Overlay styleCondition={styleCondition}/> : null}
      <Link
        to="/"
        style={{
          color: `whitesmoke`,
          textDecoration: `none`,
          display: "inline-block",
        }}
        id={"logo"}
      >
        Chris Goerler
      </Link>
      <div className={`container ${styleCondition ? "change" : ""}`} onClick={handleClick}>
        <div className={`bar1`}></div>
        <div className={`bar2`}></div>
        <div className={`bar3`}></div>
      </div>
    </div>
  )

  Header.propTypes = {
    siteTitle: PropTypes.string,
  }

  Header.defaultProps = {
    siteTitle: ``,
  }
}
export default Header
