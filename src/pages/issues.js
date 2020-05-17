import React from "react"
import { graphql } from "gatsby"

import IssueCard from "../components/issuecard"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)

  return (
    <Layout pageTitle="Issues">
      <h1>Issues</h1>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <IssueCard
              key={node.frontmatter.issue}
              issueCoverSrc={node.frontmatter.coverSrc}
              issueCoverAltText={
                "The cover of White Dwarf magazine issue " +
                node.frontmatter.issue
              }
              issueLink={
                "/white-dwarf-magazine-issue-" + node.frontmatter.issue + "/"
              }
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
          excerpt
          frontmatter {
            date
            issue
            summary
            coverSrc
          }
        }
      }
    }
  }
`
