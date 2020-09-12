import React from "react"
import TeamItem from "../components/TeamItem"
//import { useStaticQuery, graphql } from "gatsby"

function Team() {

  return (
    <div id = "team" className="container-fluid" style={{ backgroundColor: "#8fbc8f" }}>
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-4">About Me </h1>
          <div className="text-center row my-5">
            <TeamItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
