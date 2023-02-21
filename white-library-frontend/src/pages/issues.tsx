import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout/Layout"
import IssueCardList from "../components/issuecard/IssueCardList"

const IssuesPage = ({ data }: PageProps<Queries.IssuesPageQuery>) => (
  <Layout pageTitle='Issues'>
    <IssueCardList edges={data.allSanityIssue.edges} />
  </Layout>
)

export default IssuesPage

export const issuesQuery = graphql`
  query IssuesPage {
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
