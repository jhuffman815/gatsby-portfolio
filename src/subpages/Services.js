import React from "react"
import ServiceItem from "../components/ServiceItem"
import { useStaticQuery, graphql } from "gatsby"

function Services() {
  const { allServicesYaml } = useStaticQuery(graphql`
    {
      allServicesYaml {
        edges {
          node {
            title
            src
            description
          }
        }
      }
    }
  `)
  return (
    <div id = "services" className="container-fluid" style={{ backgroundColor: "#bc8f8f" }}>
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-5">Toolkit </h1>
          <div className="row">
            {allServicesYaml.edges.map(({ node }) => {
              return <ServiceItem title={node.title} src={node.src} description={node.description} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
