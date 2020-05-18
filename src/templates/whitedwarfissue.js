import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import styles from "./whitedwarfissue.module.css"

const WhiteDwarfIssueTemplate = ({ data }) => {
  console.log(data)
  const { markdownRemark } = data
  console.log(markdownRemark)
  const { frontmatter, html } = markdownRemark
  return (
    <Layout pageTitle={"White Dwarf " + frontmatter.issue}>
      <h1>{"White Dwarf " + frontmatter.issue}</h1>
      <p>{frontmatter.date}</p>
      <p>{frontmatter.summary}</p>
      <Img
        fluid={frontmatter.coverSrc.childImageSharp.fluid}
        alt={"The cover of White Dwarf magazine issue " + frontmatter.issue}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default WhiteDwarfIssueTemplate

export const issueQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        issue
        summary
        date
        coverSrc {
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
