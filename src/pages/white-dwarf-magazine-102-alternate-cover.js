import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <Img
      fluid={data.allFile.edges[0].node.childImageSharp.fluid}
      alt="The possible first draft of White Dwarf magazine issue 102."
    />
  </Layout>
)

export const firmircover = graphql`
  query {
    allFile(
      filter: {
        relativePath: { eq: "white_dwarf_magazine_cover_102_fimir.jpg" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
