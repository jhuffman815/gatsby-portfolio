import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from "gatsby"
import AnchorLink from 'react-anchor-link-smooth-scroll'

function LandingPage() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
      }
    }
  `)

  const { welcomeText, landingText } = pageDataYaml

  const pageStyle = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1540744276164-9dc898353c7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backgroundBlendMode: "multiply",
  }

  const welcomeStyle = {
    letterSpacing: "0.25em",
  }

  return (
    <section id = "home" style={pageStyle} className = "container-fluid">
      <div className="container">
        <Navbar />
        <div className="centerItems">
          <h6 style={welcomeStyle}>{welcomeText}</h6>
          <h1>{landingText}</h1>
          <AnchorLink  href="#work">
          <button
            style={{
              width: "200px",
              padding: "10px",
              border: "none",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              background: " #e24e4e",
              borderRadius: "30px",
              textTransform: "uppercase",
              color : "white",
              fontWeight : "600",
              marginTop : "20px"
            }}
          >
            My Work
          </button>
          </AnchorLink>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
