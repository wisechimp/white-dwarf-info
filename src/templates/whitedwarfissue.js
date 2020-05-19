import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import parse from "html-react-parser"

import Layout from "../components/layout"
import issueStyles from "./whitedwarfissue.module.css"

const WhiteDwarfIssueTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const parsedSummary = parse(frontmatter.summary)
  return (
    <Layout pageTitle={"White Dwarf " + frontmatter.issue}>
      <h1 className={issueStyles.issueTitle}>
        {"White Dwarf " + frontmatter.issue}
      </h1>
      <p className={issueStyles.issueSummary}>{parsedSummary}</p>
      <div className={issueStyles.issueContainer}>
        <Img
          className={issueStyles.issueCover}
          fluid={frontmatter.coverSrc.childImageSharp.fluid}
          alt={"The cover of White Dwarf magazine issue " + frontmatter.issue}
        />
        <div
          className={issueStyles.issueContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
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
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
