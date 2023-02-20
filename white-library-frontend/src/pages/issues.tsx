import React from "react"
import { graphql } from "gatsby"

import IssueCard from "../components/issuecard/IssueCard"
import Layout from "../components/layout/Layout"
import { getImage } from "gatsby-plugin-image"

const IssuesPage = ({ data }) => {
  console.log(data)
  const { edges } = data.allSanityIssue
  return (
    <Layout pageTitle='Issues'>
      <div>
        {edges.map(({ node }) => {
          const issueCoverImageData = getImage(
            node.coverImage.asset.gatsbyImageData
          )
          return (
            <IssueCard
              key={node.id}
              imageData={issueCoverImageData}
              issueNumber={node.issueNumber}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default IssuesPage

export const issuesQuery = graphql`
  query {
    allSanityIssue {
      edges {
        node {
          id
          issueNumber
          coverImage {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
