import React from "react"
import { graphql } from "gatsby"

import IssueCard from "../components/issuecard"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout pageTitle="Issues">
      <h1>Issues</h1>
      <div className="issues-flow">
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <IssueCard
              key={node.frontmatter.issue}
              issueCoverSrc={node.frontmatter.coverSrc.childImageSharp.fluid}
              issueCoverAltText={
                "The cover of White Dwarf magazine issue " +
                node.frontmatter.issue
              }
              issueLink={node.frontmatter.slug}
              issueNumber={"White Dwarf " + node.frontmatter.issue}
              issueDate={node.frontmatter.date}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const issuesQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___issue }) {
      edges {
        node {
          frontmatter {
            slug
            date
            issue
            summary
            coverSrc {
              childImageSharp {
                fluid(maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
